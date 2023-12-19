import { Text, View, StyleSheet } from "react-native";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";
import { useState } from "react";

const CalendarScreen = () => {
  const [value, setValue] = useState(dayjs());

  return (
    <View style={styles.container}>
      <DateTimePicker
        value={value}
        onValueChange={(date: any) => {
          setValue(date);
          console.log(value)
        }}
        mode="date"
        selectedItemColor={"#05666C"}
        minimumDate={new Date("2023-01-01")}
        maximumDate={Date.now()}
        headerButtonColor={"#05666C"}
        headerTextStyle={{color: "#05666C"}}
        firstDayOfWeek={1}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
});

export default CalendarScreen;
