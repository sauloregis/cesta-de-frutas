import React from 'react';
import { StyleSheet, Image, Dimensions, View, Text, SafeAreaView } from 'react-native';



import topo from '../../assets/assets/topo.png';
import logo from '../../assets/assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return(
        <View style={estilos.container}>
            <Image source={topo} style={estilos.topo} />
            <Text style={estilos.titulo}>Detalhes da cesta</Text>
            <Text style={estilos.subtitulo}>Cesta de Verduras</Text>

            <View style={estilos.fazenda}>
                <Image source={logo} style={estilos.imagemFazenda}/>
                <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
            </View>
            <Text style={estilos.descricao}>Itens de produtos específicos da Jenny Jack Farm</Text>
            <Text style={estilos.preco}>R$ 40,00</Text>
        </View>
   
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical:8,
        paddingHorizontal: 16,
    },
    topo: {
        width: "100%",
        height: 578/768 * width,
    },
    titulo:{
        width: "100%",  
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16
    },
    subtitulo:{
        textAlign: "center",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
        color:"#464646", 
    },
    fazenda:{
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda:{
        width: 32,
        height: 32,    
    },
    nomeFazenda:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft:12,    
    },
    descricao:{
        color:"#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
        fontStyle: "italic",
    },
    preco:{
        color:"#2A9F85",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
        marginTop: 8,
    },
})