import React from "react";
import { StyleSheet} from "react-native";

export default StyleSheet.create({

    fontStyle:{
        fontSize:30
    }

});
//criar estilos separados do componente


import styleExterno from '../styles.js';
//para chamar usamos 'import "styleExterno" from '../styles.js; na body


<View>
    <Text style={styleExterno.fontSize}> texto </Text>
</View>
//chamar o "styleExterno" em um componente

