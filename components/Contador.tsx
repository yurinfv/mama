
import { View, Text, Button } from "react-native";
import styles from "@/constants/styles";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Botao from "./Botao";



export interface ContadorProps {
    valorInicial?: number
}
export default function Contador(props: ContadorProps){
    const [numero, setNumero] = useState(props.valorInicial?? 0) //?? garante que o valor recebido seja um número e caso não receba nada, vai receber o 0
    return(
        <View style={styles.container}>
            <Text style={{fontSize: 50}}>{numero}</Text>
            <View style={{gap: 10, flexDirection: "row"}}>
                
                <Botao onPress={() => setNumero(numero + 1)}>
                    <Ionicons name="add" size={24} color="white" />
                </Botao>
                <Botao onPress={() => setNumero(numero - 1)}>
                <Ionicons name="remove" size={24} color="white" />
                </Botao>
            </View>
            

        </View>
    )
}