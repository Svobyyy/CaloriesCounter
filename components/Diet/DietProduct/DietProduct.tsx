import { AntDesign } from "@expo/vector-icons";
import { View, Pressable, StyleSheet, Text } from "react-native";
import { Product, changeSection } from "../../../slices/findSlice";
import CaloriesCounter from "../../utils/CaloriesCounter";
import DeleteDatabase from "./DeleteDatabase";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

type props = {
  product: Product & { quantity: number };
  when: any;
};

const DietProduct = ({
  product: { _id, carbohydrates, fat, fiber, name, protein, quantity },
  when,
}: props) => {
  const navigation = useNavigation() as any;
  const dispatch = useDispatch();

  return (
    <View style={styles.product}>
      <Pressable
        onPressIn={() => {
          navigation.navigate("AddToDate", {
            product: {
              _id,
              carbohydrates,
              fat,
              fiber,
              name,
              protein,
              quantity,
            },
            update: true,
            when,
            _id
          });
          dispatch(changeSection(when));
        }}
      >
        <View>
          <Text>{name}</Text>
          <Text>{quantity} g</Text>
        </View>
      </Pressable>

      {/* <AntDesign name="infocirlceo" size={24} color="black" /> */}

      <View style={styles.buttons}>
        <Text>
          {CaloriesCounter(protein, carbohydrates, fiber, fat, quantity)} kcal
        </Text>
        <Pressable
          onPressIn={() => {
            DeleteDatabase(_id, when);
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
