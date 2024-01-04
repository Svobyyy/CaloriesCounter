import { View, Text } from "react-native";
import Calendar from "../components/Calendar/Calendar";

const ProductsScreen = () => {
  return (
    <>
      <Calendar></Calendar>
      <View>
        <Text>CRUD operace</Text>
      </View>
    </>
  );
};

export default ProductsScreen;
