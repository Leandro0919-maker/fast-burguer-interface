import styles from  'styled-components'
import { Link } from 'react-router-dom'


export const Container = styles.div`
  width: 100%;
  height: 80px;
  background-color: #1f1f1f;
  padding: 0 56px;
  `;


export const Content = styles.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
`;


export const Navigation = styles.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;

    div {
        display: flex;
        align-items: center;
        gap: 20px;
        justify-content: center;

        hr {
          height: 32px;
          border: 1px solid #625
        }
    }
`;

export const HeaderLink = styles(Link)`
   color: #fff;
   font-size: 18px;
   font-weight: 500;
   text-decoration: none;
   transition: color 0.3s;

    &:hover {
        color: #9758a5;
`;

export const Options = styles.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;
`;

export const Profile = styles.div`
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 18px;

    p {
      color: #fff;
      line-height: 90%;
      font-weight: 300;

        span {
          font-weight: 700;
            color: #9758a5;    
        }
    }
`;

export const LinkContainer = styles.div`
    display: flex;
    align-items: center;
    gap: 24px;
    
`;

export const Logout = styles.button`
   color: #ff3205;
   text-decoration: none;
   font-weight: 700;
   background-color: transparent;
    border: none;
`;





