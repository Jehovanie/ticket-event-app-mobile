import React, { createContext, useEffect, useState, ReactNode } from "react";
import { client } from "../api/client";
import { isLoaded } from "expo-font";

type DataEventType = {
	events: EventType[];
	isLoading: boolean;
	errors: any[];
};

// Define type for events if needed
type EventType = {
	id: number;
	title: string;
	// Add more fields as needed
};

// Define context type
export const EventContext: React.Context<DataEventType> = createContext<DataEventType>({
	events: [],
	isLoading: true,
	errors: [],
});

export const EventProvider = ({ children }: { children: ReactNode }) => {
	const [dataEvents, setDataEvents] = useState<DataEventType>({
		events: [],
		isLoading: true,
		errors: [],
	});

	useEffect(() => {
		const fetchEvents = async () => {
			try {
				const response = await client.get<EventType[]>("/api/events");
				setDataEvents({
					events: response.data,
					isLoading: false,
					errors: [],
				});
			} catch (err) {
				setDataEvents({
					events: [],
					isLoading: false,
					errors: [err],
				});
				console.error(err);
			}
		};

		fetchEvents();
	}, []);

	return <EventContext.Provider value={dataEvents}> {children} </EventContext.Provider>;
};
