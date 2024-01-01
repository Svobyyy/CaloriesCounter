import { AntDesign } from "@expo/vector-icons";
import { View, Pressable, StyleSheet, Text } from "react-native";
import { Product } from "../../../slices/findSlice";
import CaloriesCounter from "../../utils/CaloriesCounter";
import DeleteDatabase from "./DeleteDatabase";

type props = {
  product: Product & { quantity: number };
  when: any;
};

const DietProduct = ({
  product: { _id, carbohydrates, fat, fiber, name, protein, quantity },
  when,
}: props) => {

  return (
    <View style={styles.product}>
      <View>
        <Text>{name}</Text>
        <Text>{quantity} g</Text>
      </View>

      {/* <AntDesign name="infocirlceo" size={24} color="black" /> */}

      <View style={styles.buttons}>
        <Text>
          {CaloriesCounter(protein, carbohydrates, fiber, fat, quantity)} kcal
        </Text>
        <Pressable
          onPressIn={() => {
            DeleteDatabase(_id, when)
          }}
        >
          <AntDesign name="close" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    paddingVertical: 4,
    justifyContect: "center",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});

export default DietProduct;
