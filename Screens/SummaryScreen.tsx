import { View, StatusBar, FlatList, Text, Vibration, Button, ActivityIndicator } from "react-native";
import { useState } from "react";

const SummaryScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const result = await fetch("http://192.168.0.10:3005/products/p", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await result.json();
      setProducts(data);
      setLoading(false);
    } catch (e) {
      console.log("error");
    }
    Vibration.vibrate();
  };

  return (
    <View>
      <StatusBar backgroundColor="white"></StatusBar>
      <FlatList
        data={products}
        renderItem={({ item }: any) => {
          console.log(item.name);
          return <Text>{item.name}</Text>;
        }}
        keyExtractor={(item) => item["_id"]}
        ListEmptyComponent={<Text>Product not found</Text>}
      />

      {loading && <ActivityIndicator size="large" color="#00ff00" />}
      <Button onPress={fetchData} title="Find by Name Protein"></Button>
    </View>
  );
};

export default SummaryScreen;
