import { EvilIcons } from '@expo/vector-icons'
import React from 'react'
import { Linking, Pressable, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import PlanetHeader from '../components/PlanetHeader/PlanetHeader'
import Text from '../components/Text/Text'
import { EarthSvg, JupiterSvg, MarsSvg, MercurySvg, NeptuneSvg, SaturnSvg, UranusSvg, VenusSvg } from '../svg'
import { colors } from '../theme/color'
import { spacings } from '../theme/spacing'

const PlanetSection = ({ title, value }) => {
    return (
        <View style={styles.planetSection}>
            <Text preset='small' style={{ textTransform: 'uppercase' }}>{title}</Text>
            <Text preset='h2'>{value}</Text>
        </View>
    )
}

export default function Details({ navigation, route }) {
    const insets = useSafeAreaInsets();
    const planet = route.params.planet;
    const { name, description, rotationTime, revolutionTime, radius, avgTemp, wikiLink } = planet;

    const randerImg = () => {
        switch (name) {
            case 'mercury':
                return <MercurySvg />;
            case 'venus':
                return <VenusSvg />;
            case 'earth':
                return <EarthSvg />;
            case 'jupiter':
                return <JupiterSvg />;
            case 'mars':
                return <MarsSvg />;
            case 'neptune':
                return <NeptuneSvg />;
            case 'saturn':
                return <SaturnSvg />;
            case 'uranus':
                return <UranusSvg />;
        }
    }

    const onPressLink = () => {
        Linking.openURL(wikiLink)
    }

    return (
        <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
            <PlanetHeader
                backBtn={true}
            />
            <ScrollView>
                <View style={styles.imageView}>
                    {randerImg(name)}
                </View>
                <View style={styles.textDetais}>
                    <Text preset='h1' style={styles.name}>{name}</Text>
                    <Text style={styles.description}>{description}</Text>

                    <Pressable
                        onPress={onPressLink}
                        style={styles.source}
                    >
                        <Text>Source: </Text>
                        <Text preset='h4' style={styles.wikipedia}>Wikipedia</Text>
                        <EvilIcons name="external-link" size={22} color="white" />
                    </Pressable>
                </View>
                <PlanetSection
                    title='rotationTime'
                    value={rotationTime}
                />
                <PlanetSection
                    title='revolutionTime'
                    value={revolutionTime}
                />
                <PlanetSection
                    title='radius'
                    value={radius}
                />
                <PlanetSection
                    title='avgTemp'
                    value={avgTemp}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.balck,
    },
    imageView: {
        marginTop: spacings[10],
        marginBottom: spacings[11],
        alignItems: 'center',
        justifyContent: 'center'
    },
    textDetais: {
        marginTop: spacings[12],
        marginHorizontal: spacings[6],
        textAlign: 'center'
    },
    name: {
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    description: {
        textAlign: 'justify',
        marginTop: spacings[5],
        lineHeight: 22,
    },
    source: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: spacings[5],
        marginBottom: spacings[4]
    },
    wikipedia: {
        textDecorationLine: 'underline',
    },
    planetSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: colors.grey,
        marginBottom: spacings[4],
        marginHorizontal: spacings[5],
        paddingHorizontal: spacings[5],
        paddingVertical: spacings[3]
    }
})