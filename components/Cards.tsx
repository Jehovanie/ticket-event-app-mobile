import icons from "@/constants/icons";
import images from "@/constants/images";
import { View, Text, TouchableOpacity, Image } from "react-native";

interface Props {
	onPress?: () => void;
}

export const FeaturedCard = ({ onPress }: Props) => {
	const image = "";

	const rating = 1.1;
	const name = "Maitre Gims";
	const address = "Paris France";
	const price = 150;

	return (
		<TouchableOpacity onPress={onPress} className="flex flex-col items-start w-60 h-52 relative">
			<Image source={images.maitreGims} className="size-full rounded-2xl" />
			<Image source={images.cardGradient} className="size-full rounded-2xl absolute bottom-0" />

			<View className="flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5">
				<Image source={icons.star} className="size-3.5" />
				<Text className="text-xs font-rubik-bold text-primary-300 ml-1">{rating}</Text>
			</View>

			<View className="flex flex-col items-start absolute bottom-5 inset-x-5">
				<Text className="text-xl font-poppins-semibold text-white" numberOfLines={1}>
					{name}
				</Text>
				<Text className="text-base font-rubik text-white" numberOfLines={1}>
					{address}
				</Text>

				<View className="flex flex-row items-center justify-between w-full">
					<Text className="text-xl font-rubik-extrabold text-white">${price}</Text>
					<Image source={icons.heart} className="size-5" />
				</View>
			</View>
		</TouchableOpacity>
	);
};

export const Card = () => {
	const image = "";
	const rating = 1.1;
	const name = "La Fouinne";
	const address = "Paris France";
	const price = 280;
	const date = "2023-10-10";
	const time = "10:00 AM";

	return (
		<TouchableOpacity className="flex-1 w-full mt-4 px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70 relative">
			<View className="flex flex-row items-center absolute px-2 top-5 right-5 bg-white/90 p-1 rounded-full z-50">
				<Image source={icons.star} className="size-2.5" />
				<Text className="text-xs font-rubik-bold text-primary-300 ml-0.5">1.5</Text>
			</View>

			<Image source={images.lafouine} className="w-full h-60 rounded-lg" resizeMode="cover" />

			<View className="flex flex-col mt-2">
				<Text className="text-base font-poppins-bold text-black-300">{name}</Text>
				<Text className="text-xs font-poppins text-black-100">{address}</Text>
				<Text className="text-base font-rubik-bold">
					{date} - {time}
				</Text>
			</View>
		</TouchableOpacity>
	);
};
