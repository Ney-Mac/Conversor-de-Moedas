import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function ResponseArea({ fromText, valorIn, result, resultText }) {
    return (
        <>
            {result && (
                <View style={styles.container}>
                    <Text>{valorIn} {fromText} = </Text>
                    <Text variant="displayMedium">{result} {resultText}</Text>
                </View>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        width: '100%',
        height: 'auto',
        gap: 12,
    }
});