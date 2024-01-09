import { SimpleLineIcons } from "@expo/vector-icons";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useState } from "react";
import deleteProductDatabase from "./deleteProductDatabase";
import { Product } from "../../../slices/findSlice";

const Options = ({ product, navigation }: { product: Product; navigation: any }) => {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.delete}>
      <Pressable
        onPressIn={() => {
          setShow((isShown) => !isShown);
        }}
        style={styles.open}
      >
        <SimpleLineIcons name="options" size={24} color="black" />
      </Pressable>

      {show && (
        <View style={styles.box}>
          <Pressable
            onPressIn={() => {
              deleteProductDatabase(product["_id"], navigation);
            }}
          >
            <Text style={styles.deleteText}>Delete</Text>
          </Pressable>

          <Pressable
            onPressIn={() => {
              navigation.navigate("AddProduct", {
                replace: true,
                product
              });
            }}
          >
            <Text style={styles.updateText}>Update</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  delete: {
    alignItems: "flex-end",
    position: "relative",
    zIndex: 2,
  },
  open: {
    padding: 10,
  },
  box: {
    position: "absolute",
    zIndex: 2,
    top: 5,
    right: 42,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderWidth: 2,
    borderColor: "#05666C",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  deleteText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#dc143c",
    width: 150,
    padding: 10,
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#05666C"
  },
  updateText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#228b22",
    width: 150,
    padding: 10,
    textAlign: "center",
  },
});

export default Options;
