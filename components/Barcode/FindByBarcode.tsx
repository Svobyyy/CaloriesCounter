const FindByBarcode = async (barcode: number, navigation: any) => {
  try {
    const result = await fetch(
      `http://192.168.0.10:3005/product/barcode/${barcode}`,
      {
        method: "GET",
      }
    );
    const data = await result.json();
    if (data !== null) {
      return navigation.navigate("AddToDate", { product: data });
    }
    // add a product
    return navigation.navigate("AddProduct", {product: {barcode}});



  } catch (e) {
    console.log("error", e);
  }
};

export default FindByBarcode;
