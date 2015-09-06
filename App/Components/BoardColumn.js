var React = require('react-native');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
    } = React;

class BoardColumn extends React.Component {
    render() {
        return (
            <View>
                <Image style={styles.image}
                       source={require('image!dog')}  />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    column: {
        height: 50,
        width: 50,
        //borderRadius: 5,
        //marginTop: 10,
        //alignSelf: 'center',
        borderColor: 'white',
        borderWidth: 1,
        //borderRadius: 8,
    },
});



module.exports = BoardColumn;