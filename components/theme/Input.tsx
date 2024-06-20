import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import ThemedView from "./View";
import ThemedText from "./Text";

type TextInputProps = React.ComponentProps<typeof TextInput>;

interface IThemedInput extends TextInputProps {
  rightElement?: React.ReactElement;
  leftElement?: React.ReactElement;
}

const ThemedInput = (props: IThemedInput) => {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.leftElement}>{props.leftElement}</View>
      <TextInput {...props} />
      <View style={styles.rightElement}>{props.rightElement}</View>
    </ThemedView>
  );
};

export default ThemedInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "red",
    padding: 16,
    borderRadius: 16,
  },
  leftElement: {
    alignSelf: "flex-start",
  },
  rightElement: {
    alignSelf: "flex-end",
  },
});
