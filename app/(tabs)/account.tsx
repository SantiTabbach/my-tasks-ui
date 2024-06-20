import { StyleSheet } from "react-native";
import { ThemedText, ThemedContainer } from "@/components/theme";

const AccountScreen = () => {
  return (
    <ThemedContainer>
      <ThemedText>My Account</ThemedText>
    </ThemedContainer>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
