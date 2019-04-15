import React, { Component } from 'react';
import { View, StatusBar, Image, StyleSheet, Text } from 'react-native';

//Importar o componente barra de navegação
import BarraNavegacao from './BarraNavegacao';

const detalheCliente = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');


class CenaClientes extends Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFF' }}>
                <StatusBar backgroundColor='#B9C941' />
                <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#B9C941' />
                <View style={styles.grpCabecalho}>
                    <Image source={detalheCliente} />
                    <Text style={styles.textoCliente}>Nossos Clientes</Text>
                </View>
                <View style={styles.grpCliente}>
                    <Image source={cliente1} />
                    <Text style={styles.txtDetalheCliente}>Texto Aleatório 1</Text>
                </View>
                <View style={styles.grpCliente}>
                    <Image source={cliente2} />
                    <Text style={styles.txtDetalheCliente}>Texto Aleatório 2</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textoCliente: {
        color: '#B9C941',
        fontSize: 40,
        marginLeft: 20,
        marginTop: 20
    },
    grpCabecalho: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 10
    },
    grpCliente: {
        marginTop: 15,
        padding: 20,
    },
    txtDetalheCliente: {
        fontSize: 20,
        marginLeft: 20
    }
});

export default CenaClientes;
