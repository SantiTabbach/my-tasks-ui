import {
  SafeAreaView,
  type SafeAreaViewProps,
} from "react-native-safe-area-context";
import { useThemeColor } from "@/hooks";

export type ThemedSafeAreaViewProps = SafeAreaViewProps & {
  lightColor?: string;
  darkColor?: string;
};

const ThemedContainer = ({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedSafeAreaViewProps) => {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  ) as string;

  return (
    <SafeAreaView
      edges={["top"]}
      style={[
        {
          backgroundColor,
          flex: 1,
          alignItems: "center",
          paddingHorizontal: 20,
          paddingTop: 30,
        },
        style,
      ]}
      {...otherProps}
    />
  );
};

export default ThemedContainer;
