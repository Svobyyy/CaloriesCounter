import { StyleSheet, View, Text, ScrollView } from "react-native";
import * as Progress from "react-native-progress";
import SubSummary from "./SubSummary/SubSummary";

const Summary = () => {
  return (
    <ScrollView>
      <View style={styles.wrap}>
        <View style={styles.caloriesBackground}>
          <Text style={styles.headerText}>Calories</Text>
          <Progress.Circle
            animated={false}
            size={150}
            thickness={10}
            showsText={true}
            progress={0.2}
            color={"red"}
            unfilledColor={"rgba(5, 102, 108, 0.2)"}
            borderWidth={0}
            borderColor={"#05666C"}
            textStyle={{ color: "#05666C", fontWeight: "500" }}
          />

          <Text style={styles.mainText}>1000 kcal</Text>
          <Text style={styles.secondText}>goal 3000</Text>
        </View>
      </View>
      <SubSummary nameFirst={"Protein"} countFirst={185} nameSecond={"Carbs"} countSecond={362}></SubSummary>
      <SubSummary nameFirst={"Fats"} countFirst={83.7} nameSecond={"Fiber"} countSecond={27.5}></SubSummary>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  caloriesBackground: {
    backgroundColor: "rgba(5, 102, 108, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    padding: 20,
    borderRadius: 20,
  },
  wrap: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  headerText: {
    color: "#05666C",
    fontWeight: "500",
    fontSize: 24,
    marginBottom: 20
  },
  mainText: {
    marginTop: 10,
    color: "#05666C",
    fontSize: 22,
  },
  secondText: {
    fontSize: 18,
    color: "gray",
  },
});

export default Summary;
