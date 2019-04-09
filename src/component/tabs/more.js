import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Animated,
  ImageBackground
} from "react-native";
import { Container } from 'native-base';
import CustomHeader from '../../component/customHeader';

export default class more extends React.Component {
  static navigationOptions = {
    title: "MainScreen",
    tabBarLabel: "More",
    tabBarVisible: true,
    tabBarIcon: <Image source={require("../../assest/icons/tabMore.png")} />
  };
  render() {
    return (
      <Container style={styles.container}>
        <CustomHeader title={'MORE'} />
        <View>
          <View style={{ height: 200, backgroundColor: "white", margin: 15 }}>
            <Text style={styles.moreHeaderText}>More</Text>
            <View style={styles.breaklineAfterMmore} />
            <View style={styles.linkTextMarginTop}>
              <View>
                <TouchableHighlight onPress={this._onPressButton}>
                  <ImageBackground style={styles.imagecontainers}>
                    <Animated.Image
                      style={styles.animatedImage}
                      source={require("../../assest/icons/user.png")}
                    />
                    <Text style={styles.imageText}>Profile</Text>
                  </ImageBackground>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._onPressButton}>
                  <ImageBackground style={styles.imagecontainers}>
                    <Animated.Image
                      style={styles.lognIcon}
                      source={require("../../assest/icons/login1.png")}
                    />
                  </ImageBackground>
                </TouchableHighlight>
                <View style={styles.breaklineInnerSide} />
              </View>
              <View>
                <TouchableHighlight onPress={this._onPressButton}>
                  <ImageBackground style={styles.imagecontainers}>
                    <Animated.Image
                      style={styles.animatedImage}
                      source={require("../../assest/icons/broken-link.png")}
                    />
                    <Text style={styles.imageText}>Connect us</Text>
                  </ImageBackground>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._onPressButton}>
                  <ImageBackground style={styles.imagecontainers}>
                    <Animated.Image
                      style={styles.lognIcon}
                      source={require("../../assest/icons/login1.png")}
                    />
                  </ImageBackground>
                </TouchableHighlight>
                <View style={styles.breaklineInnerSide} />
              </View>
              <View>
                <TouchableHighlight onPress={this._onPressButton}>
                  <ImageBackground style={styles.imagecontainers}>
                    <Animated.Image
                      style={styles.animatedImage}
                      source={require("../../assest/icons/network.png")}
                    />
                    <Text style={styles.imageText}>Social links</Text>
                  </ImageBackground>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._onPressButton}>
                  <ImageBackground style={styles.imagecontainers}>
                    <Animated.Image
                      style={styles.lognIcon}
                      source={require("../../assest/icons/login1.png")}
                    />
                  </ImageBackground>
                </TouchableHighlight>
              </View>
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
    position: 'relative',
    resizeMode: 'cover'
  },
  imagecontainers: {
    position: 'relative'
  },
  animatedImageEnd: {
    position: 'absolute',
    marginLeft: 330
  },
  lognIcon: {
    position: 'absolute',
    right: 25,
    bottom: 0
  },
  animatedImage: {
    position: 'absolute',
    marginLeft: 10,
    marginRight: 10
  },
  moreHeaderText: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    padding: 10
  },
  breaklineAfterMmore: {
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: 1,
    width: "100%"
  },
  breaklineInnerSide: {
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: 1,
    margin: 15
  },
  imageText: {
    fontSize: 15,

    marginLeft: 40
  },
  linkTextMarginTop: {
    marginTop: 15
  }
});
