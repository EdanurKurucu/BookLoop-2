import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/styles";

export default function BookDetailsScreen({ route }) {
  const { book } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>{book.title}</Text>

      <Text style={styles.bookInfo}>{book.author}</Text>

      <View style={styles.detailBox}>
        <Text style={styles.detailLabel}>Stand</Text>
        <Text style={styles.detailText}>{book.condition}</Text>

        <Text style={styles.detailLabel}>Edition</Text>
        <Text style={styles.detailText}>{book.edition}</Text>

        <Text style={styles.detailLabel}>Sælger</Text>
        <Text style={styles.detailText}>CBS-studerende</Text>

        <Text style={styles.detailLabel}>Afhentning</Text>
        <Text style={styles.detailText}>Frederiksberg</Text>
      </View>

      {book.buyPrice && (
        <>
          <Text style={styles.detailPrice}>
            Køb: {book.buyPrice}
          </Text>

          <TouchableOpacity style={styles.mainButton}>
            <Text style={styles.buttonText}>Køb bog</Text>
          </TouchableOpacity>
        </>
      )}

      {book.rentPrice && (
        <>
          <Text style={styles.detailPrice}>
            Lej: {book.rentPrice}
          </Text>

          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Lej bog</Text>
          </TouchableOpacity>

          <Text style={styles.rentInfo}>
            Ved leje afleveres bogen tilbage efter semesteret.
          </Text>
        </>
      )}
    </View>
  );
}


