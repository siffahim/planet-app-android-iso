import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { colors } from '../../theme/color'
import { spacings } from '../../theme/spacing'
import Text from '../Text/Text'

export default function PlanetHeader({ backBtn, title = 'THE PLANETS' }) {
    const navigate = useNavigation();
    return (
        <View style={styles.container}>
            {
                backBtn && <Pressable
                    onPress={() => {
                        navigate.goBack()
                    }}
                    style={{ marginRight: spacings[4] }}
                >
                    <AntDesign name="left" size={24} color="white" />
                </Pressable>
            }
            <Text preset='h1'>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: spacings[5],
        borderBottomWidth: 0.2,
        borderBottomColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center'
    }
})