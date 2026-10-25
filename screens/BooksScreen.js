import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { ref, onValue } from "firebase/database";
import { db } from "../database/firebase";

import styles from "../styles/styles";

export default function BooksScreen({ navigation }) {
  const [filter, setFilter] = useState("Alle");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Henter bøger fra Firebase
  useEffect(() => {
    const booksRef = ref(db, "Books");

    const unsubscribe = onValue(booksRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const bookList = Object.entries(data).map(([id, book]) => ({
          id,
          ...book,
        }));

        setBooks(bookList);
      } else {
        setBooks([]);
      }

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Filtrerer bøger efter Alle, Køb eller Leje
  const filteredBooks = books.filter((book) => {
    if (filter === "Alle") return true;

    if (filter === "Køb") {
      return book.availableFor === "buy" || book.availableFor === "both";
    }

    if (filter === "Leje") {
      return book.availableFor === "rent" || book.availableFor === "both";
    }

    return true;
  });

  // Viser loading mens Firebase henter data
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Bøger til HA(it)</Text>

      <Text style={styles.resultText}>
        {filteredBooks.length} bøger fundet
      </Text>

      {/* Filterknapper */}
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filter === "Alle" && styles.activeFilterButton,
          ]}
          onPress={() => setFilter("Alle")}
        >
          <Text
            style={[
              styles.filterText,
              filter === "Alle" && styles.activeFilterText,
            ]}
          >
            Alle
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterButton,
            filter === "Køb" && styles.activeFilterButton,
          ]}
          onPress={() => setFilter("Køb")}
        >
          <Text
            style={[
              styles.filterText,
              filter === "Køb" && styles.activeFilterText,
            ]}
          >
            Køb
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterButton,
            filter === "Leje" && styles.activeFilterButton,
          ]}
          onPress={() => setFilter("Leje")}
        >
          <Text
            style={[
              styles.filterText,
              filter === "Leje" && styles.activeFilterText,
            ]}
          >
            Leje
          </Text>
        </TouchableOpacity>
      </View>

      {/* Liste med bøger fra Firebase */}
      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text>Der er endnu ingen bøger oprettet.</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.bookCard}>
            <Text style={styles.bookTitle}>{item.title}</Text>

            <Text style={styles.bookInfo}>{item.author}</Text>

            <Text style={styles.bookInfo}>
              Edition: {item.edition}
            </Text>

            <Text style={styles.bookInfo}>
              Stand: {item.condition}
            </Text>

            <Text style={styles.bookInfo}>
              CBS · Frederiksberg
            </Text>

            {item.buyPrice && (
              <Text style={styles.priceText}>
                Køb: {item.buyPrice}
              </Text>
            )}

            {item.rentPrice && (
              <Text style={styles.priceText}>
                Lej: {item.rentPrice}
              </Text>
            )}

            <TouchableOpacity
              style={styles.smallButton}
              onPress={() =>
                navigation.navigate("BookDetails", { book: item })
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