// app/sitemap.ts
import { MetadataRoute } from "next";
import { getAllCenters } from "@/lib/api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const centers = await getAllCenters();

	const centerRoutes = centers.map((center) => ({
		url: `https://beauty-arionkoder.vercel.app/${center.slug}`,
		lastModified: new Date(),
		priority: 0.8,
	}));

	return [
		{
			url: "https://beauty-arionkoder.vercel.app",
			lastModified: new Date(),
			priority: 1.0,
		},
		...centerRoutes,
	];
}
