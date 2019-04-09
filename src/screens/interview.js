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
  Image,
} from 'react-native';

export default class Travel extends React.Component {
    static navigationOptions = {
        title: 'RONDA ROCHELL',

    };
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
                                <Title style={styles.headertitel}>INTERVIEW</Title>
                            </Body>
                        </Header>
                    </View>
                </View>
                <View>
                    <Text>Coming Soon</Text>
                </View>
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
      left: 85,
      top: 10
    }
  });