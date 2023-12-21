import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SummaryScreen from "./Screens/SummaryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import {
  FontAwesome5,
  Ionicons,
  FontAwesome,
  Entypo,
} from "@expo/vector-icons";
import CalendarScreen from "./Screens/CalendarScreen";
import DietScreen from "./Screens/DietScreen";
import { store } from "./store/store";
import Barcode from "./components/Barcode/Barcode";
import Calendar from "./components/Calendar/Calendar";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <Calendar></Calendar>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "#05666C",
            tabBarShowLabel: true,
            headerShown: false,
            tabBarStyle: { height: 65, flex: 0, padding: 5 },
            tabBarLabelStyle: { marginBottom: 10, fontSize: 12 },
          }}
        >
          <Tab.Screen
            name="Summary"
            component={SummaryScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <FontAwesome5 name="home" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Diet"
            component={DietScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="fast-food" size={24} color={color} />
              ),
            }}
          />

          <Tab.Screen
            name="Calendar"
            component={CalendarScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Entypo name="calendar" size={24} color={color} />
              ),
            }}
          />

          <Tab.Screen
            name="Products"
            component={Barcode}
            options={{
              tabBarIcon: ({ color }) => (
                <FontAwesome name="search" size={24} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
