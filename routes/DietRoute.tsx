import DietScreen from "../Screens/DietScreen";
import AddToDate from "../components/AddToDate/AddToDate";
import Barcode from "../components/Barcode/Barcode";
import Find from "../components/Find/Find";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const DietRoute = () => {
  return (
    <Stack.Navigator
      initialRouteName="Diet"
      screenOptions={{ headerShown: false, animation: "fade"}}
    >
      <Stack.Screen name="DietRoute" component={DietScreen} />
      <Stack.Screen name="Find" component={Find} />
      <Stack.Screen name="Barcode" component={Barcode} />
      <Stack.Screen
        name="AddToDate"
        component={AddToDate}
        options={{
          headerShown: true,
          title: "Write down",
          headerBackTitleStyle: {fontSize: 80}
          
        }}
      />
    </Stack.Navigator>
  );
};

export default DietRoute;
