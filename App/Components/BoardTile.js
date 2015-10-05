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
            },
            container: {
                borderColor: 'white',
                borderWidth: 1,
                height: 70,
                width: 70,
            }
        });

        return (
            <View style={styles.container}>
                <Image style={styles.image}
                       source={this.props.image} />
                <Text>C:{this.props.column}|R:{this.props.row}</Text>

            </View>
        );

    }
}



BoardTile.propTypes = {
    word: React.PropTypes.string.isRequired
};


module.exports = BoardTile;