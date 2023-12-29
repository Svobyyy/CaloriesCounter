import { Product, changeSection } from "../../slices/findSlice";
import { Pressable, Text } from "react-native";
import { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Calendar from "../Calendar/Calendar";

const AddToDate = ({ route, navigation }: any) => {
  const { protein, carbohydrates, fiber, fat, name }: Product = route.params;
  const { section } = useSelector((state: RootState) => state.find);
  const dispatch = useDispatch();

  const [selected, setSelected] = useState("");

  const data = [
    { key: "1", value: "Breakfast" },
    { key: "2", value: "Lunch" },
    { key: "3", value: "Dinner" },
    { key: "4", value: "Snacks" },
  ];

  return (
    <>
      <Calendar></Calendar>
      <SelectList
        data={data}
        setSelected={(val: number) =>
          dispatch(changeSection(data[val - 1].value))
        }
        search={false}
        placeholder={section}
      />
      <Pressable
        onPressIn={() => {
          navigation.goBack();
        }}
      >
        <Text>Go Back</Text>
      </Pressable>
    </>
  );
};

export default AddToDate;
