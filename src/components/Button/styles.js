import styled from 'styled-components';


export const ContainerButton = styled.button`
width: 100%;
height: 52px;
border: none;
border-radius: 5px; 
background-color: #9758a5;
color: #fff;    
font-family: "Road Rage", sans-serif;
font-size: 30px;
color: #fff;

&:hover{
    background-color: #6f357c;
    border: 1px dashed #fff;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}
`