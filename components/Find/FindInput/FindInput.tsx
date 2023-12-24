import { TextInput, StyleSheet, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";

const FindInput = ({ setLoading }: any) => {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    if (text === "") {
      return setLoading(false);
    }
    setLoading(true);
    const fetchData = async () => {
      try {
        const result = await fetch(
          `http://192.168.0.10:3005/products/${text.toLowerCase()}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await result.json();
        console.log(data);

        setLoading(false);
      } catch (e) {
        console.log("error", e);
      }
    };

    const timer = setTimeout(() => {
      fetchData();
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
      <Pressable style={styles.headerHeight} onPressIn={() => {setText("")}}>
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
  }
});

export default FindInput;
