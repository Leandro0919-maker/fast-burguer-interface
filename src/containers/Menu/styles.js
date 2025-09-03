import styled from "styled-components";
import BannerMenu from "../../assets/banner-menu.svg";
import Background from "../../assets/background.svg";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f0f0f0;

     background: linear-gradient(
            
            rgba(255, 255, 255, 0.4), 
            rgba(255, 255, 255, 0.4)
        ),
        url(${Background});
`;

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 480px;
    width: 100%;
    position: relative;

    background: url('${BannerMenu}') no-repeat center;
    background-color: #1f1f1f;
    background-position: center;
    background-size: cover;

 h1 {
        font-family: 'Road Rage', sans-serif;
        font-size: clamp(32px, 5vw, 90px);
        line-height: 1.1;
        color: #fff;
        text-align: center;
        
        position: absolute;
        top: 50%;
        right: 10%;
        transform: translateY(-50%);
        width: 45%;

        span {
            display: block;
            color: #fff;
            font-family: 'Poppins', sans-serif;
            font-size: clamp(8px, 1.5vw, 12px);
            font-weight: 400;
            margin-top: 15px;
        }
    }

`;

export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin-top: 30px;
`;

export const CategoryButton = styled(Link)`
     text-decoration: none;
     cursor: pointer;
     background: none;
     color: ${props => props.$isActiveCategory ? '#9758a6' : '#555'};
     font-size: 20px;
     font-weight: bold;
     padding-top: 10px;
     line-height: 24px;
     border-bottom: ${props => props.$isActiveCategory && '3px solid #9758a6'}; 
`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    gap: 60px;
    justify-content: center;
    max-width: 1280px;
    margin: 50px auto 0;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

export const NavigationContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 20px 40px;
    max-width: 1280px;
    margin: 0 auto;
`;

export const BackButton = styled.button`
    background: transparent;
    border: 2px solid #9758a6;
    color: #9758a6;
    padding: 8px 20px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;

    &:hover {
        background: #9758a6;
        color: #fff;
    }
`;