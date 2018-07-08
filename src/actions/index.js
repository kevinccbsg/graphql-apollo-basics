
const SEARCH_ACTION = 'SEARCH_ACTION';
const searchAction = (input) => (
  {
    type: SEARCH_ACTION,
    payload: input,
  }
);

export {
  SEARCH_ACTION,
  searchAction,
};
