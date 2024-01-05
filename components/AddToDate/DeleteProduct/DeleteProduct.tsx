import { SimpleLineIcons } from "@expo/vector-icons";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useState } from "react";
import DeleteProductDatabase from "./DeleteProductDatabase";

const DeleteProduct = ({ id, navigation }: { id: string; navigation: any }) => {
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
        <Pressable
          style={styles.box}
          onPressIn={() => {
            DeleteProductDatabase(id, navigation);
          }}
        >
          <Text style={styles.deleteText}>Delete</Text>
          <Text style={styles.updateText}>Update</Text>
        </Pressable>
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
    borderWidth: 1,
    borderColor: "red",
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
    color: "red",
    flex: 1,
    width: 150,
    padding: 10,
    textAlign: "center"
  },
  updateText: {
    fontSize: 16,
    fontWeight: "500",
    color: "green",
    width: 150,
    padding: 10,
    textAlign: "center"
  }
});

export default DeleteProduct;
