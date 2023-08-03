import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import {Card , Row , Col , Input } from 'antd';
import {  useGetCryptosQuery } from '../services/cryptoApi.js';

function Cryptocurrencies({simplified}) {
  const count = simplified ? 10 : 100;
  const {data:cryptosList , isFetching} = useGetCryptosQuery(count);
  const[cryptos , setCryptos] = useState([]);
  const [searchTerm, setSeachTerm] = useState('');
  useEffect(()=>{
    // setCryptos(cryptosList?.data?.coins);
    const filteredData = cryptosList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setCryptos(filteredData);
  },[cryptosList,searchTerm]);

  // console.log(cryptos);

  if(isFetching) return'Loading...';
  
// simplified is passed from home page and by default is considred true

  return (
    
    <>
    {/* search bar */}
      <div className='search-crypto'>
        <Input placeholder='Search' onChange={(e)=>setSeachTerm(e.target.value)}/>


      </div>
      <Row gutter={[32,32]}  className={"crypto-card-container"}>
        {cryptos?.map((currency)=>(
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id} >
            <Link  to={`/crypto/${currency.uuid}`}>
              <Card 
              title={`${currency.rank}.${currency.name}`}
              extra={<img className="crypto-image" src={currency.iconUrl} alt="crypto"/>}
              hoverable
              >
              <p>Price : {millify(currency.price)}</p>
              <p>Price : {millify(currency.marketCap)}</p>
              <p>Daily Change: {millify(currency.change)}</p>
              </Card>

            </Link>

          </Col>
        ))}

      </Row>
    </>
  )
}


export default Cryptocurrencies