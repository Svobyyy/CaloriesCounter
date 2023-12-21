import { Text, View, StyleSheet, Modal, Pressable } from "react-native";
import DateTimePicker from "react-native-ui-datepicker";
import { useState } from "react";
import { useSelector } from "react-redux";

const CalendarScreen = () => {
    const {date}  = useSelector((state: any) => state.date);
  const [value, setValue] = useState(date);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.test}>
        <Modal 
        visible={modalVisible}
        animationType="fade"
        >
          <DateTimePicker
            value={value}
            onValueChange={(date: any) => {
              setValue(date);
              console.log(value);
            }}
            mode="date"
            selectedItemColor={"#05666C"}
            minimumDate={new Date("2023-01-01")}
            maximumDate={Date.now()}
            headerButtonColor={"#05666C"}
            headerTextStyle={{ color: "#05666C" }}
            firstDayOfWeek={1}
          />
          <Pressable onPress={() => setModalVisible((state) => !state)}>
            <Text>Show Modal</Text>
          </Pressable>
        </Modal>
      </View>

      <Pressable onPress={() => setModalVisible((state) => !state)}>
        <Text>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  test: {},
});

export default CalendarScreen;
