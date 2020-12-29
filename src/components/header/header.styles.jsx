import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    padding-left:0;
    margin-left:0;
    align-items: left;
    background-color: blue;
`;

export const LogoContainer = styled(Link)`
    height: auto;
    width: 100%;
    display:flex;
        // padding: 25px;
    padding-left:0;
    margin-left:0;
    align-items: left;
`;