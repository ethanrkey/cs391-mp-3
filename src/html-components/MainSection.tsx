import {Routes, Route, createBrowserRouter, RouterProvider} from "react-router-dom";
import Nav from "../html-components/Nav";
import Home from "../resume-components/Home";
import Education from "../resume-components/Education";
import Experience from "../resume-components/Experience";
import Projects from "../resume-components/Projects";
import Skills from "../resume-components/Skills";
import Contact from "../resume-components/Contact";
import styled from "styled-components";
import '../index.css'

const Container = styled.div`
    display: flex;
    flex-direction: row;
`;


function Root() {
    return(
        <Container>
            <Nav/>
            <Routes>
                <Route path={`/`} element={<Home/>}/>
                <Route path={`/education`} element={<Education/>}/>
                <Route path={`/experience`} element={<Experience/>}/>
                <Route path={`/projects`} element={<Projects/>}/>
                <Route path={`/skills`} element={<Skills/>}/>
                <Route path={`/contact`} element={<Contact/>}/>
            </Routes>
        </Container>
    );
}

const router = createBrowserRouter(
    [
        {path:"*", Component: Root},
    ]
);

export default function MainSection () {

    return (
        <RouterProvider router={router}/>
    )
}