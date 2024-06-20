import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText, ThemedContainer, ThemedView } from "@/components/theme";
import { getUserById } from "@/data/users";
import { User } from "@/models/models";
import withApiFeedback from "@/components/hoc/withApiFeedback";

interface IUserInfo {
  userInfo: User;
}

const UserInfo = ({ userInfo }: IUserInfo) => (
  <ThemedView style={styles.userInfoContainer}>
    {userInfo?.avatar && <Image src={userInfo.avatar} style={styles.avatar} />}
    <ThemedText type="title" style={{ textAlign: "center" }}>
      {userInfo.username}
    </ThemedText>
    <TouchableOpacity style={styles.logoutBtn}>
      <ThemedText type="subtitle">Logout</ThemedText>
    </TouchableOpacity>
  </ThemedView>
);

const WrappedUserInfo = withApiFeedback<IUserInfo, User | undefined>(
  UserInfo,
  {
    fetchFn: getUserById,
    args: ["666e389c0970e2f36dc91f7a"], //TODO: Pull from token
  },
  "userInfo"
);

const AccountScreen = () => {
  return (
    <ThemedContainer style={styles.container}>
      <WrappedUserInfo />
    </ThemedContainer>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  userInfoContainer: {
    gap: 20,
    textAlign: "center",
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  logoutBtn: {
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#c2c2c2",
  },
});
