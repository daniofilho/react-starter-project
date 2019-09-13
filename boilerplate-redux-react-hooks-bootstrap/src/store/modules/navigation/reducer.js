export default function navigation(state = {}, action) {
  switch (action.type) {
    case '@navigation/SET_PAGE':
      return { ...state, page: action.page };

    default:
      return state;
  }
}
