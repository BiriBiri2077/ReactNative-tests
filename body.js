import React from "react";
import { Text, View, Image, ScrollView, Button} from "react-native";


const Header= () =>{
    return(
     <ScrollView>
            <View>
                <Text style={{textAlign:'center', fontSize:45, color:'white', backgroundColor:'#069'}}>Pudim</Text>
            </View>
            <View style={{flex:1,justifyContent:'center', padding:25}}>
                <Image style={{width:'100%',height:400,}}
                source={{
                    uri: 'https://gartic.com.br/imgs/mural/ja/jacquelynefe/garota-anime.png'
                    }}
                 ></Image>
                <Text style={{textAlign:'center', fontSize:27, width:'100%'}}>Empilhadeira</Text>
                <Text style={{fontSize:18,paddingTop:15}}>pudim bobao cara de melao so come sabao com macarrao pudim bobao cara de melao so come sabao com macarrao pudim bobao cara de melao so come sabao com macarrao pudim bobao cara de melao so come sabao com macarrao pudim bobao cara de melao so come sabao com macarrao pudim bobao cara de melao so come sabao com macarrao pudim bobao cara de melao so come sabao com macarrao pudim bobao cara de melao so come sabao com macarrao pudim bobao cara de melao so come sabao com macarrao pudim bobao cara de melao so come sabao com macarrao pudim bobao cara de melao so come sabao com macarrao pudim bobao cara de melao so come sabao com macarrao</Text>
                <Button title="botao"></Button>
               </View>
     </ScrollView>
    );
}
export default Header;
