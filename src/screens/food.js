


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
    ImageBackground,
    WebView
} from 'react-native';
import Video from 'react-native-video';
var window = Dimensions.get('window');

export default class Food extends Component {
    /** https://stackoverflow.com/questions/49967879/navigate-is-not-defined-in-react-native#answer-49967957 */

    static navigationOptions = ({ navigation: { navigate } }) => ({
        title: 'RONDA ROCHELL',
        headerRight: (
            <Icon name="search" size={28} color="#5751D9" style={{ marginRight: 30 }}
                onPress={() => { navigate('search') }} />
        )
    })
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    _onPressButton = () => {
        this.props.navigation.navigate('CategoryFood')
    }
    onfood = () => {
        this.props.navigation.navigate('Entertain')
    }
    onEntertain = () => {
        this.props.navigation.navigate('categoryItem')
    }
    render() {
        return (
            <Container>
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
                                <Title style={styles.headertitel}>FOOD</Title>
                            </Body>
                        </Header>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                    <View style={styles.headerrcontainerEntertain}>
                        <WebView
                            resizeMode="none"
                            alignSelf= 'stretch'
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                            scrollEnabled={false}
                            scalesPageToFit={false}
                            source={{
                                uri: 'https://www.youtube.com/watch?v=De4FqIkvHX0'
                            }}
                        />
                    </View >
                    <View style={{flexDirection: 'row', justifyContent:'center'}}>
                    <Image source={require('../assest/images/quote-left.png')}/>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.worldLineText2}>Lorem it been where has been the industry standard dummy text</Text>
                        <Text style={styles.worldLineText2}>Lorem it been where has been the industry standard dummy text</Text>
                        <Text style={styles.worldLineText2}>to the cook</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', backgroundColor: '#f2f2f2' }}>
                        <View style={styles.entertainmentCategoryImages}>
                            <TouchableHighlight onPress={this._onPressButton}>
                                <ImageBackground style={styles.imagecontainers}>
                                    <Image source={require('../assest/images/foodAmletEnterteinment.png')} style={styles.images} />
                                    <Text style={styles.titleText}>FOOD</Text>
                                    <Text style={styles.worldLineText2}>Lorem it been where  </Text>
                                </ImageBackground>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.entertainmentCategoryImages}>
                            <TouchableHighlight onPress={this._onPressButton}>
                                <Image source={require('../assest/images/foodPieceandLoveMeals.png')} style={styles.images} />
                            </TouchableHighlight>
                            <Text style={styles.titleText}>PIECE AND LOVE MEALS</Text>
                            <Text style={styles.worldLineText2}>Lorem it been where  </Text>
                        </View>
                        <View style={styles.entertainmentCategoryImages}>
                            <TouchableHighlight onPress={this._onPressButton}>
                                <Image source={require('../assest/images/foodRestourentEntertainment.png')} style={styles.images} />
                            </TouchableHighlight>
                            <Text style={styles.titleText}>RESTAURANT FAVORITES</Text>
                            <Text style={styles.worldLineText2}>Lorem it been where  </Text>
                        </View>
                        <View style={styles.entertainmentCategoryImages}>
                            <TouchableHighlight onPress={this._onPressButton}>
                                <Image source={require('../assest/images/foodEnterinEntertain.png')} style={styles.images} />
                            </TouchableHighlight>
                            <Text style={styles.titleText}>ENTERTAIN</Text>
                            <Text style={styles.worldLineText2}>Lorem it been where  </Text>
                        </View>
                        <View style={styles.entertainmentCategoryImages}>
                            <TouchableHighlight onPress={this._onPressButton}>
                                <Image source={require('../assest/images/foodShopEntertainment.png')} style={styles.images} />
                            </TouchableHighlight >
                            <Text style={styles.titleText}>SHOP</Text>
                            <Text style={styles.worldLineText2}>Lorem it been where  </Text>
                        </View>
                        <View style={styles.entertainmentCategoryImages}>
                            <TouchableHighlight onPress={this._onPressButton}>
                                <Image source={require('../assest/images/foodJetSEtMenu.png')} style={styles.images} />
                            </TouchableHighlight>
                            <Text style={styles.titleText}>JET-SET MENU</Text>
                            <Text style={styles.worldLineText2}>Lorem it been where  </Text>
                        </View >
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 10 }}>
                        <View style={styles.footercontainerfood}>
                            <Text style={styles.foodstyling}>ENTERTAIN</Text>
                            <TouchableHighlight onPress={this.onfood}>
                                <Image source={require('../assest/images/musicentertainment.png')} style={styles.imagesfooterfirst} />
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
        left:75,
        fontWeight: 'bold',
    },
    infoimage: {
        right: 20
    },
    headerIconimage: {
        left: 85,
        top: 10
    },
    textContainer: {
        backgroundColor: '#f2f2f2',
    },
    lefticonstyling: {
        marginLeft: 210,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    worldLineText: {
        color: '#4c4a49',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 20,
    },
    worldLineText2: {
        color: '#4c4a49',
        textAlign: 'center',
        fontSize: 11,
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
        color: 'black',
    },
    underline: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        position: 'absolute',
        top: 168,
        textAlignVertical: "center", 
        textAlign: "center",
    },
    images: {
        height: 170,
        width: 150,
        resizeMode: 'contain'
    },
    entertainmentCategoryImages: {
        position: 'relative',
        width: (window.width - 10) / 2,
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 10
    },
    iconimages: {
        position: 'absolute',
        zIndex: 1,
        right: 5,
        marginTop: 10,
        height: 20,
        width: 22
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
        height: 150,
        position: 'relative',
        
    },
    imagesHeaderfootersecond: {
        height: 130,
        width: 150,
        left: 8,
        marginTop: 30,
    },
    imagesfooterfirst: {
        height: 70,
        width: 100,
        left: 3,
        marginTop: 30,
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
        right: 10,
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
        marginTop: 30,
        left: 180
    },
    entertainstylingHeaderfirst: {
        position: 'absolute',
        color: 'white',
        marginTop: 30,
        left: 200,
        fontWeight: 'bold'
    },
    entertainstylingHeadersecond: {
        position: 'absolute',
        color: 'white',
        marginTop: 50,
        left: 210,
        fontWeight: 'bold'
    },
    imagecontainers: {
        position: 'relative',
    },
});
