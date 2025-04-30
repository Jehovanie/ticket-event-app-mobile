import { Tabs } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

const AppHomeLayout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: "Search",
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profil",
                }}
            />
        </Tabs>
    );
};

export default AppHomeLayout;
