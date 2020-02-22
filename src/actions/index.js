import RestClient from "../helpers/RestClient";

export const getAllStores = () => {
  return dispatch => {
    dispatch({type: "GET_STORE_REQUEST"});
    RestClient.getCall("get-all-stores")
      .then(response => {
        if (response.success) {
          dispatch({type: "GET_STORE_SUCCESS", payload: response.stores});
        } else {
          dispatch({type: "GET_STORE_FAIL", response});
        }
      })
      .catch(e => {
        dispatch({type: "GET_STORE_FAIL", e});
      });
  };
};

export const searchStores = keyword => {
  return dispatch => {
    dispatch({type: "GET_STORE_REQUEST"});
    RestClient.restCall("search-store", {keyword})
      .then(response => {
        if (response.success) {
          dispatch({type: "GET_STORE_SUCCESS", payload: response.stores});
        } else {
          dispatch({type: "GET_STORE_FAIL", response});
        }
      })
      .catch(e => {
        dispatch({type: "GET_STORE_FAIL", e});
      });
  };
};

export const getStoresDetails = storeId => {
  return dispatch => {
    dispatch({type: "GET_STORE_DETAIL_REQUEST"});
    RestClient.getCall("get-store", {storeId})
      .then(response => {
        if (response.success) {
          dispatch({
            type: "GET_STORE_DETAIL_SUCCESS",
            payload: response.store,
          });
        } else {
          dispatch({type: "GET_STORE_DETAIL_FAIL", response});
        }
      })
      .catch(e => {
        dispatch({type: "GET_STORE_DETAIL_FAIL", e});
      });
  };
};

export const getStoresProduct = storeId => {
  return dispatch => {
    dispatch({type: "GET_STORE_PRODUCT_REQUEST"});
    RestClient.getCall("get-store-products", {storeId})
      .then(response => {
        if (response.success) {
          dispatch({
            type: "GET_STORE_PRODUCT_SUCCESS",
            payload: response.products,
          });
        } else {
          dispatch({type: "GET_STORE_PRODUCT_FAIL", response});
        }
      })
      .catch(e => {
        dispatch({type: "GET_STORE_PRODUCT_FAIL", e});
      });
  };
};
