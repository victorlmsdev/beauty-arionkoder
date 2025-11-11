import { getCenterData } from "@/lib/api";
import { CenterPageProps } from "@/types";
import CenterHeader from "@/components/CenterHeader";
import ServiceList from "@/components/ServiceList";
import Link from "next/link";
import { Metadata } from "next";

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

	const { name, logoUrl, description, services } = centerData;

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		name: centerData.name,
		description: centerData.description,
		url: `https://victorlms.arionic.vercel.app/${centerData.slug}`,
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
		<main className="container mx-auto p-4 md:p-8 max-w-5xl">
			<Link href="/">👈 Back to Beauty Arionkoder</Link>
			<CenterHeader
				slug={center}
				name={name}
				logoUrl={logoUrl}
				description={description}
			/>

			<hr className="my-10 border-indigo-100" />

			<h2 className="text-3xl font-bold text-gray-800  mb-6 dark:invert">
				Our Services
			</h2>

			<ServiceList services={services} />
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
		</main>
	);
}
