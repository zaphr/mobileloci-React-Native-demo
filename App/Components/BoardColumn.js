var React = require('react-native');
var BoardTile = require('./BoardTile');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
    } = React;

class BoardColumn extends React.Component {
    render() {
        var tiles = this.props.tiles.map((item, index) => {
           return (
               <View key={index}>
                   <BoardTile word={item.word} image={item.image}
                   column={item.column} row={item.row}/>
               </View>
           ) ;
        });
        return (
            <View style={styles.boardColumn}>
                {tiles}
            </View>
        );
    }
}

var styles = StyleSheet.create({
    boardColumn: {
        borderColor: 'blue',
        borderWidth: 5,
    },
});

module.exports = BoardColumn;