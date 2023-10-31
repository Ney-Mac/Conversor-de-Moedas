import { StyleSheet, View } from "react-native";

const MainContainer = ({ children }) => (
    <View style={styles.container}>
        {children}
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 12,
        elevation: 20,
        width: '100%',
    }
})

export default MainContainer;