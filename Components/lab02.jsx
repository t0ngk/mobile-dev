import { StyleSheet, Text, View, Pressable, TouchableOpacity } from "react-native";
import { Image } from "react-native";

export function Lab2_1() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
    logo: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    buttonContainer: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      padding: "4.5%",
      paddingBottom: "10%",
      gap: "24px",
    },
    button: {
      width: "80%",
      padding: "2.5%",
      boxShadow:
        "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      borderRadius: "4px",
    },
    buttonText: {
      textAlign: "center",
      color: "#fff",
      fontSize: "16px",
    },
    logoImg: {
      width: "30%",
      height: "15%",
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={styles.logoImg}
          resizeMode="contain"
          source={require("../assets/lab2/IT_Logo.png")}
        />
        <Text style={{ fontSize: "28px" }}>คณะเทคโนโลยีสารสนเทศ</Text>
        <Text>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#00a6ff" : "#007bff",
            },
            styles.button,
          ]}
        >
          <Text style={styles.buttonText}>PROGRAMS</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#00a6ff" : "#007bff",
            },
            styles.button,
          ]}
        >
          <Text style={styles.buttonText}>ABOUT US</Text>
        </Pressable>
      </View>
    </View>
  );
}

export function Lab2_2() {
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
      <TouchableOpacity style={{width: '100%', height: '25%', backgroundColor: '#edeceb', padding: '1%'}}>
        <Image
          style={{ height: '100%', height: '90%'}}
          resizeMode="contain"
          source={require("../assets/lab2/course-bach-it.jpg")}
        />
        <Text style={{textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold'}}>
          Information Technology
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{width: '100%', height: '25%', backgroundColor: '#edeceb', padding: '1%'}}>
        <Image
          style={{ height: '100%', height: '90%'}}
          resizeMode="contain"
          source={require("../assets/lab2/course-bach-dsba.jpg")}
        />
        <Text style={{textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold'}}>
          Data Science and Business Analytics
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{width: '100%', height: '25%', backgroundColor: '#edeceb', padding: '1%'}}>
        <Image
          style={{ height: '100%', height: '90%'}}
          resizeMode="contain"
          source={require("../assets/lab2/course-bach-bit.jpg")}
        />
        <Text style={{textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold'}}>
          Business Information Technology 
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{width: '100%', height: '25%', backgroundColor: '#edeceb', padding: '1%'}}>
        <Image
          style={{ height: '100%', height: '90%'}}
          resizeMode="contain"
          source={require("../assets/lab2/course-bach-ait.jpg")}
        />
        <Text style={{textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold'}}>
          Artificial Intelligence Technology
        </Text>
      </TouchableOpacity>
    </View>
  );
}
