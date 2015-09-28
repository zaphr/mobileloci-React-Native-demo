var React = require('react-native');
var BoardTile = require('./BoardTile');
var Board = require('./Board');

var Redux = require('react-redux/native');


function mapStateToProps(state) {
    return {
        rows: state.rows,
        columns: state.columns,
        tiles: state.tiles
    };
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
    return {
        onIncrement: () => dispatch(increment())
    };
}

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
    } = React;


class Main extends React.Component {

    render() {
        return (
            <View style={styles.mainContainer}>
                <Board columns={this.props.columns}
                       rows={this.props.rows}
                       tiles={this.props.tiles}
                />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    mainContainer: {
        //flex: 1,
        //padding: 30,
        marginTop: 65,
        //flexDirection: 'column',
        //justifyContent: 'center',
        backgroundColor: 'grey',
        borderWidth: 5,
        borderColor: 'black',
        //width: 100,
        //flexWrap: 'wrap'
    },

});

module.exports = Redux.connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);