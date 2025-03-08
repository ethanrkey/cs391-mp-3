import { Link } from "react-router-dom";

export default function Education() {
    return(
        <>
            <h2>Education Background</h2>
            <h3>Boston University</h3>
            <Link to={`https://www.bu.edu/`} target="_blank">
                <img src="bu2.png" alt="Boston University"/>
            </Link>
            <p>Bachelor's Degree in Computer science</p>
            <ul>
                <li>GPA: 3.63</li>
                <li>Dean's List: Spring 2024, Fall 2024</li>
                <li>Graduating: May 2026</li>
                <li>Activities and Societies: Hack4Impact, BU Spark!, H2X Lab</li>
            </ul>
            <h3>The Oakridge School</h3>
            <Link to={`https://www.theoakridgeschool.org/`} target="_blank">
                <img src="oakridge2.png" alt="The Oakridge School"/>
            </Link>
            <p>High School Diploma</p>
            <ul>
                <li>GPA (W): 4.55, GPA (UW): 3.99</li>
                <li>SAT: 1490</li>
                <li>2007-2022</li>
                <li>Activities and Societies: Key Club, Mu Alpha Theta, Varsity Baseball Team</li>
            </ul>
        </>
    );
}