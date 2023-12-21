import { Text, StyleSheet, Modal, Pressable } from "react-native";
import DateTimePicker from "react-native-ui-datepicker";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeDate } from "../../slices/dateSlice";
import dayjs from "dayjs";

const CalendarModal = ({ visibility, setVisibility }: any) => {

  const dispatch = useDispatch()
  const { date } = useSelector((state: any) => state.date);



  return (
    <Modal
      visible={visibility}
      animationType="fade"
      onRequestClose={() => setVisibility()}
    >
      <DateTimePicker
        value={date}
        onValueChange={(date: any) => {
          dispatch(changeDate(dayjs(date))),
          setVisibility()
        }}
        mode="date"
        selectedItemColor={"#05666C"}
        minimumDate={new Date("2023-01-01")}
        maximumDate={Date.now()}
        headerButtonColor={"#05666C"}
        headerTextStyle={{ color: "#05666C" }}
        firstDayOfWeek={1}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  test: {},
});

export default CalendarModal;
