import styled from "styled-components";
import Texture from "../../assets/textura.svg"
import Background from "../../assets/background.svg";


export const Container = styled.div`
    width: 100%;
    background: linear-gradient(
        
        rgba(255, 255, 255, 0.4), 
        rgba(255, 255, 255, 0.4)
    ), url(${Background});
    min-height: 100vh;
`;

export const Banner = styled.div`
    background : url('${Texture}');
    background-color: #1f1f1f;
    
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    position: relative;
    height: 180px;
`;

export const Title = styled.h1`
 font-size: 32px;
 font-weight: 200;
 padding-bottom: 12px;
 color: #61a120;
 text-align: center;
 position: relative;

 &::after{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    content: '';
    width: 56px;
    height: 4px;
    background-color: #61a120
 }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 20%;
    width: 100%;
    max-width: 1200px;
    padding: 40px 20px;
    margin: 0 auto;
    gap: 40px;

`;