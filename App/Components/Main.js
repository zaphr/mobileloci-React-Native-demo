var React = require('react-native');
var BoardTile = require('./BoardTile');
var Board = require('./Board');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    Image
    } = React;

class Main extends React.Component {
    render() {
        return (
            <View style={styles.mainContainer}>

                <Board columns={7} rows={8}/>



            </View>
        );
    }
}

var styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 30,
        marginTop: 65,
        flexDirection: 'column',
        //justifyContent: 'center',
        backgroundColor: 'grey',
        borderWidth: 2,
        borderColor: 'black',
        //width: 100,
        flexWrap: 'wrap'
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: '#fff'
    },

    searchInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
    },
});

module.exports = Main;