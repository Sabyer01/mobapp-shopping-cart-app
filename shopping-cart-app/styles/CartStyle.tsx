import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },

  cartItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
    flexDirection: "row", // ✅ Image on left, text & buttons on right
    alignItems: "center",
    height: 160, // ✅ Adjusted height for spacing
  },

  productImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    resizeMode: "contain",
  },

  textContainer: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: "center",
    alignItems: "flex-start", // ✅ Aligns text & buttons to the left
  },

  itemText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },

  itemPrice: {
    fontSize: 14,
    color: "gray",
    marginBottom: 5,
  },

  quantityText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10, // ✅ Adds space between quantity and buttons
  },

  buttonGroup: {
    flexDirection: "row",
    alignItems: "center",
  },

  quantityButton: {
    backgroundColor: "#00a84f",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginRight: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  removeButton: {
    backgroundColor: "red",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },

  removeButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default styles;
