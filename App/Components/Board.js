var React = require('react-native');
var BoardTile = require('./BoardTile');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
    } = React;

class Board extends React.Component {

    render() {
        var tiles = this.props.tiles.map((item, index) => {
           return (
               <View key={index}>
                   <BoardTile word={item.word} image={item.image}/>
               </View>

           ) ;
        });
        return (
            <View style={styles.board}>
                <Text style={styles.title}>Col: {this.props.columns} Row: {this.props.rows}</Text>
                {tiles}
            </View>
        );
    }

}

var styles = StyleSheet.create({
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: '#fff'
    },
    board: {
        height: 500,
        width: 300,
        //borderRadius: 5,
        //marginTop: 10,
        alignSelf: 'center',
        borderColor: 'white',
        borderWidth: 1,
        //borderRadius: 8,
    },
});

Board.propTypes = {
    columns: React.PropTypes.number.isRequired,
    rows: React.PropTypes.number.isRequired
};

module.exports = Board;