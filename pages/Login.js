import React from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView, Image, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Footer from '../components/header'
import restLoginApi from '../src/restLogin'

class Home extends React.Component {
    state = {
        username: '',
        password: ''
    }

    Log = async () => {
        restLoginApi(this.state.username, this.state.password).then((res) => {
            if (res) {
                alert('Giriş başarılı')
                this.props.changeloginstate('Welcome '+this.state.username)                
                this.props.navigation.navigate('UsersScreen')
            }
            else {
                alert('Wrong username or password')
            }
        })
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={{ flex: 1 }} >
                <Footer />
                <ScrollView style={{ flex: 1, padding: 10 }} >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                        <Image style={{ height: 100, width: 100, resizeMode: 'contain' }} source={require('../images/logo.png')} />
                        <Text>Please Login</Text>
                    </View>
                    <TextInput value={this.state.username} onChangeText={(text) => this.setState({ username: text })} placeholder='Enter the username' style={styles.inputstyle} />
                    <TextInput value={this.state.password} onChangeText={(text) => this.setState({ password: text })} placeholder='Enter the password' style={styles.inputstyle} secureTextEntry />
                    <TouchableOpacity onPress={() => this.Log()} style={styles.logbutton} >
                        <Text style={styles.logbuttontext} >LOGIN</Text>
                    </TouchableOpacity>
                </ScrollView>
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
        changeloginstate: (newloginstate) => dispatch({ type: 'setLoginState', login: newloginstate })
    }
}


const styles = StyleSheet.create({

    inputstyle: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 10,
        padding: 10
    },
    logbutton: {
        backgroundColor: 'rgb(1,122,254)',
        borderRadius: 10,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    logbuttontext: {
        color: 'white'
    }

});


export default connect(mapStateToProps, mapDispatchToProps)(Home)