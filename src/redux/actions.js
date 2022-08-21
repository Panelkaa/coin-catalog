export function Coins () {
    return {
        type: "ADD_COINS",
        payload: {
            coins: []
        }
    }
}

export function CoinID () {
    return {
        type: "ADD_COIN_ID",
        payload: {
            coinId: []
        }
    }
}
