import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import { Constants } from 'expo';

export default class Detail extends React.Component {
  dt = this.props.navigation.getParam('item', null);
  static navigationOptions = {
    title: 'Ürün Detayı',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={{ textAlign: 'center', flex: 1, fontSize: 25 }}>
            {this.dt.productName}
          </Text>
          <Image
            source={{ uri: this.dt.images[0].normal }}
            style={{
              width: 300,
              height: 300,
              alignSelf: 'center',
              flex: 1,
              resizeMode:"contain"
            }}
          />
          <Text>{this.dt.price}</Text>
          <Text>{this.dt.description}</Text>
        </ScrollView>
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
