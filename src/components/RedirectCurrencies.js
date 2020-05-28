import React, { useState, useEffect } from 'react';


const RedirectCurrencies = (props) => {
  useEffect(() => {
    // console.log(props);
    props.history.push(`/currencies/${props.match.params.currency}`)
  },[]);
  return(
    <div>
      <p>Please Wait while Redirected</p>
    </div>
  )
}

export default RedirectCurrencies
