import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react';

const ElevatedCard = () => {
    return (
        <View>
            <Text style={styles.headingText}>ElevatedCard</Text>

            <ScrollView horizontal={true} style={styles.cardsContainer}>
                <View style={[styles.card, styles.orangeCard]}>
                    <Text style={{ color: "white", fontWeight: "bold" }}> Tap </Text>
                </View>
                <View style={[styles.card, styles.blackCard]}>
                    <Text style={{ color: "white", fontWeight: "bold" }}> And </Text>
                </View>
                <View style={[styles.card, styles.blueCard]}>
                    <Text style={{ color: "white", fontWeight: "bold" }}> See </Text>
                </View>
                <View style={[styles.card, styles.redCard]}>
                    <Text style={{ color: "white", fontWeight: "bold" }}> I </Text>
                </View>
                <View style={[styles.card, styles.purpleCard]}>
                    <Text style={{ color: "white", fontWeight: "bold" }}> Am </Text>
                </View>
                <View style={[styles.card, styles.orangeCard]}>
                    <Text style={{ color: "white", fontWeight: "bold" }}> Scrolling </Text>
                </View>
                <View style={[styles.card, styles.blueCard]}>
                    <Text style={{ color: "white", fontWeight: "bold" }}> Horizonali </Text>
                </View>

            </ScrollView>
        </View>
    )
};


const styles = StyleSheet.create({
    headingText: {
        fontSize: 25,
        fontWeight: "bold",
        paddingHorizontal: 8,
    },
    cardsContainer: {
        padding: 10,
    },
    card: {
        height: 120,
        width: 100,
        borderRadius: 4,
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        margin: 2
    },
    orangeCard: {
        backgroundColor: "orange",
        elevation: 4,
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowColor: "Black"
    },
    blueCard: {
        backgroundColor: "blue",
        elevation: 4,
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowColor: "Black"
    },
    blackCard: {
        backgroundColor: "black",
        elevation: 4,
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowColor: "Black"
    },
    redCard: {
        backgroundColor: "red",
        elevation: 4,
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowColor: "Black"
    },
    purpleCard: {
        backgroundColor: "purple",
        elevation: 4,
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowColor: "Black"
    },

});


export default ElevatedCard;