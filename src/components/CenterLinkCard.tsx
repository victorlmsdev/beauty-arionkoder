import Link from "next/link";
import { ICenterInfo } from "@/types";
import { Card } from "./ui/card";
import Image from "next/image";
import { CenterLogo } from "./CenterLogo";

export default function CenterLinkCard({
	slug,
	name,
	description,
	address,
	logoUrl,
}: ICenterInfo) {
	return (
		<Link href={`/${slug}`}>
			<Card className="flex flex-row justify-between bg-white hover:text-background hover:backdrop-blur-sm hover:bg-card/0 p-5 rounded-lg  hover:shadow-lg transition duration-200 hover:scale-[1.02]">
				<CenterLogo {...{ name, logoUrl }} />
				<div>
					<div>
						<h3 className="text-2xl font-semibold ">{name}</h3>
						<p className=" mt-2 opacity-80 text-xs">{address}</p>
					</div>
					<p className=" mt-2 opacity-80">{description}</p>
					<span className="mt-3 inline-block text-sm font-medium  ">
						View Services & Book &rarr;
					</span>
				</div>
			</Card>
		</Link>
	);
}

<Card></Card>;
