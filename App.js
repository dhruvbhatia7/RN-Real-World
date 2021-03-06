import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import EventCard from './src/components/EventCard';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import EventDetail from './src/screens/EventDetail';

class App extends Component {
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
        <ScrollView style={styles.list}>
          {
            this.state.events.map(event_obj => {
              return (
                <EventCard key = {event_obj.event_id} event = {event_obj} onPress={() => this.props.navigation.navigate('Detail', {
                  event: event_obj
                })}></EventCard>
              );
            })
          }
        </ScrollView>
        
        
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#2f2f36'
      },
      title: 'Events around you',
      headerTitleStyle: {
        color: '#fff',
        fontWeight: 'normal'
      }
    }
  },
  Detail: {
    screen: EventDetail,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#2f2f36'
      },
      title: 'Events around you',
      headerTitleStyle: {
        color: '#fff',
        fontWeight: 'normal'
      },
      headerTintColor: '#fff'
    }
  }
});

export default createAppContainer(AppNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#373940',
    paddingTop: 20
  },
  welcome: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff'
  },
  
  list: {
    flexDirection: 'column',
    width: '100%'
  }
});
