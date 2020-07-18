import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.foundation}>
          <View style={styles.foundChild}><Text>FoundDeck#1</Text></View>
          <View style={styles.foundChild}><Text>FoundDeck#2</Text></View>
          <View style={styles.foundChild}><Text>FoundDeck#3</Text></View>
          <View style={styles.foundChild}><Text>FoundDeck#4</Text></View>
        </View>
        <View style={styles.deck}>
          <View style={styles.deckChild}><Text>Talon</Text></View>
          <View style={styles.deckChild}><Text>Hand</Text></View>
        </View>
      </View>
      <View style={styles.tableau}>
        <View style={styles.tabChild}><Text>TabDeck #0</Text></View>
        <View style={styles.tabChild}><Text>TabDeck #1</Text></View>
        <View style={styles.tabChild}><Text>TabDeck #2</Text></View>
        <View style={styles.tabChild}><Text>TabDeck #3</Text></View>
        <View style={styles.tabChild}><Text>TabDeck #4</Text></View>
        <View style={styles.tabChild}><Text>TabDeck #5</Text></View>
        <View style={styles.tabChild}><Text>TabDeck #6</Text></View>
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
  tableau: {
    flex: 8,
    flexDirection: 'row',
    backgroundColor: 'blue',
    padding: 10
  },
  tabChild: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  foundation: {
    flex: 6,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'pink'
  },
  foundChild: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center'
  },
  deck: {
    flex: 4,
    flexDirection: 'row',
    padding: 10
  },
  deckChild: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
