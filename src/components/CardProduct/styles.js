import styled from "styled-components";

export const Container = styled.div`
    position: relative; 
    padding-top: 85px; 
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 20px;
    border-radius: 30px;
    background-color: #ffffff;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    cursor: grab;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    position: relative;
    
    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;

        p {
            font-size: 16px;
            font-weight: bold;
            color: #ff8c50;
        }

        strong {
            font-size: 18px;
            font-weight: 800;
            color: #363636;
            line-height: 22px;
        }
    }
`;

export const CardImage = styled.img`
    position: absolute;
    top: -75px; 
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 100px;
    object-fit: contain;
`;