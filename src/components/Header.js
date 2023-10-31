import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { theme } from "../themes/theme";
import { getStatusBarHeight } from "react-native-status-bar-height";

export default function Header({ children }) {
    return (
        <Text style={styles.text} variant="headlineMedium" >
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        marginVertical: 24 + getStatusBarHeight(),
        fontWeight: 'bold',
        textAlign: 'center',
        color: theme.colors.surface,
    }
})