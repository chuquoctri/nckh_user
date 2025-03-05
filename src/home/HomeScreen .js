import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#12171E", paddingTop: 40 }}>
      {/* Thanh trạng thái */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 15,
        }}
      >
        <Image
          source={require("../../assets/flag.png")}
          style={{ width: 30, height: 20 }}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome5 name="fire" size={20} color="orange" />
          <Text style={{ color: "white", marginHorizontal: 10 }}>1</Text>
          <FontAwesome5 name="gem" size={20} color="deepskyblue" />
          <Text style={{ color: "white", marginHorizontal: 10 }}>500</Text>
          <FontAwesome5 name="heart" size={20} color="red" />
          <Text style={{ color: "white", marginHorizontal: 10 }}>5</Text>
        </View>
      </View>

      {/* Tiêu đề bài học */}
      <View
        style={{
          backgroundColor: "#69C629",
          padding: 15,
          margin: 15,
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 14 }}>
            PHẦN 1, CỬA 1
          </Text>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
            Gọi đồ uống
          </Text>
        </View>
        <FontAwesome5 name="ellipsis-h" size={20} color="white" />
      </View>

      {/* Menu 4 kỹ năng */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          style={styles.skillButton}
          onPress={() => navigation.navigate("ListeningScreen")}
        >
          <FontAwesome5 name="headphones" size={30} color="white" />
          <Text style={styles.skillText}>Nghe</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.skillButton}
          onPress={() => navigation.navigate("SpeakingScreen")}
        >
          <FontAwesome5 name="microphone" size={30} color="white" />
          <Text style={styles.skillText}>Nói</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.skillButton}
          onPress={() => navigation.navigate("ReadingScreen")}
        >
          <FontAwesome5 name="book" size={30} color="white" />
          <Text style={styles.skillText}>Đọc</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.skillButton}
          onPress={() => navigation.navigate("WritingScreen")}
        >
          <FontAwesome5 name="pen" size={30} color="white" />
          <Text style={styles.skillText}>Viết</Text>
        </TouchableOpacity>
      </View>

      {/* Thanh điều hướng */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "#1C1F26",
          paddingVertical: 10,
        }}
      >
        <FontAwesome5 name="home" size={24} color="gold" />
        <FontAwesome5 name="trophy" size={24} color="orange" />
        <FontAwesome5 name="user-graduate" size={24} color="purple" />
        <FontAwesome5 name="chess-queen" size={24} color="yellow" />
        <FontAwesome5 name="bell" size={24} color="gold" />
      </View>
    </View>
  );
};

const styles = {
  skillButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C1F26",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    width: "80%",
    justifyContent: "center",
  },
  skillText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 16,
  },
};

export default HomeScreen;
