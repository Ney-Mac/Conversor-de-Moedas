import { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { theme } from './src/themes/theme';

import MainContainer from "./src/components/MainContainer";
import TextInput from "./src/components/TextInput";
import Header from "./src/components/Header";
import Dropdown from "./src/components/Dropdown";
import ResponseArea from './src/components/ResponseArea';
import Button from './src/components/Button';

export default function App() {
    const [fromValue, setFromValue] = useState({ index: '', text: '' });
    const [toValue, setToValue] = useState({ index: '', text: '' });
    const [value, setValue] = useState({ val: '', error: '' });
    const [result, setResult] = useState(null);

    const convert = (from, to, value) => {
        console.log(from, to, value);

        if(!value) {
            setValue({ ...value, error: 'Digite um valor válido' });
            return;
        }

        if(from === null || to === null) {
            setValue({ ...value, error: 'Escolha a moeda' });
            return;
        }

        if(from === 0 && to === 1){//kz-dl
            setResult(value * 0.0012);
        } else if(from === 0 && to === 2){//kz-eur
            setResult(value * 0.0011);
        }else if(from === 1 && to === 0){//dl-kz
            setResult(value * 827.48);
        }else if(from === 1 && to === 2){//dl-eur
            setResult(value * 0.94);
        }else if(from === 2 && to === 0){//eur-kz
            setResult(value * 876,81);
        }else if(from === 2 && to === 1){//eur-dl
            setResult(value * 1.06);
        }else setResult(value * 1);
    }

    const selectFrom = (selectedItem, index) => {
        setFromValue({ index: index, text: selectedItem });
        setResult(null);
    }

    const selectTo = (selectedItem, index) => {
        setToValue({ index: index, text: selectedItem });
        setResult(null);
    }

    const onPress = () => {
        convert(fromValue.index, toValue.index, value.val);
    }

    return (
        <View style={styles.container}>
            <Header>Conversor de Moedas</Header>

            <MainContainer>
                <TextInput
                    headerText="Valor"
                    value={value.val}
                    keyboardType="numeric"
                    affixindex={fromValue.index}
                    onChangeText={(text) => {
                        setValue({ val: text, error: '' });
                        setResult(null);
                    }}
                    errorText={value.error}
                />
                <Dropdown
                    headerText="De"
                    onSelect={selectFrom}
                />
                <Dropdown
                    headerText="Para"
                    onSelect={selectTo}
                />
                <Button onPress={onPress} >Converter</Button>
                <ResponseArea
                    fromText={fromValue.text}
                    valorIn={value.val}
                    result={result}
                    resultText={toValue.text}
                />

            </MainContainer>

            <StatusBar hidden={false} style="dark" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 12,
        backgroundColor: theme.colors.primary,
    },
});
