import React, {Component} from "react";
import {FlatList, View, Text, TouchableOpacity, StyleSheet} from "react-native";
import Scale from "../helpers/Scale";
import Card from "../components/common/Card";
import TextInput from "../components/common/TextInput";
import {connect} from "react-redux";
import {getAllStores, searchStores} from "../actions";
import ListEmptyComponents from "../components/common/ListEmptyComponents";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {push} from "../actions/navigation";
import constants from "../constants";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      filter: false,
    };
  }
  componentDidMount() {
    this.props.getAllStores();
  }

  navigate = store => {
    push(
      this.props.componentId,
      "explore",
      {
        store,
      },
      {
        props: {
          title: store.tradingName,
          leftIcon: "store",
        },
        rightButtons: [
          {
            id: "completeSelection",
            text: "Done",
            color: "#0000ff",
            fontWeight: "bold",
          },
        ],
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
      ? this.props.stores.filter(item => item.status === "verified")
      : this.props.stores;
  };

  render() {
    let {filter} = this.state;
    return (
      <>
        <View style={style.container}>
          <View style={style.searchView}>
            <TextInput
              placeholder="Search Store"
              icon="search"
              onChangeText={this.search}
            />
          </View>

          <FontAwesome
            name="filter"
            size={Scale.moderateScale(20)}
            color={filter ? "#0000ff" : "gray"}
            onPress={() => this.setState({filter: !filter})}
          />
        </View>
        <FlatList
          refreshing={this.props.loading}
          onRefresh={() => this.props.getAllStores()}
          data={this.getData()}
          style={style.listStyle}
          ListEmptyComponent={
            <ListEmptyComponents message="No Stores Founds!" />
          }
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <Card style={style.cardStyle}>
                <TouchableOpacity
                  style={style.itemView}
                  onPress={() => this.navigate(item)}>
                  <Text style={style.name}>{item.tradingName}</Text>
                  {item.status === "verified" && (
                    <View style={style.roundStyle}>
                      <FontAwesome name={"check"} color="#ffffff" size={15} />
                    </View>
                  )}
                </TouchableOpacity>
              </Card>
            );
          }}
        />
      </>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: Scale.moderateScale(5),
  },
  listStyle: {
    shadowColor: "#000",
    shadowOffset: {height: 1, width: 0},
    shadowOpacity: 0.4,
    shadowRadius: Scale.moderateScale(5),
  },
  cardStyle: {
    borderBottomWidth: 0.5,
    borderBottomColor: "grey",
    marginVertical: Scale.moderateScale(2),
  },
  name: {
    ...constants.Fonts.HeeboMedium,
    fontSize: Scale.moderateScale(15),
  },
  searchView: {flex: 1, paddingHorizontal: Scale.moderateScale(10)},
  itemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  roundStyle: {
    backgroundColor: "#00FF00",
    height: Scale.moderateScale(20),
    width: Scale.moderateScale(20),
    borderRadius: Scale.moderateScale(100),
    justifyContent: "center",
    alignItems: "center",
  },
});
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
