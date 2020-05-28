
import React from 'react'
import './styles/Tables.css'

class Tables extends React.Component {
  items = [ { name: 'a', price: 10},
                { name: 'b', price: 20},
                     { name: 'c', price: 10},
                     { name: 'd', price: 30},
                   ];
  render() {
    const priceOptions = [{text:'',value:''}]
    const prices = [
      ...new Set(this.items.map(item=>item.price))
    ]
    console.log(prices);
    return(
      <div>

      </div>
    );
  }
}

export default Tables
