import { FETCH_CONCEPTS, IS_FETCHING } from '../types';

export const isSuccess = payload => ({
  type: FETCH_CONCEPTS,
  payload,
});

export const isErrored = payload => ({
  type: FETCH_CONCEPTS,
  payload,
});

export const isFetching = payload => ({
  type: IS_FETCHING,
  payload,
});
