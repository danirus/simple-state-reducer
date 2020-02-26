export interface IState {
  username: string;
}


export enum ActionTypes {
  CLEAR_USERNAME = 'CLEAR_USERNAME',
  SET_USERNAME = 'SET_USERNAME'
}


export type Actions =
  | { type: ActionTypes.CLEAR_USERNAME }
  | { type: ActionTypes.SET_USERNAME, username: string }


export const initialState: IState = {
  username: ""
}


export function reducer(state: IState, action: Actions) {
  switch (action.type) {
    case ActionTypes.CLEAR_USERNAME:
      return { username: "" };
    case ActionTypes.SET_USERNAME:
      return { username: action.username };
    default:
      return state;

  }
}
