import LogInForm from "@/components/auth/LogInForm";
import { ThemedContainer } from "@/components/theme";
import { useSession } from "@/context/auth/ctx";
import { router } from "expo-router";
import { Text, View } from "react-native";

const SignInScreen = () => {
  const { signIn } = useSession();
  return (
    <ThemedContainer>
      <LogInForm />
      {/* <Text
        onPress={() => {
          signIn();
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace("/");
        }}
      >
        Sign In
      </Text>
      <Text
        onPress={() => {
          signIn();
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace("/sign-up");
        }}
      >
        Sign Up
      </Text> */}
    </ThemedContainer>
  );
};

export default SignInScreen;
