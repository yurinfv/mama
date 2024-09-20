import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

function icone(nome: any) {
    return (props: any) => (<Ionicons name={nome} size={18} color={props.focused ? '#3A98FF' : '#000'}/>)
}
export default function Layout(props: any){
 
    return(
        <Tabs>
            <Tabs.Screen name="index" options={{
                title: "Home",
                tabBarIcon: icone ('home-outline'),
            }}
            />
            <Tabs.Screen name="cursos" options={{
                title: "Cursos",
                tabBarIcon: icone('play-outline'),
            }}
            />
            <Tabs.Screen name="config" options={{
                title: "Configurações",
                tabBarIcon: icone('settings-outline'),
            }}
            />
        </Tabs>
    )
}
/*Não pode exportar uma função dentro de outra. defini uma função icone e chamei ela na função que será exportada */