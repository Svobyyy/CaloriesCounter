import DietScreen from "../Screens/DietScreen";
import AddToDate from "../components/AddToDate/AddToDate";
import Barcode from "../components/Barcode/Barcode";
import Find from "../components/Find/Find";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import AddToProducts from "../components/AddToProducts/AddToProducts";

const Stack = createNativeStackNavigator();

const DietRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: "fade" }}>
      <Stack.Screen name="DietRoute" component={DietScreen} />
      <Stack.Screen name="Find" component={Find} />
      <Stack.Screen name="Barcode" component={Barcode} />
      <Stack.Screen name="AddToDate" component={AddToDate} />
      <Stack.Screen name="AddProduct" component={AddToProducts} />
    </Stack.Navigator>
  );
};

export default DietRoute;
