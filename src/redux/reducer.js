const initialState = {
    arrCoins: [],
    idCoin: [],
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_COINS':
            const arrCoins = action.payload.coins
            console.log("BOOOOOOOOOB",...arrCoins)
            return {
                ...state,arrCoins
            }
        case 'ADD_COIN_ID':
            const coinId = [...state.arrCoins];
            const newArray =  coinId.filter(item => item.id !== action.payload.coinId)
            console.log("IDDDDDDDD",...newArray)
    
            return {
                ...state,
                idCoin: newArray    
            }    
     
        default:
            return state;  
      }
  }
  export default reducer;
  