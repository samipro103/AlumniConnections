import { addDoc, collection } from "firebase/firestore";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { db } from "./src/config/firebase";

export default function App() {
  useEffect(() => {
    const probarFirebase = async () => {
      try {
        await addDoc(collection(db, "prueba"), {
          mensaje: "Hola desde AlumniConnections 🔥",
          fecha: new Date(),
        });
        console.log("🔥 Documento agregado correctamente");
      } catch (error) {
        console.log("❌ Error:", error);
      }
    };

    probarFirebase();
  }, []);

  return (
    <View style={{ marginTop: 50 }}>
      <Text>Probando Firebase...</Text>
    </View>
  );
}
