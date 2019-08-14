import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import EventCard from './src/components/EventCard';


export default class App extends Component {
  state = {
    events: []
  }

  componentDidMount() {
    fetch('http://demo2365253.mockable.io/events')
    .then(res => res.json())
    .then((data) => {
      this.setState({events: data})
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Here are the events near you</Text>
        <ScrollView style={styles.list}>
          {
            this.state.events.map(event_obj => {
              return (
                <EventCard key = {event_obj.event_id} event = {event_obj}></EventCard>
              );
            })
          }
        </ScrollView>
        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#373940'
  },
  welcome: {
    fontSize: 20,
    marginTop: 60,
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff'
  },
  
  list: {
    flexDirection: 'column',
    width: '100%'
  }
});
