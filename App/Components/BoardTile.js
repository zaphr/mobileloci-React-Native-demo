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
                //left: this.props.column * 60,
                //top: this.props.row * 60,
                borderColor: 'white',
                borderWidth: 1,
                height: 80,
                width: 80,
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