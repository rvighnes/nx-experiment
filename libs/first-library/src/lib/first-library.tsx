import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FirstLibraryProps {}

const StyledFirstLibrary = styled.div`
  color: pink;
`;

export function FirstLibrary(props: FirstLibraryProps) {
  return (
    <StyledFirstLibrary>
      <h1>Welcome to first-library!</h1>
    </StyledFirstLibrary>
  );
}

export default FirstLibrary;
