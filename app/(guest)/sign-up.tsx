import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { router } from "expo-router";
import { Button, Form, H2, Spinner, YStack } from "tamagui";
import { ThemedContainer } from "@/components/theme";
import { FormInput } from "@/components/form";
import { ICreateUserBody, signUp } from "@/data/auth";
import { Role } from "@/models/models";

const initialFormValue = {
  username: "",
  password: "",
  roles: new Set<Role>(["User"]),
  avatar: "",
};

const SignUpScreen = () => {
  const [formData, setFormData] = useState<ICreateUserBody>(initialFormValue);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (formData && formData.password && formData.username) {
      setIsLoading(true);
      try {
        const response = await signUp(formData);

        if (response) {
          //show success message and go to login
          console.log("New user created successfully", response);
          router.replace("/");
        }
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
        //show error message
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
          <H2 alignSelf="center">Let's create your user!</H2>
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
          {/* expo image picker */}
          <Form.Trigger asChild disabled={isLoading}>
            <Button
              color="#FFFF"
              backgroundColor="#9ED7D7"
              icon={isLoading ? () => <Spinner /> : undefined}
            >
              Create user
            </Button>
          </Form.Trigger>
        </Form>
      </KeyboardAvoidingView>
    </ThemedContainer>
  );
};

export default SignUpScreen;
