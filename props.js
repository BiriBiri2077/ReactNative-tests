<Tela titulo="brasso"></Tela>

constructor(props){
    super(props);

}


render(){
    return (
        <View>
            <Button title="this.props.titulo"></Button>
        </View>
    )
}


export default function Body(props){

    return(
        
            <View>
            <Text>{props.texto}</Text>
            <Button title={props.titulo}></Button>
            </View>   
    )  
}


export default function App(){
    return (
        <View>
            <Button title="this.props.titulo"></Button>
        </View>
    );
}


const Body = (props) => {

    function teste(){
        return (<Text>Exemplo</Text>)
    }

    return(
        
        <View>
        <Text>{props.texto}</Text>
        <Button title={props.titulo}></Button>
        </View>   
);
}
export default Body;


export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {

            contador: 0,
            pagina: 'home'
        }

        setInterval(()=>{
            this.setState({contador:this.state.contador+1});
        },2000)
        setInterval(()=>{
            this.setState({pagina:'contato'});
        },2000)
    }



    render(){
        if(this.state.pagina == "home"){
            return (
                <View>
                    <Text>{this.state.contador}</Text>
                    <Text>brasso</Text>
                </View>
            );
        }else if(this.state.pagina == "contato"){
            <View>
                    <Text>{this.state.contador}</Text>
                    <Text>brasseidos</Text>
                </View>
        }

    }




}