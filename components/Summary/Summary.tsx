import { StyleSheet, View, Text, ScrollView } from "react-native";
import * as Progress from "react-native-progress";
import SubSummary from "./SubSummary/SubSummary";
import { useSelector } from "react-redux";

const Summary = () => {
  const {
    nutrition: { calories, protein, fiber, fat, carbohydrates },
  } = useSelector((state: any) => state.products);

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
            progress={calories / (3000 / 100) / 100}
            color={calories / (3000 / 100) / 100 < 0.75 ? "orange" : "green"}
            unfilledColor={"rgba(5, 102, 108, 0.2)"}
            borderWidth={0}
            borderColor={"#05666C"}
            textStyle={{ color: "#05666C", fontWeight: "500" }}
          />

          <Text style={styles.mainText}>{calories} kcal</Text>
          <Text style={styles.secondText}>goal 3000</Text>
        </View>
      </View>
      <SubSummary
        nameFirst={"Protein"}
        countFirst={185}
        nameSecond={"Carbs"}
        countSecond={362}
        valueFirst={protein}
        valueSecond={carbohydrates}
      />
      <SubSummary
        nameFirst={"Fats"}
        countFirst={83.7}
        nameSecond={"Fiber"}
        countSecond={27.5}
        valueFirst={fat}
        valueSecond={fiber}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  caloriesBackground: {
    backgroundColor: "rgba(5, 102, 108, 0.12)",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    padding: 20,
    borderRadius: 10,
  },
  wrap: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 20,
  },
  headerText: {
    color: "#05666C",
    fontWeight: "500",
    fontSize: 24,
    marginBottom: 20,
  },
  mainText: {
    marginTop: 10,
    color: "#05666C",
    fontSize: 22,
  },
  secondText: {
    fontSize: 18,
    color: "#4d4d4d",
  },
});

export default Summary;
