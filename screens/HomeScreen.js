import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/styles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.logo}>BookLoop</Text>

      <Text style={styles.subtitle}>
        Køb, sælg eller lej studiebøger fra andre studerende
      </Text>

      <Text style={styles.label}>Universitet</Text>
      <View style={styles.inputBox}>
        <Text>CBS</Text>
        <Text>▼</Text>
      </View>

      <Text style={styles.label}>Studie</Text>
      <View style={styles.inputBox}>
        <Text>HA(it)</Text>
        <Text>▼</Text>
      </View>

      <Text style={styles.label}>Fag</Text>
      <View style={styles.inputBox}>
        <Text>Vælg fag</Text>
        <Text>▼</Text>
      </View>

      <TouchableOpacity
        style={styles.mainButton}
        onPress={() => navigation.navigate("Books")}
      >
        <Text style={styles.buttonText}>Find bøger</Text>
      </TouchableOpacity>

      <Text style={styles.secondaryText}>
        Sælg eller udlej en bog
      </Text>

    </View>
  );
}