import { Product } from "../../slices/findSlice";


const sendToDatabase = async (
  date: string,
  navigation: any,
  when: string,
  product: Product,
  quantity: number
) => {


  const { name, protein, fat, carbohydrates, fiber } = product;
  try {
    await fetch(`http://192.168.0.10:3005/date/${date}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        when,
        name,
        protein,
        carbohydrates,
        fiber,
        fat,
        quantity
      }),
    });
    navigation.navigate("DietRoute");
  } catch (e) {
    console.log("error", e);
  }
};

export default sendToDatabase;
