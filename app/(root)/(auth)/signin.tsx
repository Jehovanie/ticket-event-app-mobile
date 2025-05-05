import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import images from "@/constants/images";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
	return (
		<SafeAreaView className="bg-primary-300 flex-1">
			<ScrollView>
				<View>
					<View className="items-center mb-6">
						<Image source={images.logoTransparent} className="h-[250px] w-[300px] mb-2" />
					</View>
				</View>
				<View className="">
					<View className="w-full h-full bg-white rounded-tl-[40px] rounded-tr-[40px] shadow-lg p-10 ">
						<Text className="text-2xl font-poppins-extrabold mb-4 text-black">Sign In</Text>
						<View className="mt-2">
							<View className="mb-4 w-full">
								<TextInput
									placeholder="Email"
									className="border border-gray-300 rounded-lg px-4 py-2"
									keyboardType="email-address"
								/>
								<Text className="text-red-600 text-sm ms-1 font-poppins-light">Email required</Text>
							</View>
							<View className="mb-4 w-full">
								<TextInput
									placeholder="Password"
									className="border border-gray-300 rounded-lg px-4 py-2"
								/>
								<Text className="text-red-600 text-sm ms-1 font-poppins-light">Password required</Text>
							</View>

							<TouchableOpacity className="bg-purple-600 rounded-2xl py-3 mb-4 items-center">
								<Text className="text-white font-poppins-bold text-xl">Sign In</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};
export default SignIn;
