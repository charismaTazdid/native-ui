import React from 'react';
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ActionCard = () => {

    const openWebsite = (url) => {
        Linking.openURL(url);
    };

    return (
        <View>
            <Text style={styles.headingText}>Action Card</Text>

            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headingText2}>
                        5 Javascript One-Liners for Every Project
                    </Text>
                </View>
                <Image source={{ uri: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*wAZhC6WGJ2EtFDPD5m28eA.jpeg" }} style={styles.cardImage} />
                {/* Card Body Container */}
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={5}>
                        In programming, there are usually multiple ways to solve the same problem. These solutions can vary in different areas, such as the length, performance, algorithm used, readability, and so on.
                        But in some cases, the amount of code you need to write doesn’t exceed more than a single line, which is why they are known as one-liners.

                        In this article, we’ll be looking at several quick and concise one-liner solutions to various problems that frequently arise in JavaScript.

                        Before we begin, let’s make sure we understand what makes a piece of code a one-liner.
                    </Text>
                </View>
                {/* Card Footer Container */}
                <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={() => openWebsite('https://medium.com/@raihan_tazdid/5-javascript-one-liners-to-use-in-every-project-1e4f99cba508')} >
                        <Text style={styles.readMoreBtn} >Read More➣</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
};

export default ActionCard;

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 8,
    },
    card: {
        width: 350,
        height: 420,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    elevatedCard: {
        backgroundColor: "#CAD5E2",
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: "#F4BE2C",
        shadowOpacity: 0.5

    },
    headingContainer: {
        height: 40,
        // display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    headingText2: {
        fontSize: 15,
        fontWeight: "600"
    },
    cardImage: {
        height: 200,
        width: 350,
    },
    bodyContainer: {
        padding: 12,
    },
    footerContainer: {
        padding: 12,
    },
    readMoreBtn: {
        fontSize: 17,
        // color: "",
        backgroundColor: "#EDBF69",
        paddingHorizontal: 20,
        paddingVertical: 5,
        width: 155,
        borderRadius: 6,
    }
});