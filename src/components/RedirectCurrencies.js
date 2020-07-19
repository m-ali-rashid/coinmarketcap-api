import React, { useEffect } from "react";

const RedirectCurrencies = (props) => {
  useEffect(() => {
    props.history.push(`/currencies/${props.match.params.currency}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <p>Please Wait while Redirected</p>
    </div>
  );
};

export default RedirectCurrencies;
