import { StyleSheet, Text, View , TouchableOpacity, Image} from 'react-native'
import React from 'react'
import colors from '../utils/colors';
import { fonts } from '../utils/fonts';
import { strings } from '../utils/strings';

const OutlinedButton = ({text,onPress,icon}) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                onPress();
            }}>
            <View
                style={styles.row}>
                <Image
                    source={icon}
                    style={styles.icon}
                    resizeMode="contain"
                />
                <Text
                    style={styles.text}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default OutlinedButton;

const styles = StyleSheet.create({
    container: {
        borderColor: colors.primary,
        maxWidth: 343,
        borderWidth: 2,
        width: '100%',
        height: 65,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: colors.primary,
        fontFamily: fonts.semiBold,
        fontSize: 15,
    },
    icon: { width: 20, height: 20, marginEnd: 8 },
});