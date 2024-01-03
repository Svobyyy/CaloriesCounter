import { AntDesign } from "@expo/vector-icons";
import { View, Pressable, StyleSheet, Text } from "react-native";
import { Product, changeSection } from "../../../slices/findSlice";
import CaloriesCounter from "../../../utils/CaloriesCounter";
import DeleteDatabase from "./DeleteDatabase";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { updateProducts } from "../../../slices/productsSlice";

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
        style={styles.changeQuantity}
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
        style={styles.delete}
          onPressIn={() => {
            DeleteDatabase(_id, when, dispatch, updateProducts);
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
    marginHorizontal: 15,
    alignItems: "center",
    margin: 0,
    padding: 0,

  },
  changeQuantity: {
    flex: 1,

    paddingVertical: 4,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    height: "100%"
  },
  delete: {
    height: '100%',
    justifyContent: "center",
    maxHeight: "100%"
  }

});

export default DietProduct;
