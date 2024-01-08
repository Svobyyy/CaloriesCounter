import { BarCodeScanner } from "expo-barcode-scanner";
import { useState } from "react";
import {StyleSheet, Vibration } from "react-native";
import FindByBarcode from "./FindByBarcode";
import { useNavigation } from '@react-navigation/native';



const Barcode = () => {
  const [scanned, setScanned] = useState<boolean>(false);
  const navigation = useNavigation()


  const handleBarCodeScanned = async ({ type, data }: any) => {
    setScanned(true);
    FindByBarcode(parseInt(data), navigation)
    Vibration.vibrate()
  };

  return (
    <>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
    </>
  );
};

export default Barcode
