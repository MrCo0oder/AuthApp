import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import { strings } from '../utils/strings'
import Gap from '../components/Gap'
import { fonts } from '../utils/fonts'
import CustomInput from '../components/CustomInput'
import useValidation from '../hooks/useValidtiion'
import { AppRoutes } from '../utils/approutes'

const SignupScreen = ({ navigation }) => {
    const { state, handleSubmition } = useValidation();
    return (
        <View style={styles.container}>
            <ScrollView style={{ width: "100%" }} showsVerticalScrollIndicator={false}>
                <View style={{ width: "100%" }} >
                    <View style={{ width: "100%", flexDirection: 'row', justifyContent: 'start', alignItems: 'center' }} > 
                        <TouchableOpacity style={styles.backButton} onPress={() => { navigation.goBack(); }}>
                        <Image source={require('../assets/back-button.png')} style={{ height: 25, width: 25, tintColor: colors.black }} resizeMode='contain'/>
                    </TouchableOpacity>
                    </View>
                    <View style={{  justifyContent: 'center', alignItems: 'center'}}>
                    <Gap height={29} width={0} />
                    <Text style={styles.titleText}>{strings.signuptitle}</Text>
                    <Gap height={35} width={0} />
                    <CustomInput hint={"Enter your email"} image={require("../assets/mail.png")} isValid={state?.isValidEmail} isPassword={false} inputType={"email"} onChangeText={(text) => { handleSubmition({ type: "Email", payload: text }) }} />
                    <Gap height={20} width={0} />
                    <CustomInput hint={"Enter your phone"} image={require("../assets/phone.png")} isValid={state?.isValidPhone} isPassword={false} inputType={"phone"} onChangeText={(text) => { handleSubmition({ type: "Phone", payload: text }) }} />
                    <Gap height={20} width={0} />
                    <CustomInput hint={"Enter your password"} image={require("../assets/lock.png")} isValid={state?.isValidPassword} isPassword={true} inputType={"password"} onChangeText={(text) => { handleSubmition({ type: "Password", payload: text }) }} />
                    <Gap height={32} width={0} />
                    <TouchableOpacity style={{ backgroundColor: colors.primary, maxWidth:343,width: "100%", height: 65, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }} onPress={() => {
                        if (state.isValidEmail && state.isValidPhone && state.isValidPassword)
                            navigation.navigate(AppRoutes.Login);
                        else
                            alert("Please enter valid details");
                        console.log(state)
                    }}>
                        <Text style={{ color: colors.white, fontFamily: fonts.bold, fontSize: 16 }}>{strings.signup}</Text>
                    </TouchableOpacity>
                    <Text style={{ color: colors.black, fontFamily: fonts.light, fontSize: 12, marginVertical: 24, textAlign: 'center' }}>{strings.continue}</Text>
                    <TouchableOpacity style={{ borderColor: colors.primary, maxWidth:343, borderWidth: 2, width: "100%", height: 65, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }} onPress={() => {
                        alert("Please enter valid details");
                    }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../assets/google.png')} style={{ width: 20, height: 20, marginRight: 8 }} resizeMode='contain' />
                            <Text style={{ color: colors.primary, fontFamily: fonts.semiBold, fontSize: 15 }}>{strings.signup}</Text>
                        </View>
                    </TouchableOpacity>
                    <Gap height={24} width={0} />
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: colors.primary, fontFamily: fonts.light, fontSize: 13 }}>Already have an account!</Text>
                        <Gap width={7} />
                        <TouchableOpacity onPress={() => { navigation.navigate(AppRoutes.Login) }}>
                            <Text style={{ color: colors.primary, fontFamily: fonts.bold, fontSize: 13 }}>{strings.login}</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                    
                    
                </View>

            </ScrollView>
        </View>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.backgroundColor,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    backButton: {
        width: 40,
        height: 40,
        alignSelf: 'flex-start',
        borderRadius: 100,
        backgroundColor: colors.gray,
        justifyContent: 'center',
        alignItems: 'center'
    }, titleText: {
        fontSize: 32,
        fontFamily: fonts.bold,
        color: colors.black,
        opacity: 0.7,
        lineHeight: 54,
        width:343 ,
        textAlign: 'Start',
    }
})    