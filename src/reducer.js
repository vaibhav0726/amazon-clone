export const initialState = {
    basket: [],
    // user: null
}

// Selector
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0); // initial amount is 0

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            // copying basket state
            // important to learn 3:18:24 🚀🚀
            let newBasket = [...state.basket]; 

            if(index >= 0){
                // slicing the basket and giving the first one
                newBasket.splice(index, 1); 
            }
            else{
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket!`
                )
            }

            return{
                ...state,
                basket: newBasket
            }

      default:
        return state;
    }
};

export default reducer;