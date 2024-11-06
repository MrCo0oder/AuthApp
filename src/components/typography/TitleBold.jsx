import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TitleBold = ({ text, fontSize, color, alignment }) => {
    return (
        <Text style={{ fontSize: fontSize, color: color, textAlign: alignment } || styles.text}>{text}</Text>
    )
}

export default TitleBold;

const styles = StyleSheet.create({
    text: {
        color: '#868889',
        fontFamily: 'Poppins-Bold'
    }
});