"use client";

import { IService } from "@/types";
import { submitBooking } from "@/lib/api";
import { useForm } from "react-hook-form";

import {
	BookingSchema,
	BookingFormData,
	UserPersistenceData,
} from "@/lib/validation";
import { useState } from "react";
import ConfirmationMessage from "./ConfirmationMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const LOCAL_STORAGE_KEY = "bookingUser";

interface BookingFormProps {
	service: IService;
	onClose: () => void;
}

export default function BookingForm({ service, onClose }: BookingFormProps) {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [bookingResult, setBookingResult] = useState<{
		success: boolean;
		id: string;
		data: BookingFormData;
	} | null>(null);

	const [persistedUser, setPersistedUser] =
		useLocalStorage<UserPersistenceData>(LOCAL_STORAGE_KEY, {
			clientName: "",
			clientEmail: "",
		});

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<BookingFormData>({
		resolver: zodResolver(BookingSchema),
		defaultValues: {
			serviceId: service.id,
			serviceName: service.name,
			clientName: persistedUser.clientName,
			clientEmail: persistedUser.clientEmail,
			date: "",
			time: "",
		},
	});

	const onSubmit = async (data: BookingFormData) => {
		setIsSubmitting(true);
		try {
			const result = await submitBooking(data);

			if (result.success) {
				setBookingResult({ success: true, id: result.bookingId, data });
				setPersistedUser({
					clientName: data.clientName,
					clientEmail: data.clientEmail,
				});
				reset();
			}
		} catch (error) {
			console.error("Booking failed:", error);

			setBookingResult({ success: false, id: "", data });
		} finally {
			setIsSubmitting(false);
		}
	};

	if (bookingResult && bookingResult.success) {
		return (
			<ConfirmationMessage
				bookingDetails={bookingResult.data}
				bookingId={bookingResult.id}
				onNewBooking={onClose}
			/>
		);
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="space-y-4 dark:text-black"
		>
			<h4 className="text-xl font-medium">
				Service: <b>{service.name}</b> (${service.price.toFixed(2)})
			</h4>

			<div>
				<label
					htmlFor="clientName"
					className="block text-sm font-medium text-gray-700"
				>
					Name
				</label>
				<input
					id="clientName"
					type="text"
					{...register("clientName")}
					className={`mt-1 block w-full border ${
						errors.clientName ? "border-red-500" : "border-gray-300"
					} rounded-md shadow-sm p-2`}
					placeholder="Your Full Name"
				/>
				{errors.clientName && (
					<p className="text-red-500 text-xs mt-1">
						{errors.clientName.message}
					</p>
				)}
			</div>

			<div>
				<label
					htmlFor="clientEmail"
					className="block text-sm font-medium text-gray-700"
				>
					Email
				</label>
				<input
					id="clientEmail"
					type="email"
					{...register("clientEmail")}
					className={`mt-1 block w-full border ${
						errors.clientEmail ? "border-red-500" : "border-gray-300"
					} rounded-md shadow-sm p-2`}
					placeholder="your.email@example.com"
				/>
				{errors.clientEmail && (
					<p className="text-red-500 text-xs mt-1">
						{errors.clientEmail.message}
					</p>
				)}
			</div>

			<div className="flex space-x-4">
				<div className="w-1/2">
					<label
						htmlFor="date"
						className="block text-sm font-medium text-gray-700"
					>
						Date
					</label>
					<input
						id="date"
						type="date"
						{...register("date")}
						className={`mt-1 block w-full border ${
							errors.date ? "border-red-500" : "border-gray-300"
						} rounded-md shadow-sm p-2`}
						// Set min date to today to discourage past dates in the UI (but Zod enforces it)
						min={new Date().toISOString().split("T")[0]}
					/>
					{errors.date && (
						<p className="text-red-500 text-xs mt-1">{errors.date.message}</p>
					)}
				</div>

				<div className="w-1/2">
					<label
						htmlFor="time"
						className="block text-sm font-medium text-gray-700"
					>
						Time
					</label>
					<input
						id="time"
						type="time"
						{...register("time")}
						className={`mt-1 block w-full border ${
							errors.time ? "border-red-500" : "border-gray-300"
						} rounded-md shadow-sm p-2`}
					/>
					{errors.time && (
						<p className="text-red-500 text-xs mt-1">
							{errors.time.message || "Time is required."}
						</p>
					)}
				</div>
			</div>

			<div className="pt-2 flex justify-between">
				<button
					type="button"
					onClick={onClose}
					className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100 transition"
					disabled={isSubmitting}
				>
					Cancel
				</button>
				<button
					type="submit"
					disabled={isSubmitting}
					className={`px-4 py-2 text-sm font-medium text-white rounded-md transition ${
						isSubmitting ? "bg-indigo-400" : "bg-indigo-600 hover:bg-indigo-700"
					}`}
				>
					{isSubmitting ? "Booking..." : "Confirm Booking"}
				</button>
			</div>

			{!bookingResult?.success && bookingResult !== null && (
				<p className="text-red-600 text-center font-medium mt-4">
					An error occurred during booking. Please try again.
				</p>
			)}
		</form>
	);
}
