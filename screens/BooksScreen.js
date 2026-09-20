import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import styles from "../styles/styles";

export default function BooksScreen({ navigation }) {
  const books = [
    {
      id: "1",
      title: "The Lean Startup",
      author: "Eric Ries",
      edition: "1. edition",
      condition: "God stand",
      buyPrice: "150 kr.",
      rentPrice: "70 kr./semester",
    },
    {
      id: "2",
      title: "Macroeconomics",
      author: "Olivier Blanchard",
      edition: "8. edition",
      condition: "God stand",
      buyPrice: "300 kr.",
      rentPrice: "120 kr./semester",
    },
    {
      id: "3",
      title: "Financial Accounting",
      author: "Ukendt forfatter",
      edition: "Seneste edition",
      condition: "God stand",
      buyPrice: "250 kr.",
      rentPrice: "100 kr./semester",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Bøger til HA(it)</Text>

      <Text style={styles.resultText}>3 bøger fundet</Text>

      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.bookCard}>
            <Text style={styles.bookTitle}>{item.title}</Text>

            <Text style={styles.bookInfo}>{item.author}</Text>
            <Text style={styles.bookInfo}>Edition: {item.edition}</Text>
            <Text style={styles.bookInfo}>Stand: {item.condition}</Text>
            <Text style={styles.bookInfo}>CBS · Frederiksberg</Text>

            <Text style={styles.priceText}>
              Køb: {item.buyPrice}
            </Text>

            <Text style={styles.priceText}>
              Lej: {item.rentPrice}
            </Text>

            <TouchableOpacity
              style={styles.smallButton}
              onPress={() =>
                navigation.navigate("BookDetails", {
                  book: item,
                })
              }
            >
              <Text style={styles.buttonText}>Se bog</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}