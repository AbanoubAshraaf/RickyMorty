import React from 'react';
import { ICharactersResult } from '../../../graphql/GraphQl.interface';
import ActivitIndicator from '../Components/ActivityIndicator';
import ErrorScreen from '../Components/ErrorScreen';

const withFooter = (loading = false, error = false) => () => (
  <>
    <ActivitIndicator loading={loading} />
    <ErrorScreen error={error} />
  </>
);

export default withFooter;
