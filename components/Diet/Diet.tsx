import { SectionList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// _id
//
// date
// 2023-12-19T00:00:00.000+00:00

// breakfast
// Array (empty)

// lunch
// Array (empty)

// dinner
// Array (empty)

// snacks
// Array (empty)

const DUMMY = {
  _id: "65810cfb0d4726587c5d1285",
  date: "2023-12-19T00:00:00.000+00:00",
  breakfast: ["test", "test2"],
  dinner: ["test", "test2"],
  lunch: ["test", "test2"],
};

const TEST = [
  {
    title: "Breakfast",
    data: DUMMY.breakfast,
  },
  {
    title: "Lunch",
    data: DUMMY.lunch,
  },
  {
    title: "Dinner",
    data: DUMMY.dinner,
  },
];

const Diet = () => {
  return (
    <SectionList
      sections={TEST}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Text>{item}</Text>}
      renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
    ></SectionList>
  );
};

export default Diet;
