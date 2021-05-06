const initialState ={
    animals:{
        Dog: 1,
        Pig: 1,
        Mouse:1,
        Cat:1,
        Reccoon: 1,
        Hamster:1,
    },
    price:342,
};

const prices = {
    Dog: 80,
    Pig: 70,
    Mouse:60,
    Cat:20,
    Reccoon: 67,
    Hamster:45,
  };
  

const AnimalReducer=(state=initialState,action)=>{
    const newState={...state};
    switch (action.type) {
        case "ADD_ANIMAL":
            newState.animals[action.animal]++; 
            newState.price+=prices[action.animal]
            break;
            case "REMOVE_ANIMAL":
                newState.animals[action.animal]--; 
                newState.price-=prices[action.animal]
                break;
        default:
            break;
    }
        return newState ;
    }
   export default AnimalReducer;