const DeleteProductDatabase = async (id: string, navigation: any) => {
  try {
    await fetch(`http://192.168.0.10:3005/product/${id}`, {
      method: "DELETE",
    });
    navigation.navigate("DietRoute");
  } catch (e) {
    console.log("error", e);
  }
};

export default DeleteProductDatabase;
