import styled from "styled-components";

export const Container = styled.div`
    padding: 0;
    margin: 0;
    background-color: #27282f;
    color: #FFF;
    min-height: 100vh;
    transition: all ease 0.5s;
`;
export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px 0px;
`;
export const Header = styled.h1`
    margin-bottom: 40px;
    font-size: 1.5rem;
    text-align: center;
    font-weight: 600;
    letter-spacing: 0.1em;
`;

export const ScreenWarning = styled.h1`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    font-size: 0.85rem;
    font-weight: 400;
`;

export const ImageList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
`;

export const UploadForm = styled.form`
    text-align: center;
    background-color: #3D3F43;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;
    font-size: 1rem;

    input[type=submit] {
        background-color: #758;
        border: 0;
        color: #FFF;
        font-size: 0.75rem;
        border-radius: 4px;
        margin: 0 20px;
        padding: 10px 20px;
        cursor: pointer;
        font-weight: 600;
        letter-spacing: 0.1rem;
        transition: all ease .2s;
        &:hover {
            opacity: 0.9;
        }
    }
`;