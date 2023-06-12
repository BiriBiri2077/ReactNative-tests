import body from 'body,js'


export default classApp extends React.Component{

    constructor(props){
        super(props);
        this.mostrarTexto = true;
        this.mostrarBotao = true;
    }
//adicionar variável no próprio módulo


    render(){
        var mostrarBotao = true;
        var mostrarTexto = true;



        return(
            <ScrollView style={{marginTop:20,flex:1}}>
                {
                    (mostrarTexto)? //this.mostrarTexto
                    <Text>Texto</Text>
                    :
                    <View></View>
                }
                {
                    (this.mostrarBotao)
                    ?
                    <Button title="Botao"></Button>
                    :
                    <View><Text>Vazio...</Text></View>
                }
            </ScrollView>
        );
    }
}
//variáveis de renderização



    render(){



    if(this.mostrarTexto){
    return(
        <ScrollView style={{marginTop:20,flex:1}}>
            <Body></Body>
        </ScrollView>
        );
    }else{
        return(
            <ScrollView style={{marginTop:20,flex:1}}>
                <Header></Header>
            </ScrollView>
            );
    }
}
//outro método de rendserização utilizando if e else




mostrarConteudo(){
    var mostrarBody = true; //podemos criar uma variável para renderizar o componente
    if(this.mostrarTexto){
        return(
            <View>
                <Body></Body>
                <Header></Header>
            </View>
            );
        }else{
            return(
                    <Header></Header>
                );
        }
}
//como renderizar algo fora da render


render(){
    return(
        <ScrollView style={{marginTop:20,flex:1}}>
            {
                this.mostrarConteudo()
            }
        </ScrollView>
    )
};    
