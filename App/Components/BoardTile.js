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
                borderColor: 'red',
                borderWidth: 1,
            },
            container: {
                borderColor: 'white',
                borderWidth: 1,
                height: 70,
                width: 70,
                flex: 1,
                alignItems: 'center'
            },
            debugText: {
                color: 'black',
                fontSize: 14,
                //opacity: 0.1
            },
            backdropView: {
                height: 70,
                width: 70,
                backgroundColor: 'rgba(0,0,0,0)'
            }
        });

        return (
            <View style={styles.container}>
                <Image style={styles.image}
                       source={this.props.image}>
                    <View style={styles.backdropView}>
                    <Text style={styles.debugText}>C:{this.props.column}|R:{this.props.row}</Text>
                        </View>
                </Image>


            </View>
        );
    }
}



BoardTile.propTypes = {
    word: React.PropTypes.string.isRequired
};


module.exports = BoardTile;