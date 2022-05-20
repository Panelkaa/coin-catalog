const initialState = {
    arrCoins: [],
    idCoin: []
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_COINS':
            const arrCoins = action.payload.coins
            console.log("BOOOOOOOOOB",...arrCoins)
            return {
                arrCoins: arrCoins
            }
        case 'ADD_COIN_ID':       
            const idCoin = action.payload.coinId;
            // const newArray =  coinId.filter(item => item.id !== action.payload.coin_Id)
            console.log("IDDDDDDDD",idCoin)
            return {
                idCoin : idCoin
            }    
            
     
        default:
            return state;  
      }
  }
  export default reducer;
  