var React = require('react-native');
var BoardTile = require('./BoardTile');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    Image
    } = React;

class Board extends React.Component {

    constructor(props) {
        super(props)
        this.state = {};
        this.state.tiles = this.generateTilesForBoard(this.props.rows, this.props.columns);
    }

    ///

    randomTile() {
        let tileNames = ['cat', 'dog', 'cow', 'duck', 'horse', 'penguin'];
        return tileNames[Math.floor(Math.random() * (tileNames.length))];
    }

    imageForWord(word) {
        var image;
        switch(word) {
            case 'cat':
                image = require("image!cat");
                break;
            case 'dog':
                image = require("image!dog");
                break;
            case 'cow':
                image = require("image!cow");
                break;
            case 'duck':
                image = require("image!duck");
                break;
            case 'horse':
                image = require("image!horse");
                break;
            case 'penguin':
                image = require("image!penguin");
                break;
        }
        return image;
    }

    generateTilesForBoard(numRows, numColumns) {
        var tiles = [];
        for (var column = 0; column < numColumns; column++) {
            for (var row = 0; row < numRows; row++) {
                var word = this.randomTile();
                tiles.push(
                    {
                        column: column,
                        row: row,
                        word: word,
                        image: this.imageForWord(word)
                    });
            }
        }
        return tiles;
    }

    ///

    getInitialState() {
        console.log('getInitialState');
        return {
            tiles: this.generateTilesForBoard(this.props.rows, this.props.columns)
        }
    }

    render() {
        var tiles = this.state.tiles.map((item, index) => {
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