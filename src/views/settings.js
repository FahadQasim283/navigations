import React from "react";
import { View, Text, Switch } from "react-native";

function SettingsScreen({ toggleTheme, isDarkTheme, themeStyles }) {
  return (
    <View
      style={{
        ...themeStyles.container,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={themeStyles.text}>Toggle Dark Theme</Text>
      <Switch onValueChange={toggleTheme} value={isDarkTheme} />
    </View>
  );
}

export default SettingsScreen;
