import React from 'react';
import { Col, Row, Typography } from 'antd';
import Settings from '../components/Settings';
import SearchInput from './SearchInput';

function Search() {
  return (
    <>
      <Row justify={'end'} style={{ padding: 20 }}>
        <Col>
          <Settings logout={() => {
          }}/></Col>
      </Row>
      <Row justify={'center'} style={{ marginTop: 100 }}>
        <Col>
          <Typography.Title>
            찾아야한다
          </Typography.Title>
        </Col>
      </Row>
      <Row justify={'center'}>
        <Col span={12}>
          <SearchInput/>
        </Col>
      </Row>
    </>
  );
}

export default Search;
