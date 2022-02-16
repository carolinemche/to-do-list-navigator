import React, {Component} from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

export default class Account extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View>
                <Text>
                    My account
                </Text>
            </View>
        )
    }
}