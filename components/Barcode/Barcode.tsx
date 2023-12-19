import { BarCodeScanner } from "expo-barcode-scanner";
import { useState } from "react";
import { Alert, StyleSheet, Button } from "react-native";

const Barcode = () => {
  const [scanned, setScanned] = useState(false);

  const getBarCodeScannerPermissions = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    console.log(status);
  };

  const handleBarCodeScanned = ({ type, data }: any) => {
    setScanned(true);
    Alert.alert(
      `Bar code with type ${type} and data ${data} has been scanned!`
    );
    console.log(data)
  };

  return (
    <>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </>
  );
};

export default Barcode
