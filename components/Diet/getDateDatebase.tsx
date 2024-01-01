import { Dayjs } from "dayjs";


const getDateDatabase = async (
  date: Dayjs,
  setProducts: any,
  setLoading: React.Dispatch<React.SetStateAction<Boolean>>
) => {
  try {
    const result = await fetch(
      `http://192.168.0.10:3005/date/${date.format("YYYY-MM-DD")}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await result.json();
    setProducts([
      { title: "Breakfast", data: data.breakfast },
      { title: "Lunch", data: data.lunch },
      { title: "Dinner", data: data.dinner },
      { title: "Snacks", data: data.snacks },
    ]);
    setLoading(false);
  } catch (e) {
    console.log("error", e);
  }
};

export default getDateDatabase;
