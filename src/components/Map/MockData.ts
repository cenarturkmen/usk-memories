import { MapDataType } from "@/types";

export const points: MapDataType[] = [
	{
		id: 1,
		instagram: "instagram_user1",
		latLng: [41.0082, 28.9784], // Istanbul coordinates
		isUskEvent: true,
		description: "Join me for a coffee at the historic Pierre Loti Hill Café!",
		location: "Pierre Loti Hill Café, Eyüp, Istanbul",
		photoUrl: "https://picsum.photos/id/237/200/300"
	},
	{
		id: 2,
		instagram: "instagram_user2",
		latLng: [41.0315, 28.9774], // Istanbul coordinates
		isUskEvent: false,
		description: "Explore the colorful street art in Kadiköy with me!",
		location: "Kadiköy, Istanbul",
		photoUrl: "https://picsum.photos/id/238/200/300"
	},
	{
		id: 3,
		instagram: "instagram_user3",
		latLng: [41.0275, 28.9739], // Istanbul coordinates
		isUskEvent: true,
		description: "Let's watch the sunset from the Galata Tower!",
		location: "Galata Tower, Beyoğlu, Istanbul",
		photoUrl: "https://picsum.photos/id/239/200/300"
	}

];
  