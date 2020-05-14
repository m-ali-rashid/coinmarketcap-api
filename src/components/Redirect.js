import React, { Component } from 'react'

export class Redirect extends Component {
   state = {
      page: this.props.location.state.page,
      limit: this.props.location.state.limit,
      type: this.props.location.state.type
   }
   componentDidMount(){
      
      if (this.state.type === 'next') {
         this.props.history.push(`top/${parseInt(this.state.page) + 10}/${this.state.limit}`)
      } 
      else if (this.state.type === 'prev') {
         this.props.history.push(`top/${parseInt(this.state.page) - 10}/${this.state.limit}`)
      }
      else {
         this.props.history.push(`top/${this.state.page}/${this.state.limit}`)
      }
   }
   render() {
      return (
         <div>  
         </div>
      )
   }
}

export default Redirect
