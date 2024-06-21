import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Input, Text, YStack } from "tamagui";

type InputProps = React.ComponentProps<typeof Input>;

interface ITogglePasswordBtn {
  isPasswordVisible: boolean;
  setIsPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const TogglePasswordBtn = ({
  isPasswordVisible,
  setIsPasswordVisible,
}: ITogglePasswordBtn) => (
  <TouchableOpacity onPress={() => setIsPasswordVisible((prev) => !prev)}>
    <Text style={{ fontSize: 14 }}>
      {isPasswordVisible ? "Hide" : "Show"} password
    </Text>
  </TouchableOpacity>
);

interface IFormInput extends InputProps {
  isError?: boolean;
}

const FormInput = (props: IFormInput) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { isError, textContentType } = props;

  const passwordInput = textContentType === "password";

  return (
    <YStack gap="$2">
      <Input
        size="$4"
        borderWidth={2}
        theme={isError ? "red" : "gray"}
        secureTextEntry={passwordInput && !isPasswordVisible}
        {...props}
      />
      {passwordInput && (
        <TogglePasswordBtn
          isPasswordVisible={isPasswordVisible}
          setIsPasswordVisible={setIsPasswordVisible}
        />
      )}
    </YStack>
  );
};

export default React.memo(FormInput);
