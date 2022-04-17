type AppState = {};
type Action =
  | { type: 'SET_ONE'; playload: string }
  | { type: 'SET_TWO'; playload: number };

export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'SET_ONE':
      return {
        ...state,
        one: action.playload,
      };
    case 'SET_TWO':
      return {
        ...state,
        two: action.playload,
      };
    default:
      return state;
  }
}
