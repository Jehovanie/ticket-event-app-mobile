import { Card } from "@/components/Cards";
import Filters from "@/components/Filters";
import NoResults from "@/components/NoResult";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Explore = () => {
	const properties: any = [1, 2, 3, 4];
	const loading = false;
	return (
		<SafeAreaView className="bg-white flex-1">
			<FlatList
				data={properties}
				renderItem={({ item }) => <Card />}
				numColumns={2}
				contentContainerClassName="pb-32"
				columnWrapperClassName="flex flex-col"
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={
					loading ? <ActivityIndicator size="large" className="text-primary-300 mt-5" /> : <NoResults />
				}
				ListHeaderComponent={
					<View className="bg-primary">
						<View className="px-5 pb-10">
							<View className="flex flex-row items-center justify-between my-5">
								<View className="flex flex-row items-center">
									<Text className="text-3xl font-poppins-extrabold text-white">Search</Text>
								</View>
								<Image source={icons.filter} tintColor={"#FFFFFF"} className="size-6" />
							</View>
							<Search />
						</View>
						<View className="bg-white px-5 py-2 rounded-tl-3xl rounded-tr-3xl">
							<Filters />
						</View>
					</View>
				}
			/>
		</SafeAreaView>
	);
};

export default Explore;
