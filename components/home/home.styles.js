import  { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        marginTop: 60,
        paddingTop: 10,
        backgroundColor: 'yellow'
    },
    headcont: {
        width: 350,
        height: 350,
        backgroundColor: 'white',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
    },

    image_wrap: {
        height: 180,
        width: 350,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },

    image: {
        //transform: [{scale: 0.1}],
        height: undefined,
        width: undefined,
        resizeMode: 'contain',
        flex: 1
        
    }
})