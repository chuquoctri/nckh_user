import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // Import thêm

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation(); // Thêm dòng này để lấy hàm điều hướng

  const handleLogin = () => {
    // Sau này chỗ này kiểm tra tài khoản mật khẩu
    // Tạm thời cứ đúng format là cho qua
    if (username && password) {
      navigation.navigate("WelcomeQuizScreen"); // Điều hướng sang trang quiz
    } else {
      alert("Vui lòng nhập đầy đủ thông tin");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Tên đăng nhập hoặc email"
          placeholderTextColor="#aaa"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          placeholderTextColor="#aaa"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeIcon}
        >
          <FontAwesome
            name={showPassword ? "eye" : "eye-slash"}
            size={24}
            color="#00bfff"
          />
        </TouchableOpacity>
      </View>

      {/* Nút Đăng Nhập - Thêm onPress gọi handleLogin */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>ĐĂNG NHẬP</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>QUÊN MẬT KHẨU</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.phoneLoginButton}>
        <FontAwesome5 name="phone" size={20} color="#00bfff" />
        <Text style={styles.phoneLoginText}>ĐĂNG NHẬP ĐIỆN THOẠI</Text>
      </TouchableOpacity>

      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="facebook" size={20} color="#fff" />
          <Text style={styles.socialText}>FACEBOOK</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="google" size={20} color="#fff" />
          <Text style={styles.socialText}>GOOGLE</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.policyText}>
        Khi đăng ký trên Duolingo, bạn đã đồng ý với{" "}
        <Text style={styles.linkText}>Các chính sách</Text> và{" "}
        <Text style={styles.linkText}>Chính sách bảo mật</Text> của chúng tôi.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#00bfff",
    marginTop: "50%",
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "#333",
    borderRadius: 8,
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    padding: 12,
    color: "#fff",
  },
  eyeIcon: {
    padding: 12,
  },
  loginButton: {
    backgroundColor: "#444",
    width: "100%",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  loginButtonText: {
    color: "#00bfff",
    fontWeight: "bold",
  },
  forgotPassword: {
    color: "#00bfff",
    marginTop: 15,
    fontWeight: "bold",
  },
  phoneLoginButton: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#00bfff",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: "50%",
  },
  phoneLoginText: {
    color: "#00bfff",
    fontWeight: "bold",
    textAlign: "center",
    width: "80%",
  },
  socialButtons: {
    flexDirection: "row",
    marginTop: 15,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginHorizontal: 5,
    width: "43%",
  },
  socialText: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 8,
    textAlign: "center",
  },
  policyText: {
    color: "#aaa",
    fontSize: 12,
    textAlign: "center",
    marginTop: 20,
  },
  linkText: {
    color: "#00bfff",
    fontWeight: "bold",
  },
});

export default LoginScreen;
