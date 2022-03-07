import {useEffect} from 'react';
import {useApiPost} from '../../common/services/api.hooks';
import api from '../../common/services/api';

export function useLogin() {
  const {data, isLoading, error, post} = useApiPost<any>('login/');

  useEffect(() => {
    if (data && data.token) {
      api.setAccessToken(data.token);
    }
  }, [data, isLoading]);

  return {data, isLoading, error, doLogin: post};
}
