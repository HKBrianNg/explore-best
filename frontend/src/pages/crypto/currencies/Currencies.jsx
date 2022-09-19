import { useEffect, useState } from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic, Card, Input } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../../../services/cryptoApi'
import './Currencies.css'


const { Title } = Typography

function Currencies({ simplified }) {
  const { data, isFetching, } = useGetCryptosQuery(100)
  const globalStats = data?.data?.stats
  const [cryptos, setCryptos] = useState(data?.data?.coins)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const filteredData = data?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm))
    setCryptos(filteredData)
  }, [data, searchTerm])

  if (isFetching) return 'Loading...'


  return (
    <>
      <div className='currencies-main'>
        <Title level={2} className="heading">Global Crypto Statistics</Title>
        <Row>
          <Col span={12}><Statistic title='Total Cryptocurrencies' value={globalStats.total} /></Col>
          <Col span={12}><Statistic title='Total Exchanges' value={millify(globalStats.totalExchanges)} /></Col>
          <Col span={12}><Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)} /></Col>
          <Col span={12}><Statistic title='Total 24h Volume' value={millify(globalStats.total24hVolume)} /></Col>
          <Col span={12}><Statistic title='Total Markets' value={millify(globalStats.totalMarkets)} /></Col>
        </Row>
        <div className='home-heading-container'>
          <Title level={2} className="home-title">Top 100 Cryptocurrencies in the world</Title>
        </div>
        {!simplified && (
          <div className="search-crypto">
            <Input
              placeholder="Search Cryptocurrency"
              onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            />
          </div>
        )}

        <Row gutter={[32, 32]} className="crypto-card-container">
          {cryptos?.map((currency) => (
            <Col key={currency.uuid} xs={24} sm={12} lg={6} className="crypto-card">
              <Link to={`/crypto/${currency.uuid}`}>
                <Card
                  title={`${currency.rank}. ${currency.name}`}
                  extra={<img className='crypto-image' src={currency.iconUrl} alt={currency.name} />}
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
    </>
  )
}

export default Currencies