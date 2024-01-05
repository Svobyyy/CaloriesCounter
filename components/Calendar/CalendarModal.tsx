import { Modal } from "react-native";
import DateTimePicker from "react-native-ui-datepicker";
import { useSelector, useDispatch } from "react-redux";
import { changeDate } from "../../slices/dateSlice";
import dayjs from "dayjs";
import { RootState } from "../../store/store";

type props = {
  modalVisible: boolean,
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const CalendarModal = ({modalVisible , setModalVisible }: props) => {
  

  const dispatch = useDispatch()
  const { date } = useSelector((state: RootState) => state.date);


  return (
    <Modal
      visible={modalVisible}
      animationType="fade"
      onRequestClose={() => setModalVisible((visible) => !visible)}
    >
      <DateTimePicker
        value={date}
        onValueChange={(date: any) => {
          dispatch(changeDate(dayjs(date))),
          setModalVisible((visible) => !visible)
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
