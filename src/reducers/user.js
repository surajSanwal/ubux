const INITIAL_STATE = {
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TEST':
      return {...state};
    default:
      return {...state};
  }
};
