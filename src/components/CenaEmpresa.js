import React, { Component } from 'react';
import { View, StatusBar, Image, StyleSheet, Text } from 'react-native';

//Importar o componente barra de navegação
import BarraNavegacao from './BarraNavegacao';

const detalheEmpresa = require('../imgs/detalhe_empresa.png');


class CenaEmpresa extends Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFF' }}>
                <StatusBar backgroundColor='#EC7148' />
                <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#EC7148' />
                
                <View style={styles.grpCabecalho}>
                    <Image source={detalheEmpresa} />
                    <Text style={styles.textoEmpresa}>A Empresa</Text>
                </View>

                <Text style={styles.textoSobre}>Texto aleatorio falando sobre a empresa. 
                ALAMDABDISBIBIS KDBFUSFSD dnfosodfosdfd
                sfknfondofndonofndonfod non ofndonfodnfod ~pdjfp
                </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    textoEmpresa: {
        color: '#EC7148',
        fontSize: 40,
        marginLeft: 20,
        marginTop: 20
    },
    grpCabecalho: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 10
    },
    textoSobre: {
        fontSize: 20,
        margin: 20
    }
});

export default CenaEmpresa;
