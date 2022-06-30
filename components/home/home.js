import React from 'react';
import { Text, View, Image } from 'react-native';

import TAOISEACH from '../../images';

import Daily from './daily.js';

import styles from './home.styles.js';

export default function Home(props) {
    return (
        <View style={styles.container}>
            <Daily/>
            <Text>Hello</Text>
            <Headline/>
        </View>
    )
}

function Headline(props) {
    return (
        <View style={styles.headcont}>
            <View style={styles.image_wrap}>
                <Image 
                    style={{ height: 200, width: 400, resizeMode: 'contain', top: 0 }}
                    source={require('../../images/antaoiseach.jpeg')}/>
            </View>
            <Text>Headline</Text>
        </View>
    )
}