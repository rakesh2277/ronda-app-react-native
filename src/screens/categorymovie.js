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
  ScrollView
} from 'react-native';
import NumericInput from 'react-native-numeric-input';

export default class CategoryMovie extends Component {
  static navigationOptions = ({ navigation: { navigate } }) => ({
    title: 'RONDA ROCHELL',
  })
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  ordernow = () => {
    this.props.navigation.navigate('shop1');
  }
  addcart = () => {
    this.props.navigation.navigate('shop1');
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
            <Text style={styles.worldLineText}>World Line- Ronda Entertainment</Text>
            <Text style={styles.worldLineText2}>Ronda Rochel is dummy text of the printing and typesetting industry</Text>
            <Text style={styles.worldLineText2}>Lorem it been where has been the industry standard dummy text ever</Text>
            <Text style={styles.worldLineText2}>1500s, to the Cook</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            <View>
              <TouchableHighlight>
                <View style={styles.container}>
                  <Image source={require('../assest/images/musicEvent.png')} style={styles.images} />
                </View>
              </TouchableHighlight>
              <Text style={styles.titleText}>Music Event</Text>
            </View >
          </View>
          <View style={styles.textContainers}>
            <Text style={styles.worldLineText1}>Description</Text>
            <Text style={styles.worldLineText3}>Buttery cookies with soup is simple dummy text of the printing and typesetting industry
            Lorem it been where has been is the industry standard dummy text ever since the 500  unknown printer tooks galley of type
            unknown printer tooks a galley of
            since the Ronda Rochell.</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Text style={styles.titleText1}>$22</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            <TouchableHighlight onPress={this.ordernow} style={styles.chekoutButtonstyling}>
              <Text style={styles.chekoutButtons}>ORDER NOW</Text>
            </TouchableHighlight>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            <TouchableHighlight onPress={this.addcart} style={styles.chekoutButtonstylings}>
              <Text style={styles.chekoutButton}>Add to cart</Text>
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
  shoopingCartImage: {
    position: 'absolute',
    right: 20,
    marginTop: 60,
  },
  textContainer: {
    backgroundColor: '#f2f2f2',
  },
  textContainers: {
    backgroundColor: '#f2f2f2',
    left: 12
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
  worldLineText1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black'
  },
  titlesTexts: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black'
  },
  descriptionText: {
    fontSize: 15
  },
  titleText1: {
    fontWeight: 'bold',
    fontSize: 20,
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
  inputButtons: {
    width: 150,
    height: 50,
    backgroundColor: 'gray',
    alignSelf: 'flex-end',
    right: 0,
  },
  chekoutButtons: {
    fontWeight: "bold",
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    padding: 10,
  },
  chekoutButton: {
    fontWeight: "bold",
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    padding: 10,
  },
  chekoutButtonstyling: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "black",
    borderBottomWidth: 1,
  },
  chekoutButtonstylings: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#C0C0C0",
    borderBottomWidth: 1,
    marginTop: 1
  },
  titlesText: {
    fontSize: 15,
    textAlign: 'center'
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
});
