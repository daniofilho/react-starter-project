import styled from 'styled-components';

export const ContainerHeader = styled.div`
  background: #7159c1;
  height: 45px;
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.25);
  padding: 0px 15px;

  & > div {
    flex: 1;
  }

  .navigation {
    display: flex;
    svg {
      margin-right: 10px;
    }
  }

  .side {
    text-align: right;
  }
`;
