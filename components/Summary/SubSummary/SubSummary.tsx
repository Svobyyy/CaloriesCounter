import { StyleSheet, View, Text } from "react-native";
import * as Progress from "react-native-progress";

type Props = {
    nameFirst: string,
    countFirst: number,
    nameSecond: string,
    countSecond: number
}

const SubSummary = ({nameFirst, countFirst, nameSecond, countSecond} : Props) => {
  return (
    <View style={styles.wrap}>
      <View style={styles.caloriesBackground}>
        <Progress.Circle
          animated={false}
          size={80}
          thickness={7}
          showsText={true}
          progress={0.2}
          color={"red"}
          unfilledColor={"rgba(5, 102, 108, 0.2)"}
          borderWidth={0}
          borderColor={"#05666C"}
          textStyle={{ color: "#05666C", fontWeight: "500" }}
        />

        <View>
          <Text style={styles.mainText}>{nameFirst}</Text>
          <Text style={styles.secondText}>/{countFirst}</Text>
        </View>
      </View>
      <View style={styles.caloriesBackground}>
        <Progress.Circle
          animated={false}
          size={80}
          thickness={7}
          showsText={true}
          progress={0.2}
          color={"red"}
          unfilledColor={"rgba(5, 102, 108, 0.2)"}
          borderWidth={0}
          borderColor={"#05666C"}
          textStyle={{ color: "#05666C", fontWeight: "500" }}
        />

        <View>
          <Text style={styles.mainText}>{nameSecond}</Text>
          <Text style={styles.secondText}>/{countSecond}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
    marginHorizontal: 20,
    flexDirection: "row",
  },
  caloriesBackground: {
    backgroundColor: "rgba(5, 102, 108, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
    padding: 10,
    borderRadius: 20,
    gap: 8
  },
  mainText: {
    color: "#05666C",
    fontSize: 20,
  },
  secondText: {
    fontSize: 16,
    color: "gray",
  },
});

export default SubSummary;
