import { ICenterData, IService, IBookingData, ICenterInfo } from "@/types";

const MOCKED_SERVICES_CENTER1: IService[] = [
	{
		id: "s1",
		name: "Classic Haircut",
		duration: 60,
		price: 80.0,
		description: "A timeless haircut, including wash and styling.",
	},
	{
		id: "s2",
		name: "Full Manicure",
		duration: 45,
		price: 45.0,
		description: "Cleaned, buffed nails, and polished with seasonal colors.",
	},
	{
		id: "s3",
		name: "Relaxing Massage (90 min)",
		duration: 90,
		price: 150.0,
		description: "Deep tissue massage for tension relief and total relaxation.",
	},
];

const MOCKED_SERVICES_CENTER2: IService[] = [
	{
		id: "s4",
		name: "Deep Facial Cleansing",
		duration: 75,
		price: 120.0,
		description: "Removal of impurities and complete facial hydration.",
	},
	{
		id: "s5",
		name: "Party Hairstyle",
		duration: 90,
		price: 180.0,
		description: "Exclusive event hairstyle with long-lasting hold.",
	},
];

const MOCKED_CENTER_INFO: Record<string, ICenterInfo> = {
	center1: {
		slug: "center1",
		name: "Bella Vista Studio",
		logoUrl: "/logos/bella_vista_logo.png",
		description: "Your beauty and wellness haven in the heart of the city.",
	},
	center2: {
		slug: "center2",
		name: "Urban Style Salon",
		logoUrl: "/logos/estilo_urbano_logo.png",
		description: "Modern design and cutting-edge services for those on the go.",
	},
};

const API_DELAY_MS = 1500;

/**
 * @todo: This simulates a network request. Replace with data fetching logic.
 * @param centerSlug The center's URL identifier (e.g., 'center1')
 * @returns A Promise that resolves with the center's data.
 */
export async function getCenterData(centerSlug: string): Promise<ICenterData> {
	return new Promise((resolve, reject) => {
		// 1. Artificial Delay Implementation
		setTimeout(() => {
			// 2. Logic to simulate database lookup
			let services: IService[] = [];
			const centerInfo = MOCKED_CENTER_INFO[centerSlug];

			if (!centerInfo) {
				// Reject if the center slug is invalid (simulating a 404)
				return reject(new Error("Center not found."));
			}

			if (centerSlug === "center1") {
				services = MOCKED_SERVICES_CENTER1;
			} else if (centerSlug === "center2") {
				services = MOCKED_SERVICES_CENTER2;
			}

			const result: ICenterData = {
				...centerInfo,
				services,
			};

			resolve(result);
		}, API_DELAY_MS);
	});
}

/**
 * @todo: Mocked data and API calls, replace with api integration
 * Submission of a new appointment (booking).
 * @param bookingData The data from the Booking Form.
 * @returns A Promise that simulates success after a brief delay.
 */
export async function submitBooking(
	bookingData: IBookingData
): Promise<{ success: true; bookingId: string }> {
	// Shorter delay to simulate a quick form submission process
	const SUBMIT_DELAY_MS = 500;

	return new Promise((resolve) => {
		setTimeout(() => {
			// Simulate that the booking was persisted (Bonus: LocalStorage could be used here)
			// Returns a fictitious booking ID.
			resolve({ success: true, bookingId: `BOOK-${Date.now()}` });
		}, SUBMIT_DELAY_MS);
	});
}
