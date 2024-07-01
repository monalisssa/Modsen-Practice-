import React from "react";
import styled from "styled-components";


export const FavoriteCardWrapper = styled.div`
    min-height: 200px;
    width: 100%;
    border-radius: 10px;
    border: 3px solid #C4C4C4;
    padding: 12px;
    cursor: pointer;
    transition: all .3s;
    &:hover{
        border: 3px solid #C75E5E;
    }
`;

export const FavoriteCardHeader = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    
    & h2{
        width: 180px;
        font-size: 16px;
        font-weight: bold;
    }
`;

export const FavoriteImageBox = styled.div`
    width: 110px;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90px;
    overflow: hidden;
    border-radius: 15px;
    align-self: center;
    & img {
        width: 100%;
        object-fit: cover;
    }

`;


export const FavoriteImageDescription = styled.div`
  
    margin-top: 10px;
    font-size: 14px;
`;

export const FavoriteCardButtons= styled.div`
  
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;