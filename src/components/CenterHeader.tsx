import { ICenterInfo } from "@/types";

export default function CenterHeader({
	name,
	logoUrl,
	description,
}: ICenterInfo) {
	return (
		<header className="flex flex-col md:flex-row items-center p-6 bg-white rounded-lg shadow-md">
			<div className="h-20 w-20 bg-indigo-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4 md:mb-0 md:mr-6">
				{name.substring(0, 1)}
			</div>
			<div>
				<h1 className="text-4xl font-extrabold text-indigo-700">{name}</h1>
				<p className="text-gray-600 mt-2 italic">{description}</p>
			</div>
		</header>
	);
}
