import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tạo tài khoản mới</Text>

      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Họ và tên"
          placeholderTextColor="#bbb"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Số điện thoại"
          placeholderTextColor="#bbb"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          placeholderTextColor="#bbb"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Xác nhận mật khẩu"
          placeholderTextColor="#bbb"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>ĐĂNG KÝ</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginLinkContainer}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text style={styles.loginLink}>
          Đã có tài khoản?{" "}
          <Text style={styles.loginLinkHighlight}>Đăng nhập ngay</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00bfff",
    marginBottom: 24,
  },
  inputWrapper: {
    width: "100%",
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
    marginBottom: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#333",
  },
  input: {
    height: 48,
    color: "#f0f0f0",
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: "#007aff",
    width: "100%",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 8,
    shadowColor: "#007aff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  registerButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  loginLinkContainer: {
    marginTop: 20,
  },
  loginLink: {
    color: "#bbb",
    fontSize: 14,
  },
  loginLinkHighlight: {
    color: "#00bfff",
    fontWeight: "bold",
  },
});

export default RegisterScreen;
