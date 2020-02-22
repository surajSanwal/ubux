import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import {getStoresDetails, getStoresProduct} from '../actions';
import {connect} from 'react-redux';
import Card from '../components/common/Card';
import ListEmptyComponents from '../components/common/ListEmptyComponents';
import Scale from '../helpers/Scale';
import {Navigation} from 'react-native-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import constants from '../constants';

class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    Navigation.events().bindComponent(this);
  }

  componentDidMount() {
    this.props.getStoresDetails(this.props.store.storeId);
    this.props.getStoresProduct(this.props.store.storeId);
  }

  navigate = () => {
    Promise.all([FontAwesome.getImageSource('chevron-left', 20)]).then(
      icons => {
        Navigation.push(this.props.componentId, {
          component: {
            name: 'products',
            passProps: {
              products: this.props.details.products.filter(i =>
                this.state.products.includes(i._id),
              ),
            },
            options: {
              topBar: {
                backButton: {
                  icon: icons[0],
                  color: constants.Colors.Black,
                },
                title: {
                  component: {
                    name: 'topBar',
                    alignment: 'center',

                    passProps: {
                      title: 'My Products',
                      leftIcon: 'opencart',
                    },
                  },
                },
                // rightButtons: [
                //   {
                //     id: 'completeSelection',
                //     text: 'Done',
                //     color: '#0000ff',
                //     fontWeight: 'bold',
                //   },
                // ],
              },
            },
          },
        });
      },
    );
  };

  navigationButtonPressed = ({buttonId}) => {
    if (buttonId === 'completeSelection') {
      if (this.state.products.length) this.navigate();
      else alert('Please Select at least a product.');
    }
  };
  updateList = id => {
    let data = [...this.state.products];
    if (data.includes(id)) {
      data.splice(
        data.findIndex(i => i == id),
        1,
      );
    } else {
      data.push(id);
    }
    this.setState({products: data});
  };
  render() {
    let {products} = this.state;
    let {details} = this.props;
    return (
      <View>
        <FlatList
          refreshing={this.props.loading}
          onRefresh={() => this.props.getStoresProduct(this.props.details._id)}
          data={details.products}
          style={{
            shadowColor: '#000',
            shadowOffset: {height: 1, width: 0},
            shadowOpacity: 0.4,
            shadowRadius: Scale.moderateScale(5),
          }}
          ListHeaderComponent={() => {
            return (
              <>
                <Card
                  style={{
                    borderBottomWidth: 0.5,
                    borderBottomColor: 'grey',
                    marginVertical: Scale.moderateScale(2),
                  }}>
                  {/* name, store suburb and store email */}
                  {/* <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: Scale.moderateScale(16),
                  }}>
                  {details.tradingName}
                </Text> */}
                  <Text
                    style={{
                      textAlign: 'justify',
                      fontSize: Scale.moderateScale(13),
                      marginVertical: Scale.moderateScale(5),
                    }}>
                    {details.description}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: Scale.moderateScale(5),
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: Scale.moderateScale(12),
                      }}>
                      {details.fullAddress}
                    </Text>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: Scale.moderateScale(12),
                      }}>
                      {details.suburb}({details.country})
                    </Text>
                  </View>
                </Card>
                <Card
                  style={{
                    marginTop: Scale.moderateScale(2),
                    borderRadius: 0,
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: Scale.moderateScale(16),
                    }}>
                    Products
                  </Text>
                </Card>
              </>
            );
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
                backgroundColor: products.includes(item._id)
                  ? '#e3f6f5'
                  : '#ffffff',
              }}>
              <TouchableOpacity onPress={() => this.updateList(item._id)}>
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
              </TouchableOpacity>
            </Card>
          )}
        />
      </View>
    );
  }
}
const mapDispatchToProps = {
  getStoresDetails,
  getStoresProduct,
};

const mapStateToProps = state => {
  return {
    details: state.store && state.store.details,
    loading: state.store && state.store.loading,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Explore);
