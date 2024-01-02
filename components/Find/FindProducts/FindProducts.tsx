import { FlatList, StyleSheet, Text, View, Pressable } from "react-native";
import { useSelector } from "react-redux";
import { Product } from "../../../slices/findSlice";
import { RootState } from "../../../store/store";
import { useNavigation } from "@react-navigation/native";
import CaloriesCounter from "../../../utils/CaloriesCounter";

const FindProduct = ({ protein, carbohydrates, fiber, fat, name }: Product) => {
  return (
    <View style={styles.product}>
      <Text>{name}</Text>
      <View>
        <Text>{CaloriesCounter(protein, carbohydrates, fiber, fat)} kcal</Text>
        <Text>100g</Text>
      </View>
    </View>
  );
};

const FindProducts = () => {
  const navigation = useNavigation() as any;

  const { find } = useSelector((state: RootState) => state.find);
  return (
    <FlatList
      data={find}
      renderItem={({ item }) => (
        <Pressable
          onPressIn={() => {
            navigation.navigate("AddToDate", { product: item });
          }}
        >
          {FindProduct(item)}
        </Pressable>
      )}
      keyExtractor={(item) => item["_id"]}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  product: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    padding: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: "gray",
  },
});

export default FindProducts;
