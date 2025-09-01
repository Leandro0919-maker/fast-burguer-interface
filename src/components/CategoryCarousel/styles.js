import styled from 'styled-components';

export const Container = styled.div`
    .carousel-item {
        padding-right: 40px;
        padding-left: 40px;
   }

    .react-multiple-carousel__arrow--left {
        left: 15px;
        top: 10px;
    }

    .react-multiple-carousel__arrow--right {
        right: 15px;
        top: 10px;
    }
     
     `;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 700;
    color: #9758a6;
    padding-bottom: 4px;
    position: relative;
    text-align: center;
    margin-bottom: 40px;
    margin-top: 40px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0px;
        width: 56px;    
        height: 6px;
        background-color: #9758a6;
        left: calc(50% - 28px);
    }

    `;

export const ContainerItems = styled.div`
    background-image: url(${props => props.imageUrl});

    background-size: cover;      
    background-position: center; 
    border-radius: 20px;  


    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px 10px;
    height: 200px;   

    p {
        color: #fff;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 10px 30px;
        border-radius: 30px;
        font-size: 22.5px;
        font-weight: bold;
        margin-top: 50px;
    }
`;

