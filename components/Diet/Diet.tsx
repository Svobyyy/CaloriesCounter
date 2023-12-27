import {
  Pressable,
  SectionList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const Diet = () => {
  const navigation = useNavigation() as any;
  const [products, setProducts] = useState([]) as any;
  const [loading, setLoading] = useState(true);
  const { date } = useSelector((state: any) => state.date);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          `http://192.168.0.10:3005/date/${date.format("YYYY-MM-DD")}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await result.json();
        setProducts([
          { title: "Breakfast", data: data.breakfast },
          { title: "Lunch", data: data.lunch },
          { title: "Dinner", data: data.dinner },
          { title: "Snacks", data: data.snacks },
        ]);
        setLoading(false);
      } catch (e) {
        console.log("error");
      }
    };

    fetchData();
  }, [date]);

  return (
    <>
      {!loading && (
        <SectionList
          sections={products}
          keyExtractor={(item, index) => item.name + index}
          renderItem={({ item }) => (
            <View style={styles.products}>
              <Text>{item.name}</Text>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Pressable
              onPressIn={() => navigation.navigate("Find", { section: title })}
              style={styles.header}
            >
              <Text style={styles.headerTitle}>{title}</Text>
              <AntDesign
                name="pluscircle"
                size={24}
                color="white"
                style={styles.headerIcon}
              />
            </Pressable>
          )}
        ></SectionList>
      )}
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#05666C" />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#05666C",
    paddingVertical: 10,
    margin: 5,
    marginTop: 8,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "white",
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "500",
  },
  headerIcon: {
    marginRight: 10,
  },
  products: {
    marginHorizontal: 15,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default Diet;
