import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';

export default function App() {
    return (
        <View>
            <StatusBar hidden /> //esconder a StatusBar
            <Text>olá!</Text>

        </View>
    );
}