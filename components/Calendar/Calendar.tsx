import { useSelector } from "react-redux";
import { useState } from "react";

import { Text, StyleSheet, Pressable} from "react-native";
import CalendarModal from "./CalendarModal";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = () => {
  const { date } = useSelector((state: any) => state.date);

  const [modalVisible, setModalVisible] = useState(false);

  const setVisible = () => {
    setModalVisible((visible) => !visible);
  };

  return (
    <>

      <Pressable
        style={styles.calendar}
        onPressIn={() => {
          setVisible();
        }}
      >
        <Text style={styles.calendarText}>{`${
          days[date.day()]
        }, ${date.date()}.${date.month() + 1}`}</Text>
        <CalendarModal
          visibility={modalVisible}
          setVisibility={setVisible}
        ></CalendarModal>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  calendar: {
    backgroundColor: "#05666C",
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  calendarText: {
    fontWeight: "700",
    color: "white",
  },
});

export default Calendar;
