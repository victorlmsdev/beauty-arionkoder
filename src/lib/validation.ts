import { z } from "zod";

const isDateTimeInFuture = (date: string, time: string): boolean => {
	const appointmentDateTime = new Date(`${date}T${time}:00`);
	return appointmentDateTime > new Date();
};

export const BookingSchema = z
	.object({
		clientName: z.string().min(2, "Name is required."),
		clientEmail: z.string().email("Invalid email format."),
		date: z.string().min(1, "Date is required."),
		time: z.string().min(1, "Time is required."),

		serviceId: z.string(),
		serviceName: z.string(),
	})
	.refine((data) => isDateTimeInFuture(data.date, data.time), {
		message: "Appointment must be set for a future date and time.",
		path: ["time"],
	});

export type BookingFormData = z.infer<typeof BookingSchema>;

export type UserPersistenceData = {
	clientName: string;
	clientEmail: string;
};
