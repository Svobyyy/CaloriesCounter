import Diet from "../components/Diet/Diet";
import Find from "../components/Find/Find";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const DietRoute = () => {
  return (
    <Stack.Navigator initialRouteName="Diet">
      <Stack.Screen name="Diet" component={Diet} options={
        {headerShown: false}
        } />
      <Stack.Screen name="Find" component={Find} />
    </Stack.Navigator>
  );
};

export default DietRoute;
