    import React from "react";
    import {
      View,
      Text,
      Image,
      TouchableOpacity,
      StyleSheet,
    } from "react-native";
    import { FontAwesome5 } from "@expo/vector-icons";

    export default function ReadingScreen({ navigation }) {
      return (
        <View style={styles.container}>
          <Header title="Reading Skill" icon="book-open" />
          <SkillContent
            description="Read and understand everyday English texts."
            image={require("../../assets/reading.png")}
            onPress={() => alert("Start Reading Practice!")}
          />
        </View>
      );
    }

    const Header = ({ title, icon }) => (
      <View style={styles.header}>
        <FontAwesome5 name={icon} size={24} color="#69C629" />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    );

    const SkillContent = ({ description, image, onPress }) => (
      <View style={styles.content}>
        <Image source={image} style={styles.image} />
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Start Now</Text>
        </TouchableOpacity>
      </View>
    );

   const styles = StyleSheet.create({
     container: { flex: 1, backgroundColor: "#12171E", padding: 20 },
     header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
     headerText: {
       color: "white",
       fontSize: 20,
       fontWeight: "bold",
       marginLeft: 10,
     },
     content: { alignItems: "center", justifyContent: "center", flex: 1 },
     image: { width: 200, height: 200, marginBottom: 20 },
     description: { color: "white", textAlign: "center", marginBottom: 20 },
     button: {
       backgroundColor: "#69C629",
       paddingVertical: 10,
       paddingHorizontal: 30,
       borderRadius: 20,
     },
     buttonText: { color: "white", fontWeight: "bold" },
   });
