var React = require('react-native');
var BoardColumn = require('./BoardColumn');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
    } = React;

class Board extends React.Component {
    render() {
        let columns = this.tileColumns(this.props.tiles, this.props.rows);
        let columnElements = columns.map((item, index) => {
           return (
               <View key={index}>
                   <BoardColumn tileSize={this.props.tileSize}
                       tiles={item.reverse()}/>
               </View>
           ) ;
        });
        return (
            <View style={styles.board}>
                {columnElements}
            </View>
        );
    }

    tileColumns(tiles, rowLength) {
        let columns = [];
        for(let i = 0; i < tiles.length; i+= rowLength){
            columns.push(tiles.slice(i, i + rowLength));
        }
        return columns;
    }
}

var styles = StyleSheet.create({

    board: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        //borderColor: 'red',
        //borderWidth: 1,
        left: 0
    },
});

Board.propTypes = {
    columns: React.PropTypes.number.isRequired,
    rows: React.PropTypes.number.isRequired,
    tileSize: React.PropTypes.number.isRequired
};

module.exports = Board;