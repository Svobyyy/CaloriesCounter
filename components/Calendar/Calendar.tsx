import { useSelector } from "react-redux";

import { View, Text } from "react-native";

const Calendar = () => {
  const {date}  = useSelector((state: any) => state.date);


  if(date)
  {
    console.log(date, typeof date)
    console.log(date.date())
    console.log(date.day())
    console.log(date.month() + 1)
    // udělat pomocí tohodle kalendář jako mají kalorické
  }


  return (
    <>
      <View>
        <Text></Text>
      </View>
    </>
  );
};

export default Calendar