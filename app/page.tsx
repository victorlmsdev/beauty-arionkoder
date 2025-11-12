import CenterLinkCard from "@/components/CenterLinkCard";
import { Card } from "@/components/ui/card";
import { getAllCenters } from "@/lib/api";

export default async function HomePage() {
	const centers = await getAllCenters();

	return (
		<main className=" items-center justify-center flex flex-col">
			<div className="fixed top-0 w-full p-4 bg-white z-99 text-center">
				<h2 className="text-lg font-extrabold font-sans  text-pink-600 dark:invert">
					The Multi-tenant Booking Platform
				</h2>
			</div>
			<header
				className="p-32 text-center mb-8 backdrop-blur-sm w-full shadow-sm 
							 flex flex-col items-center justify-between bg-black/20"
			>
				<h1 className="text-3xl font-bold text-white mb-4">
					Beauty Arionkoder
				</h1>
				<p className="text-xl  max-w-3xl mx-auto text-white">
					Welcome to the premier platform for beauty and wellness appointments.
				</p>
				<p className="text-lg mt-2  max-w-3xl mx-auto text-white">
					Select a center below to view services and book instantly.
				</p>
			</header>
			<div className="container">
				<section className="mb-16">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{centers.map((center) => (
							<CenterLinkCard key={center.slug} {...center} />
						))}
					</div>
				</section>

				<section className="register-section">
					<Card className="flex items-center justify-between p-5 bg-accent rounded-lg">
						<h2 className="text-3xl font-bold mb-4">Own a Beauty Center?</h2>
						<p className="text-lg mb-6">
							Soon you will be able to register your services and join our
							network!
						</p>

						<div className="inline-block bg-pink-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg opacity-70 cursor-not-allowed">
							Register Your Center
						</div>
					</Card>
				</section>
			</div>
		</main>
	);
}
