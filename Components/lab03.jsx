import { useState } from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity
} from "react-native";

export function Lab3_1() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      padding: "10%",
      gap: "3%",
      alignItems: "center",
    },
    toolbar: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },
    headerText: {
      textAlign: "center",
      fontSize: "24px",
    },
    TextInput: {
      width: "100%",
      padding: "2.5%",
      fontSize: "16px",
      border: "1px solid #000",
      paddingVertical: "6%",
    },
    btn: {
      width: "100%",
      padding: "2.5%",
      boxShadow:
        "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      borderRadius: "4px",
      textAlign: "center",
    },
  });
  const [listItem, setListItem] = useState([]);

  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <Text style={styles.headerText}>สมุดบันทึก</Text>
        <TextInput
          placeholder="เพิ่มข้อความที่นี่"
          style={styles.TextInput}
          value={text}
          onChangeText={(text) => setText(text)}
        ></TextInput>
        <Pressable
          onPress={() => {
            setListItem([
              ...listItem,
              {
                id: listItem.length + 1,
                text: text,
              },
            ]);
            setText("");
          }}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#1c85d9" : "#2196F3",
            },
            styles.btn,
          ]}
        >
          <Text style={{ color: "#fff" }}>บันทึก</Text>
        </Pressable>
      </View>
      <SafeAreaView>
        <FlatList
          data={listItem}
          renderItem={({ item }) => (
            <View>
              <Text
                style={{
                  fontSize: "24px",
                }}
              >
                {item.text}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
}

export function Lab3_2() {
  const items = [
    {
      id: 1,
      title: "Information Technology",
      img: require("../assets/lab2/course-bach-it.jpg"),
    },
    {
      id: 2,
      title: "Data Science and Business Analytics",
      img: require("../assets/lab2/course-bach-dsba.jpg"),
    },
    {
      id: 3,
      title: "Business Information Technology ",
      img: require("../assets/lab2/course-bach-bit.jpg"),
    },
    {
      id: 4,
      title: "Artificial Intelligence Technology",
      img: require("../assets/lab2/course-bach-ait.jpg"),
    },
  ]

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    navBar: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "2.5%",
      width: "100%",
      backgroundColor: "#007bff",
    },
    logoImg: {
      width: "30%",
      height: "100%",
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Image
          style={styles.logoImg}
          resizeMode="contain"
          source={require("../assets/lab2/IT_Logo.png")}
        />
        <Text style={{ fontSize: "32px", color: "#fff", flex: 1, textAlign: 'center'}}>
          Programs
        </Text>
      </View>
      <SafeAreaView>
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <TouchableOpacity style={{
              padding: "2.5%",
              backgroundColor: '#edeceb',
            }}>
              <Image source={item.img} style={{ width: "100%", height: 200 }} />
              <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
}
