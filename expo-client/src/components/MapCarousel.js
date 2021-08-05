import React, { useRef } from 'react';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CarouselCard from './CarouselCard';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = 200;

export default MapCarousel = ({ coordinates }) => { 
    const isCarousel = useRef(null);
    return (
        <Carousel
            ref={isCarousel}
            data={coordinates}
            renderItem={CarouselCard}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
        />
    );
};