import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FindInput from "../FindInput/FindInput";
import { AntDesign } from "@expo/vector-icons";

const FindHeader = ({ setLoading }: any) => {
  const navigation = useNavigation() as any;

  return (
    <View style={styles.header}>
      <Pressable
        onPressIn={() => navigation.goBack()}
        style={styles.headerHeight}
      >
        <Ionicons name="arrow-back-outline" size={28} color="black" />
      </Pressable>

      <FindInput setLoading={setLoading} />

      <Pressable
        style={styles.headerHeight}
        onPressIn={() => navigation.navigate("Barcode")}
      >
        <Ionicons name="barcode-outline" size={28} color="black" />
      </Pressable>

      <Pressable
        style={styles.headerHeight}
        onPressIn={() => navigation.navigate("AddProduct", { barcode: "" })}
      >
        <AntDesign name="plus" size={24} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 10,
  },
  headerHeight: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FindHeader;
