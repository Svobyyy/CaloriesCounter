import {
  Pressable,
  SectionList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { RootState } from "../../store/store";
import getDateDatabase from "./getDateDatebase";
import DietProduct from "./DietProduct/DietProduct";

const Diet = () => {
  const navigation = useNavigation() as any;
  const [loading, setLoading] = useState<Boolean>(true);
  const { date } = useSelector((state: RootState) => state.date);
  const { products, updateRequired } = useSelector(
    (state: RootState) => state.products
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    getDateDatabase(date, dispatch, setLoading);
  }, [date, updateRequired]);

  return (
    <>
      {!loading && (
        <SectionList
          sections={products as any}
          keyExtractor={(item, index) => item.name + index}
          renderItem={({ item, section: { title } }) => (
            <DietProduct product={item} when={title}></DietProduct>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Pressable
              onPressIn={() => navigation.navigate("Find", { section: title })}
              style={styles.header}
            >
              <Text style={styles.headerTitle}>{title}</Text>
              <AntDesign
                name="pluscircle"
                size={24}
                color="white"
                style={styles.headerIcon}
              />
            </Pressable>
          )}
        />
      )}
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#05666C" />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#05666C",
    paddingVertical: 10,
    margin: 5,
    marginTop: 8,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "white",
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "500",
  },
  headerIcon: {
    marginRight: 10,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default Diet;
