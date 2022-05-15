const initialState = {
    coins: [],
    idCoin: [],
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'COINS':
            const coins = action.payload.coins
            console.log(coins)
            return {
                ...state,coins
            }
     
        default:
            return state;  
      }
    return state
  }
  export default reducer;
  