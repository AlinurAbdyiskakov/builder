import { ADD_ANIMAL, REMOVE_ANIMAL, SET_ANIMAL } from "./types";
import axios from"axios";
export const add = (animal) => ({
  type: ADD_ANIMAL,
  animal: animal
});

export const remove = (animal) => ({
  type: REMOVE_ANIMAL,
  animal: animal
});

export const set = (data) => ({
    type: SET_ANIMAL,
    data: data
  });
  
  export const load = () => {
    return (dispatch) => axios
      .get('https://builder-e02c1-default-rtdb.firebaseio.com/default.json')
      .then(response => dispatch(set(response.data)));
  }