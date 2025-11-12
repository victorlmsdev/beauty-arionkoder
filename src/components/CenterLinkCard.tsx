import { ICenterInfo } from "@/types";
import Link from "next/link";
import { CenterLogo } from "./CenterLogo";
import { Card } from "./ui/card";

export default function CenterLinkCard({
	slug,
	name,
	description,
	address,
	logoUrl,
}: ICenterInfo) {
	return (
		<Link href={`/${slug}`}>
			<Card className="flex flex-row  items-center bg-accent hover:text-background hover:backdrop-blur-sm hover:bg-black/20 p-6 rounded-lg  hover:shadow-lg transition duration-200 hover:scale-[1.02]">
				<CenterLogo {...{ name, logoUrl }} />
				<div>
					<div>
						<h3 className="text-2xl font-semibold ">{name}</h3>
						<p className="  opacity-80 text-xs">{address}</p>
					</div>
					<p className=" mt-3 opacity-80">{description}</p>
					<span className="mt-3 inline-block text-sm font-medium  ">
						View Services & Book &rarr;
					</span>
				</div>
			</Card>
		</Link>
	);
}

<Card></Card>;
