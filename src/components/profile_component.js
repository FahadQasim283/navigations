import React from "react";
import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";

function ProfileDetails({ data, themeStyles }) {
  return (
    <View style={{ ...themeStyles.item, alignItems: "center" }}>
      <Image
        source={data.imageUrl}
        style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          marginBottom: 10,
        }}
      />
      <View style={{ ...themeStyles.item, alignItems: "center" }}>
        <Text style={themeStyles.text}>Name: {data.name}</Text>
        <Text style={themeStyles.text}>Age: {data.age}</Text>
        <Text style={themeStyles.text}>Location: {data.location}</Text>
        <Text style={{ ...themeStyles.text, fontSize: 18, fontWeight: 600 }}>
          Interests
        </Text>
        <View style={{ flexDirection: "row" }}>
          {" "}
          {data.interests.map((interest, index) => (
            <Text key={index} style={{ ...themeStyles.text, marginLeft: 10 }}>
              {" "}
              {interest}
            </Text>
          ))}
        </View>
      </View>
      <View style={themeStyles.item}>
        <Text style={styles.title}>Health Details</Text>
        {data.health_tracking.map((entry, index) => (
          <View key={index} style={themeStyles.item}>
            <Text style={themeStyles.text}>Date: {entry.date}</Text>
            <Text style={themeStyles.text}>Mood: {entry.mood}</Text>
            <Text style={themeStyles.text}>
              Sleep Hours: {entry.sleep_hours}
            </Text>
            <Text style={themeStyles.text}>
              Symptoms: {entry.symptoms.join(", ")}
            </Text>
            <Text style={themeStyles.text}>
              Activities: {entry.activities.join(", ")}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffc",
    marginBottom: 10,
  },
});

export default ProfileDetails;
