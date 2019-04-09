import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ScrollView,
  Animated,
  Image,
  ImageBackground
} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Icon,
  Title
} from 'native-base';

export default class ShopCheckOutScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  _onPressButton = () => {
    this.props.navigation.navigate('checkoutCongratulation');
  }
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
              <Title style={styles.headertitel}>CHECKOUT</Title>
              </Body>
            </Header>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          <View style={styles.mainContainer}>
            <Text style={styles.personalInformationText}>Personal Information</Text>
            <View>
              <ImageBackground style={styles.imagescontainers}>
                <Animated.Image
                  style={styles.animatedImages}
                  source={require("../assest/icons/people1.png")}
                />
              </ImageBackground>
              <TextInput
                placeholder="Full Name" fontWeight='bold'
                style={styles.input}
              />
            </View>
            <View>
              <ImageBackground style={styles.imagescontainers}>
                <Animated.Image
                  style={styles.animatedImages}
                  source={require("../assest/icons/mail.png")}
                />
              </ImageBackground>
              <TextInput
                style={styles.input}
                placeholder="Email" fontWeight='bold' />
            </View>
            <View>
              <ImageBackground style={styles.imagescontainers}>
                <Animated.Image
                  style={styles.animatedImages}
                  source={require("../assest/icons/phone-call.png")}
                />
              </ImageBackground>
              <TextInput
                style={styles.input}
                placeholder="Phone No." fontWeight='bold'
              />
            </View>
            <Text style={styles.paymentInformatiomText}>Payment Information</Text>
            <View>
              <ImageBackground style={styles.imagesellipsecontainers}>
                <Animated.Image
                  style={styles.animatedellipseImages}
                  source={require("../assest/icons/Ellipse-1.png")}
                />
              </ImageBackground>
              <ImageBackground style={styles.imagescreditcontainers}>
                <Animated.Image
                  style={styles.animatedcreditImages}
                  source={require("../assest/icons/credit-card.png")}
                />
              </ImageBackground>
              <Text style={styles.creditCardText}>Credit Card</Text>
            </View>
            <TextInput
              style={styles.input}
            />
            <View style={styles.cvvandExpiryContainer}>
              <TextInput
                style={styles.input}
                placeholder="CVV" fontWeight='bold' />
              <TextInput
                style={styles.input}
                placeholder="Expiry Date" fontWeight='bold' />
            </View>
            <View>
              <ImageBackground style={styles.imagesnotescontainers}>
                <Animated.Image
                  style={styles.animatedNotesImages}
                  source={require("../assest/icons/pen.png")}
                />
              </ImageBackground>
              <Text style={styles.NoteText}>Note</Text>
            </View>
            <TextInput
              style={styles.Noteinput}
            />
              <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
              <TouchableHighlight onPress={this._onPressButton} style={styles.chekoutButtonstyling}>
                <Text style={styles.chekoutButton}>PAY NOW</Text>
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
    position: "relative",
    resizeMode: "cover"
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
  mainContainer: {
    padding: 20
  },
  cvvandExpiryContainer: {
    flexDirection: "row"
  },
  personalInformationText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "black",
    paddingBottom: 10
  },
  imagescontainers: {
    position: "relative"
  },
  animatedImages: {
    position: "absolute",
    left: 20,
    zIndex: 2,
    marginTop: 18,
    left: 18
  },
  paymentInformatiomText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "black",
    paddingBottom: 10,
    paddingTop: 10
  },
  NoteText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "black",
    paddingBottom: 10,
    paddingTop: 10
  },
  creditCardText: {
    fontSize: 15,
    left: 30
  },
  input: {
    margin: 10,
    height: 32,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 2,
    backgroundColor: 'white',
    paddingHorizontal: 33,
    paddingTop: 0,
    paddingBottom: 0,
  },
  cvvinput: {
    margin: 10,
    marginLeft: 20,
    height: 10,
    width: 70,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 3,
    backgroundColor: 'white'
  },
  Noteinput: {
    margin: 10,
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 3,
    backgroundColor: 'white'
  },
  expiryinput: {
    margin: 10,
    height: 20,
    width: 100,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 3,
    backgroundColor: 'white'
  },
  chekoutButton: {
    fontWeight: "bold",
    fontSize: 15,
    color: 'white',
    padding: 10
  },
  chekoutButtonstyling: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "gray",
    marginTop:10
  },
  imagescreditcontainers: {
    position: "relative"
  },
  animatedcreditImages: {
    position: "absolute",
    left: 20,
    zIndex: 2,
    marginTop: 40,
    left: 18
  },
  imagesnotescontainers: {
    position: "relative"
  },
  animatedNotesImages: {
    position: "absolute",
    left: 20,
    zIndex: 2,
    marginTop: 55,
  },
  imagesellipsecontainers: {
    position: "relative"
  },
  animatedellipseImages: {
    position: "absolute",
    left: 10,
    zIndex: 2,
    marginTop: 5,
  }
});
