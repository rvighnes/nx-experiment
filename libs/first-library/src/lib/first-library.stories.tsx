import React from 'react';
import { FirstLibrary, FirstLibraryProps } from './first-library';

export default {
  component: FirstLibrary,
  title: 'FirstLibrary',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: FirstLibraryProps = {};

  return <FirstLibrary />;
};
