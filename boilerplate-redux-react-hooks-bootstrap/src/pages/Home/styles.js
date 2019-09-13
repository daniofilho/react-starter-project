import styled from 'styled-components';
import { lighten } from 'polished';

export const ContainerHome = styled.div`
  .row {
    margin-top: 20px;
    & > div {
      background: ${lighten(0.4, '#7159c1')};
      border: 1px solid ${lighten(0.2, '#7159c1')};
      padding: 10px 20px;
    }
  }

  .col {
  }
`;
