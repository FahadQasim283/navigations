import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native";
import { ref, get } from "firebase/database";
import database from "../db/firebase";

function DashBoardScreen({ themeStyles }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await get(ref(database, "/users"));
        if (snapshot.exists()) {
          const dataList = snapshot.val();
          const formattedData = Object.values(dataList);
          setData(formattedData);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={themeStyles.item}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={item.imageUrl}
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            marginBottom: 10,
          }}
        />
        <View style={themeStyles.item}>
          <Text style={themeStyles.text}>Name: {item.name}</Text>
          <Text style={themeStyles.text}>Age: {item.age}</Text>
          <Text style={themeStyles.text}>Location: {item.location}</Text>
          <Text style={{ ...themeStyles.text, fontSize: 18, fontWeight: 600 }}>
            Interests
          </Text>
          <View style={{ flexDirection: "row" }}>
            {" "}
            {item.interests.map((interest, index) => (
              <Text key={index} style={{ ...themeStyles.text, marginLeft: 10 }}>
                {" "}
                {interest}
              </Text>
            ))}
          </View>
        </View>
      </View>
      <View style={themeStyles.item}>
        <Text style={styles.title}>Health Details</Text>
        {item.health_tracking.map((entry, index) => (
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

  if (loading) {
    return (
      <View style={themeStyles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={themeStyles.container}>
      <Text style={themeStyles.heading}>Users</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={themeStyles.listContainer}
      />
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

export default DashBoardScreen;
