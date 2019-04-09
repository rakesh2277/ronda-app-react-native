import React from 'react';
import { Text, Image, View } from 'react-native';
import CustomHeader from '../../component/customHeader';

export default class rrNotes extends React.Component {
    static navigationOptions = {
        title: 'MainScreen',
        tabBarLabel: 'RR Notes',
        tabBarVisible: true,
        tabBarIcon: <Image
            source={require('../../assest/icons/tabRrnotes.png')} />
    }
    render() {
        return (
            <View>
                <CustomHeader title={'RR NOTES'} />
                <Text>Coming Soon </Text>
            </View>
        );
    }
}