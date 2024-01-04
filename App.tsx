import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SummaryScreen from "./Screens/SummaryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import { FontAwesome5, Ionicons, FontAwesome } from "@expo/vector-icons";
import { store } from "./store/store";
import Bar from "./components/StatusBar/Bar";
import DietRoute from "./routes/DietRoute";
import BarCodeScreen from "./Screens/BarCodeScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <Bar></Bar>
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Diet"
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
              component={DietRoute}
              options={{
                tabBarIcon: ({ color }) => (
                  <Ionicons name="fast-food" size={24} color={color} />
                ),
              }}
            />

            <Tab.Screen
              name="Products"
              component={BarCodeScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <FontAwesome name="search" size={24} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
