import { Text } from "react-native";

const Find = ({route}: any) => {

  const {section} = route.params

  return <Text>{section}</Text>;
};

export default Find;
