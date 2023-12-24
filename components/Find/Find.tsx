import {
  StyleSheet,
  View,
  ActivityIndicator,
} from "react-native";
import FindHeader from "./FindHeader/FindHeader";
import { useState } from "react";

const Find = ({ route, navigation }: any) => {
  const { section } = route.params;

  const [loading, setLoading] = useState(false);

  return (
    <>
      <FindHeader setLoading={setLoading}></FindHeader>
      {loading && (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#05666C" />
        </View>
      )}
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
  }
});

export default Find;
