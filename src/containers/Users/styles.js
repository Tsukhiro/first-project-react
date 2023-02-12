import styled from "styled-components";
import Background from "../../assets/bgimage2.png"

export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    min-height: 100vh;
    gap: 40px;
`

export const Image = styled.img`
    margin-top: 30px;
`

export const Button = styled.button`

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 120px;

    width: 342px;
    height: 74px;
    background: transparent;
    border-radius: 14px;
    border: 1px solid #FFFFFF;
    cursor: pointer;

    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }

    img{
        transform: rotateY(180deg);
    }
`

export const User = styled.li`

    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 342px;
    height: 58px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: none;
    outline: none;
    margin-top: 20px;

    p {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;

    color: #FFFFFF;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }
`
