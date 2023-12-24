import DietScreen from "../Screens/DietScreen";
import Barcode from "../components/Barcode/Barcode";
import Find from "../components/Find/Find";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const DietRoute = () => {
  return (
    <Stack.Navigator
      initialRouteName="Diet"
      screenOptions={{ headerShown: false, animation: "fade" }}
      
    >
      <Stack.Screen name="DietRoute" component={DietScreen} />
      <Stack.Screen name="Find" component={Find} />
      <Stack.Screen name="Barcode" component={Barcode} />
    </Stack.Navigator>
  );
};

export default DietRoute;
