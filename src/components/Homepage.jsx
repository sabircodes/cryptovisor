import React from 'react'
import millify from 'millify'
import { Typography , Row ,Col , Statistic } from 'antd'
import {  useGetCryptosQuery } from '../services/cryptoApi.js';
import {Cryptocurrencies ,News} from '../components';
import { Link } from 'react-router-dom';


// import News from './News.jsx';
const {Title} = Typography;





function Homepage() {
    const {data , isFetching} = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;
    // console.log(data);
  if(isFetching) {return 'Loading....'}




  return (
    <>
      <Title level={2} className="heading" >Global Crypto Stats</Title> 
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats?.total}/></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats?.totalExchanges)}/></Col>
        <Col span={12}><Statistic title="Total market Cap" value={millify(globalStats?.totalMarketCap)}/></Col>
        <Col span={12}><Statistic title="Total 24h volume" value={millify(globalStats?.total24hVolume)}/></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats?.totalMarkets)}/></Col>
        {/* <Col span={12}><Statistic title="Total Cryptocurrencies" value="5"/></Col> */}
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptocurrencies</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>

      </div>
      {/* simplified is usse to render only 10 components  */}
      <Cryptocurrencies simplified/>


      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>

      </div>
      <News  simplified/>

      
    </>
  )
}

export default Homepage
