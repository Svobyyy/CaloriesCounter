import { TextInput, StyleSheet, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { changeFind } from "../../../slices/findSlice";


const fetchData = async (text: string, dispatch: Function, setLoading: Function) => {
  try {
    const result = await fetch(
      `http://192.168.0.10:3005/products/${text.trim().toLowerCase()}`,
      {
        method: "GET",
      }
    );
    const data = await result.json();
    dispatch(changeFind(data));

    setLoading(false);
  } catch (e) {
    console.log("error", e);
  }
};

const FindInput = ({ setLoading }: any) => {
  const [text, setText] = useState<string>("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (text.trim() === "") {
      dispatch(changeFind([]));
      return setLoading(false);
    }
    setLoading(true);


    const timer = setTimeout(() => {
      fetchData(text, dispatch, setLoading);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [text]);

  return (
    <>
      <TextInput
        value={text}
        onChangeText={setText}
        style={styles.input}
        placeholder="Find a product"
        maxLength={50}
        autoFocus={true}
        cursorColor={"#05666C"}
        inputMode="search"
      ></TextInput>
      <Pressable
        style={styles.headerHeight}
        onPressIn={() => {
          setText("")
          dispatch(changeFind([]))
        }}
      >
        <AntDesign name="close" size={28} color="black" />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    alignSelf: "stretch",
    fontSize: 16,
    height: 50,
    fontWeight: "500",
  },
  headerHeight: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FindInput;
