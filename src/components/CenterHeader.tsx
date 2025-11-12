import { ICenterInfo } from "@/types";
import { CenterLogo } from "./CenterLogo";

export default function CenterHeader({
	name,
	logoUrl,
	description,
	address,
}: ICenterInfo) {
	return (
		<header className="flex flex-col md:flex-row items-center bg-white backdrop-blur-sm p-6  rounded-lg shadow-md">
			<CenterLogo {...{ name, logoUrl }} />
			<div className="mx-4">
				<h1 className="text-4xl font-bold text-pink-600  ">{name}</h1>
				<p className="text-xs  italic">{address}</p>
				<p className="text-sm mt-2 italic">{description}</p>
			</div>
		</header>
	);
}
