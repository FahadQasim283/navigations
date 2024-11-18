import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Appearance, StyleSheet } from "react-native";
import DashBoardScreen from "./src/views/dashboard";
import SettingsScreen from "./src/views/settings";
import MyProfileScreen from "./src/views/myprofile";

const Drawer = createDrawerNavigator();

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(
    Appearance.getColorScheme() === "dark"
  );
  const toggleTheme = () => {
    setIsDarkTheme((previousState) => !previousState);
  };
  const themeStyles = isDarkTheme ? darkStyles : lightStyles;
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="dashboard">
        <Drawer.Screen name="dashboard">
          {() => <DashBoardScreen themeStyles={themeStyles} />}
        </Drawer.Screen>
        <Drawer.Screen name="Settings">
          {() => (
            <SettingsScreen
              toggleTheme={toggleTheme}
              isDarkTheme={isDarkTheme}
              themeStyles={themeStyles}
            />
          )}
        </Drawer.Screen>
        <Drawer.Screen name="profile">
          {() => <MyProfileScreen themeStyles={themeStyles} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
    textAlign: "center",
  },
  listContainer: {
    paddingBottom: 20,
  },
  item: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    padding: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
    textAlign: "center",
  },
  listContainer: {
    paddingBottom: 20,
  },
  item: {
    backgroundColor: "#444",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    color: "#fff",
  },
});
