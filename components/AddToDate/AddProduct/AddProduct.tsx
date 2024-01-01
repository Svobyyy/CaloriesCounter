import { Text, View, TextInput, StyleSheet } from "react-native";
import { Product } from "../../../slices/findSlice";
import CaloriesCounter from "../../utils/CaloriesCounter";

type props = {
  product: Product;
  setQuantity: React.Dispatch<React.SetStateAction<string>>;
  quantity: string;
};

const AddProduct = ({
  product: { protein, carbohydrates, fiber, fat, name },
  setQuantity,
  quantity,
}: props) => {

  return (
    <View style={styles.wrap}>
      <View style={styles.background}>
        <Text style={styles.title}>Product per 100g</Text>
        <View style={styles.infoMain}>
          <Text style={styles.name}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Text>

          <View style={styles.info}>
            <Text>Protein:</Text>
            <Text>{protein} g</Text>
          </View>
          <View style={styles.info}>
            <Text>Carbs:</Text>
            <Text>{carbohydrates} g</Text>
          </View>
          <View style={styles.info}>
            <Text>Fat:</Text>
            <Text>{fat} g</Text>
          </View>

          <View style={styles.info}>
            <Text>Fiber:</Text>
            <Text>{fiber} g</Text>
          </View>
          <View style={[styles.info, styles.calories]}>
            <Text>Calories:</Text>
            <Text>{CaloriesCounter(protein, carbohydrates, fiber, fat)} kcal</Text>
          </View>
        </View>
      </View>

      <View style={styles.background}>
        <Text style={styles.title}>Quantity</Text>
        <View style={styles.quantity}>
          <TextInput
            style={styles.input}
            value={quantity}
            onChangeText={setQuantity}
            placeholder="1"
            maxLength={6}
            cursorColor={"#05666C"}
            inputMode="numeric"
          ></TextInput>
          <Text>g</Text>
        </View>
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
    textAlign: "center",
  },
  infoMain: {
    paddingHorizontal: 5,
  },
  calories: {
    marginTop: 10,
  },
  info: {
    gap: 5,
    width: 120,
    textAlign: "left",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  title: {
    color: "#05666C",
    fontWeight: "500",
    marginBottom: 5,
  },
  name: {
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 5,
  },
  quantity: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    width: 100,
    gap: 10,
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
