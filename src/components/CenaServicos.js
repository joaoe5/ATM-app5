import React, { Component } from 'react';
import { View, StatusBar, Image, StyleSheet, Text } from 'react-native';

//Importar o componente barra de navegação
import BarraNavegacao from './BarraNavegacao';

const detalheServicos = require('../imgs/detalhe_servico.png');


class CenaContatos extends Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFF' }}>
                <StatusBar backgroundColor='#19D1C8' />
                <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#19D1C8' />
                
                <View style={styles.grpCabecalho}>
                    <Image source={detalheServicos} />
                    <Text style={styles.textoCabecalho}>Nossos Serviços</Text>
                </View>

                <View style={styles.DetalheServico}>
                    <Text style={styles.txtServico}>- Consultoria</Text>
                    <Text style={styles.txtServico}>- Processos</Text>
                    <Text style={styles.txtServico}>- Acompanhamento de Projetos</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textoCabecalho: {
        color: '#19D1C8',
        fontSize: 40,
        marginLeft: 20,
        marginTop: 20
    },
    grpCabecalho: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 10
    },
    DetalheServico: {
        marginTop: 20,
        paddingTop: 20,
        marginLeft: 15
    },
    txtServico: {
        fontSize: 20
    }
});

export default CenaContatos;
