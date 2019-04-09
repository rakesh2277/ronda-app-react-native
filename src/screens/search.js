import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Search extends React.Component {
  static navigationOptions = {
    title: 'RONDA ROCHELL'
  };
  render() {
    return (
      <View>
        <Text styles={styles.searchstyle} style>Coming Soon</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  searchstyle: {
    top: 20,
    textAlign: 'center',
  }
});