import { Text, View, TextInput, StyleSheet } from "react-native";
import { Product } from "../../../slices/findSlice";

type props = {
  product: Product;
};

const AddProduct = ({
  product: { protein, carbohydrates, fiber, fat, name },
}: props) => {
  const calories: number =
    protein * 4 + carbohydrates * 4 + fiber * 2 + fat * 9;

  return (
    <View style={styles.wrap}>
      <View style={styles.background}>
        <Text>Product</Text>
        <Text>{name}</Text>
        <Text>Protein: {protein}</Text>
        <Text>Carbs: {carbohydrates}</Text>
        <Text>Fat: {fat}</Text>
        <Text>Fiber: {fiber}</Text>
        <Text>calories: {calories} kcal</Text>
      </View>

      <View style={styles.background}>
        <Text>Quantity</Text>
        <TextInput
          style={styles.input}
          placeholder="1"
          maxLength={4}
          autoFocus={true}
          cursorColor={"#05666C"}
          inputMode="numeric"
        ></TextInput>
        <Text>grams</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    alignSelf: "stretch",
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  wrap: {
    gap: 10,
    marginTop: 10,
  },
  background: {
    backgroundColor: "rgba(5, 102, 108, 0.12)",
    borderRadius: 10,
    padding: 10,
  },
});

export default AddProduct;
