import React, { Component } from 'react';
import {
    Container,
    Header,
    Left,
    Body,
    Right,
    Button,
    Icon,
    Title
} from 'native-base';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
    ScrollView,
    Dimensions,
    ImageBackground
} from 'react-native';
var window = Dimensions.get('window');

export default class EntertainCategories extends React.Component {
    static navigationOptions = {
        title: 'RONDA ROCHELL',
    };
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    _onPressButton = () => {
        this.props.navigation.navigate('CategoryMovie')
    }
    onfood = () => {
        this.props.navigation.navigate('Food')
    }
    onEntertain = () => {
        this.props.navigation.navigate('categoryItem')
    }
    render() {
        return (
            <Container >
                <View>
                    <View>
                        <Header style={styles.headermain} >
                            <Left>
                                <Image source={require('../assest/icons/Vector-Smart-Object1.png')} />
                            </Left>
                            <Image style={styles.headerIconimage} source={require('../assest/icons/headerIcon.png')} />
                            <Right>
                                <Image style={styles.infoimage} source={require('../assest/images/infos.png')} />
                                <Image source={require('../assest/images/tabshop.png')} />
                            </Right>
                        </Header>
                    </View>
                    <View>
                        <Header style={styles.headermain} >
                            <Left>
                                <Icon name="arrow-back" onPress={() =>
                                    this.props.navigation.goBack()} />
                            </Left>
                            <Body>
                                <Title style={styles.headertitel}>ENTERTAIN</Title>
                            </Body>
                        </Header>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                    <View style={styles.textContainer}>
                        <Text style={styles.worldLineText}>World Line-Ronda Entertainment</Text>
                        <Text style={styles.worldLineText2}>Ronda Rochel is dummy text of the printing and typesetting industry</Text>
                        <Text style={styles.worldLineText2}>Lorem it been where has been the industry standard dummy text ever since the</Text>
                        <Text style={styles.worldLineText2}>1500s, to the Cook</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', backgroundColor: '#f2f2f2' }}>
                        <View style={styles.entertainmentCategoryImages}>
                            <TouchableHighlight onPress={this._onPressButton}>
                                <ImageBackground style={styles.imagecontainers}>
                                    <Image source={require('../assest/images/musicEvent.png')} style={styles.images} />
                                    <Text style={styles.titleText}>Music Event</Text>
                                    <Text style={styles.worldLineText2}>Ronda Rochel is dummy text of the</Text>
                                    <Text style={styles.worldLineText2}>Ronda text typesetting industry text ever</Text>
                                    <Text style={styles.worldLineText2}>since the 1500s, to the Cook</Text>
                                </ImageBackground>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.entertainmentCategoryImages}>
                            <TouchableHighlight onPress={this._onPressButton}>
                                <ImageBackground style={styles.imagecontainers}>
                                    <Image source={require('../assest/images/jetSets.png')} style={styles.images} />
                                    <Text style={styles.titleText}>Jet set menu</Text>
                                    <Text style={styles.worldLineText2}>Ronda Rochel is dummy text of the</Text>
                                    <Text style={styles.worldLineText2}>Ronda text typesetting industry text ever</Text>
                                    <Text style={styles.worldLineText2}>1500s, to the Cook</Text>
                                </ImageBackground>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.entertainmentCategoryImages}>
                            <TouchableHighlight onPress={this._onPressButton}>
                                <ImageBackground style={styles.imagecontainers}>
                                    <Image source={require('../assest/images/movies.png')} style={styles.images} />
                                    <Text style={styles.titleText}>Movie</Text>
                                    <Text style={styles.worldLineText2}>Ronda Rochel is dummy text of the</Text>
                                    <Text style={styles.worldLineText2}>Ronda text typesetting industry text ever</Text>
                                    <Text style={styles.worldLineText2}>since the 1500s, to the Cook</Text>
                                </ImageBackground>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.entertainmentCategoryImages}>
                            <TouchableHighlight onPress={this._onPressButton}>
                                <ImageBackground style={styles.imagecontainers}>
                                    <Image source={require('../assest/images/travels.png')} style={styles.images} />
                                    <Text style={styles.titleText}>TRAVEL</Text>
                                    <Text style={styles.worldLineText2}>Ronda Rochel is dummy text of the</Text>
                                    <Text style={styles.worldLineText2}>Ronda text typesetting industry text ever</Text>
                                    <Text style={styles.worldLineText2}>since the 1500s, to the Cook</Text>
                                </ImageBackground>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 10 }}>
                        <View style={styles.footercontainerfood}>
                            <Text style={styles.foodstyling}>FOOD</Text>
                            <TouchableHighlight onPress={this.onfood}>
                                <Image source={require('../assest/images/food.png')} style={styles.imagesfooterfirst} />
                            </TouchableHighlight>
                        </View>
                        <View style={styles.footercontainerEntertain}>
                            <Text style={styles.entertainstyling}>SHOP</Text>
                            <TouchableHighlight onPress={this.onEntertain}>
                                <Image source={require('../assest/images/entartainmentShop.png')} style={styles.imagesfootersecond} />
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
        backgroundColor: '#DCDCDC',
    },
    headermain: {
        backgroundColor: 'white'
    },
    headertitel: {
        color: 'black',
        left:60,
        fontWeight: 'bold',
    },
    infoimage: {
        right: 20
    },
    headerIconimage: {
        left:85,
        top: 10
    },
    textContainer: {
        backgroundColor: '#f2f2f2',
    },
    worldLineText: {
        color: '#4c4a49',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 20,
    },
    worldLineText2: {
        textAlign: 'center',
        fontSize: 10,
        color: '#808080'
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 256,
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
    price: {
        fontSize: 20,
    },
    rating: {
        paddingLeft: 0
    },
    baseText: {
        fontFamily: 'Cochin',
    },
    titleText: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black'
    },
    entertainmentCategoryImages: {
        position: 'relative',
        width: (window.width - 10) / 2,
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 10
    },
    images: {
        height: 110,
        width: 160,
        resizeMode: 'contain'
    },
    footercontainerfood: {
        backgroundColor: 'black',
        marginBottom: 10,
        borderRadius: 5,
        width: (window.width - 20) / 2,
        height: 110,
        position: 'relative',
        left: 2
    },
    footercontainerEntertain: {
        backgroundColor: 'black',
        marginBottom: 10,
        borderRadius: 5,
        width: (window.width - 20) / 2,
        height: 110,
        position: 'relative',
        right: 2
    },
    headerrcontainerEntertain: {
        backgroundColor: 'black',
        marginBottom: 10,
        borderRadius: 5,
        marginTop: 10,
        marginLeft: 15,
        width: (window.width - 30),
        height: 160,
        position: 'relative',
    },
    imagesHeaderfootersecond: {
        height: 140,
        width: 130,
        left: 10,
        marginTop: 10,
    },
    imagesfooterfirst: {
        height: 70,
        width: 100,
        left: 10,
        marginTop: 40,
    },
    imagesfootersecond: {
        height: 110,
        width: 120,
        left: 45,
        marginTop: 10,
        resizeMode: 'contain'
    },
    foodstyling: {
        position: 'absolute',
        color: 'white',
        marginTop: 40,
        right: 35,
    },
    entertainstyling: {
        position: 'absolute',
        color: 'white',
        marginTop: 40,
        left: 10
    },
    entertainstylingHeader: {
        position: 'absolute',
        color: 'white',
        marginTop: 60,
        left: 150
    },
    imagecontainers: {
        position: 'relative',
    },
});

