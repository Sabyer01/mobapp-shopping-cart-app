import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image, Alert } from "react-native";
import { useCart } from "../context/CartContext";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import styles from "../styles/CheckoutStyle";

type RootStackParamList = {
  Home: undefined;
};

const CheckoutScreen: React.FC = () => {
  const { cart, clearCart } = useCart();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleCheckout = () => {
    Alert.alert("Checkout Successful", "Your order has been placed!", [
      {
        text: "OK",
        onPress: () => {
          clearCart();
          navigation.navigate("Home");
        },
      },
    ]);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity!, 0);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.checkoutItem}>
            {/* Product Image */}
            <Image source={item.image} style={styles.productImage} />

            {/* Product Details */}
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemPrice}>
                PHP {item.price.toLocaleString()} x {item.quantity}
              </Text>
              <Text style={styles.totalItemPrice}>
                Total: PHP {(item.price * item.quantity!).toLocaleString()}
              </Text>
            </View>
          </View>
        )}
      />

      {/* Checkout Total & Button */}
      <View style={styles.checkoutContainer}>
        <Text style={styles.totalPrice}>Total: PHP {totalPrice.toLocaleString()}</Text>

        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckoutScreen;
