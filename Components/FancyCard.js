import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-web';

const FancyCard = () => {
    return (
        <View>
            <Text style={styles.headingText}>Historical Place</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Sixty_Dome_Mosque%2CBagerhat.jpg" }} style={styles.cardImage} />
                {/* <ScrollView> */}
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Sixty Dome Mosque</Text>
                    <Text style={styles.cardLable}>Bagherhat, Bangladesh</Text>
                    <Text style={styles.cardDescription}>In the middle of the 15th century, a Muslim colony was founded in the mangrove forest of the Sundarbans, near the coast in the Bagerhat District by a saint-General, named Khan Jahan Ali. He preached in an affluent city during the reign of Sultan Nasiruddin Mahmud Shah, then known as 'Khalifatabad</Text>
                    <Text style={styles.cardFooter}>Architect: Khan Jahan Ali</Text>
                </View>
                {/* </ScrollView> */}
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
    card: {
        width: 350,
        // height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardElevated: {
        backgroundColor: "black",
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        paddingBottom: 12
    },
    cardImage: {
        height: 200,
        marginBottom: 10,
        borderBottomLeftRadius: 60,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 2,
    },
    cardLable: {
        color: "white",
        fontSize: 16,
        marginBottom: 8,
    },
    cardDescription: {
        color: "white",
        fontSize: 12,
        marginTop: 4
    },
    cardFooter: {
        color: "#E8BD0D"
    }
});

export default FancyCard;

