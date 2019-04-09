import React, { Component } from 'react';
import {
    Container,
    Header,
    Left,
    Body,
    Right,
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
    Dimensions
} from 'react-native';
var window = Dimensions.get('window');

export default class AddOnShopCategoriesPage extends Component {
    /** https://stackoverflow.com/questions/49967879/navigate-is-not-defined-in-react-native#answer-49967957 */
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    _onPressButton = () => {
        this.props.navigation.navigate('categoryItem')
    }
    onfood = () => {
        this.props.navigation.navigate('Food')
    }
    onEntertain = () => {
        this.props.navigation.navigate('Entertain')
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
                                <Title style={styles.headertitel}>{this.props.title !== undefined && this.props.title !== null ? this.props.title : 'SHOP'}</Title>
                            </Body>
                        </Header>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                    <View style={styles.textContainer}>
                        <Text style={styles.worldLineText}>World Line- Ronda Shop</Text>
                        <Text style={styles.worldLineText2}>Ronda Rochel is dummy text of the printing and typesetting industry</Text>
                        <Text style={styles.worldLineText2}>Lorem it been where has been the industry standard dummy text ever since the</Text>
                        <Text style={styles.worldLineText2}>1500s, to the Cook</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        <View style={styles.productitem}>
                            <Image source={require('../assest/icons/heartsimages.png')} style={styles.iconimages} />
                            <TouchableHighlight onPress={this._onPressButton}>
                                <Image source={require('../assest/images/productjeans.png')} style={styles.images} />
                            </TouchableHighlight>
                            <Text style={styles.titleText}>Jeans For men</Text>
                            <Text style={styles.titleText}> $22 </Text>
                        </View>
                        <View >
                            <Image source={require('../assest/icons/cirlce.png')} style={styles.iconimages} />
                            <TouchableHighlight onPress={this._onPressButton}>
                                <Image source={require('../assest/images/productbag.png')} style={styles.images} />
                            </TouchableHighlight>
                            <Text style={styles.titleText}>Dark Blue Bag</Text>
                            <Text style={styles.titleText}>$12 </Text>
                        </View>
                        <View >
                            <Image source={require('../assest/icons/cirlce.png')} style={styles.iconimages} />
                            <TouchableHighlight onPress={this._onPressButton}>
                                <Image source={require('../assest/images/producthat.png')} style={styles.images} />
                            </TouchableHighlight>
                            <Text style={styles.titleText}>Light Brown Hat</Text>
                            <Text style={styles.titleText}> $15 </Text>
                        </View>
                        <View >
                            <Image source={require('../assest/icons/cirlce.png')} style={styles.iconimages} />
                            <TouchableHighlight onPress={this._onPressButton}>
                                <Image source={require('../assest/images/productshoes.png')} style={styles.images} />
                            </TouchableHighlight>
                            <Text style={styles.titleText}>Shoes for Women</Text>
                            <Text style={styles.titleText}> $22 </Text>
                        </View>
                        <View >
                            <Image source={require('../assest/icons/cirlce.png')} style={styles.iconimages} />
                            <TouchableHighlight onPress={this._onPressButton}>
                                <Image source={require('../assest/images/productblue.png')} style={styles.images} />
                            </TouchableHighlight >
                            <Text style={styles.titleText}>Light Blue Bag</Text>
                            <Text style={styles.titleText}> $15 </Text>
                        </View>
                        <View >
                            <Image source={require('../assest/icons/cirlce.png')} style={styles.iconimages} />
                            <TouchableHighlight onPress={this._onPressButton}>
                                <Image source={require('../assest/images/productwatches.png')} style={styles.images} />
                            </TouchableHighlight>
                            <Text style={styles.titleText}>Branded Watch</Text>
                            <Text style={styles.titleText}> $22 </Text>
                        </View>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.worldLineText}>Ronda Rochell Shop</Text>
                        <Text style={styles.worldLineText2}>Ronda Rochel is dummy text of the printing and typesetting industry</Text>
                        <Text style={styles.worldLineText2}>Lorem it been where has been the industry standard dummy text ever since the</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        <View style={styles.footercontainerfood}>
                            <Text style={styles.foodstyling}>FOOD</Text>
                            <TouchableHighlight onPress={this.onfood}>
                                <Image source={require('../assest/images/food.png')} style={styles.imagesfooterfirst} />
                            </TouchableHighlight>
                        </View>
                        <View style={styles.footercontainerEntertain}>
                            <Text style={styles.entertainstyling}>ENTERTAIN</Text>
                            <TouchableHighlight onPress={this.onEntertain}>
                                <Image source={require('../assest/images/Entertains.png')} style={styles.imagesfootersecond} />
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
        paddingLeft: 30,
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
        color: 'black'
    },
    images: {
        height: 170,
        position: 'relative',
        width: (window.width - 20) / 2
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
    imagesfooterfirst: {
        height: 70,
        width: 100,
        left: 10,
        marginTop: 40,
    },
    imagesfootersecond: {
        height: 110,
        width: 120,
        left: 80,
        marginTop: 10,
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
    }
});
