/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Main = require('./App/Components/Main');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS
    } = React;

class mobileloci extends React.Component {
    render() {
        return (
            <NavigatorIOS style={styles.container}
                          initialRoute={{
        component: Main,
        title: 'Github Notetaker'
      }}
            />

        );
    }
}
;

var styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#111111'
    },
});

AppRegistry.registerComponent('mobileloci', () => mobileloci);
