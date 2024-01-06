import { AddProduct } from "./AddToProducts";

const ReplaceProductDatabase = async (
  addProduct: AddProduct,
  navigation: any,
  id: string
) => {
  try {
    await fetch(`http://192.168.0.10:3005/product/${id}`, {
      method: "PUT",
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

export default ReplaceProductDatabase;
