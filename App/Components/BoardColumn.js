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
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: '#fff'
    },
    boardColumn: {
        //height: 500,
        //width: 300,
        //borderRadius: 5,
        //marginTop: 10,
        //alignSelf: 'center',
        borderColor: 'blue',
        borderWidth: 5,
        //borderRadius: 8,
    },
});

//Board.propTypes = {
//    columns: React.PropTypes.number.isRequired,
//    rows: React.PropTypes.number.isRequired
//};

module.exports = BoardColumn;