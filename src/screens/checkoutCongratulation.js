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
  Dimensions
} from 'react-native';
var window = Dimensions.get('window');

export default class checkoutCongratulation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  _onPressButton = () => {
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
                <Title style={styles.headertitel}>CHECKOUT</Title>
              </Body>
            </Header>
          </View>
        </View>
        <View>
          <View style={styles.container}>
            <Image style={styles.congratulationBgImage} source={require('../assest/images/checkoutbackgroundt.png')} />
            <Image style={styles.congratulationCheckedImage} source={require('../assest/images/checked.png')} />
            <Text style={styles.checkedText}>Congratulations</Text>
            <Text style={styles.checkedinnerText}>Your order has been placed</Text>
            <Text style={styles.checkeOrderIdText}>Order id:15565</Text>
            <TouchableHighlight onPress={this._onPressButton} style={styles.orderButtonstyling}>
              <Text style={styles.orderIdButton}>ORDER DETAIL</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
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
    left: 85,
    top: 10
  },
  congratulationBgImage: {
    height: 700,
    width: window.width,
    position: 'relative'
  },
  congratulationCheckedImage: {
    height: 100,
    width: 100,
    top: 150,
    position: 'absolute',
  },
  checkedText: {
    top: 270,
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    color: 'black',
    position: 'absolute'
  },
  checkedinnerText: {
    top: 300,
    fontWeight: 'normal',
    fontSize: 15,
    textAlign: 'center',
    color: 'black',
    position: 'absolute'
  },
  checkeOrderIdText: {
    top: 400,
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    color: 'black',
    position: 'absolute'
  },
  orderIdButton: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
    padding: 10,
    textAlign: 'center',
  },
  orderButtonstyling: {
    width: (window.width - 20) / 2,
    alignItems: 'center',
    backgroundColor: 'gray',
    borderBottomWidth: 1,
    position: 'absolute',
    top: 450
  },
});