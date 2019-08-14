import React, { Component } from 'react';
import {View, Text} from 'react-native';
import styles from './EventCardStyle.js';
import { TouchableOpacity } from 'react-native-gesture-handler';

class EventCard extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={styles.card}>
                    <Text style={styles.title}>{this.props.event.event_name}</Text>
                    <Text style={styles.category}>{this.props.event.event_type}</Text>
                    <Text style={styles.date}>{this.props.event.event_date}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}


export default EventCard;