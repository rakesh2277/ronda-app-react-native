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
  ScrollView
} from 'react-native';
import NumericInput from 'react-native-numeric-input';

export default class FeaturedItem extends React.Component {
  static navigationOptions = {
    title: 'RONDA ROCHELL',
  };
  _onPressButton = () => {
    this.props.navigation.navigate('shop1')
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
                <Title style={styles.headertitel}>{this.props.title !== undefined && this.props.title !== null ? this.props.title : 'SHOP'}</Title>
              </Body>
            </Header>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.worldLineText}>World Line- Ronda Shop</Text>
          <Text style={styles.worldLineText2}>Ronda Rochel is dummy text of the printing and typesetting industry</Text>
          <Text style={styles.worldLineText2}>Lorem it been where has been the industry standard dummy text ever since the</Text>
          <Text style={styles.worldLineText2}>1500s, to the Cook</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            <View>
              <TouchableHighlight>
                <View style={styles.container}>
                  <Image style={styles.heartImage} source={require('../assest/icons/cirlce.png')} />
                  <Image style={styles.shoopingCartImage} source={require('../assest/icons/shopping-cart.png')} />
                  <Image source={require('../assest/images/bigblackhandbag.png')} style={styles.images} />
                  <Image source={require('../assest/icons/dots.png')} style={styles.tabmoreImage} />
                  <Image source={require('../assest/icons/dot.png')} style={styles.dotImage} />
                  <Image source={require('../assest/icons/dot.png')} style={styles.dotImagefirst} />
                  <Image source={require('../assest/icons/dot.png')} style={styles.dotImageSecond} />
                </View>
              </TouchableHighlight>
              <Text style={styles.titleText}>Big Black Hand Bag</Text>
              <Text style={styles.titlesText}>knitwear</Text>
              <Text style={styles.titleText}> 22.00 USD</Text>
            </View >
          </View>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 15,
          }}>
            <NumericInput onChange={value => console.log(value)}
              totalWidth={200}
              totalHeight={40}
              iconSize={15} />
            <TouchableHighlight onPress={this._onPressButton} style={styles.chekoutButtonstyling}>
              <Text style={styles.chekoutButton}>ADD TO CART</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'wheat',
    height: 430,
    width: 380,
    position: 'relative'
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
  heartImage: {
    position: 'absolute',
    right: 20,
    marginTop: 10,
  },
  shoopingCartImage: {
    position: 'absolute',
    right: 20,
    marginTop: 60,
  },
  textContainer: {
    backgroundColor: '#f2f2f2',
  },
  worldLineText: {
    color: '#4c4a49',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 2
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
    backgroundColor: "#00b5ec",
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
    height: 400,
    width: 350,
  },
  tabmoreImage: {
    left: 159,
    marginTop: 3
  },
  dotImage: {
    left: 173,
    bottom: 8
  },
  dotImagefirst: {
    left: 185,
    bottom: 15
  },
  dotImageSecond: {
    left: 197,
    bottom: 22
  },
  inputButtons: {
    width: 150,
    height: 50,
    backgroundColor: 'gray',
    alignSelf: 'flex-end',
    right: 0,
  },
  chekoutButton: {
    fontWeight: "bold",
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    padding: 10,
    right: 35,
  },
  chekoutButtonstyling: {
    width: 250,
    height: 40,
    alignItems: 'center',
    backgroundColor: "gray",
    borderBottomWidth: 1,
  },
  titlesText: {
    fontSize: 15,
    textAlign: 'center'
  }
});