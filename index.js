//import {createStackNavigator, createAppNavigator} from 'react-navigation';
import { Navigator } from 'react-native-deprecated-custom-components';
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import CenaClientes from './src/components/CenaClientes';
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServicos from './src/components/CenaServicos';


class app5 extends Component {

    render() {
        return (
           <Navigator 
            initialRoute={{ id: 'principal' }}
            renderScene={(route, navigator) => {
                /* definir a cena com base na rota */
                if (route.id === 'principal') {
                    //exibir a cenaPrincipal
                    return (<CenaPrincipal navigator={navigator} />);
                }

                if (route.id === 'cliente') {
                    //exibir a cenaClientes
                    return (<CenaClientes navigator={navigator} />);
                }

                if (route.id === 'contato') {
                    //exibir a cenaContatos
                    return (<CenaContatos navigator={navigator} />);
                }

                if (route.id === 'empresa') {
                    //exibir a cenaEmpresa
                    return (<CenaEmpresa navigator={navigator} />);
                }

                if (route.id === 'servicos') {
                    //exibir a cenaServicos
                    return (<CenaServicos navigator={navigator} />);
                }
            }}
           />
        );
    }
}

AppRegistry.registerComponent('app5', () => app5);
