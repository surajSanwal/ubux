const INITIAL_STATE = {
  loading: false,
  stores: [],
  details: {
    products: [],
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_STORE_REQUEST':
      return {...state, loading: true};
    case 'GET_STORE_SUCCESS':
      return {...state, stores: action.payload, loading: false};
    case 'GET_STORE_FAIL':
      return {...state, loading: false};
    case 'GET_STORE_DETAIL_REQUEST':
      return {...state, loading: true};
    case 'GET_STORE_DETAIL_FAIL':
      return {...state, loading: false};
    case 'GET_STORE_DETAIL_SUCCESS':
      return {...state, loading: false, details: action.payload};
    case 'GET_STORE_PRODUCT_REQUEST':
      return {...state, loading: true};
    case 'GET_STORE_PRODUCT_SUCCESS':
      return {
        ...state,
        loading: false,
        details: {...state.details, products: action.payload},
      };
    case 'GET_STORE_PRODUCT_FAIL':
      return {...state, loading: false};
    default:
      return {...state};
  }
};
