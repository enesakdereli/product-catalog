import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';

export default class Home extends React.Component {
  fncGotoList = () => {
    this.props.navigation.push('ListSc');
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.fncGotoList()}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
