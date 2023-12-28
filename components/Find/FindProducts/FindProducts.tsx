import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { Product } from "../../../slices/findSlice";
import { RootState } from "../../../store/store";

const FindProduct = ({ protein, carbohydrates, fiber, fat, name }: Product) => {
  const calories: number =
    protein * 4 + carbohydrates * 4 + fiber * 2 + fat * 9;

  return (
    <View style={styles.product}>
      <Text>{name}</Text>
      <View>
        <Text>{calories} kcal</Text>
        <Text>100g</Text>
      </View>
    </View>
  );
};

const FindProducts = () => {
  const { find } = useSelector((state: RootState) => state.find);
  return (
    <FlatList
      data={find}
      renderItem={({ item }) => FindProduct(item)}
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
