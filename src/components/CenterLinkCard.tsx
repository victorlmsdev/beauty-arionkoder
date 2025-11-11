import Link from "next/link";
import { ICenterInfo } from "@/types";

export default function CenterLinkCard({
	slug,
	name,
	description,
}: ICenterInfo) {
	return (
		<Link
			href={`/${slug}`}
			className="block p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 hover:scale-[1.02]"
		>
			<h3 className="text-2xl font-semibold text-indigo-700">{name}</h3>
			<p className="text-gray-600 mt-2">{description}</p>
			<span className="mt-3 inline-block text-sm font-medium text-indigo-500 hover:text-indigo-600">
				View Services & Book &rarr;
			</span>
		</Link>
	);
}
