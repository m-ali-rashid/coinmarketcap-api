
export default function cryptoReducer(state = [], action) {
   switch (action.type) {
      case 'LOAD_CRYPTOS':
         return action.cryptos
      default:
         return state
   }
}
