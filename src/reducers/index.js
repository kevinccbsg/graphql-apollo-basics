import { SEARCH_ACTION } from './../actions';

const searchState = {
  value: '',
};

const searcher = (state = { ...searchState }, action) => {
  switch (action.type) {
    case SEARCH_ACTION: {
      return { ...state, value: action.payload };
    }
    default:
      return { ...state };
  }
};

export default searcher
