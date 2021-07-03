import { useReducer } from "react";

interface HookArgs {
  initialKeyword: string,
  initialRating: string
}

interface ReducerState {
  keyword:string,
  times:number,
  rating:string
}

type ReducerAction = { 
  type: 'update_keyword' | 'update_rating', 
  payload: string 
}

const ACTION_REDUCERS = {
  update_keyword: (state:ReducerState, action:ReducerAction) => ({
    ...state,
    keyword: action.payload,
    times: state.times + 1 
  }),
  update_rating: (state:ReducerState, action:ReducerAction) => ({
    ...state,
    rating: action.payload
  })
}

const reducer = (state:ReducerState, action:ReducerAction) => {
  const actionReducer = ACTION_REDUCERS[action.type];
  return actionReducer? actionReducer(state, action) : state;
}

const useForm = ({ initialKeyword, initialRating }:HookArgs) => {
  const [ state, dispatch ] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    times: 0,
    rating: initialRating
  });

  const { keyword, rating, times } = state;

  return { 
    keyword,
    rating, 
    times,
    updateKeyword: (keyword:string) => 
      dispatch({ type: 'update_keyword', payload: keyword }),
    updateRating: (rating:string) => 
      dispatch({ type:'update_rating', payload: rating })
  };
}

export { useForm };
