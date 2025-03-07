import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },

  checkoutItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 15,
    flexDirection: "row", // ✅ Image on left, text on right
    alignItems: "center",
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
  },

  itemText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },

  itemPrice: {
    fontSize: 14,
    color: "gray",
  },

  totalItemPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#00a84f",
    marginTop: 5,
  },

  checkoutContainer: {
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },

  totalPrice: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  checkoutButton: {
    backgroundColor: "#00a84f",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  checkoutButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
