import { getAllCenters } from "@/lib/api";
import CenterLinkCard from "@/components/CenterLinkCard";

export default async function HomePage() {
	const centers = await getAllCenters();

	return (
		<main className="container mx-auto p-4 md:p-12 max-w-6xl ">
			<header className="text-center mb-16 ">
				<h1 className="text-3xl font-bold text-indigo-700 mb-4">
					Beauty Arionkoder
				</h1>
				<h2 className="text-5xl font-extrabold text-gray-900 mb-4 dark:invert">
					The Multi-tenant Booking Platform
				</h2>
				<p className="text-xl text-gray-600 max-w-3xl mx-auto dark:invert">
					Welcome to the premier platform for beauty and wellness appointments.
					Select a center below to view services and book instantly.
				</p>
			</header>

			<section className="mb-16">
				<h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-indigo-100 pb-3 dark:invert">
					Available Centers ({centers.length})
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{centers.map((center) => (
						<CenterLinkCard key={center.slug} {...center} />
					))}
				</div>
			</section>

			<section className="bg-indigo-50 p-8 rounded-xl text-center border border-indigo-200">
				<h2 className="text-3xl font-bold text-indigo-800 mb-4">
					Own a Beauty Center?
				</h2>
				<p className="text-lg text-indigo-600 mb-6">
					Soon you will be able to register your services and join our network!
				</p>

				<div className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg opacity-70 cursor-not-allowed">
					Register Your Center (Coming Soon)
				</div>
			</section>
		</main>
	);
}
