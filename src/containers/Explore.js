import React, {Component} from "react";
import {Text, View, FlatList, TouchableOpacity, StyleSheet} from "react-native";
import {getStoresDetails, getStoresProduct} from "../actions";
import {connect} from "react-redux";
import Card from "../components/common/Card";
import ListEmptyComponents from "../components/common/ListEmptyComponents";
import Scale from "../helpers/Scale";
import {Navigation} from "react-native-navigation";
import {push} from "../actions/navigation";

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
    push(
      this.props.componentId,
      "products",
      {
        products: this.props.details.products.filter(i =>
          this.state.products.includes(i._id),
        ),
      },
      {
        props: {
          title: "My Products",
          leftIcon: "opencart",
        },
      },
    );
  };

  navigationButtonPressed = ({buttonId}) => {
    if (buttonId === "completeSelection") {
      if (this.state.products.length) this.navigate();
      else alert("Please Select at least a product.");
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
          style={style.listStyle}
          ListHeaderComponent={() => {
            return (
              <>
                <Card style={style.cardStyle}>
                  <Text style={style.description}>{details.description}</Text>
                  <View style={style.addressView}>
                    <Text style={style.address}>{details.fullAddress}</Text>
                    <Text style={style.state}>
                      {details.suburb}({details.country})
                    </Text>
                  </View>
                </Card>
                <Card style={style.productsCard}>
                  <Text style={style.products}>Products</Text>
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
              style={[
                style.itemCard,
                {
                  backgroundColor: products.includes(item._id)
                    ? "#e3f6f5"
                    : "#ffffff",
                },
              ]}>
              <TouchableOpacity onPress={() => this.updateList(item._id)}>
                <View style={style.nameView}>
                  <Text style={style.name}>{item.name}</Text>
                  <Text style={style.price}>${item.priceCash}</Text>
                </View>
                <Text style={style.itemDescription}>{item.description}</Text>
              </TouchableOpacity>
            </Card>
          )}
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
  description: {
    textAlign: "justify",
    fontSize: Scale.moderateScale(13),
    marginVertical: Scale.moderateScale(5),
  },
  addressView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: Scale.moderateScale(5),
  },
  address: {
    fontWeight: "bold",
    fontSize: Scale.moderateScale(12),
  },
  style: {
    fontWeight: "bold",
    fontSize: Scale.moderateScale(12),
  },
  productsCard: {
    marginTop: Scale.moderateScale(2),
    borderRadius: 0,
  },
  itemCard: {
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
  products: {
    fontWeight: "bold",
    fontSize: Scale.moderateScale(16),
  },
  itemDescription: {
    textAlign: "justify",
    fontSize: Scale.moderateScale(13),
    marginVertical: Scale.moderateScale(5),
  },
});

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
