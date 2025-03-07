import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./pages/HomeScreen";
import CartScreen from "./pages/CartScreen";
import CheckoutScreen from "./pages/CheckoutScreen";
import { CartProvider } from "./context/CartContext";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let icon;

              if (route.name === "Home") {
                icon = require("./pictures/home.png"); // Replace with your logo path
              } else if (route.name === "Cart") {
                icon = require("./pictures/cart.png"); // Replace with your logo path
              } else if (route.name === "Checkout") {
                icon = require("./pictures/checkout.png"); // Replace with your logo path
              }

              return (
                <Image
                  source={icon}
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? "#00a84f" : "gray", // Change color when active or inactive
                  }}
                />
              );
            },
            tabBarActiveTintColor: "#00a84f",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Cart" component={CartScreen} />
          <Tab.Screen name="Checkout" component={CheckoutScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
