import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs 
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
      }}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}