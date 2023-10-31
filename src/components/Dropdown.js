import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import SelectDropdown from "react-native-select-dropdown";
import { Icon } from 'react-native-paper';

const data = ['Kwanza angolano', 'Dólar americano', 'Euro europeu'];

export default function Dropdown({ headerText = "Texto", onSelect, ...props }) {
    return (
        <View style={styles.container}>
            <Text variant="headlineSmall" >{headerText}</Text>

            <SelectDropdown
                buttonStyle={styles.select}
                defaultButtonText='Escolha uma opção'
                data={data}
                onSelect={(selectedItem, index) => {
                    onSelect(selectedItem, index);
                }}
                renderDropdownIcon={() => (
                    <Icon size={32} source="chevron-down" />
                )}
                {...props}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 12,
        gap: 10
    },
    select: {
        width: '100%',

    }
});