import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableHighlight,
    Image,
    ScrollView,
    Dimensions
} from 'react-native';
import { Container } from 'native-base';
import CustomHeader from '../../component/customHeader';
var window = Dimensions.get('window');

export default class shop extends React.Component {
    static navigationOptions = {
        title: 'MainScreen',
        tabBarLabel: 'Add On',
        tabBarVisible: true,
        tabBarIcon: <Image
            source={require('../../assest/icons/tabAddOn.png')} />
    }
    _onPressButton = () => {
        this.props.navigation.navigate('AddOnShop')
    }
    onEntertain = () => {
        this.props.navigation.navigate('Entertain')
    }
    onfood = () => {
        this.props.navigation.navigate('Food')
    }
    onFeatured = () => {
        this.props.navigation.navigate('FeaturedItem')
    }
    render() {
        return (
            <Container>
                <CustomHeader title={'ADD ON'} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        <View>
                            <TouchableHighlight onPress={this._onPressButton}>
                                <ImageBackground style={styles.images} source={require('../../assest/images/addonshop.png')} >
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                                        <Text style={styles.imageText}>SHOP</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableHighlight>
                        </View>
                        <View>
                            <TouchableHighlight onPress={this.onfood}>
                                <ImageBackground style={styles.images} source={require('../../assest/images/addonfood.png')} >
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                                        <Text style={styles.imageText}>FOOD</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableHighlight>
                        </View>
                        <View>
                            <TouchableHighlight onPress={this.onEntertain}>
                                <ImageBackground style={styles.images} source={require('../../assest/images/entertain.png')} >
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                                        <Text style={styles.imageText}>ENTERTAIN</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableHighlight>
                        </View>
                        <View>
                            <TouchableHighlight onPress={this.onFeatured}>
                                <ImageBackground style={styles.images} source={require('../../assest/images/addonfeatureitem.png')} >
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                                        <Text style={styles.imageText}>FEATURED ITEMS</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableHighlight>
                        </View>
                    </View>
                </ScrollView>
            </Container >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#DCDCDC',
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
    imageText: {
        flex: 1,
        textAlign: 'center',
        paddingTop: 75,
        fontSize: 23,
        fontWeight: 'bold',
        color: 'white',
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
        height: 190,
        width: window.width,
    },
    price: {
        fontSize: 20,
    },
    rating: {
        paddingLeft: 0
    }
});
