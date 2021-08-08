import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Descriptions, PageHeader, Row, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { actions, Types } from '../state';

/**
 *
 * @param {object} param
 * @param {import('react-route').match} param.match
 * @return {JSX.Element}
 * @constructor
 */
function User({ match }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  const name = match.params.name;
  useEffect(() => {
    dispatch(actions.fetchUser(name));
  }, [name]);

  const { isFetched } = useFetchInfo(Types.FetchUser)

  return (
    <Row justify={'center'}>
      <Col xs={24} md={20} lg={14}>
        <PageHeader onBack={history.goBack} title={'사용자 정보'}>
          {user && (
            <Descriptions layout={'vertical'} bordered column={1}>
              <Descriptions.Item label={'이름'}>
                <Typography.Text>{user.name}</Typography.Text>
              </Descriptions.Item>
              <Descriptions.Item label={'소속'}>
                {user.department}
              </Descriptions.Item>
              <Descriptions.Item label={'태그'}>{user.tag}</Descriptions.Item>
              <Descriptions.Item label={'수정 내역'}>수정 내역</Descriptions.Item>
            </Descriptions>
          )}
          {!user && isFetched && isFetching && (
            <Typography.Text>존재하지 않는 사용자입니다.</Typography.Text>
          )}
        </PageHeader>
      </Col>
    </Row>
  );
}

export default User;
