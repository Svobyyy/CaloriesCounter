import { changeSection } from "../../slices/findSlice";
import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Calendar from "../Calendar/Calendar";
import AddProduct from "./AddProduct/AddProduct";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const data = [
  { key: "1", value: "Breakfast" },
  { key: "2", value: "Lunch" },
  { key: "3", value: "Dinner" },
  { key: "4", value: "Snacks" },
];

const fetchData = async (dateId: string) => {
  try {
    await fetch(`http://192.168.0.10:3005/date/${dateId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        when: "lunch",
        name: "add?",
        protein: 20,
        carbohydrates: 10,
        fiber: 0,
        fat: 2,
        quantity: 20,
      }),
    });
    console.log("fetched");
  } catch (e) {
    console.log("error", e);
  }
};

const AddToDate = ({ route, navigation }: any) => {
  const { section } = useSelector((state: RootState) => state.find);
  const dispatch = useDispatch();
  const [text, setText] = useState<string>("");



  return (
    <>
      <Calendar></Calendar>

      <ScrollView style={styles.wrap}>
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
        <AddProduct product={route.params.product} />
      </ScrollView>
      <View style={styles.buttons}>
        <Pressable
          style={styles.back}
          onPressIn={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="close" size={28} color="#f2f2f2" />
        </Pressable>
        <Pressable
          style={styles.add}
          onPressIn={() => {
            fetchData("658549fa96773a3c50a7a7a1");
          }}
        >
          <Ionicons name="checkmark" size={28} color="#f2f2f2" />
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrap: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  back: {
    height: 60,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderRadius: 10,
  },
  add: {
    backgroundColor: "#05666C",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderRadius: 10,
  },
  buttons: {
    flexDirection: "row",
    gap: 10,
    marginHorizontal: 10,
    marginBottom: 10,
  },
});

export default AddToDate;
