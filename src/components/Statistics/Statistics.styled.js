import styled from '@emotion/styled';

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Item = styled.li`
  font-size: 20px;
`;

const Label = styled.span`
  text-transform: capitalize;
`;

const css = { List, Item, Label };

export default css;
