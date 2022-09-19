import { useState } from 'react'
import { Row, Col, Avatar, Typography, Card, Select } from 'antd'
import { useGetCryptosQuery } from '../../../services/cryptoApi'
import { useGetCryptoNewsQuery } from '../../../services/cryptoNewsApi'
import moment from 'moment';
import Loader from './Loader';
import './News.css'

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const { Text, Title } = Typography;
const { Option } = Select;

function News({ simplified }) {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data } = useGetCryptosQuery(100)
  const { data: newsData } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 50 : 100 });


  if (!newsData?.value) return <Loader />;

  return (
    <>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
      </div>
      <Row gutter={[20, 20]}>
        {!simplified && (
          <Col span={24}>
            <Select
              showSearch
              className="select-news"
              placeholder="Select a Crypto"
              optionFilterProp="children"
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Option value="Cryptocurency">Cryptocurrency</Option>
              {data?.data?.coins?.map((currency) => <Option value={currency.name}>{currency.name}</Option>)}
            </Select>
          </Col>
        )}
        {newsData.value.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>{news.name}</Title>
                  <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                </div>
                <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
                <div className="provider-container">
                  <div>
                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                    <Text className="provider-name">{news.provider[0]?.name}</Text>
                  </div>
                  <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default News