import styled from "styled-components";

const TagStyled = styled.div`
  .tag {
    padding: 8px 11px;
    margin: 4px 8px;
    &:first-child {
      margin-left: 0;
    }
    border-radius: 20px;
    border: 1px solid #cccccc;
    font-size: 12px;
    line-height: 16px;
    cursor: ${props => (props.selectable ? "pointer" : "default")};

    &.selected {
      background-color: #ffbb44;
      color: #ffffff;
      border: 1px solid #ffbb44;
    }
  }
`;

export default TagStyled;
