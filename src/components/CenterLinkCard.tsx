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
			className="flex flex-col justify-between p-5 bg-card rounded-lg shadow-xs hover:shadow-lg transition duration-200 hover:scale-[1.02]"
		>
			<h3 className="text-2xl font-semibold text-foreground">{name}</h3>
			<p className="text-gray-600 mt-2">{description}</p>
			<span className="mt-3 inline-block text-sm font-medium text-accent ">
				View Services & Book &rarr;
			</span>
		</Link>
	);
}
