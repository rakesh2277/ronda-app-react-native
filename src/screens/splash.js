import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  Dimensions
} from 'react-native';
var window = Dimensions.get('window');

export default class FirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount = () => {
    this.timeoutCheck = setTimeout(() => {
      this.props.navigation.navigate('footerNav')
    },
      1000);
  }
  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.onfrontPage}>
          <View style={styles.container}>
            <Image style={styles.splashImage} source={require('../assest/icons/RRLogoOnBlack.png')} />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: window.width,
    height: window.height,
    justifyContent: 'center',
    alignItems: 'center',
  }
});