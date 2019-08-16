import React, { Component } from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

class EventDetail extends Component {
    render() {
        const { navigation } = this.props;
        const event_obj = navigation.getParam('event');
        
        return (
            <View style={styles.container}>
                <Image style={styles.img} source={{uri: event_obj.event_img}}/>
                <Text style={styles.title}>{event_obj.event_name}</Text>
                <Text style={styles.description}>{event_obj.event_description}</Text>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    img: {
        marginTop: 60,
        marginBottom: 40,
        width: 200,
        height: 200
    },

    title: {
        fontSize: 18
    },

    description: {
        marginHorizontal: 40,
        marginVertical: 20
    }
})

export default EventDetail;