import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { useCart } from "../context/CartContext";
import styles from "../styles/CartStyle";

const CartScreen: React.FC = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={item.image} style={styles.productImage} />

            <View style={styles.textContainer}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemPrice}>
                PHP {item.price.toLocaleString()} x {item.quantity} = 
                <Text style={{ fontWeight: "bold" }}> PHP {(item.price * item.quantity).toLocaleString()} </Text>
              </Text>

              <View style={styles.buttonGroup}>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => increaseQuantity(item.id)}
                >
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => decreaseQuantity(item.id)}
                  disabled={item.quantity <= 1}
                >
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => removeFromCart(item.id)}
                >
                  <Text style={styles.removeButtonText}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default CartScreen;
