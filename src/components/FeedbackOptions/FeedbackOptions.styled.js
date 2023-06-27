import styled from '@emotion/styled';

const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
`;

const Item = styled.li``;

const Button = styled.button`
  width: 100px;
  height: 40px;
  color: white;
  background-color: blueviolet;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

const css = { List, Item, Button };

export default css;
