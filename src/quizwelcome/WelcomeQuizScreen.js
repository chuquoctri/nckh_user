import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const WelcomeQuizScreen = () => {
  const navigation = useNavigation();

  const handleContinue = () => {
    // Sau này nối tới màn hình câu hỏi đầu tiên
    navigation.navigate("LevelQuizScreen");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <View style={styles.speechBubble}>
          <Text style={styles.speechText}>
            Trước khi bắt đầu hãy trả lời 1 câu hỏi nhỏ của chúng tôi nhé!
          </Text>
        </View>

        <Image
          source={require("../../assets/logo.png")} // Thay bằng ảnh con cú
          style={styles.owlImage}
        />

        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinue}
        >
          <Text style={styles.continueText}>TIẾP TỤC</Text>
        </TouchableOpacity>
      </View>
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
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 10,
  },
  backText: {
    color: "#fff",
    fontSize: 24,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  speechBubble: {
    backgroundColor: "#1e1e1e",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#333",
  },
  speechText: {
    color: "#f0f0f0",
    fontSize: 16,
    textAlign: "center",
  },
  owlImage: {
    width: 100,
    height: 100,
    marginBottom: 24,
  },
  continueButton: {
    backgroundColor: "#7AC70C",
    paddingVertical: 14,
    paddingHorizontal: 48,
    borderRadius: 30,
  },
  continueText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default WelcomeQuizScreen;
