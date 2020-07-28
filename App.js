import React from 'react';
import { Asset } from 'expo-asset'
import { StyleSheet, Text, View, Image, Dimensions, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome'
const Solitaire = require('./src/Solitaire')
const {width, height } = Dimensions.get('window');
const game = new Solitaire();


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='green'/>
      <View style={styles.top}>
        <Foundation />
        <Stalon />
      </View>
      <Tableau />
    </SafeAreaView>
  );
}

const Foundation = () => {
  return(
    <View style={styles.foundation}>
      <View style={styles.foundChild}>
        <Image 
            source={{uri: Asset.fromModule(require('./assets/cards/AC.png')).uri}}
            style={styles.card}
        />
      </View>
      <View style={styles.foundChild}>
        <Image 
            source={{uri: Asset.fromModule(require('./assets/cards/AS.png')).uri}}
            style={styles.card}
        />
      </View>
      <View style={styles.foundChild}>
      <Image 
            source={{uri: Asset.fromModule(require('./assets/cards/AD.png')).uri}}
            style={styles.card}
              />
      </View>
      <View style={styles.foundChild}>
        <Image 
          source={{uri: Asset.fromModule(require('./assets/cards/AH.png')).uri}}
          style={styles.card}
        />
      </View>
    </View>
  )
}

const Stalon = () => {
  return(
    <View style={styles.deck}>
      <View style={styles.deckChild}><Icon name="trash-o" size={30}/></View>
      <View style={styles.deckChild}>
        <Image
          source={{uri: Asset.fromModule(require('./assets/cards/blue_back.png')).uri}}
          style={styles.card}
        />
      </View>
    </View>
  );
}

const generateTabDeck = (TabDeck) => {
  let tabImgs = [];
  TabDeck.getDeck().foreach(card => {
    if(card.isRevealed()) {
      tabImgs += card.toString();
    }
  });
  return tabImgs;
}

const Tableau = () => {
  return(
    <View style={styles.tableau}>
      <View style={styles.tabChild}>
        {generateTabDeck(game.getTab().getTabDeck(0).getDeck()).
        map(card => <Image source={{uri:Asset.fromModule(require(`./assets/cards/${card}`))}} style={styles.card}/>)}
        {/* <Image
          source={{uri: Asset.fromModule(require('./assets/cards/2C.png')).uri}}
          style={{height: 80, width: 50}}
        /> */}
      </View>
      <View style={styles.tabChild}>
        <Image
          source={{uri: Asset.fromModule(require('./assets/cards/blue_back.png')).uri}}
          style={{height: 80, width: 50}}
        />
        <Image
          source={{uri: Asset.fromModule(require('./assets/cards/3C.png')).uri}}
          style={{height: 80, width: 50, marginTop: -55}}
        />
      </View>
      <View style={styles.tabChild}>
        <Image
          source={{uri: Asset.fromModule(require('./assets/cards/blue_back.png')).uri}}
          style={{height: 80, width: 50}}
        />
        <Image
          source={{uri: Asset.fromModule(require('./assets/cards/blue_back.png')).uri}}
          style={{height: 80, width: 50, marginTop: -55}}
        />
        <Image
          source={{uri: Asset.fromModule(require('./assets/cards/4C.png')).uri}}
          style={{height: 80, width: 50, marginTop: -55}}
        />
      </View>
      <View style={styles.tabChild}>
        <Image
          source={{uri: Asset.fromModule(require('./assets/cards/blue_back.png')).uri}}
          style={{height: 80, width: 50}}
        />
        <Image
          source={{uri: Asset.fromModule(require('./assets/cards/blue_back.png')).uri}}
          style={{height: 80, width: 50, marginTop: -55}}
        />
        <Image
          source={{uri: Asset.fromModule(require('./assets/cards/blue_back.png')).uri}}
          style={{height: 80, width: 50, marginTop: -55}}
        />
        <Image
          source={{uri: Asset.fromModule(require('./assets/cards/5C.png')).uri}}
          style={{height: 80, width: 50, marginTop: -55}}
        />
      </View>
      <View style={styles.tabChild}>
        <Image
          source={{uri: Asset.fromModule(require('./assets/cards/blue_back.png')).uri}}
          style={{height: 80, width: 50}}
        />
        <Image
          source={{uri: Asset.fromModule(require('./assets/cards/blue_back.png')).uri}}
          style={{height: 80, width: 50, marginTop: -55}}
        />
        <Image
          source={{uri: Asset.fromModule(require('./assets/cards/blue_back.png')).uri}}
          style={{height: 80, width: 50, marginTop: -55}}
        />
        <Image
          source={{uri: Asset.fromModule(require('./assets/cards/blue_back.png')).uri}}
          style={{height: 80, width: 50, marginTop: -55}}
        />
        <Image
          source={{uri: Asset.fromModule(require('./assets/cards/6C.png')).uri}}
          style={{height: 80, width: 50, marginTop: -55}}
        />
      </View>
      <View style={styles.tabChild}>
        <Image
          source={{uri: Asset.fromModule(require('./assets/cards/blue_back.png')).uri}}
          style={{height: 80, width: 50}}
        />
        <Image
          source={{uri: Asset.fromModule(require('./assets/cards/blue_back.png')).uri}}
          style={{height: 80, width: 50, marginTop: -55}}
        />
        <Image
          source={{uri: Asset.fromModule(require('./assets/cards/blue_back.png')).uri}}
          style={{height: 80, width: 50, marginTop: -55}}
        />
        <Image
          source={{uri: Asset.fromModule(require('./assets/cards/blue_back.png')).uri}}
          style={{height: 80, width: 50, marginTop: -55}}
        />
        <Image
          source={{uri: Asset.fromModule(require('./assets/cards/blue_back.png')).uri}}
          style={{height: 80, width: 50, marginTop: -55}}
        />
        <Image
          source={{uri: Asset.fromModule(require('./assets/cards/JC.png')).uri}}
          style={{height: 80, width: 50, marginTop: -55}}
        />
      </View>
      <View style={styles.tabChild}>
        <Image
          source={{uri: Asset.fromModule(require('./assets/cards/blue_back.png')).uri}}
          style={{height: 80, width: 50}}
        />
        <Image
          source={{uri: Asset.fromModule(require('./assets/cards/blue_back.png')).uri}}
          style={{height: 80, width: 50, marginTop: -55}}
        />
        <Image
          source={{uri: Asset.fromModule(require('./assets/cards/blue_back.png')).uri}}
          style={{height: 80, width: 50, marginTop: -55}}
        />
        <Image
          source={{uri: Asset.fromModule(require('./assets/cards/blue_back.png')).uri}}
          style={{height: 80, width: 50, marginTop: -55}}
        />
        <Image
          source={{uri: Asset.fromModule(require('./assets/cards/blue_back.png')).uri}}
          style={{height: 80, width: 50, marginTop: -55}}
        />
        <Image
          source={{uri: Asset.fromModule(require('./assets/cards/blue_back.png')).uri}}
          style={{height: 80, width: 50, marginTop: -55}}
        />
        <Image
          source={{uri: Asset.fromModule(require('./assets/cards/KC.png')).uri}}
          style={{height: 80, width: 50, marginTop: -55}}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green'
  },
  top: {
    flex: 2,
    flexDirection: 'row'
  },
  tableau: {
    flex: 8,
    flexDirection: 'row',
    padding: 10
  },
  tabChild: {
    flex: 1,
    alignItems: 'center',
    padding: 5
  },
  foundation: {
    flex: 6,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center'
  },
  foundChild: {
    flex: 1,
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    height: 80,
    width: 50
  }
});

export default App;
