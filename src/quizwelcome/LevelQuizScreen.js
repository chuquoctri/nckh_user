import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const levels = [
  "Tôi mới học Tiếng Anh",
  "Tôi biết một vài từ thông dụng",
  "Tôi có thể giao tiếp cơ bản",
  "Tôi có thể nói về nhiều chủ đề",
  "Tôi có thể thảo luận sâu về hầu hết các chủ đề",
];

const LevelQuizScreen = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const navigation = useNavigation();

  const handleNext = () => {
    if (selectedLevel !== null) {
      navigation.navigate("HomeScreen");
    } else {
      alert("Vui lòng chọn trình độ trước!");
    }
  };

  const renderLevelItem = ({ item, index }) => {
    const isSelected = selectedLevel === index;
    return (
      <TouchableOpacity
        style={[
          styles.option,
          isSelected && styles.optionSelected,
          isSelected && { borderColor: "#4bb1f8", borderWidth: 2 }, // Viền xanh khi chọn
        ]}
        onPress={() => setSelectedLevel(index)}
      >
        <View style={styles.optionContent}>
          {/* Cột sóng */}
          <View style={styles.signalBarContainer}>
            {[...Array(index + 1)].map((_, i) => (
              <View
                key={i}
                style={[
                  styles.signalBar,
                  isSelected && styles.signalBarSelected,
                ]}
              />
            ))}
          </View>
          <Text
            style={[styles.optionText, isSelected && styles.optionTextSelected]}
          >
            {item}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header có logo + khung câu hỏi */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.duoIcon}
        />
        <View style={styles.speechBubble}>
          <Text style={styles.question}>
            Trình độ Tiếng Anh của bạn ở mức nào?
          </Text>
        </View>
      </View>

      {/* Danh sách các mức độ */}
      <FlatList
        data={levels}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderLevelItem}
        contentContainerStyle={styles.listContainer}
      />

      {/* Nút tiếp tục */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>TIẾP TỤC</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0e0e10",
    padding: 16,
    justifyContent: "center",
  },
  header: {
    marginTop:"25%",
    alignItems: "center",
    marginBottom: 20,
  },
  duoIcon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  speechBubble: {
    backgroundColor: "#2a2a2a",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    maxWidth: "90%",
  },
  question: {
    color: "#eaeaea", // Màu xám sáng chứ không trắng tinh
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  listContainer: {
    paddingBottom: 20,
  },
  option: {
    backgroundColor: "#1a1a1d",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  optionSelected: {
    backgroundColor: "#1e3a5f",
  },
  optionContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  signalBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  signalBar: {
    width: 6,
    height: 14,
    backgroundColor: "#555",
    marginRight: 2,
    borderRadius: 2,
  },
  signalBarSelected: {
    backgroundColor: "#fff",
  },
  optionText: {
    color: "#eaeaea",
    fontSize: 14,
    flex: 1,
  },
  optionTextSelected: {
    fontWeight: "bold",
  },
  nextButton: {
    backgroundColor: "#a4e639",
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: "center",
    marginTop: 10,
  },
  nextButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default LevelQuizScreen;
