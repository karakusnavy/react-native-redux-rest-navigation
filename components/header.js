import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'

class Header extends React.Component {
    state = {
        name: ''
    }
    render() {
        return (
            <View style={{ padding: 10, justifyContent: 'center', alignItems: 'center', height: 70, backgroundColor: 'whitesmoke', elevation: 1, flexDirection: 'row' }} >
                <View style={{ flex: 1, alignItems: 'flex-start' }} >
                    <Text style={{ fontWeight: 'bold' }} >BEAUTICO</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }} >
                    <Text>{this.props.loginstate}</Text>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loginstate: state.loginstate
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        degistir: (newname) => dispatch({ type: 'setName', newname: newname })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)