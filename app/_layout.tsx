import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
   
    <GestureHandlerRootView style={{ flex: 1 }}>
       <Drawer>
         <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Início', // Nome mostrado no menu do Drawer
            title: 'Bem Vindo', // Título da página
            drawerIcon: () => <Ionicons name="home-outline" size={18} color="#3A98FF" /> 
          }}
        />
        <Drawer.Screen
          name="primeiro"
          options={{
            drawerLabel: 'Primeiro Componente', // Nome mostrado no menu do Drawer
            title: 'Primeiro Componente', // Título da página
            drawerIcon: () => <Ionicons name="heart-circle-outline" size={18} color="#3A98FF" /> 
          }}
        />
        <Drawer.Screen
          name="contador"
          options={{
            drawerLabel: 'Tela Contador', // Nome mostrado no menu do Drawer
            title: 'Tela Contador', // Título da páginar
            drawerIcon: () => <Ionicons name="add" size={18} color="#3A98FF" /> 
          }}
        />  
        <Drawer.Screen
          name="tabs"
          options={{
            drawerLabel: 'Tabs', // Nome mostrado no menu do Drawer
            title: 'Tabs', // Título da páginar
            drawerIcon: () => <Ionicons name="albums-outline" size={18} color="#3A98FF" />
          }}
        />  
      </Drawer>
    </GestureHandlerRootView>
  );
}