export default function App() {

var mostrarConteudo = true;
var conteudo = <Text> Brasso </Text>


if(mostrarConteudo == true){
    let nome = "sapo";
    conteudo = <Text>Brasseidos</Text>
}else{
    conteudo = <View> <Text>sasa</Text> </View>
}
return (
    <View>
        {conteudo}
    </View>
);



var numero = 10;
if(numero > 10){
    conteudo = <Text>soso</Text>
}
return (
    <View>
        {conteudo}
    </View>
);



}




for(var i = 0; i < 10; i++){
}

var i = 0;

while(i < 10){
    alert(i);
    i++;
}
//

var componente = [];

for(var i = 1; i <= 100; i++){
    componente[i] = <Text>{i}</Text>
}

return (
    <View>
    {
        componente.map((val)= => {
            return(val);
        })
    }
    </View>
);



constructor(props){
    super(props);
    this.nome = "brassos";
    this.Tela = new Tela();
    this.Tela2 = new Tela();

    this.Tela.nomes = "brasse";
}


chamarNome(){
    return (<Text>{this.nome}</Text>)
}



render(){

    console.log(this.Tela.nome);

    return (
        <View>
            <Tela></Tela>
            {this.nome()}
        </View>
    );
}


