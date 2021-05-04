const initialState ={
    ingredients:{
        Dog: 1,
        Pig: 1,
        Mouse:1,
        Cat:1,
        Reccoon: 1,
        Parrot:1,
    },
    price:342,
};

const prices = {
    Dog: 80,
    Pig: 70,
    Mouse:60,
    Cat:20,
    Reccoon: 67,
    Parrot:45,
  };
  

const AnimalReducer=(state=initialState,action)=>{
    const newState={...state};
    switch (action.type) {
        case "ADD_ANIMAL":
            newState.ingredients[action.ingredient]++; 
            newState.price+=prices[action.ingredient]
            break;
            case "REMOVE_ANIMAL":
                newState.ingredients[action.ingredient]--; 
                newState.price-=prices[action.ingredient]
                break;
        default:
            break;
    }
        return newState ;
    }
   export default AnimalReducer;