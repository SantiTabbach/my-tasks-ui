import { Text, type TextProps, StyleSheet } from "react-native";
import { useThemeColor } from "@/hooks";

export type TextType =
  | "default"
  | "title"
  | "defaultSemiBold"
  | "subtitle"
  | "link";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: TextType;
};

const ThemedText = ({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) => {
  const textColors = useThemeColor(
    { light: lightColor, dark: darkColor },
    "text"
  ) as { [key in TextType]: string };

  const color = textColors[type];

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
};

export default ThemedText;

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Urbanist_500Medium",
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Urbanist_700Bold",
  },
  title: {
    fontSize: 32,
    lineHeight: 32,
    fontFamily: "Urbanist_700Bold",
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "Urbanist_600SemiBold",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
    fontFamily: "Urbanist_400Regular",
  },
});
