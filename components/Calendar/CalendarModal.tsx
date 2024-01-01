import { Modal } from "react-native";
import DateTimePicker from "react-native-ui-datepicker";
import { useSelector, useDispatch } from "react-redux";
import { changeDate } from "../../slices/dateSlice";
import dayjs from "dayjs";
import { RootState } from "../../store/store";

type props = {
  visibility: boolean,
  setVisibility: Function
}

const CalendarModal = ({ visibility, setVisibility }: props) => {
  

  const dispatch = useDispatch()
  const { date } = useSelector((state: RootState) => state.date);



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

export default CalendarModal;
