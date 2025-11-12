import { ICenterInfo, IService } from "@/types";

export const MOCKED_SERVICES_CENTER1: IService[] = [
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

export const MOCKED_SERVICES_CENTER2: IService[] = [
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

export const MOCKED_CENTER_INFO: Record<string, ICenterInfo> = {
	center1: {
		slug: "center1",
		name: "Bella Vista Studio",
		logoUrl: "/center1-logo.jpg",
		description: "Your beauty and wellness haven in the heart of the city.",
		address: "123 Main Street, City, State, Country",
	},
	center2: {
		slug: "center2",
		name: "Urban Style Salon",
		logoUrl: "/center2-logo.jpg",
		description: "Modern design and cutting-edge services for those on the go.",
		address: "456 Park Avenue, City, State, Country",
	},
};
