import { useState } from "react";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { Button, Form, H2, Image, Spinner, YStack } from "tamagui";
import { router } from "expo-router";
import { signIn as signInAction, IAuthBody } from "@/data/auth";
import { ThemedContainer } from "@/components/theme";
import { FormInput } from "@/components/form";
import { useSession } from "@/context/auth/ctx";

const LogoImage = require("@/assets/images/sign-in-logo.png");

const initialFormValue = {
  username: "",
  password: "",
};

const SignInScreen = () => {
  const [formData, setFormData] = useState<IAuthBody>(initialFormValue);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { signIn } = useSession();

  const handleSubmit = async () => {
    if (formData && formData.password && formData.username) {
      setIsLoading(true);
      try {
        const response = await signInAction(formData);

        if (response) {
          signIn(response.accessToken);
          router.replace("/");
        }
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
        console.log(error);
      } finally {
        setIsLoading(false);
        setFormData(initialFormValue);
      }
    } else {
      setIsError(true);
    }
  };

  const handleInputChange = (key: "username" | "password", value: string) => {
    setIsError(false);
    setFormData((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  return (
    <ThemedContainer>
      <KeyboardAvoidingView style={{ width: "100%" }} behavior="position">
        <Form onSubmit={handleSubmit} padding="$4" gap="$8">
          <H2 alignSelf="center">My Tasks</H2>
          <Image src={LogoImage} style={styles.image} />
          <YStack gap="$4">
            <FormInput
              placeholder="Username"
              isError={isError}
              value={formData.username}
              onChangeText={(text) => handleInputChange("username", text)}
            />
            <FormInput
              textContentType="password"
              placeholder="Password"
              isError={isError}
              value={formData.password}
              onChangeText={(text) => handleInputChange("password", text)}
            />
          </YStack>
          <YStack gap="$4">
            <Form.Trigger asChild disabled={isLoading}>
              <Button
                color="#FFFF"
                backgroundColor="#9ED7D7"
                icon={isLoading ? () => <Spinner /> : undefined}
              >
                Log In
              </Button>
            </Form.Trigger>
            <Button onPress={() => router.push("/sign-up")}>Sign Up</Button>
          </YStack>
        </Form>
      </KeyboardAvoidingView>
    </ThemedContainer>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  image: { width: 250, height: 250, alignSelf: "center" },
});
