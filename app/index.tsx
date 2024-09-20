import { Text, View, ViewBase } from "react-native";
import styles from '@/constants/styles'
import { Ionicons } from "@expo/vector-icons";
import Botao from "@/components/Botao"
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

export default function Index() {
const nav=useNavigation()
  return (
    <View style={[styles.container, {gap: 10}]}/*criação de um array de estilos específico para essa view*/> 
      <Ionicons name="logo-react" size={100}/>
        <View style={{ alignItems: "center"}}>
          <Text style={{ fontSize: 24, fontWeight: 700}}>React Native</Text>
          <Text style={{ fontSize: 16 }}>Expo Router</Text>

        </View>
      <Botao onPress={() => nav.dispatch(DrawerActions.openDrawer())/*faz com que o botão abra o drawer. necessário importar o usenavigation e definir a constante que o recebe */}>
        <Text>Exercícios</Text>
      </Botao>
    </View>
  );
}