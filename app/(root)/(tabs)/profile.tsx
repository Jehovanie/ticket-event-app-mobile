import { View, Text, ScrollView, Image, TouchableOpacity, ImageSourcePropType, Alert } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { settings } from "@/constants/data";

interface SettingsItemProp {
	icon: ImageSourcePropType;
	title: string;
	textStyle?: string;
	showArrow?: boolean;
}

const SettingsItem = ({ icon, title, textStyle, showArrow = true }: SettingsItemProp) => (
	<TouchableOpacity className="flex flex-row items-center justify-between py-3">
		<View className="flex flex-row items-center gap-3">
			<Image source={icon} className="size-6" />
			<Text className={`text-lg font-poppins-medium text-black-300 ${textStyle}`}>{title}</Text>
		</View>
		{showArrow && <Image source={icons.rightArrow} tintColor={"#5C27C0"} className="size-5" />}
	</TouchableOpacity>
);

const Profile = () => {
	const user = {
		name: "Jheo",
	};

	return (
		<SafeAreaView className="h-full bg-white">
			<ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-32">
				<View className="px-5 bg-primary-300 mb-5">
					<View className="flex flex-row items-center justify-between my-5">
						<View className="flex flex-row items-center">
							<Text className="text-3xl font-poppins-extrabold text-white">Profile</Text>
						</View>
						<Image source={icons.bell} tintColor={"#FFFFFF"} className="size-6" />
					</View>
				</View>

				<View className="px-5">
					<View className="flex-row justify-center flex mt-5">
						<View className="flex flex-col items-center justify-center relative mt-5">
							<Image source={images.avatar} className="size-44 relative rounded-full" />
							<TouchableOpacity className="absolute bottom-11 right-2">
								<Image
									source={icons.edit}
									tintColor="#5C27C0"
									className="size-9"
								/>
							</TouchableOpacity>
							<Text className="text-2xl font-poppins-bold  mt-2">{user?.name} </Text>
						</View>
					</View>
					<View className="flex flex-col mt-10">
						<SettingsItem icon={icons.calendar} title="My Booking" />
						<SettingsItem icon={icons.wallet} title="Payments" />
					</View>

					<View className="flex flex-col mt-5 border-t pt-5 border-primary-300">
						{settings.slice(2).map((item, index) => (
							<SettingsItem key={index} {...item} />
						))}
					</View>

					<View className="flex flex-col mt-5 border-t pt-5 border-primary-300">
						<SettingsItem icon={icons.logout} title="Logout" textStyle="text-danger" showArrow={false} />
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Profile;
