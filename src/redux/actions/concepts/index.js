import instance from '../../../config/axiosConfig';
import { isErrored, isFetching, isSuccess } from './conceptsActionCreators';

// eslint-disable-next-line
export const fetchConcepts = (
  owner,
  name,
) => async (dispatch) => {
  dispatch(isFetching(true));
  const url = `/orgs/${owner}/sources/${name}/concepts/`;
  try {
    const response = await instance.get(url);
    dispatch(isSuccess(response.data));
    dispatch(isFetching(false));
  } catch (error) {
    if (error.response) {
      dispatch(isErrored(error.response.data));
      dispatch(isFetching(false));
    } else if (error.request) {
      dispatch(isErrored("Request can't be made"));
      dispatch(isFetching(false));
    }
  }
};
