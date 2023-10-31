import { StyleSheet, View } from "react-native";
import { TextInput as Input, Text, Icon } from "react-native-paper";
import { theme } from "../themes/theme";

export default function TextInput({ mode = 'outlined', headerText = "Texto", affixIndex, errorText, ...props }) {
    return (
        <View style={styles.container}>
            <Text variant="headlineSmall" >{headerText}</Text>
            <Input
                style={styles.Input}
                mode={mode}
                activeOutlineColor={theme.colors.primary}
                underlineColor="transparent"
                {...props}
            />
            {errorText && (
                <Text 
                    variant="labelLarge"
                    style={{ color: theme.colors.error }}
                >
                    {errorText}
                </Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 12,
        gap: 10
    },
    Input: {
        backgroundColor: theme.colors.surface,
    }
})