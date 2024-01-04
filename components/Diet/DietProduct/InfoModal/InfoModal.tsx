import { Modal, StyleSheet, View, Pressable, Text } from "react-native";
import { Product } from "../../../../slices/findSlice";
import { Ionicons } from "@expo/vector-icons";

type props = {
  product: Omit<Product, "__v" | "_id"> & { quantity: number };
  setInfo: React.Dispatch<React.SetStateAction<boolean>>;
};

const InfoModal = ({ product: {name, protein,fat, carbohydrates, fiber, quantity}, setInfo }: props) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      onRequestClose={() => setInfo((data) => !data)}
    >
      <View style={styles.wrap}>
        <Pressable
          style={styles.background}
          onPressIn={() => {
            setInfo((data) => !data);
          }}
        ></Pressable>

        <View style={styles.main}>
          <Pressable
            style={styles.back}
            onPressIn={() => {
              setInfo((data) => !data);
            }}
          >
            <Ionicons name="arrow-back-outline" size={28} color="black" />
            <Text style={styles.title}>{name.charAt(0).toUpperCase() + name.slice(1)}</Text>
          </Pressable>

         <View style={styles.infos}>
            <View style={styles.info}>
                <Text style={styles.infoText}>Protein</Text>
                <Text style={styles.infoText}>{Math.round(protein / 100 * quantity)} g</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.infoText}>Carbs: </Text>
                <Text style={styles.infoText}>{Math.round(carbohydrates / 100 * quantity)} g</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.infoText}>Fat</Text>
                <Text style={styles.infoText}>{Math.round(fat / 100 * quantity)} g</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.infoText}>Fiber</Text>
                <Text style={styles.infoText}>{Math.round(fiber / 100 * quantity)} g</Text>
            </View>
         </View>

        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    margin: 30,
    width: "90%",
    height: "90%",
    backgroundColor: "#05666C",
  },
  back: {
    height: 50,
    alignItems: "center",
    gap: 10,
    flexDirection: "row",
    paddingHorizontal: 10,
    backgroundColor: "#f2f2f2",
  },
  title: {
    fontSize: 24,
    color: "#05666C",
    fontWeight: "500"
  },
  background: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    position: "absolute",
    top: 0,
    left: 0,
  },
  infos: {
    marginTop: 10,
    gap: 10,
    paddingHorizontal: 10
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  infoText: {
    color: "white",
    fontSize: 16
  }
});

export default InfoModal;
