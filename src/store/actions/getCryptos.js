// import * as gitApi from '../../api/gitApi'
import axios from 'axios'

export function getCryptos(start,limit){
   return (dispatch) => {
      return axios.get(`/top/${start}/${limit}`).then(cryptos => {
         console.log(cryptos.data.data);
         dispatch({ type: "LOAD_CRYPTOS", cryptos: cryptos.data.data })
      }).catch(error => { throw error; })
   }
}
