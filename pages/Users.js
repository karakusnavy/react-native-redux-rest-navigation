import React from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView, Image, StyleSheet, Modal } from 'react-native'
import Footer from '../components/header'
import usersJson from '../src/users.json'

class Users extends React.Component {
    state = {
        usersData: [],
        detailModal: true,
        singleUser: []
    }


    clickDetail(id) {
        this.state.usersData.forEach(element => {
            if (id == element.id)
                this.setState({ singleUser: element, detailModal: true })
        });
    }

    userSingle(key, id, namesurname) {
        return (
            <View style={styles.userSingle} key={key}>

                <View style={{ flex: 1, alignItems: 'flex-start' }} >
                    <Text>{namesurname}</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }} >
                    <TouchableOpacity onPress={() => this.clickDetail(id)} style={styles.button} >
                        <Text>DETAIL</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    componentDidMount() {
        this.setState({ usersData: usersJson })
    }

    render() {
        return (
            <View style={{ flex: 1 }} >
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.detailModal}
                    onRequestClose={() => {
                        this.setState({ detailModal: false })
                    }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'black', padding: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontWeight: 'bold' }}>ID: </Text>
                                <Text>{this.state.singleUser.id}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontWeight: 'bold' }}>Name Surname: </Text>
                                <Text>{this.state.singleUser.namesurname}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontWeight: 'bold' }}>Username: </Text>
                                <Text>{this.state.singleUser.username}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontWeight: 'bold' }}>Password: </Text>
                                <Text>{this.state.singleUser.password}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontWeight: 'bold' }}>Email: </Text>
                                <Text>{this.state.singleUser.email}</Text>
                            </View>
                            <TouchableOpacity onPress={()=>this.setState({detailModal:false})} style={{marginTop:10}} >
                                <Text style={{color:'red'}} >Close the modal</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </Modal>
                <Footer />
                <ScrollView style={{ flex: 1, padding: 10 }} >
                    {
                        this.state.usersData.map((item) =>
                            this.userSingle(item.key, item.id, item.namesurname)
                        )
                    }
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({

    userSingle: {
        backgroundColor: 'rgb(255,255,255)',
        padding: 15,
        elevation: 1,
        margin: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'whitesmoke',
        padding: 5,
        borderRadius: 10
    }

});


export default Users