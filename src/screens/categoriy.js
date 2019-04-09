import React from "react";
import { Text, Image, View } from 'react-native';

export default class CategoryScreen extends React.Component {
    static navigationOptions = {
        title: 'MainScreen',
        tabBarLabel: 'inScreen',
        tabBarVisible: true,
        tabBarIcon: <Image style={{ height: 30, width: 30, }} />
    }
    render() {
        return (
            <View>
                <Text> Here Leave the New category </Text>
            </View>
        );
    }
}