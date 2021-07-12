import { all, call, put, takeEvery } from 'redux-saga/effects';
import { callApi } from '../../common/util/api';
import { actions, Types } from './index';

function* fetchUser({ name }) {
  const { isSuccess, data } = yield call(callApi, {
    url: '/user/search',
    params: { keyword: name },
  });

  if (isSuccess && data) {
    const user = data.find(user => user.name === name);

    if (user) {
      yield put(actions.setValue('user', user));
    }

  }
}

export default function* () {
  yield all([takeEvery(Types.FetchUser, fetchUser)]);
}
