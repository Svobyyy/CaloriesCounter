import { Product, changeSection } from "../../slices/findSlice";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Calendar from "../Calendar/Calendar";

const data = [
  { key: "1", value: "Breakfast" },
  { key: "2", value: "Lunch" },
  { key: "3", value: "Dinner" },
  { key: "4", value: "Snacks" },
];

const AddToDate = ({ route, navigation }: any) => {
  const { protein, carbohydrates, fiber, fat, name }: Product = route.params;
  const { section } = useSelector((state: RootState) => state.find);
  const dispatch = useDispatch();

  return (
    <>
      <Calendar></Calendar>
      <View style={styles.wrap}>
        <SelectList
          data={data}
          setSelected={(val: number) =>
            dispatch(changeSection(data[val - 1].value))
          }
          search={false}
          placeholder={section}
          dropdownStyles={{
            position: "absolute",
            top: 40,
            left: 0,
            right: 0,
            zIndex: 1,
            backgroundColor: "#f2f2f2",
          }}
        />
        <Pressable
          onPressIn={() => {
            navigation.goBack();
          }}
        >
          <Text>Go Back</Text>
        </Pressable>
        <Text>test</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrap: {
    margin: 20
  }
})

export default AddToDate;
