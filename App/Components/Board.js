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
                   <BoardColumn tiles={item}/>
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
        //height: 500,
        //width: 300,

        flex: 1,
        flexDirection: 'row',

        alignSelf: 'center',
        borderColor: 'white',
        borderWidth: 1,
    },
});

Board.propTypes = {
    columns: React.PropTypes.number.isRequired,
    rows: React.PropTypes.number.isRequired
};

module.exports = Board;