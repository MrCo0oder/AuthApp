import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../utils/colors';
import { fonts } from '../utils/fonts';

const TextButton = ({ text, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}>
            <Text
                style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

export default TextButton;

const styles = StyleSheet.create({
    text: {
        color: colors.primary,
        fontFamily: fonts.bold,
        fontSize: 13,
    }
});