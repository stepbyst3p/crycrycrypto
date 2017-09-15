import React from 'react';


const App = () => {
  return (
    <div>
      <h2 id="heading">Hello ReactJS</h2>
      <div className="quotes">
        <div className="item">
          <div className="value">3795</div>
          <div className="note">BTC to USD</div>
        </div>
        <div className="item">
          <div className="value">262</div>
          <div className="note">ETH to USD</div>
        </div>
        <div className="item">
          <div className="value">298</div>
          <div className="note">DASH to USD</div>
        </div>
      </div>
    </div>
  );
};

export default App;
