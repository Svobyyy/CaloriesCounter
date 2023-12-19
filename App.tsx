import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SummaryScreen from "./Screens/SummaryScreen";
import { NavigationContainer } from "@react-navigation/native";
import Barcode from "./components/Barcode/Barcode";
import { FontAwesome5, Ionicons, FontAwesome } from "@expo/vector-icons";
import DietScreen from "./Screens/DietScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#05666C",
          tabBarShowLabel: true,
          headerTitleAlign: "center",
          tabBarStyle: { height: 65, flex: 0, padding: 5 },
          tabBarLabelStyle: {marginBottom: 10, fontSize: 12},
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
  );
}
