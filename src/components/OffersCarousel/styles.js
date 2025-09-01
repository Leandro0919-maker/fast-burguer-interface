import styled from 'styled-components';

export const Container = styled.div`
    padding-top: 80px; 
    padding-left: 40px;

    .carousel-item {
        padding-right: 40px;
    }

    overflow-x: hidden;

    .react-multi-carousel-list {
        overflow: visible;
    }

    .react-multiple-carousel__arrow--left {
        left: 15px;
        top: 10px;
    }

    .react-multiple-carousel__arrow--right {
        right: 15px;
        top: 10px;
    }

    padding-left: 40px;
    
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 700;
    color: #61a120;
    padding-bottom: 5px;
    position: relative;
    text-align: center;
    margin: 70px 0;
    margin-top: 70px;

    &::after {
        content: '';
        position: absolute;
        bottom: 5px;
        width: 56px;    
        height: 6px;
        background-color: #61a120;
        left: calc(50% - 28px);
    }
`;