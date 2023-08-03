import React from 'react'
import {Select , Typography,Row ,Col  ,Card}  from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi.js';
import {  useGetCryptosQuery } from '../services/cryptoApi.js';
const {Text , Title} = Typography;
const {Option} = Select;

// const demoimage = "https://images.unsplash.com/photo-1627540056810-d2223597e2ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNyeXB0b2N1cnJlbmN5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60";

function News({simplified}) {

  const {data:cryptoNews,isFetching} = useGetCryptoNewsQuery(20);
  console.log(cryptoNews);
  const {data} = useGetCryptosQuery(100);
  // if(!cryptoNews?.value) return 'Loading....';
  if(isFetching) {return 'Loading....'}

  return (
    <div>
        <Row gutter={[24,24]}>
        {!simplified && (
          <Col span={24}>
            <Select
             showSearch = "Select-news"
              placeholder="Select a Crypto"
              optionFilterProp = "children"
              onChange={(value)=>console.log(value)}
              filterOption = {(input,option)=>option.children.toLowerCase().indexOf(input.toLowerCase())>=0}
              >
             {data?.data?.coins.map((coin)=><Option value = {coin.name}>{coin.name}</Option>)}

            </Select>
          </Col>
        )}
        {cryptoNews.map((news,index)=>(
          <Col xs={24} sm={12} lg={8} key={index}>
            <Card hoverable className='news-card'>
              <a href={news.url} target="_blank" rel="noreferrer">
                  <div className="news-image-container">
                    <Title className="news-title" level={4}>
                        {news.title}
                    </Title>
                    {/* <img style={{maxWidth:'200px' , maxHeight:'100px'}}src={news?.image?.thumbnail?.contentUrl ||  demoimage} alt="news"/> */}
                  </div>
                  <p>
                    {news.description>100 ? `${news.description.substring(0,100)}`:news.description  }
                  </p>
                  <div>
                    <Text>{moment(news.date).startOf('ss').fromNow()}</Text>
                  </div>

              </a>

            </Card>


          </Col>
        ))}

        </Row>
    </div>
    
  )
}

export default News