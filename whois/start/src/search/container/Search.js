import React from 'react';
import { Col, Row, Typography } from 'antd';
import Settings from '../component/Settings';
import SearchInput from './SearchInput';

export default function Search() {
  return (<>
    <Row justify="end" style={{ padding: 20 }}>
      <Col><Settings/></Col>
    </Row>
    <Row justify="center" style={{ marginTop: 100 }}>
      <Typography.Title>찾아야 한다</Typography.Title>
    </Row>
    <Row justify="center" style={{ marginTop: 20 }}>
      <Col span={12}><SearchInput/></Col>
    </Row>

  </>);
}
