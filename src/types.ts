export interface IService {
	id: string;
	name: string;
	duration: number;
	price: number;
	description: string;
}

export interface ICenterInfo {
	slug: string;
	name: string;
	logoUrl: string;
	description: string;
	address: string;
}

export interface IBookingData {
	serviceId: string;
	serviceName: string;
	clientName: string;
	clientEmail: string;
	date: string;
	time: string;
}

export interface ICenterData extends ICenterInfo {
	services: IService[];
}

export interface CenterPageProps {
	params: {
		center: string;
	};
}
