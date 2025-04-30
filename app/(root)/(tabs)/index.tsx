import { ActivityIndicator, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import NoResults from "@/components/NoResult";
import { Card, FeaturedCard } from "@/components/Cards";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import Filters from "@/components/Filters";
import { useState } from "react";

const Index = () => {
	const properties: any = [1, 2, 3, 4];
	const loading = false;
	const lastestPropertiesLoading = false;
	const latestProperties: any = [1, 2, 3, 4, 5, 6];

	const handleCardPress = () => {};

	const [search, setSearch] = useState("");
	const [isSearchMode, setIsSearchMode] = useState(false);

	const handleSearch = () => {};
	const toggleSearchMode = () => {
		setIsSearchMode((state) => !state);
	};

	return (
		<SafeAreaView className="bg-white flex-1">
			<FlatList
				data={properties}
				renderItem={({ item }) => <Card />}
				numColumns={2}
				contentContainerClassName="pb-32"
				columnWrapperClassName="flex gap-5 px-5"
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={
					loading ? <ActivityIndicator size="large" className="text-primary-300 mt-5" /> : <NoResults />
				}
				ListHeaderComponent={
					<View>
						<View className="px-5 bg-primary-100 pb-10 rounded-bl-3xl rounded-br-3xl mb-5">
							<View className="flex flex-row items-center justify-between my-5">
								<View className="flex flex-row items-center">
									<Text className="text-lg font-poppins-extrabold">Home</Text>
								</View>
								<Image source={icons.search} className="size-6" />
							</View>

							<View className="flex flex-row justify-center items-center h-[450px] w-[450px] bg-primary rounded-3xl">
								<Image source={images.eventLadies} className="h-4/5 w-4/5 rounded-2xl" />
							</View>
						</View>
						<View className="px-5">
							<View className="flex flex-row items-center justify-between mb-4">
								<Text className="text-xl font-poppins-medium text-black-300">Our Recomendation</Text>
								<TouchableOpacity>
									<Text className="text-base font-poppins-medium text-primary">See all</Text>
								</TouchableOpacity>
							</View>
							<Filters />
						</View>
					</View>
				}
			/>
		</SafeAreaView>
	);
};

export default Index;
