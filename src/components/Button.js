import { Button as PaperButton } from "react-native-paper";
import { theme } from "../themes/theme";

export default function Button({ mode = "contained", onPress, ...props }) {
    return (
        <PaperButton
            mode={mode}
            onPress={onPress}
            buttonColor={theme.colors.primary}
            style={{
                marginVertical: 24,
                width: '100%',
            }}
            {...props}
        />
    )
}