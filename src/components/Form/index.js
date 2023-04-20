import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"

//Import
import ResultadoImc from "./ResultadoImc/";
import styles from "./style";

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function imcCalculator() {
        return setImc((weight / (height * height)).toFixed(2))
    }

    function validationImc() {
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual:")
            setTextButton("Calcular Novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("preencha o peso e altura")
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput  style={styles.formInput}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Digite sua altura no formato: 1.75"
                    keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput style={styles.formInput}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Digite seu peso no formato: 80.00"
                    keyboardType="numeric"
                />
                <TouchableOpacity
                onPress={() =>{validationImc()}}
                style={styles.buttonCalculator}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultadoImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    );
}