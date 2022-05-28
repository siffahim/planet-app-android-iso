import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { FlatList, Pressable, SafeAreaView, StyleSheet, TextInput, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import PlanetHeader from '../components/PlanetHeader/PlanetHeader'
import Text from '../components/Text/Text'
import { PLANET_LIST } from '../data/planet-list'
import { colors } from '../theme/color'
import { spacings } from '../theme/spacing'

const PlanetItem = ({ item }) => {
    const navigation = useNavigation();
    return (
        <Pressable
            onPress={() => {
                navigation.navigate('Details', { planet: item })
            }}
            style={styles.item}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.circle, { backgroundColor: item.color }]} />
                <Text preset='h3' style={styles.planetName}>{item.name}</Text>
            </View>
            <AntDesign name="right" size={18} color="white" />
        </Pressable>
    )
}

export default function Home({ navigation }) {
    const insets = useSafeAreaInsets();
    const [list, setList] = useState(PLANET_LIST)

    const searchFilter = (text) => {
        const filterPlanet = PLANET_LIST.filter(item => {
            const itemName = item.name.toLowerCase();
            const searchText = text.toLowerCase();

            return itemName.indexOf(searchText) > -1
        })

        setList(filterPlanet)

    }

    const renderItem = ({ item }) => {
        return (
            <PlanetItem
                item={item}
            />
        )
    }

    return (
        <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
            <PlanetHeader />

            <TextInput
                placeholder='Search the planet name'
                autoCorrect={false}
                placeholderTextColor={colors.white}
                style={styles.searchInput}
                onChangeText={(text) => searchFilter(text)}
            />

            <FlatList
                contentContainerStyle={styles.list}
                data={list}
                keyExtractor={(item) => item.name}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.balck,
    },
    list: {
        padding: spacings[4]
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: spacings[5]
    },
    circle: {
        width: 25,
        height: 25,
        borderRadius: 15
    },
    planetName: {
        textTransform: 'uppercase',
        marginLeft: spacings[4]
    },
    separator: {
        borderBottomWidth: 0.3,
        borderBottomColor: colors.white
    },
    searchInput: {
        borderWidth: 1,
        color: colors.white,
        borderColor: colors.grey,
        margin: spacings[4],
        paddingHorizontal: spacings[4],
        paddingVertical: spacings[2]
    }
})