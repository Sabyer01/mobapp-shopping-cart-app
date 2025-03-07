import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
    flexDirection: "row",  // ✅ Image on left, text+button stacked on right
    alignItems: "center",
    height: 140,  // ✅ Increase height for better spacing
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
    alignItems: "flex-end", // ✅ Align text & button to the right
  },

  productText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,  // ✅ Adds space between name & price
  },

  productPrice: {
    fontSize: 14,
    color: "gray",
    marginTop: -10, // ✅ Adds space between price & button
  },

  button: {
    backgroundColor: "#00a84f",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",  // ✅ Ensures button stays to the right
    marginTop: 40,
  },

  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default styles;
