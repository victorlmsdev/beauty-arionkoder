import { getAllCenters } from "@/lib/api";
import CenterLinkCard from "@/components/CenterLinkCard";
import { Card } from "@/components/ui/card";

export default async function HomePage() {
	const centers = await getAllCenters();

	return (
		<main className="font-serif items-center justify-center flex flex-col">
			<header className="text-center mb-16 p-8 backdrop-blur-sm w-full shadow-sm  ">
				<h1 className="text-3xl font-bold text-white mb-4">
					Beauty Arionkoder
				</h1>
				<h2 className="text-5xl font-extrabold  text-white mb-4 dark:invert">
					The Multi-tenant Booking Platform
				</h2>
				<p className="text-xl text-gray-600 max-w-3xl mx-auto dark:invert">
					Welcome to the premier platform for beauty and wellness appointments.
					Select a center below to view services and book instantly.
				</p>
			</header>
			<div className="container">
				<section className="mb-16">
					<h2 className="text-3xl font-bold bg-linear-to-r text-center text-white rounded-lg font-sans p-4 backdrop-blur-sm shadow-sm border-white mb-8  dark:invert">
						Available Centers ({centers.length})
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{centers.map((center) => (
							<CenterLinkCard key={center.slug} {...center} />
						))}
					</div>
				</section>

				<section className="register-section">
					<Card className="flex items-center justify-between  hover:text-background hover:backdrop-blur-sm hover:bg-white/0 p-5 bg-white rounded-lg  hover:shadow-lg transition duration-200 hover:scale-[1.02]">
						<h2 className="text-3xl font-bold mb-4">Own a Beauty Center?</h2>
						<p className="text-lg mb-6">
							Soon you will be able to register your services and join our
							network!
						</p>

						<div className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg opacity-70 cursor-not-allowed">
							Register Your Center
						</div>
					</Card>
				</section>
			</div>
		</main>
	);
}
