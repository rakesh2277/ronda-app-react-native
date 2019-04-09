import React from 'react';
import {
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
  View,
  Image,
  Dimensions
} from 'react-native';
var window = Dimensions.get('window');

export default class CustomHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  _onPressButton = () => {
    this.props.navigation.navigate('shop1')
  }
  render() {
    return (
      <View>
        <View>
          <Header style={styles.headermain} >
            <Left>
              <Image source={require('../assest/icons/Vector-Smart-Object1.png')}/>
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
              <Button transparent>
                <Icon name='menu' style={{ color: 'black' }} />
              </Button>
            </Left>
            <Body>
              <Title style={styles.headertitel}>{this.props.title !== undefined && this.props.title !== null ? this.props.title : 'SHOP'}</Title>
            </Body>
          </Header>
        </View>
      </View>
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
    textAlign: 'center',
  },
  infoimage: {
    right: 20
  },
  headerIconimage: {
    top: 10,
    left:85,
  }
});