import {
  Pressable,
  SectionList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const Diet = ({navigation} : any) => {
  const [products, setProducts] = useState([]) as any;
    const [loading, setLoading] = useState(true);
    const { date } = useSelector((state: any) => state.date);
  
    const fetchData = async () => {
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
  
        setLoading(false)
      } catch (e) {
        console.log("error");
      }
    };
  
    useEffect(() => {
        fetchData();
    }, [date]);
  

    return ( 
          
              <>
                {!loading && (
                  <SectionList
                    sections={products}
                    keyExtractor={(item, index) => item.name + index}
                    renderItem={({ item }) => <Text>{item.name}</Text>}
                    renderSectionHeader={({ section: { title } }) => (
                      <Pressable
                        onPressIn={() => navigation.navigate("Find", {section: title})}
                        style={styles.header}
                      >
                        <Text>{title}</Text>
                      </Pressable>
                    )}
                  ></SectionList>
                )}
                {loading && (
                  <View style={styles.loading}>
                    <ActivityIndicator size="large" color="#00ff00" />
                  </View>
                )}
              </>
            );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "green",
    paddingVertical: 10,
    margin: 5,
    gap: 5,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default Diet;
