"use client";

import { useState } from "react";
import { IService } from "@/types";
import ServiceCard from "./ServiceCard";
import BookingForm from "./BookingForm";
import { Card } from "./ui/card";

interface ServiceListProps {
	services: IService[];
}

export default function ServiceList({ services }: ServiceListProps) {
	const [selectedService, setSelectedService] = useState<IService | null>(null);

	const handleBookService = (service: IService) => {
		setSelectedService(service);
	};

	const handleCloseBooking = () => {
		setSelectedService(null);
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{services.map((service) => (
				<ServiceCard
					key={service.id}
					service={service}
					onBook={handleBookService}
				/>
			))}

			{selectedService && (
				<div className="fixed inset-0 bg-black/70 backdrop-blur  flex items-center justify-center z-50 p-4">
					<Card className="bg-white p-6 rounded-xl shadow-2xl max-w-lg w-full">
						<h3 className="text-2xl font-bold mb-4 text-pink-700">
							Book Appointment for: {selectedService.name}
						</h3>
						<BookingForm
							service={selectedService}
							onClose={handleCloseBooking}
						/>
					</Card>
				</div>
			)}
		</div>
	);
}
