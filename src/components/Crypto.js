import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Crypto extends Component {
  state = {
    cryptos: [],
    page:'' ,
    limit: '',
    items:[
      {id:'1', value:'10'},
      {id:'2', value:'20'},
      {id:'3', value:'30'},
      {id:'4', value:'40'},
      {id:'5', value:'50'},
      {id:'6', value:'60'},
      {id:'7', value:'70'},
      {id:'8', value:'80'},
      {id:'9', value:'90'},
      {id:'10', value:'100'}
    ],
    loading: true,
    error:false,
  }
  
  componentDidMount() {
    const page = this.props.match.params.page;
    const limit = this.props.match.params.limit;
    this.setState({page,limit})
    axios.get(`/top/${page}/${limit}`)
    .then(
      res => {
        this.setState({
          cryptos: res.data.data,
          loading: false
        })
      })
    .catch(err=>{
      this.setState({ error: true})
      console.log(err)
    })
  }
  handleChange=(e)=>{
    const limit = e.target.value;
    const page = this.state.page;
    this.props.history.push({pathname: `/redirect`, state:{page, limit, type:'limit'}})
  }

    render() {
      const page = this.state.page
      const limit = this.state.limit
      const styles = { green: { color: '#00ff00' }, red: { color: '#ff0000' } }

      function importAll(r) {
        let images = {};
        // eslint-disable-next-line array-callback-return
        r.keys().map((item, index)=>{ images[item.replace('./', '')] = r(item); });
        return images;
      }

      const images = importAll(require.context('../images/16x16', false, /\.(png|jpe?g|svg)$/));

      //Results per Page DropDown
      const resPerPage = (
        <div className="form-group">
          <label>Results per Page:</label >
          <select onChange={this.handleChange} value={this.state.limit}  className="form-control mx-2"style={{ width: '80px', display:'inline' }}>
            {
              this.state.items.map((item)=>
                <option key={item.id} >{item.value}</option>
                // <option key={item.id} selected = {(item.value===this.state.limit ? 'selected': '')}  >{item.value}</option>
              )
            }
          </select>
        </div>
      )

      //Previous Results Button
      const prevButton = this.props.match.params.page !== '1' ? (
        <Link to={{pathname:'/redirect', state:{page, limit, type:'prev'}}}>
          <button className="btn btn-primary mx-2"> Prev </button>
        </Link>
      ) : (<button className="btn btn-secondary mx-2" disabled> Prev </button>)
      
      //Next Results Button
      const nextButton = this.state.cryptos[this.state.cryptos.length-1]?(
        <Link to={{ pathname: '/redirect', state: { page, limit, type:'next'}}}>
          <button className="btn btn-primary mx-2"> Next </button>
        </Link>
      ) : (<button className="btn btn-secondary mx-2" disabled> Next </button>)

      //Display List
      const displayResult = (
        this.state.error ? (
            <p className='text-danger'>Unable To Retreive Data</p>
        ):( this.state.loading ? (<p className='text-info'>Please wait while data loads</p> ):(
            <table className="table table-sm table-hover">
              <thead>
                <tr>
                  <th scope="col">Rank</th>
                  <th scope="col">Name</th>
                  <th scope="col">Market Cap</th>
                  <th scope="col">Price</th>
                  <th scope="col">Volume (24h)</th>
                  <th scope="col">Circulating Supply</th>
                  <th scope="col">Change (24h)</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.cryptos ? (
                    this.state.cryptos.map(crypto =>
                      <tr key={crypto.id}>
                        <td>{crypto.cmc_rank}</td>
                         {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <th scope="row"><Link to={'../../currencies/' + crypto.symbol}><img src={images[crypto.slug + '.png']} /> {crypto.name}</Link></th>
                        <td>${Math.floor(crypto.quote.USD.market_cap).toLocaleString()}</td>
                        <td>${crypto.quote.USD.price.toLocaleString()}</td>
                        <td>${Math.floor(crypto.quote.USD.volume_24h).toLocaleString()}</td>
                        <td>{Math.round(crypto.circulating_supply).toLocaleString()} {crypto.symbol}</td>
                        <td style={crypto.quote.USD.percent_change_24h < 0 ? styles.red : styles.green}>{crypto.quote.USD.percent_change_24h.toFixed(2)}%</td>
                      </tr>)
                  ) : (<p>Nops</p>)
                }
              </tbody>
            </table>
          )
        )
      )

      return (
        <div>
          <div className="d-flex justify-content-between">
            <div>
              {resPerPage}
            </div>
            <div>
              {prevButton}
              {nextButton}
            </div>
          </div>
          {displayResult}
          
          
        </div>
      );
    }
}

export default Crypto;