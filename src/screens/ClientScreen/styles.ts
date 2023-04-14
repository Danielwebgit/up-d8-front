import styled from 'styled-components';

export const TableFooter = styled.div`
    display: flex;
    padding: 20px;
    width: 100%;
    justify-content: center;

    .btn-pagination {
      margin: "20px";
      padding: 10px;
      text-align: center;
      height: 40px;
      font-size: 20px;
    }

    .bnt.pagination .btn-next {
      margin-right: "20px"
    }

    .btn-pagination a {
      text-decoration: none;
    }

    button.btn-pagination.activated {
    background-color: #9cd7e0;
    }
`;