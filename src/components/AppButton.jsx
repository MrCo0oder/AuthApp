import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../utils/colors';
import { fonts } from '../utils/fonts';

const AppButton = ({ text, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
                onPress();
            }}>
            <Text
                style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

export default AppButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        maxWidth: 343,
        width: '100%',
        height: 65,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }, text: {
        color: colors.white,
        fontFamily: fonts.bold,
        fontSize: 16,
    }
});