import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import styles from "../styles/styles";
import {ref,push} from "firebase/database";
import {db} from "../database/firebase";

export default function AddBookScreen({navigation}) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [edition, setEdition] = useState("");
  const [condition, setCondition] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("Salg");
  
  const handleSave = async () => {
  if (!title || !author || !edition || !condition || !price) {
    Alert.alert("Manglende oplysninger", "Udfyld alle felter.");
    return;
  }

  const newBook = {
    title: title,
    author: author,
    edition: edition,
    condition: condition,

    buyPrice: type === "Salg" ? `${price} kr.` : null,
    rentPrice: type === "Leje" ? `${price} kr./semester` : null,

    availableFor: type === "Salg" ? "buy" : "rent",
    createdAt: Date.now(),
  };

  try {
    await push(ref(db, "Books"), newBook);

    Alert.alert("Annonce oprettet", "Din bog er blevet gemt.");

    setTitle("");
    setAuthor("");
    setEdition("");
    setCondition("");
    setPrice("");
    setType("Salg");

    navigation.navigate("Books");
  } catch (error) {
    Alert.alert("Fejl", "Annoncen kunne ikke gemmes.");
    console.log(error);
  }
};

  return (
    <ScrollView contentContainerStyle={styles.formContainer}>
      <Text style={styles.screenTitle}>Opret annonce</Text>

      <Text style={styles.label}>Bogtitel</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Fx Macroeconomics"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Forfatter</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Fx Olivier Blanchard"
        value={author}
        onChangeText={setAuthor}
      />

      <Text style={styles.label}>Edition</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Fx 8. edition"
        value={edition}
        onChangeText={setEdition}
      />

      <Text style={styles.label}>Stand</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Fx God stand"
        value={condition}
        onChangeText={setCondition}
      />

      <Text style={styles.label}>Hvordan vil du tilbyde bogen?</Text>

      <View style={styles.typeContainer}>
        <TouchableOpacity
          style={[
            styles.typeButton,
            type === "Salg" && styles.activeTypeButton,
          ]}
          onPress={() => setType("Salg")}
        >
          <Text
            style={[
              styles.typeText,
              type === "Salg" && styles.activeTypeText,
            ]}
          >
            Sælg
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.typeButton,
            type === "Leje" && styles.activeTypeButton,
          ]}
          onPress={() => setType("Leje")}
        >
          <Text
            style={[
              styles.typeText,
              type === "Leje" && styles.activeTypeText,
            ]}
          >
            Udlej
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>
        {type === "Salg" ? "Salgspris" : "Pris pr. semester"}
      </Text>

      <TextInput
        style={styles.textInput}
        placeholder="Fx 150"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <TouchableOpacity 
      style={styles.mainButton} 
      onPress={handleSave}>
        <Text style={styles.buttonText}>Gem annonce</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}