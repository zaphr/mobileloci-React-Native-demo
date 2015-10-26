var React = require('react-native');
var Main = require('./App/Components/Main');
var Redux = require('react-redux/native');
var ReduxBase = require('redux');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View
    } = React;

var {
    Provider
    } = Redux;

let randomTile = () => {
    let tileNames = ['cat', 'dog', 'cow', 'duck', 'horse', 'penguin'];
    return tileNames[Math.floor(Math.random() * (tileNames.length))];
}

let imageForWord = (word) => {
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

let generateTilesForBoard = (numRows, numColumns) => {
    let tiles = [];
    for (let column = 0; column < numColumns; column++) {
        for (let row = 0; row < numRows; row++) {
            let word = randomTile();
            tiles.push(
                {
                    column: column,
                    row: row,
                    word: word,
                    image: imageForWord(word)
                });
        }
    }
    return tiles;
}


let initialState = {
    rows: 5,
    columns: 4,
    tiles: []
};

let board = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COLUMN':
            return {
                ...state,
                columns: state.columns + 1
            };
        case 'ADD_ROW':
            return {
                ...state,
                rows: state.rows + 1
            };
        case 'POPULATE_TILES':
            return {
                ...state,
                tiles: generateTilesForBoard(state.rows, state.columns)
            };
        default:
            return state;
    }
}


let store = ReduxBase.createStore(board);

//store.dispatch({ type: 'ADD_COLUMN' });
//store.dispatch({ type: 'ADD_ROW' });
store.dispatch({ type: 'POPULATE_TILES' });


class mobileloci extends React.Component {
    render() {
        return (
            <Provider store={store}>
                {() => <Main />}
            </Provider>
        );
    }
}
;

var styles = StyleSheet.create({
    container:{
        //flex: 1,
        backgroundColor: '#111111'
    },
});

AppRegistry.registerComponent('mobileloci', () => mobileloci);
