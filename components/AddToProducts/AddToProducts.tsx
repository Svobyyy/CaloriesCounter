import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { useState, useEffect } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import AddProductDatabase from "./AddProductDatabase";
import AddProduct from "../AddToDate/AddProduct/AddProduct";

export type AddProduct = {
  name: string;
  protein: string;
  carbohydrates: string;
  fat: string;
  fiber: string;
  barcode?: string;
};

const AddToProducts = ({
  navigation,
  route = undefined,
}: {
  navigation: any;
  route: any;
}) => {
  const [addProduct, setAddProduct] = useState<AddProduct>({
    name: "",
    protein: "",
    carbohydrates: "",
    fat: "",
    fiber: "",
    barcode: "",
  });

  useEffect(() => {
    console.log(route.params.barcode)
    if (route.params.barcode !== undefined) {
      
      changeProduct("barcode", route.params.barcode.toString());
    }
  }, []);

  const changeProduct = (change: string, value: string | number) => {
    setAddProduct((prevProduct) => ({ ...prevProduct, [change]: value }));
  };

  return (
    <>
      <ScrollView>
        <View style={styles.wrap}>
          <Text style={styles.header}>Add a Product</Text>
          <Text style={styles.title}>Name of a product *</Text>
          <TextInput
            value={addProduct.name}
            onChangeText={(newName) => changeProduct("name", newName)}
            style={styles.input}
            placeholder="Product's Name"
            maxLength={50}
            cursorColor={"#05666C"}
            inputMode="search"
          />

          <Text style={styles.title}>Protein of a product *</Text>
          <TextInput
            value={addProduct.protein}
            onChangeText={(newProtein) => changeProduct("protein", newProtein)}
            style={styles.input}
            placeholder="Product's Protein"
            maxLength={50}
            cursorColor={"#05666C"}
            inputMode="numeric"
          />

          <Text style={styles.title}>Carbohydrates of a product *</Text>
          <TextInput
            value={addProduct.carbohydrates}
            onChangeText={(newCarbs) =>
              changeProduct("carbohydrates", newCarbs)
            }
            style={styles.input}
            placeholder="Product's Carbohydrates"
            maxLength={50}
            cursorColor={"#05666C"}
            inputMode="numeric"
          />

          <Text style={styles.title}>Fat of a product *</Text>
          <TextInput
            value={addProduct.fat}
            onChangeText={(newFat) => changeProduct("fat", newFat)}
            style={styles.input}
            placeholder="Product's Fat"
            maxLength={50}
            cursorColor={"#05666C"}
            inputMode="numeric"
          />

          <Text style={styles.title}>Fiber of a product *</Text>
          <TextInput
            value={addProduct.fiber}
            onChangeText={(newFiber) => changeProduct("fiber", newFiber)}
            style={styles.input}
            placeholder="Product's Fiber"
            maxLength={50}
            cursorColor={"#05666C"}
            inputMode="numeric"
          />
          
          <Text style={styles.title}>BarCode of a product</Text>
          <TextInput
            value={addProduct.barcode}
            onChangeText={(newBarCode) => changeProduct("barcode", newBarCode)}
            style={styles.input}
            placeholder="Product's Barcode"
            maxLength={50}
            cursorColor={"#05666C"}
            inputMode="numeric"
          />
        </View>
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
            AddProductDatabase(addProduct, navigation);
          }}
        >
          <Ionicons name="checkmark" size={28} color="#f2f2f2" />
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    height: 50,
    fontWeight: "500",
    backgroundColor: "rgba(5, 102, 108, 0.12)",
    borderRadius: 10,
    padding: 10,
  },
  title: {
    color: "gray",
    fontSize: 14,
    marginVertical: 10,
  },
  wrap: {
    padding: 20,
  },
  header: {
    fontSize: 22,
    color: "#05666C",
    fontWeight: "500",
  },
  back: {
    height: 60,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  add: {
    backgroundColor: "#05666C",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  buttons: {
    flexDirection: "row",
    gap: 10,
    margin: 10,
  },
});

export default AddToProducts;
