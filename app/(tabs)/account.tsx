import { StyleSheet } from "react-native";
import { ThemedText, ThemedContainer } from "@/components/theme";
import { getUserById } from "@/data/users";
import { User } from "@/models/models";
import withApiFeedback from "@/components/hoc/withApiFeedback";

interface IAccount {
  userInfo?: User;
}

const AccountScreen = ({ userInfo }: IAccount) => {
  return (
    <ThemedContainer>
      <ThemedText>{JSON.stringify(userInfo)}</ThemedText>
    </ThemedContainer>
  );
};

export default withApiFeedback(
  AccountScreen,
  {
    fetchFn: getUserById,
    args: ["666e389c0970e2f36dc91f7a"],
  },
  "userInfo"
);

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
