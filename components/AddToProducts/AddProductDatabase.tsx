import { AddProduct } from "./AddToProducts";

const AddProductDatabase = async (addProduct: AddProduct, navigation: any) => {
  try {
    await fetch(`http://192.168.0.10:3005/product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        addProduct,
      }),
    });
    navigation.navigate("DietRoute");
  } catch (e) {
    console.log("error", e);
  }
};

export default AddProductDatabase;
