import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.foundation}>
          <Text style={{color: 'white'}}>Foundation</Text>
        </View>
        <View style={styles.deck}>
          <Text style={{color: 'white'}}>Deck/Waste</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={{color: 'white'}}>Tableau</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    flex: 2,
    flexDirection: 'row'
  },
  bottom: {
    flex: 8,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  foundation: {
    flex: 6,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
  deck: {
    flex: 4,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
