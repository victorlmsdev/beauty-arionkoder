import { ICenterData, IService, IBookingData, ICenterInfo } from "@/types";
import {
	MOCKED_CENTER_INFO,
	MOCKED_SERVICES_CENTER1,
	MOCKED_SERVICES_CENTER2,
} from "./mock";

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

export async function getAllCenters(): Promise<ICenterInfo[]> {
	return new Promise((resolve) => {
		const DIRECTORY_DELAY_MS = 500;

		setTimeout(() => {
			const centerList = Object.values(MOCKED_CENTER_INFO);
			resolve(centerList);
		}, DIRECTORY_DELAY_MS);
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
