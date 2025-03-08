import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: #1c213d;
    display: flex;
    flex-direction: column;
    padding: 1vh 1vw;
    color: #ffffff;
`;

export default function Header () {

    return (
        <StyledHeader>
            <h1>Ethan Key</h1>
            <p>Resume Website</p>
        </StyledHeader>
    )
}