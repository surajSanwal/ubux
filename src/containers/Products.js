import React, {Component} from 'react';
import {Text, View, FlatList, Alert} from 'react-native';
import {connect} from 'react-redux';
import Scale from '../helpers/Scale';
import ListEmptyComponents from '../components/common/ListEmptyComponents';
import Card from '../components/common/Card';
import {act} from 'react-test-renderer';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: (this.props && this.props.products) || [],
    };
  }

  removeItem = id => {
    Alert.alert('UBUX', 'Are you sure want to remove product?', [
      {text: 'No'},
      {
        text: 'Yes',
        onPress: () => {
          let data = [...this.state.products];
          let index = data.findIndex(i => i._id === id);
          if (index > -1) {
            data.splice(index, 1);
            this.setState({products: data});
          }
        },
      },
    ]);
  };
  getCost = () =>
    this.state.products.reduce((d, i) => {
      d += i.priceCash;
      return d;
    }, 0);
  render() {
    return (
      <View>
        <FlatList
          data={this.state.products}
          style={{
            shadowColor: '#000',
            shadowOffset: {height: 1, width: 0},
            shadowOpacity: 0.4,
            shadowRadius: Scale.moderateScale(5),
          }}
          ListEmptyComponent={
            <ListEmptyComponents message="Products Not Founds!" />
          }
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Card
              style={{
                borderBottomWidth: 0.5,
                borderBottomColor: 'grey',
                marginVertical: Scale.moderateScale(2),
              }}>
              <View onPress={() => this.updateList(item._id)}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: Scale.moderateScale(16),
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: Scale.moderateScale(14),
                      color: '#0000ff',
                    }}>
                    ${item.priceCash}
                  </Text>
                </View>
                <Text
                  style={{
                    textAlign: 'justify',
                    fontSize: Scale.moderateScale(13),
                    marginVertical: Scale.moderateScale(5),
                  }}>
                  {item.description}
                </Text>
              </View>
              <Text
                onPress={() => this.removeItem(item._id)}
                style={{
                  alignSelf: 'flex-end',
                  padding: Scale.moderateScale(5),
                  color: 'red',
                  fontSize: Scale.moderateScale(14),
                }}>
                Remove
              </Text>
            </Card>
          )}
          ListFooterComponent={() => {
            if (!this.state.products.length) return null;
            return (
              <Card
                style={{
                  borderBottomWidth: 0.5,
                  borderBottomColor: 'grey',
                  marginVertical: Scale.moderateScale(2),
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: Scale.moderateScale(16),
                  }}>
                  Total Price
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: Scale.moderateScale(18),
                    color: '#0000ff',
                  }}>
                  $ {this.getCost()}
                </Text>
              </Card>
            );
          }}
        />
      </View>
    );
  }
}
const mapDispatchToProps = {};

const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
