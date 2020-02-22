import React, {Component} from "react";
import {Text, View, FlatList, Alert, StyleSheet} from "react-native";
import {connect} from "react-redux";
import Scale from "../helpers/Scale";
import ListEmptyComponents from "../components/common/ListEmptyComponents";
import Card from "../components/common/Card";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: (this.props && this.props.products) || [],
    };
  }

  removeItem = id => {
    Alert.alert("UBUX", "Are you sure want to remove product?", [
      {text: "No"},
      {
        text: "Yes",
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
          style={style.listStyle}
          ListEmptyComponent={
            <ListEmptyComponents message="Products Not Founds!" />
          }
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Card style={style.cardStyle}>
              <View onPress={() => this.updateList(item._id)}>
                <View style={style.nameView}>
                  <Text style={style.name}>{item.name}</Text>
                  <Text style={style.price}>${item.priceCash}</Text>
                </View>
                <Text style={style.description}>{item.description}</Text>
              </View>
              <Text
                onPress={() => this.removeItem(item._id)}
                style={style.removeBtn}>
                Remove
              </Text>
            </Card>
          )}
          ListFooterComponent={() => {
            if (!this.state.products.length) return null;
            return (
              <Card style={style.footerStyle}>
                <Text style={style.priceTotal}>Total Price</Text>
                <Text style={style.totalCost}>$ {this.getCost()}</Text>
              </Card>
            );
          }}
        />
      </View>
    );
  }
}
const style = StyleSheet.create({
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
  nameView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "bold",
    fontSize: Scale.moderateScale(16),
  },
  price: {
    fontWeight: "bold",
    fontSize: Scale.moderateScale(14),
    color: "#0000ff",
  },
  description: {
    textAlign: "justify",
    fontSize: Scale.moderateScale(13),
    marginVertical: Scale.moderateScale(10),
  },
  removeBtn: {
    alignSelf: "flex-end",
    padding: Scale.moderateScale(5),
    color: "red",
    fontSize: Scale.moderateScale(14),
  },
  footerStyle: {
    borderBottomWidth: 0.5,
    borderBottomColor: "grey",
    marginVertical: Scale.moderateScale(2),
    flexDirection: "row",
    justifyContent: "space-around",
  },
  priceTotal: {
    fontWeight: "bold",
    fontSize: Scale.moderateScale(16),
  },
  totalCost: {
    fontWeight: "bold",
    fontSize: Scale.moderateScale(18),
    color: "#0000ff",
  },
});
const mapDispatchToProps = {};

const mapStateToProps = () => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
