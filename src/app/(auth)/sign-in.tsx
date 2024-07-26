import Button from "@/src/components/Button";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import { useState } from "react";
import Colors from "@/src/constants/Colors";
import { Stack, Link } from "expo-router";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [errors, setErrors] = useState("");

  const validateInput = () => {
    setErrors("");
    if (!email) {
      setErrors("email is required");
      return false;
    }
    if (!password) {
      setErrors("password is required");
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    if (!validateInput()) {
      return;
    }
    console.warn("Logging in: ", email);
  };

  const signIn = () => [];

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Sign in",
        }}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="John@gmail.com"
        style={styles.input}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="password"
        style={styles.input}
        textContentType="password"
        secureTextEntry
      />
      <Text style={{ color: "red" }}>{errors}</Text>
      <Button onPress={onSubmit} text="Sign in" />
      <Link href={"/sign-up"} asChild>
        <Text style={styles.textButton}>Create an account</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  label: {
    color: "gray",
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
  },
  image: {
    width: "50%",
    aspectRatio: 1,
    alignSelf: "center",
  },
  textButton: {
    alignSelf: "center",
    fontWeight: "bold",
    color: Colors.light.tint,
    marginVertical: 10,
  },
});

export default SignInScreen;
