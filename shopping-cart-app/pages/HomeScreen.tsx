import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { useCart } from "../context/CartContext";
import styles from "../styles/HomeStyle";

const products = [
  {
    id: 1,
    name: "Razer Cobra Pro",
    price: 7600,
    image: require("../pictures/razer_cobra.jpg"),
  },
  {
    id: 2,
    name: "Razer Basilisk V3 PRO 35K",
    price: 5195,
    image: require("../pictures/razer_basilisk.jpg"),
  },
  {
    id: 3,
    name: "Razer Blackwidow V4 PRO",
    price: 12830,
    image: require("../pictures/razer_blackwidow.jpg"),
  },
  {
    id: 4,
    name: "Razer Hunstman V3 PRO",
    price: 10450,
    image: require("../pictures/razer_huntsman.jpg"),
  },
  {
    id: 5,
    name: "Razer Barracuda PRO",
    price: 4850,
    image: require("../pictures/razer_barracuda.jpg"),
  },
  {
    id: 6,
    name: "Razer Kraken V4 PRO",
    price: 4995,
    image: require("../pictures/razer_kraken.jpg"),
  },
  {
    id: 7,
    name: "Razer Leviathan V2 PRO",
    price: 11590,
    image: require("../pictures/razer_leviathan.jpg"),
  },
  {
    id: 8,
    name: "Razer Nommo V2 PRO",
    price: 16620,
    image: require("../pictures/razer_nommo.jpg"),
  },
];

const HomeScreen: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.productImage} />

            <View style={styles.textContainer}>
              <Text style={styles.productText}>{item.name}</Text>
              <Text style={styles.productPrice}>
                PHP {item.price.toLocaleString()}
              </Text>

              <TouchableOpacity
                style={styles.button}
                onPress={() => addToCart({ ...item, quantity: 1 })}
                activeOpacity={0.7}
              >
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
