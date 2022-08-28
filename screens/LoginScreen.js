import { View, TextInput, StyleSheet, Image } from "react-native";
import Button from "../componets/Button";
import { GlobalStyles } from "../constants/style";
import { constants, sendInfoToBackend, setClientToken } from "../util/http";
import React, { useState } from "react";
import { showAlert } from "../util/helper";
import qs from "qs";
import Indicator from "../componets/ActivityIndicator";
import { ActivityIndicator } from "react-native-paper";
function LoginScreen({ navigation }) {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpToken, setOtpToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSignin() {
    let body = {
      otpToken: otpToken,
      OTP: otp,
    };
    setIsLoading(true);
    const res = await sendInfoToBackend(
      constants.endPoints.verifyOTP,
      qs.stringify(body)
    );
    setIsLoading(false);
    if (res.data.status) {
      console.log(res.data);
      setClientToken(res.data.data.jwtToken);
      navigation.navigate("LandingNav");
    } else {
      showAlert("Error", res.data.message);
    }
  }
  async function sendOTP() {
    const formData = new FormData();
    formData.append("phone", phone);
    setIsLoading(true);
    const res = await sendInfoToBackend(constants.endPoints.login, formData);
    setIsLoading(false);
    if (res.data.status) {
      showAlert("Success", res.data.message);
      setOtpToken(res.data.data.otpToken);
      setClientToken(res.data.data.jwtToken);
    } else {
      showAlert("Error", res.data.message);
    }
  }
  function handleSignup() {
    navigation.navigate("Signup");
  }

  return (
    <View style={styles.container}>
      {isLoading && <Indicator />}
      <View style={styles.imgContainer}>
        <View style={styles.imgContainer2}>
          <Image style={styles.image} source={require("../assets/logo.png")} />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="PHONE"
            keyboardType="numeric"
            maxLength={10}
            onChangeText={setPhone}
            placeholderTextColor={GlobalStyles.colors.accent700}
          />

          <TextInput
            style={styles.input}
            placeholder="OTP"
            keyboardType="numeric"
            onFocus={sendOTP}
            onChangeText={setOtp}
            placeholderTextColor={GlobalStyles.colors.accent700}
          />
        </View>

        <Button onPress={handleSignin}>SIGN IN</Button>
        <Button onPress={handleSignup} mode={"flat"} style={{ marginTop: 20 }}>
          Not a member yet? Sign up
        </Button>
      </View>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primaryYellow,
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //  backgroundColor: 'purple',
  },
  buttonContainer: {
    flex: 1.3,
    paddingHorizontal: 50,
    justifyContent: "flex-start",
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },

  image: {
    width: 180,
    height: 180,
    resizeMode: "cover",
  },
  imgContainer2: {
    overflow: "hidden",
    // backgroundColor: 'purple',
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 3,
    borderBottomColor: "red",
    padding: 10,
    textAlign: "center",
  },
  inputContainer: {
    marginTop: 75,
    marginBottom: 75,
  },
});
