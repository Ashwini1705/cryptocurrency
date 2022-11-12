import React,{ useState ,useEffect} from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input, Layout } from 'antd';
import { useGetCryptosQuery } from '../services/cyptoApi';
import Loader from './Loader';

const CyptoCurrencies = ({simplified}) => {
  const {data, isFetching} = useGetCryptosQuery({count: simplified ? 12 : 100});
  const [cryptos, setCryptos] = useState(data?.data?.coins);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(()=> {
    const filteredData = data?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setCryptos(filteredData);
  }, [data, searchTerm]);
  if(isFetching)
    return <Loader />
  console.log("cryptos", data);
  return (
    <div style={{padding:20}}>
      {!simplified && <div className='search-crypto'>
        <Input placeholder='Search CryptoCurrency' onChange={(e) => setSearchTerm(e.target.value)} width="100%"/>
      </div>}
      <Row gutter={[32,32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
               title={`${currency.rank}. ${currency.name}`}
               extra={<img className='crypto-image' src={currency.iconUrl}/>}
               hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default CyptoCurrencies