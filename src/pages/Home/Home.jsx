import React, { useEffect } from 'react';

const Home = () => {
      useEffect(() => {
        document.title = "TradePort | Home";
      }, []);
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default Home;