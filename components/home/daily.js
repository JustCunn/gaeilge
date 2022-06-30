import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './daily.styles.js';

export default function Daily(props) {
    return (
        <View style={styles.daily_container}>
            <Text>Focal an lae é</Text>
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