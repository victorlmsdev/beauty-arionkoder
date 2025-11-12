import { IService } from "@/types";
import { Card } from "./ui/card";

interface ServiceCardProps {
	service: IService;
	onBook: (service: IService) => void;
}

export default function ServiceCard({ service, onBook }: ServiceCardProps) {
	const { name, duration, price, description } = service;

	return (
		<Card className="flex flex-col  items-center bg-accent hover:text-background hover:backdrop-blur-sm hover:bg-black/20 p-6 rounded-lg  hover:shadow-lg transition duration-200 hover:scale-[1.02]">
			<div>
				<h3 className="text-2xl font-semibold mb-2">{name}</h3>
				<p className="text-pink-600 font-bold text-xl mb-3">
					${price.toFixed(2)}
				</p>
				<p className="mb-4">{description}</p>
			</div>
			<div className="mt-auto">
				<p className="text-sm mb-4">
					Duration: <b>{duration} minutes</b>
				</p>
				<button
					onClick={() => onBook(service)}
					className="w-full bg-pink-600 cursor-pointer text-white py-2 rounded-lg font-medium hover:bg-pink-700 transition duration-150 shadow-md"
				>
					Book Now
				</button>
			</div>
		</Card>
	);
}
