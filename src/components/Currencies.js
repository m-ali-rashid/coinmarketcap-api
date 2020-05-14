import React, { Component } from 'react'
import axios from 'axios'


export class Currencies extends Component {
   state = {
      currency:'',
      quote:'',
      error:false,
   }
   componentDidMount(){
      let coin = this.props.match.params.coin
      this.setState({coin})
      axios.get(`/currencies/${coin}`)
         .then(res => {
            console.log(res.data.data)
            this.setState({ 
               currency: res.data.data[coin],
               quote:res.data.data[coin].quote.USD
            })})
         .catch(err => {this.setState({ error: true })})
   }
   render() {

      function importAll(r) {
         let images = {};
         // eslint-disable-next-line array-callback-return
         r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
         return images;
      }

      const images = importAll(require.context('../images/128x128', false, /\.(png|jpe?g|svg)$/));
      const styles = { green: { color: '#00ff00' }, red: { color: '#ff0000' } }

      return (
         this.state.currency ? (

         <div className='d-sm-flex flex-row justify-content-between'>
            <div className='px-2' style={{minWidth:'250px'}}>
               <p style={{ fontSize: '2.5rem' }}>
                  {this.state.currency.name}
               </p>
               <h4 style={{color:'grey'}}>
                  {this.state.currency.symbol}
               </h4>
               {/* eslint-disable-next-line jsx-a11y/alt-text */}
               <img className='my-3 w-90' src={images[this.state.currency.slug + '.png']} />
               <p style={{fontSize:'1.1rem'}}>
                  Rank:
                  <span style={{color:'green'}}>
                     {this.state.currency.cmc_rank}
                  </span>
               </p>
               <p style={{fontSize:'1.1rem'}}>
                  Tags:
                  <span style={{color:'green'}}>
                     {this.state.currency.tags[0]}
                  </span>
               </p>
            </div>
            <div className='d-flex flex-column flex-grow-1'>
               <div className="p-4">
                  <p style={{fontSize:'2rem'}}>
                     ${this.state.quote.price.toLocaleString()}
                     <span> USD </span>
                     <span style={this.state.quote.percent_change_24h < 0 ? styles.red : styles.green}>
                        ({this.state.quote.percent_change_24h.toFixed(2)}%)
                     </span>
                  </p>
               </div>
               <div className="d-md-flex flex-row">
                  <div className="flex-grow-1">
                     <h5 className="bg-secondary text-center text-light pt-1 pb-2">
                        Market Capital
                     </h5>
                     <p className="px-auto text-center">
                        ${Math.floor(this.state.quote.market_cap).toLocaleString()}
                     </p>
                  </div>
                  <div className="flex-grow-1">
                     <h5 className="bg-secondary text-center text-light pt-1 pb-2">
                        Volume (24h)
                     </h5>
                     <p className="px-auto text-center">
                        ${Math.floor(this.state.quote.volume_24h).toLocaleString()}
                     </p>
                  </div>
                  <div className="flex-grow-1">
                     <h5 className="bg-secondary text-center text-light pt-1 pb-2">
                        Circulating Supply
                     </h5>
                     <p className="px-auto text-center">
                        {Math.round(this.state.currency.circulating_supply).toLocaleString()} {this.state.currency.symbol}
                     </p>
                  </div>
                  <div className="flex-grow-1">
                     <h5 className="bg-secondary text-center text-light pt-1 pb-2">
                        Max Supply
                     </h5>
                     <p className="px-auto text-center">
                        {Math.round(this.state.currency.max_supply).toLocaleString()} {this.state.currency.symbol}
                     </p>
                  </div>
               </div>
            </div>
         </div>
         ) : ( <p>Please wait While Data Loads</p> )
      )
   }
}



export default Currencies
