import { useState } from 'react';
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
    const [moedaOrigem, setMoedaOrigem] = useState({ value: '', sms: '', error: '' });
    const [moedaDestino, setMoedaDestino] = useState({ value: '', sms: '', error: '' });
    const [valueToConvert, setValueToConvert] = useState({ value: '', error: '' });
    const [result, setResult] = useState(null);

    const converter = (from, to, value) => {
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

    const handleMoeda = (setDropdown, selectedItem, index) => {
        setDropdown({ value: index, sms: selectedItem, error: '' });
        setResult(null);
    }

    const onPress = () => {
        const moedaOrigemErro = (!moedaOrigem.sms)? 'Escolha a moeda' : '';
        const moedaDestinoErro = (!moedaDestino.sms)? 'Escolha a moeda' : '';
        const valueToConvertErro = (!valueToConvert.value)? 'Digite um valor válido' : '';

        if(moedaOrigemErro || moedaDestinoErro || valueToConvertErro) {
            setMoedaOrigem({ ...moedaOrigem, error: moedaOrigemErro });
            setMoedaDestino({ ...moedaDestino, error: moedaDestinoErro });
            setValueToConvert({ ...valueToConvert, error: valueToConvertErro });
            return;
        }

        converter(moedaOrigem.value, moedaDestino.value, valueToConvert.value);
    }

    return (
        <View style={styles.container}>
            <Header>Conversor de Moedas</Header>

            <MainContainer>
                <TextInput
                    headerText="Valor"
                    value={valueToConvert.value}
                    keyboardType="numeric"
                    onChangeText={(text) => {
                        setValueToConvert({ value: text, error: '' });
                        setResult(null);
                    }}
                    errorText={valueToConvert.error}
                />
                <Dropdown
                    headerText="De"
                    onSelect={(selectedItem, index) => { 
                        handleMoeda(setMoedaOrigem, selectedItem, index);
                    }}
                    errorText={moedaOrigem.error}
                />
                <Dropdown
                    headerText="Para"
                    onSelect={(selectedItem, index) => { 
                        handleMoeda(setMoedaDestino, selectedItem, index); 
                    }}
                    errorText={moedaDestino.error}
                />
                <Button onPress={onPress} >Converter</Button>
                <ResponseArea
                    fromText={moedaOrigem.sms}
                    resultText={moedaDestino.sms}
                    valorIn={valueToConvert.value}
                    result={result}
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
