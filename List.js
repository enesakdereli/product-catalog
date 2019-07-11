import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Constants } from 'expo';
import axios from 'react-native-axios';

export default class List extends React.Component {
  state = {
    jdata: [],
  };
  componentDidMount() {
    const url =
      'https://www.jsonbulut.com/json/product.php?ref=5380f5dbcc3b1021f93ab24c3a1aac24&start=0';
    axios.get(url).then(res => {
      const dt = res.data;
      this.setState({ jdata: dt.Products[0].bilgiler });
      //console.log("dt " + JSON.stringify(this.state.jdata))
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <FlatList
            contentContainerStyle={{ flex: 1, marginBottom: 10 }}
            data={this.state.jdata}
            keyExtractor={item => item.productId}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.push('DetailSc', { item: item })
                }>
                <View
                  style={{
                    flexDirection: 'row',
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: 10,
                    marginBottom: 10,
                  }}>
                  <Image
                    source={{ uri: item.images[0].thumb }}
                    style={{ width: 80, height: 80, marginRight: 10, resizeMode:"contain" }}
                  />
                  <View>
                    <Text>{item.productName}</Text>
                    <Text>{item.price}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //margin: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 5,
  },
});
