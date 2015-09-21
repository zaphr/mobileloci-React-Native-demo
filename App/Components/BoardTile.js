var React = require('react-native');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
    } = React;

class BoardTile extends React.Component {
    render() {

        let styles = StyleSheet.create({
            image: {
                height: 50,
                width: 50,
                left: this.props.column * 50,
                top: this.props.row * 50,
                //borderRadius: 5,
                //marginTop: 10,
                //alignSelf: 'center',
                borderColor: 'white',
                borderWidth: 1,
                //borderRadius: 8,
            },
        });

        return (
            <View>
                <Image style={styles.image}
                       source={this.props.image} />
            </View>
        );
    }
}



BoardTile.propTypes = {
    word: React.PropTypes.string.isRequired
};



module.exports = BoardTile;