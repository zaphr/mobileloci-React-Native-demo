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
                height: this.props.tileSize - 15,
                width: this.props.tileSize - 15,
                //borderColor: 'red',
                //borderWidth: 1,
            },
            container: {
                borderColor: 'white',
                borderWidth: 1,
                height: this.props.tileSize,
                width: this.props.tileSize,
                flex: 1,
                alignItems: 'center'
            },
            debugText: {
                color: 'black',
                fontSize: 14,
                //opacity: 0.1
            },
            backdropView: {
                height: this.props.tileSize,
                width: this.props.tileSize,
                backgroundColor: 'rgba(0,0,0,0)'
            }
        });

        return (
            <View style={styles.container}>
                <Image style={styles.image}
                       source={this.props.image}>
                </Image>


            </View>
        );
    }
}





BoardTile.propTypes = {
    word: React.PropTypes.string.isRequired
};


module.exports = BoardTile;