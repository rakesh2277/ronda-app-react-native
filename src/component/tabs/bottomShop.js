import React from 'react';
import { Container } from 'native-base';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
    ScrollView,
    ImageBackground,
    Dimensions
} from 'react-native';
import CustomHeader from '../customHeader';
var window = Dimensions.get('window');

export default class BottomShop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    static navigationOptions = {
        title: 'Shop',
        tabBarIcon: <Image
            source={require('../../assest/icons/tabShop2.png')}
        />
    }
    _onPressButton = () => {
        this.props.navigation.navigate('HomePage')
    }
    onEntertain = () => {
        this.props.navigation.navigate('Entertain')
    }
    onTravel = () => {
        this.props.navigation.navigate('Travel')
    }
    onInterview = () => {
        this.props.navigation.navigate('Interview')
    }
    render() {
        return (
            <Container>
                <CustomHeader />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        <View>
                            <TouchableHighlight onPress={this._onPressButton}>
                                <ImageBackground style={styles.images} source={require('../../assest/images/rrexclusive.png')} >
                                    <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                                        <Text style={styles.imageText}>RR EXCLUSIVE PRODUCTS</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableHighlight>
                        </View>
                        <View>
                            <TouchableHighlight onPress={this.onEntertain}>
                                <ImageBackground style={styles.images} source={require('../../assest/images/entertaining.png')} >
                                    <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                                        <Text style={styles.imageText}>ENTERTAINING</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableHighlight>
                        </View>
                        <View>
                            <TouchableHighlight onPress={this.onTravel}>
                                <ImageBackground style={styles.images} source={require('../../assest/images/jetset.png')} >
                                    <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                                        <Text style={styles.imageText}>JET-SET TRAVEL MENU</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableHighlight>
                        </View>
                        <View>
                            <TouchableHighlight onPress={this.onInterview}>
                                <ImageBackground style={styles.images} source={require('../../assest/images/addonfeatureitem.png')} >
                                    <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                                        <Text style={styles.imageText}>INTERVIEW</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableHighlight>
                        </View>
                    </View>
                </ScrollView>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    headermain: {
        backgroundColor: 'white'
    },
    headertitel: {
        color: 'black',
        textAlign: 'center',
        justifyContent: 'center'
    },
    imageText: {
        textAlign: 'center',
        paddingTop: 100,
        fontSize: 23,
        fontWeight: 'bold',
        color: 'white',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: '#00b5ec',
    },
    loginText: {
        color: 'white',
    },
    images: {
        height: 250,
        width: window.width,
    },
    price: {
        fontSize: 20,
    },
    rating: {
        paddingLeft: 0
    },
});






