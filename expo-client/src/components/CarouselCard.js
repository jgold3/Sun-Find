import React from 'react';
import { StyleSheet } from 'react-native';
import { Image, Text, View } from 'react-native';

export default CarouselCard = ({ item, index }) => {
    return (
        <View style={styles.container}>
            <Image source={item.images[0]}></Image>
            <Text>{item.name}</Text>
        </View>
    );  
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 8,
        width: 200,
        paddingBottom: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    
});