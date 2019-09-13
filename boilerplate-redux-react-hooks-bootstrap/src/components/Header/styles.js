import styled from 'styled-components';

export const ContainerHeader = styled.div`
  background: #7159c1;
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
  padding: 15px;

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

  @media only screen and (max-width: 991px) {
    flex-direction: column;
  }
`;
