import React, {Component} from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import Scale from '../helpers/Scale';
import Card from '../components/common/Card';
import TextInput from '../components/common/TextInput';
import {connect} from 'react-redux';
import {getAllStores, searchStores} from '../actions';
import ListEmptyComponents from '../components/common/ListEmptyComponents';
import {Navigation} from 'react-native-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import constants from '../constants';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      filter: false,
    };
  }
  componentDidMount() {
    this.props.getAllStores();
  }

  navigate = store => {
    Promise.all([FontAwesome.getImageSource('chevron-left', 20)]).then(
      icons => {
        Navigation.push(this.props.componentId, {
          component: {
            name: 'explore',
            passProps: {
              store,
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
                      title: store.tradingName,
                      leftIcon: 'store',
                    },
                  },
                },
                rightButtons: [
                  {
                    id: 'completeSelection',
                    text: 'Done',
                    color: '#0000ff',
                    fontWeight: 'bold',
                  },
                ],
              },
            },
          },
        });
      },
    );
  };

  search = keyword => {
    this.setState({keyword}, () => {
      if (keyword.length > 2) this.props.searchStores(keyword);
      else this.props.getAllStores();
    });
  };

  getData = () => {
    return this.state.filter
      ? this.props.stores.filter(item => item.status === 'verified')
      : this.props.stores;
  };

  render() {
    let {filter} = this.state;
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: Scale.moderateScale(5),
          }}>
          <View style={{flex: 1, paddingHorizontal: Scale.moderateScale(10)}}>
            <TextInput
              placeholder="Search Store"
              icon="search"
              onChangeText={this.search}
            />
          </View>

          <FontAwesome
            name="filter"
            size={Scale.moderateScale(20)}
            color={filter ? '#0000ff' : 'gray'}
            onPress={() => this.setState({filter: !filter})}
          />
        </View>
        <FlatList
          refreshing={this.props.loading}
          onRefresh={() => this.props.getAllStores()}
          data={this.getData()}
          style={{
            shadowColor: '#000',
            shadowOffset: {height: 1, width: 0},
            shadowOpacity: 0.4,
            shadowRadius: Scale.moderateScale(5),
          }}
          ListEmptyComponent={
            <ListEmptyComponents message="No Stores Founds!" />
          }
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <Card
                style={{
                  borderBottomWidth: 0.5,
                  borderBottomColor: 'grey',
                  marginVertical: Scale.moderateScale(2),
                }}>
                <TouchableOpacity onPress={() => this.navigate(item)}>
                  <Text>{item.tradingName}</Text>
                </TouchableOpacity>
              </Card>
            );
          }}
        />
      </>
    );
  }
}
const mapDispatchToProps = {
  getAllStores,
  searchStores,
};

const mapStateToProps = state => {
  return {
    stores: state.store && state.store.stores,
    loading: state.store && state.store.loading,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
