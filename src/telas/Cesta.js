import React from 'react';
import { StyleSheet, Image, Dimensions, View, Text, SafeAreaView } from 'react-native';

import topo from '../../assets/assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return(
        <View style={estilos.container}>
            <Image source={topo} style={estilos.topo} />
            <Text style={estilos.titulo}>Detalhes da cesta</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
    },
    topo: {
        width,
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

    }
})