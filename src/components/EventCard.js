import React, { Component } from 'react';
import {View, Text} from 'react-native';
import styles from './EventCardStyle.js';

class EventCard extends Component {
    render() {
        return (
            <View style={styles.card}>
                <Text style={styles.title}>{this.props.event.event_name}</Text>
                <Text style={styles.category}>{this.props.event.event_type}</Text>
                <Text style={styles.date}>{this.props.event.event_date}</Text>
            </View>
        );
    }
}


export default EventCard;