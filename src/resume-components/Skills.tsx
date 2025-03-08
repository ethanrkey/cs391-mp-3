import { Link } from "react-router-dom";

export default function Skills() {
    return(
        <>
            <h2>Technical Skills and Relevant Coursework</h2>
            <strong>I have experience with these programming languages, frameworks, tools, and technologies:</strong>
            <ul id="circle-list">
            <li>Python</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Next.js</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Swift</li>
            <li>Go</li>
            <li>SQL</li>
            <li>MongoDB</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>VSCode</li>
            <li>XCode</li>
            <li>Docker</li>
            <li>Vercel</li>
            <li>Figma</li>
            <li>LaTeX</li>
            <li>Chrome Extensions</li>
            <li>Microsoft Office</li>
            <li>Google Workspace</li>
            </ul>
            <strong>I have taken these STEM courses at BU:</strong>
            <ul id="square-list">
            <li>EK215: Introduction to Programming for Engineers 
                <Link to={`https://www.bu.edu/academics/eng/courses/eng-ek-125/`} target="_blank" >»</Link>
            </li>
            <li>MA225: Multivariate Calculus 
                <Link to={`https://www.bu.edu/academics/cas/courses/cas-ma-225/`} target="_blank" >»</Link>
            </li>
            <li>CS112: Data Structures & Algorithms 
                <Link to={`https://www.bu.edu/academics/cas/courses/cas-cs-112/`} target="_blank" >»</Link>
            </li>
            <li>MA242: Linear Algebra 
                <Link to={`https://www.bu.edu/academics/cas/courses/cas-ma-242/`} target="_blank" >»</Link>
            </li>
            <li>CS210: Computer Systems 
                <Link to={`https://www.bu.edu/academics/hub/courses/cas-cs-210/`} target="_blank" >»</Link>
            </li>
            <li>CS131: Combinatoric Structures 
                <Link to={`https://www.bu.edu/academics/cas/courses/cas-cs-131/`} target="_blank" >»</Link>
            </li>
            <li>CS330: Analysis of Algorithms 
                <Link to={`https://www.bu.edu/academics/cas/courses/cas-cs-330/`} target="_blank" >»</Link>
            </li>
            <li>CS460: Database Systems 
                <Link to={`https://www.bu.edu/academics/cas/courses/cas-cs-460/`} target="_blank" >»</Link>
            </li>
            <li>CS411: Software Engineering 
                <Link to={`https://www.bu.edu/academics/hub/courses/cas-cs-411/`} target="_blank" >»</Link>
            </li>
            <li>CS320: Concepts of Programming Languages 
                <Link to={`https://www.bu.edu/academics/cas/courses/cas-cs-320/`} target="_blank" >»</Link>
            </li>
            <li>CS391: Web Application Development 
                <Link to={`https://www.bu.edu/academics/cas/courses/cas-cs-391/`} target="_blank" >»</Link>
            </li>
            <li>CS440: Introduction to Artificial Intelligence 
                <Link to={`https://www.bu.edu/academics/cas/courses/cas-cs-440/`} target="_blank" >»</Link>
            </li>
            </ul>
        </>
    );
}