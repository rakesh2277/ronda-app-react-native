import React from 'react';
import { Container } from 'native-base';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Dimensions
} from 'react-native';
import CustomHeader from '../../component/customHeader';
var window = Dimensions.get('window');

export default class giftCard extends React.Component {
  constructor() {
    super()
    this.state = {
      enterValue: '',
      // textValue: '',
      value50: '50',
      Value100: '100',
      Value200: '200',
      Value500: '500',

    }
  }
  static navigationOptions = {
    title: 'MainScreen',
    tabBarLabel: 'Gift Card',
    tabBarVisible: true,
    tabBarIcon: <Image
      source={require('../../assest/icons/tabGift.png')}
    />
  }
  _onPressButton = () => {
    this.props.navigation.navigate('shop1')
  }
  handlValue50 = () => {
    this.setState({
      textValue: this.state.value50
    })
  }
  handlValue100 = () => {
    this.setState({
      textValue: this.state.Value100
    })
  }
  handlValue200 = () => {
    this.setState({
      textValue: this.state.Value200
    })
  }
  handlValue500 = () => {
    this.setState({
      textValue: this.state.Value500
    })

  }
  render() {
    return (
      <Container style={styles.container}  >
        <CustomHeader title={'GIFT CARD'} />
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'stretch', }}>
          <View style={{ height: 300, padding: 20, backgroundColor: 'white', margin: 15 }}>
            <Image style={styles.GiftCard} source={require('../../assest/icons/giftcardnew.png')} />
            <Text style={styles.buyGiftCard}>Buy Gift Card</Text>
            <View style={styles.input_and_button_margin}>
              <TextInput style={styles.input}
                keyboardType='numeric'
                returnKeyType='done'
                underlineColorAndroid="transparent"
                placeholder="Enter Amount" placeholderTextColor='black'
                autoCapitalize="none"
                value={this.state.textValue}
                onChangeText={(textValue) => this.setState({textValue})}

             
              />

              <View style={styles.gift_card_submit_button}>

                <TouchableHighlight
                  style={styles.submit}
                  onPress={() => this.handlValue50()}
                  value={this.state.value50}
                  underlayColor='black'>
                  <Text style={styles.submitText}>50$</Text>
                </TouchableHighlight>


                <TouchableHighlight
                  onPress={() => this.handlValue100()}
                  value={this.Value100}
                  style={styles.submit}
                  underlayColor='black'>
                  <Text style={styles.submitText}>100$</Text>
                </TouchableHighlight>

                <TouchableHighlight
                  onPress={() => this.handlValue200()}
                  value={this.Value200}
                  style={styles.submit}
                  underlayColor='black'>
                  <Text style={styles.submitText}>200$</Text>
                </TouchableHighlight>

                <TouchableHighlight
                  onPress={() => this.handlValue500()}
                  style={styles.submit}
                  value={this.Value500}
                  underlayColor='black'>
                  <Text style={styles.submitText}>500$</Text>
                </TouchableHighlight>

              </View>
            </View>
            <View style={styles.BuyNowContainer}>
              <TouchableHighlight
                onPress={this._onPressButton}
                style={styles.buyNowSubmit}
                underlayColor='black'>
                <Text style={styles.buynow}>Buy Now</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
  },
  gift_card_submit_button: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15
  },
  BuyNowContainer: {
    marginTop: 60,
    alignItems: 'center',
  },
  buyNowSubmit: {
    backgroundColor: '#3f3d3c',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#DCDCDC',
  },
  buynow: {
    width: 90,
    height: 25,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  submit: {
    width: (window.width - 120) / 4,
    height: 40,
    margin: 5,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#DCDCDC',
    right: 3
  },
  input_and_button_margin: {
    margin: 10
  },
  submitText: {
    color: '#4c4a49',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  buyGiftCard: {
    textAlign: "center",
    fontSize: 20,
    color: '#3f3d3c',
    fontWeight: 'bold',
    paddingTop: 10
  },
  GiftCard: {
    alignSelf: 'center',
  },
  mainWrapper: {
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 400,
    width: 430,
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
  input: {
    height: 50,
    borderColor: '#DCDCDC',
    borderWidth: 1,
    position: 'relative',
    paddingHorizontal: 40,
  },
  PlusSign: {
    position: 'absolute',
    top: 15,
    left: 15,
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
  images: {
    height: 200,
    width: 430,
  },
  price: {
    fontSize: 20,
  },
  rating: {
    paddingLeft: 0
  },
});
