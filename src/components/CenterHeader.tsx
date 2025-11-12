import { ICenterInfo } from "@/types";
import { CenterLogo } from "./CenterLogo";

export default function CenterHeader({
	name,
	logoUrl,
	description,
}: ICenterInfo) {
	return (
		<header className="flex flex-col md:flex-row items-center p-6 bg-white rounded-lg shadow-md">
			<CenterLogo {...{ name, logoUrl }} />
			<div>
				<h1 className="text-4xl font-extrabold text-indigo-700">{name}</h1>
				<p className="text-gray-600 mt-2 italic">{description}</p>
			</div>
		</header>
	);
}
