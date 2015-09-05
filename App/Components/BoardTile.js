var React = require('react-native');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    Image
    } = React;

class BoardTile extends React.Component {
    render() {
        return (
            <View>
                <Image style={styles.image}
                       source={this.props.image} />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    image: {
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

BoardTile.propTypes = {
    word: React.PropTypes.string.isRequired
};



module.exports = BoardTile;