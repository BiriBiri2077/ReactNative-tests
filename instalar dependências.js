import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import Constants from 'expo-constants';


//instalar dependencias do expo
expo install expo-constants

export default function App() {
return(
<View style={{marginTop:Constants.statusBarHeight}}> //adicionamos a altura no style da View
    <Text>{Constants.statusBarHeight}</Text> //mostra a altura da status bar
    <Text>Olá!</Text>// assim o texto ira aparecer abaixo da
</View>
);
}