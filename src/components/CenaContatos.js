import React, { Component } from 'react';
import { View, StatusBar, Image, StyleSheet, Text } from 'react-native';

//Importar o componente barra de navegação
import BarraNavegacao from './BarraNavegacao';

const detalheContato = require('../imgs/detalhe_contato.png');


class CenaContatos extends Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFF' }}>
                <StatusBar backgroundColor='#61BD8C' />
                <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#61BD8C' />
                
                <View style={styles.grpCabecalho}>
                    <Image source={detalheContato} />
                    <Text style={styles.textoContato}>Contato</Text>
                </View>

                <View style={styles.DetalheContato}>
                    <Text style={styles.txtContato}>TEL: (11) 1234-5678</Text>
                    <Text style={styles.txtContato}>CEL: (11) 9988-7766</Text>
                    <Text style={styles.txtContato}>EMAIL: contatoATM@consultoria.com</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textoContato: {
        color: '#61BD8C',
        fontSize: 40,
        marginLeft: 20,
        marginTop: 20
    },
    grpCabecalho: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 10
    },
    DetalheContato: {
        marginTop: 20,
        paddingTop: 20,
        marginLeft: 15
    },
    txtContato: {
        fontSize: 20
    }
});

export default CenaContatos;
