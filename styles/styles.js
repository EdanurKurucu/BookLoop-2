import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 25,
    paddingTop: 70,
  },

  logo: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 15,
  },

  inputBox: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 8,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  mainButton: {
    backgroundColor: "#222222",
    padding: 16,
    borderRadius: 8,
    marginTop: 35,
    alignItems: "center",
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },

  secondaryText: {
    textAlign: "center",
    marginTop: 25,
    fontSize: 14,
  },

  screenTitle: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 5,
  },

  resultText: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 15,
  },

  filterContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },

  filterButton: {
    borderWidth: 1,
    borderColor: "#222222",
    paddingVertical: 9,
    paddingHorizontal: 18,
    borderRadius: 20,
    marginRight: 8,
  },

  activeFilterButton: {
    backgroundColor: "#222222",
  },

  filterText: {
    color: "#222222",
    fontWeight: "600",
  },

  activeFilterText: {
    color: "#ffffff",
  },

  bookCard: {
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#ffffff",
  },

  bookTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
  },

  bookInfo: {
    fontSize: 14,
    color: "#555555",
    marginBottom: 3,
  },

  priceText: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 8,
  },

  smallButton: {
    backgroundColor: "#222222",
    padding: 12,
    borderRadius: 8,
    marginTop: 14,
    alignItems: "center",
  },

  detailBox: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    padding: 18,
    marginTop: 25,
    marginBottom: 20,
  },

  detailLabel: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
  },

  detailText: {
    fontSize: 15,
    marginTop: 3,
  },

  detailPrice: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },

  secondaryButton: {
    borderWidth: 1,
    borderColor: "#222222",
    padding: 16,
    borderRadius: 8,
    marginTop: 12,
    alignItems: "center",
  },

  secondaryButtonText: {
    color: "#222222",
    fontSize: 16,
    fontWeight: "bold",
  },

  rentInfo: {
    textAlign: "center",
    fontSize: 13,
    color: "#666666",
    marginTop: 15,
  },
  formContainer: {
  flexGrow: 1,
  backgroundColor: "#ffffff",
  padding: 25,
  paddingTop: 40,
},

textInput: {
  borderWidth: 1,
  borderColor: "#cccccc",
  borderRadius: 8,
  padding: 15,
  fontSize: 16,
  backgroundColor: "#ffffff",
},

typeContainer: {
  flexDirection: "row",
  marginTop: 5,
  marginBottom: 10,
},

typeButton: {
  borderWidth: 1,
  borderColor: "#222222",
  paddingVertical: 10,
  paddingHorizontal: 25,
  borderRadius: 20,
  marginRight: 10,
},

activeTypeButton: {
  backgroundColor: "#222222",
},

typeText: {
  color: "#222222",
  fontWeight: "600",
},

activeTypeText: {
  color: "#ffffff",
},
});

export default styles;