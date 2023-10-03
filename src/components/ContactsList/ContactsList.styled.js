import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  width: 400px;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const DeleteButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  padding: 5px 10px;

  &:hover {
    background-color: #e30b0b;
  }
`;
