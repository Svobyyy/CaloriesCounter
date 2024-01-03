import { BarCodeScanner } from "expo-barcode-scanner";
import { useState } from "react";
import { Alert, StyleSheet, Button, Vibration } from "react-native";
import FindByBarcode from "./FindByBarcode";
import { useNavigation } from '@react-navigation/native';



const Barcode = () => {
  const [scanned, setScanned] = useState<boolean>(false);
  const navigation = useNavigation()

  const getBarCodeScannerPermissions = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
  };

  const handleBarCodeScanned = async ({ type, data }: any) => {
    setScanned(true);
    // Alert.alert(
    //   `Bar code with type ${type} and data ${data} has been scanned!`
    // );
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
