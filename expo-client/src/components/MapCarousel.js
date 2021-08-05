import React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default MapCarousel = ({ coordinates }) => { 
    return (
        <Carousel
            ref={(c) => { carousel = c; }}
            data={coordinates}
            renderItem={renderCarouselItem}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={200}
        />
    );
};