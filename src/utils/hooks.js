import { useEffect } from 'react';
import { fetchContacts }from '../redux/operations';

export const useFetchContacts = dispatch => {
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
};