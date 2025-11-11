import { IService } from "@/types";

interface ServiceCardProps {
	service: IService;
	onBook: (service: IService) => void;
}

export default function ServiceCard({ service, onBook }: ServiceCardProps) {
	const { name, duration, price, description } = service;

	return (
		<div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-between">
			<div>
				<h3 className="text-2xl font-semibold text-gray-900 mb-2">{name}</h3>
				<p className="text-indigo-600 font-bold text-xl mb-3">
					${price.toFixed(2)}
				</p>
				<p className="text-gray-700 mb-4">{description}</p>
			</div>
			<div className="mt-auto">
				<p className="text-sm text-gray-500 mb-4">
					Duration: **{duration} minutes**
				</p>
				<button
					onClick={() => onBook(service)}
					className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition duration-150 shadow-md"
				>
					Book Now
				</button>
			</div>
		</div>
	);
}
