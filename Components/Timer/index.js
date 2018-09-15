import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Button from '../Button'

class Timer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style={"light-content"} />
        <View style={styles.upper}>
          <Text style={styles.time}>25:00</Text>
        </View>
        <View style={styles.lower}>
          <Button iconName="play-circle-o" onPress={() => alert("it works!")}/>
          <Button iconName="stop-circle-o" onPress={() => alert("it works!")}/>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CE0B24"
  },
  lower: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // flexDirection: "row",
    paddingLeft: 25,
    paddingRight: 25
  },
  upper: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  time: {
    color: "white",
    fontSize: 120,
    fontWeight: "100"
  }
});

export default Timer;