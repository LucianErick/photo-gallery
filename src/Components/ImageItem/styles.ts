import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #3D3F43;
    border-radius: 8px;
    padding: 10px;
    font-size: 1rem;
    transition: all ease .4s;

    img {
        max-width: 100%;
        max-height: 100%;
        display: block;
        margin-bottom: 20px;
        border-radius: 8px;
    }

    div {
        text-align: start;
        font-size: 0.72rem;
        margin-bottom: 10px;
    }

    &:hover {
        opacity: 0.8;
    }
`;

export const ShowMoreOptions = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    top: 40px;
    right: 5px;
    margin-top: -30px;
    transition: all ease .4s;
    cursor: pointer;
    
`;