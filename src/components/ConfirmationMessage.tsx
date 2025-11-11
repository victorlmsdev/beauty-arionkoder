import { BookingFormData } from "@/lib/validation";

interface ConfirmationMessageProps {
	bookingDetails: BookingFormData;
	bookingId: string;
	onNewBooking: () => void;
}

export default function ConfirmationMessage({
	bookingDetails,
	bookingId,
	onNewBooking,
}: ConfirmationMessageProps) {
	const formattedTime = `${bookingDetails.date} at ${bookingDetails.time}`;

	return (
		<div className="text-center p-6 space-y-4">
			<h3 className="text-3xl font-bold text-green-600 flex items-center justify-center">
				✅ Booking Confirmed!
			</h3>
			<p className="text-gray-700">
				Your appointment has been successfully scheduled.
			</p>

			<div className="bg-green-50 p-4 rounded-lg border border-green-200 text-left">
				<p className="text-sm font-semibold text-green-700 mb-2">
					Booking ID: {bookingId}
				</p>
				<ul className="text-gray-800 space-y-1 text-sm">
					<li>
						<b>Service:</b> {bookingDetails.serviceName}
					</li>
					<li>
						<b>Date & Time:</b> {formattedTime}
					</li>
					<li>
						<b>Client:</b> {bookingDetails.clientName}
					</li>
					<li>
						<b>Email:</b> {bookingDetails.clientEmail}
					</li>
				</ul>
			</div>

			<button
				onClick={onNewBooking}
				className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition duration-150 mt-4"
			>
				Book Another Service
			</button>
		</div>
	);
}
