import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { ActivityIndicator } from "react-native";
import { ref, get } from "firebase/database";
import database from "../db/firebase";
import ProfileComponent from "../components/profile_component";

function MyProfileScreen({ themeStyles }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await get(ref(database, "/users"));
        if (snapshot.exists()) {
          const dataList = snapshot.val();
          const formattedData = Object.values(dataList);
          const userData = formattedData.filter((data) => data.id === "u001");
          setData(userData[0]);
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
  }, {});

  if (loading) {
    return (
      <View style={themeStyles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <View style={{ ...themeStyles.item, alignItems: "center" }}>
      <ProfileComponent data={data} themeStyles={themeStyles} />
    </View>
  );
}

export default MyProfileScreen;
