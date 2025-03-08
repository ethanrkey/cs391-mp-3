import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledList = styled.nav`
    display: flex;
    flex-direction: column;
    text-align: center;
    list-style: none;
`;

export default function Nav () {
    return (
        <nav>
            <StyledList>
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/education`}>Education</Link></li>
                <li><Link to={`/experience`}>Experience</Link></li>
                <li><Link to={`/projects`}>Projects</Link></li>
                <li><Link to={`/skills`}>Skills</Link></li>
                <li><Link to={`/contact`}>Contact</Link></li>
            </StyledList>
        </nav>
    )
}