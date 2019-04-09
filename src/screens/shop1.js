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
  Animated,
  ImageBackground,
  TouchableHighlight,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';
import NumericInput from 'react-native-numeric-input';

var window = Dimensions.get('window');
export default class shop1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  _onPressButton = () => {
    this.props.navigation.navigate('ShopCheckOutScreen')
  };
  render() {
    return (
      <Container style={styles.container}>
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
              <Title style={styles.headertitel}>CART</Title>
              </Body>
            </Header>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          <View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                flexWrap: "wrap",
                margin: 20
              }}>
              <Image
                source={require("../assest/images/cartscrreenbag.png")}
                style={styles.images} />
              <View style={{ justifyContent: "center", marginLeft: 30 }}>
                <Text style={styles.bigBrownbagText}>Big Brown Vintage bag</Text>
                <Text>Color:<Text style={{ color: 'black' }}>Brown</Text></Text>
                <Text>Size:<Text style={{ color: 'black' }}>Small</Text></Text>
                <View style={{ textAlign: "center", flexDirection: "row" }}>
                  <Text style={styles.usdDpllarText}>22.00 USD</Text>
                  <NumericInput
                    value={this.state.value}
                    onChange={value => this.setState({ value })}
                    totalWidth={80}
                    totalHeight={30}
                    iconSize={25}
                    textColor='black'
                    fontWeight='bold'
                    onChange={value => console.log(value)}
                  />
                </View>
              </View>
              <Image
                source={require("../assest/icons/cancelIcon.png")}
                style={styles.cancelImages}
              />
              <View style={styles.breaklinebag} />
              <Image
                source={require("../assest/images/cartscrreenbag.png")}
                style={styles.images}
              />
              <View style={{ justifyContent: "center", marginLeft: 30 }}>
                <Text style={styles.bigBrownbagText}>Big Brown Vintage bag</Text>
                <Text>Color:<Text style={{ color: 'black' }}>Brown</Text></Text>
                <Text>Size:<Text style={{ color: 'black' }}>Small</Text></Text>
                <View style={{ textAlign: "center", flexDirection: "row" }}>
                  <Text style={styles.usdDpllarText}>22.00 USD</Text>
                  <NumericInput
                    value={this.state.value}
                    onChange={value => this.setState({ value })}
                    totalWidth={80}
                    totalHeight={30}
                    iconSize={25}
                    textColor='black'
                    fontWeight='bold'
                    onChange={value => console.log(value)}
                  />
                </View>
              </View>
              <Image
                source={require("../assest/icons/cancelIcon.png")}
                style={styles.cancelImages}
              />
              <View style={styles.breaklinebag} />
            </View>
            <View style={styles.addMoreheight}  >
              <Text style={styles.moreHeaderText}>Add on</Text>
              <View style={styles.breaklineAfterMmore} />
              <View style={styles.linkTextMarginTop}>
                <TouchableHighlight onPress={this._onPressButton}>
                  <ImageBackground style={styles.imagecontainers}>
                    <Animated.Image
                      style={styles.animatedImage}
                      source={require("../assest/icons/cartflower.png")}
                    />
                    <Text style={styles.imageText}>Flower</Text>
                    <Text style={styles.pricesText}>$USD</Text>
                    <View style={styles.signconatiner}>
                      <Text style={styles.signText}>+</Text>
                    </View>
                  </ImageBackground>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._onPressButton} style={styles.addcartextras}>
                  <View >
                    <Text style={styles.addExtrasButton}>Add</Text>
                  </View>
                </TouchableHighlight>
                <View style={styles.breaklineAfterMmore} />
              </View>
              <View style={styles.linkTextMarginTop}>
                <TouchableHighlight onPress={this._onPressButton}>
                  <ImageBackground style={styles.imagecontainers}>
                    <Animated.Image
                      style={styles.animatedImage}
                      source={require("../assest/icons/cartballons.png")}
                    />
                    <Text style={styles.imageText}>Ballons</Text>
                    <Text style={styles.pricesText}>$USD</Text>
                    <View style={styles.signconatiner}>
                      <Text style={styles.signText}>+</Text>
                    </View>
                  </ImageBackground>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._onPressButton} style={styles.addcartextras}>
                  <View >
                    <Text style={styles.addExtrasButton}>Add</Text>
                  </View>
                </TouchableHighlight>
                <View style={styles.breaklineAfterMmore} />
              </View>
              <View style={styles.linkTextMarginTop}>
                <TouchableHighlight onPress={this._onPressButton}>
                  <ImageBackground style={styles.imagecontainers}>
                    <Animated.Image
                      style={styles.animatedImage}
                      source={require("../assest/icons/cartgift.png")}
                    />
                    <Text style={styles.imageText}>Gifts</Text>
                    <Text style={styles.pricesText}>$USD</Text>
                    <View style={styles.signconatiner}>
                      <Text style={styles.signText}>+</Text>
                    </View>
                  </ImageBackground>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._onPressButton} style={styles.addcartextras}>
                  <View >
                    <Text style={styles.addExtrasButton}>Add</Text>
                  </View>
                </TouchableHighlight>
                <View style={styles.breaklineAfterMmore} />
              </View>
              <View style={styles.linkTextMarginTop}>
                <TouchableHighlight onPress={this._onPressButton}>
                  <ImageBackground style={styles.imagecontainers}>
                    <Animated.Image
                      style={styles.animatedImage}
                      source={require("../assest/icons/cartcards.png")}
                    />
                    <Text style={styles.imageText}>Cards</Text>
                    <Text style={styles.pricesText}>$USD</Text>
                    <View style={styles.signconatiner}>
                      <Text style={styles.signText}>+</Text>
                    </View>
                  </ImageBackground>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._onPressButton} style={styles.addcartextras}>
                  <View >
                    <Text style={styles.addExtrasButton}>Add</Text>
                  </View>
                </TouchableHighlight>
              </View>
              <View style={styles.breaklineAfterEnd} />
              <View style={{ flexDirection: "row", padding: 20 }}>
                <Text style={styles.totalAmountText}>Total Amount</Text>
                <Text style={styles.AmountText}>44.00 USD</Text>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
              <TouchableHighlight onPress={this._onPressButton} style={styles.chekoutButtonstyling}>
                <Text style={styles.chekoutButton}>CHECKOUT</Text>
              </TouchableHighlight>
              </View>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    position: "relative",
    resizeMode: "cover"
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
  addMoreheight: {
    marginLeft: 35,
    marginRight: 35,
    marginBottom: 35
  },
  AmountText: {
    fontWeight: "bold",
    fontSize: 21,
    color: 'black',
    left: 5
  },
  totalAmountText: {
    fontWeight: "bold",
    fontSize: 15,
    color: 'black',
    paddingRight: 70
  },
  chekoutButton: {
    fontWeight: "bold",
    fontSize: 15,
    color: 'white',
    padding: 10,
  },
  chekoutButtonstyling: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "gray",
    borderBottomWidth: 1,
  },
  addcartextras: {
    position: 'relative',
  },
  addExtrasButton: {
    width: 50,
    height: 20,
    alignItems: 'center',
    textAlign: 'center',
    borderWidth: 1,
    borderBottomColor: "black",
    fontSize: 10,
    color: 'black',
    padding: 3,
    position: "absolute",
    bottom: 25,
    left: 215
  },
  pricesText: {
    left: 176,
    fontSize: 13,
    bottom: 5,
    fontWeight: 'bold',
  },
  signconatiner: {
    backgroundColor: 'gray',
    height: 20,
    width: 20,
    left: 265,
    bottom: 25
  },
  signText: {
    left: 5,
    bottom: 1,
    color: 'white'
  },
  addbutttonplusSign: {
    backgroundColor: 'gray',
    height: 18,
    color: 'white',
    textAlign: 'center'
  },
  textContainer: {
    backgroundColor: "#f2f2f2"
  },
  imagecontainers: {
    position: "relative"
  },
  worldLineText: {
    color: "#4c4a49",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 20
  },
  worldLineText2: {
    color: "#4c4a49",
    textAlign: "center",
    fontSize: 11
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center"
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30
  },
  loginButton: {
    backgroundColor: "#00b5ec"
  },
  loginText: {
    color: "white"
  },
  price: {
    fontSize: 20
  },
  rating: {
    paddingLeft: 0
  },
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "black"
  },
  images: {
    height: 80,
    width: 80,
    justifyContent: "flex-start"
  },
  cancelImages: {
    height: 15,
    width: 15,
    justifyContent: "flex-end",
    marginTop: 40,
    marginLeft: 30
  },
  breaklineAfterMmore: {
    borderBottomColor: "#DCDCDC",
    borderBottomWidth: 1,
    width: "100%"
  },
  breaklinebag: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomColor: "#DCDCDC",
    borderBottomWidth: 1,
    width: "100%"
  },
  breaklineAfterEnd: {
    borderBottomColor: "#DCDCDC",
    borderBottomWidth: 1,
    width: "100%",
  },
  breaklineAfterADDOn: {
    borderBottomColor: "#DCDCDC",
    borderBottomWidth: 1,
    width: "100%"
  },
  usdDpllarText: {
    marginRight: 10,
    fontWeight: "bold",
    fontSize: 15,
    color: 'black',
    top: 5
  },
  bigBrownbagText: {
    fontWeight: "bold",
    fontSize: 15,
    color: 'black'
  },
  animatedImageEnd: {
    position: "absolute",
    marginLeft: 330
  },
  lognIcon: {
    position: "absolute",
    bottom: 0,
    left: 300
  },
  animatedImage: {
    position: "absolute",
    marginLeft: 3,
    marginRight: 3,
    marginTop: 12,
  },
  moreHeaderText: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 15,
    color: "black",
    paddingLeft: 10,
    bottom: 3
  },
  breaklineInnerSide: {
    borderBottomColor: "#DCDCDC",
    borderBottomWidth: 1,
    margin: 5,
    width: "100%"
  },
  imageText: {
    fontSize: 15,
    marginLeft: 30,
    top: 16,
    fontWeight: 'bold'
  },
  linkTextMarginTop: {
    marginTop: 5,
  },
});