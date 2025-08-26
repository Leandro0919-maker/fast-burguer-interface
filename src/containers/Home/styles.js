import styled from "styled-components";
import BannerHome from "../../assets/banner-home.svg";
import Background from "../../assets/background.svg";

export const Banner = styled.div`
   background: url(${BannerHome});
   background-size: cover;
   background-position: center;
   height: 500px;

   h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 50px;
    color: #fff;
    position: absolute;
    right: 5%;
    top: 20%;
   }
`;

export const Container = styled.section`
    background: linear-gradient(
        
        rgba(255, 255, 255, 0.4), 
        rgba(255, 255, 255, 0.4)
    ),
    url(${Background});
    
    
    

`;

export const Content = styled.div`
     padding-bottom: 70px ;
`;