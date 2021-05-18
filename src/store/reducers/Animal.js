import {
  REMOVE_ANIMAL,
  ADD_ANIMAL,
  SET_ANIMAL
} from "../actions/types";

const initialState = {
  animals: {

  },
  price: 342,
};

const prices = {
  dog: 80,
  cat: 20,
  turtle: 60,
  reccoon: 67,
  hamster: 45,
  chameleon: 70,
};


const Animal = (state = initialState, action) => {
  const newState = {
    ...state
  };
  switch (action.type) {
    case ADD_ANIMAL:
      newState.animals[action.animal]++;
      newState.price += prices[action.animal]
      break;
    case REMOVE_ANIMAL:
      newState.animals[action.animal]--;
      newState.price -= prices[action.animal]
      break;
    case SET_ANIMAL:
      return {
        ...action.data
      };
    default:
      break;
  }
  return newState;
}
export default Animal;