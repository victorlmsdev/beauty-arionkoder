import { getCenterData } from "@/lib/api";
import { CenterPageProps } from "@/types";
import CenterHeader from "@/components/CenterHeader";
import ServiceList from "@/components/ServiceList";
import Link from "next/link";
import { Metadata } from "next";
import { SubTitle } from "@/components/SubTitle";

export async function generateMetadata({
	params,
}: {
	params: { center: string };
}): Promise<Metadata> {
	const { center } = await params;

	const centerData = await getCenterData(center);

	return {
		title: `${centerData.name} Services & Booking`,
		description:
			centerData.description.substring(0, 150) +
			"... Book your appointment now!",
		openGraph: {
			title: `${centerData.name} Services | Book Online`,
			images: [centerData.logoUrl],
		},
	};
}

export default async function CenterLandingPage({ params }: CenterPageProps) {
	const { center } = await params;

	let centerData;

	try {
		centerData = await getCenterData(center);
	} catch (error) {
		return (
			<div className="p-8 text-center bg-white shadow-lg rounded-lg max-w-md mx-auto mt-20">
				<h1 className="text-2xl font-bold text-red-600">
					404 - Center Not Found
				</h1>
				<p className="text-gray-700 mt-3">
					The beauty center you requested (/{center}) could not be found.
				</p>
				<p className="text-sm text-gray-500 mt-2">Please verify the URL.</p>
			</div>
		);
	}

	const { name, logoUrl, description, services, address } = centerData;

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		name: centerData.name,
		description: centerData.description,
		url: `https://beauty-arionkoder.vercel.app/${centerData.slug}`,
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			itemListElement: centerData.services.map((service) => ({
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: service.name,
				},
			})),
		},
	};

	return (
		<>
			<main className="relative flex flex-1 items-center justify-center p-8 md:p-16 ">
				<section className=" relative z-20 " id="content-section">
					<div className="mb-4 backdrop-blur-sm p-2 items-center text-bold md:w-min bg-white hover:scale-105 transition duration-200 rounded-lg shadow-md">
						<Link href="/" className="w-full  flex text-center md:w-sm">
							👈 Back to Beauty Arionkoder
						</Link>
					</div>
					<header className="mb-8">
						<CenterHeader
							slug={center}
							name={name}
							logoUrl={logoUrl}
							description={description}
							address={address}
						/>
					</header>
					<div className="">
						<ServiceList services={services} />
					</div>
				</section>

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<div className="absolute bg-white w-full h-50 bottom-0 left-0 z-0" />
			</main>
		</>
	);
}
