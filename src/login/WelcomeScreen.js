import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import logo from "../../assets/logo.png";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.subtitle}>
        Cách học ngoại ngữ vui nhộn, hiệu quả và miễn phí!
      </Text>

      {/* Điều hướng sang LoginScreen */}
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.startButtonText}>BẮT ĐẦU NGAY</Text>
      </TouchableOpacity>

      {/* Điều hướng sang RegisterScreen */}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.loginButtonText}>ĐĂNG KÝ TÀI KHOẢN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    backgroundColor: "#1a1a1a",
    width: "50%",
    height: "15%",
    marginTop: "40%",
  },
  subtitle: {
    color: "#aaa",
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 40,
    marginTop: 20,
  },
  startButton: {
    backgroundColor: "#59CE72",
    width: "70%",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 15,
    marginTop: "60%",
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  loginButton: {
    width: "70%",
    borderColor: "#59CE72",
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#59CE72",
    textAlign: "center",
  },
});

export default WelcomeScreen;
