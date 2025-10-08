import styled from 'styled-components';

export const Root = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 28px;
  overflow: hidden;
  `;

export const Header = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
   padding: 16px;
   text-align: left;
   color: #fff;
   background-color: #0f0e0eff;
   border-bottom: 1px solid #cdcdcd;

   &:last-child {
       border-top-right-radius: 20px ;
   }

   &:first-child {
   border-top-left-radius: 20px ;
   }
`;

export const Td = styled.td`
   padding: 16px;
   color: #484848;
   font-weight: 500;
   line-height: 115%;
`;

export const Body = styled.tbody``;





