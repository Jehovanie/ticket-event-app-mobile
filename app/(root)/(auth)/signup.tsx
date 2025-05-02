import images from "@/constants/images";
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
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
						<Text className="text-2xl font-poppins-extrabold mb-4 text-black">Sign Up</Text>
						<View className="mt-2">
							<View className="flex-row gap-1 mb-4">
								<View className="w-1/2">
									<TextInput
										placeholder="Firstname"
										className="flex-1 border border-gray-300 rounded-lg px-4 py-2"
									/>
									<Text className="text-red-600 text-sm ms-1 font-poppins-light">
										Firstname required
									</Text>
								</View>
								<View className="w-1/2">
									<TextInput
										placeholder="Lastname"
										className="flex-1 border border-gray-300 rounded-lg px-4 py-2"
									/>
									<Text className="text-red-600 text-sm ms-1 font-poppins-light">
										Lastname required
									</Text>
								</View>
							</View>

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
									placeholder="Phone number"
									className="border border-gray-300 rounded-lg px-4 py-2"
									keyboardType="email-address"
								/>
								<Text className="text-red-600 text-sm ms-1 font-poppins-light">Phone required</Text>
							</View>

							<View className="mb-4 w-full">
								<TextInput
									placeholder="Password"
									className="border border-gray-300 rounded-lg px-4 py-2"
								/>
								<Text className="text-red-600 text-sm ms-1 font-poppins-light">Password required</Text>
							</View>

							<View className="mb-4 w-full">
								<TextInput
									placeholder="Confirm Password"
									className="border border-gray-300 rounded-lg px-4 py-2"
								/>
								<Text className="text-red-600 text-sm ms-1 font-poppins-light">
									Password must required
								</Text>
							</View>

							<TouchableOpacity className="bg-purple-600 rounded-2xl py-3 mb-4 items-center">
								<Text className="text-white font-poppins-bold text-xl">Sign Up</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignUp;
