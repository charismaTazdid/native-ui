import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const FlatCards = () => {
    return (
        <View>
            <Text style={styles.headingText}>FlatCards</Text>

            <View style={styles.cardsContainer}>
                <View style={[styles.card, styles.redCard]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card, styles.blueCard]}>
                    <Text>Blue</Text>
                </View>
                <View style={[styles.card, styles.orangeCard]}>
                    <Text>Orange</Text>
                </View>
                <View style={[styles.card, styles.redCard]}>
                    <Text>Red</Text>
                </View>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    headingText: {
        fontSize: 25,
        fontWeight: "bold",
        paddingHorizontal: 8,
    },
    cardsContainer: {
        flex: 1,
        flexDirection: "row",
        padding: 10,
        flexWrap: "wrap"
    },
    card: {
        height: 100,
        width: 100,
        borderRadius: 4,
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        margin: 8
    },
    redCard: {
        backgroundColor: "red"
    },
    blueCard: {
        backgroundColor: "blue"
    },
    orangeCard: {
        backgroundColor: "orange"
    }
})

export default FlatCards;