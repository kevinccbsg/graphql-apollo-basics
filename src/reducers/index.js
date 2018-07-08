import { SEARCH_ACTION } from './../actions';

const searchState = {
  searchValue: '',
};

const searcher = (state = { ...searchState }, action) => {
  switch (action.type) {
    case SEARCH_ACTION: {
      return { ...state, searchValue: action.payload };
    }
    default:
      return { ...state };
  }
};

export default searcher
