import React from "react";
import { Link } from "react-router-dom";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { useGetCryptosQuery } from "../services/cyptoApi";
import CyptoCurrencies from "./CyptoCurrencies";
import News from "./News";
import Loader from "./Loader";
const { Title } = Typography;
const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery({count: 12});
  // console.log(data, isFetching);
  
  if (isFetching) 
    return <Loader />
  const GlobalStats = data?.data?.stats;
  // console.log("global stats", GlobalStats);
  return (
    <div style={{ padding: 20 }}>
      <Title level={3} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total CryptoCurrenices" value={GlobalStats?.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(GlobalStats?.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(GlobalStats?.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(GlobalStats?.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(GlobalStats?.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top Cryptocurriences in the world</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
      </div>
      <CyptoCurrencies simplified={true}/>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News..</Title>
        <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
      </div>
      <News simplified/>
    </div>
  );
};

export default HomePage;
