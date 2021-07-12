import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Col, PageHeader, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../state';

/**
 *
 * @param {object} param
 * @param {import('react-router').match} param.match
 */
export default function User({ match }) {

  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const name = match.params.name;
  useEffect(() => {
    dispatch(actions.fetchUser(name));
  }, [name]);

  return (
    <Row justify="center">
      <Col xs={24} md={20} lg={14}>
        <PageHeader
          onBack={history.goBack}
          title="사용자 정보"
        >
          {user?.name}
        </PageHeader>
      </Col>
    </Row>
  );
}
