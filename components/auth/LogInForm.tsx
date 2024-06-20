import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedInput, ThemedText, ThemedView } from "../theme";

const LogInForm = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">My Tasks</ThemedText>
      <ThemedInput
        placeholder="Username"
        leftElement={<ThemedText>I</ThemedText>}
        rightElement={<ThemedText>I</ThemedText>}
      />
      <ThemedInput placeholder="Password" />
    </ThemedView>
  );
};

export default LogInForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    gap: 20,
    backgroundColor: "#c2c2c2",
  },
});
