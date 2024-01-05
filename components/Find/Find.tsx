import { StyleSheet, View, ActivityIndicator } from "react-native";
import FindHeader from "./FindHeader/FindHeader";
import { useState, useEffect } from "react";
import FindProducts from "./FindProducts/FindProducts";
import { useDispatch } from "react-redux";
import { changeSection } from "../../slices/findSlice";

const Find = ({ route }: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const { section } = route.params;
    dispatch(changeSection(section));
  }, []);

  const [loading, setLoading] = useState(false);

  return (
    <>
      <FindHeader setLoading={setLoading} />
      {loading && (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#05666C" />
        </View>
      )}
      {!loading && <FindProducts />}
    </>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    alignSelf: "stretch",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Find;
