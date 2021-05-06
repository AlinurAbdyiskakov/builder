const initialState ={
    animals:{
        Dog: 1,
        Cat:1,
        Turtle:1,
        Reccoon: 1,
        Hamster:1, 
        Chameleon: 1,
    },
    price:342,
};

const prices = {
    Dog: 80,
    Cat:20,
    Turtle:60,
    Reccoon: 67,
    Hamster:45,  
    Chameleon: 70,
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