import styled from '@emotion/styled';

export const Container = styled.div`
  margin-bottom: ${({ theme }) => `${theme.spacing * 5}px`};
  & button {
    text-transform: capitalize;
    margin-right: ${({ theme }) => `${theme.spacing * 5}px`};
    cursor: pointer;
  }
`;
