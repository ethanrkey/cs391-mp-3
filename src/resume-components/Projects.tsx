import { Link } from "react-router-dom";

export default function Projects() {
    return(
        <>
                <div>
            <h3 id="proj-title">AccessiScan</h3>
            <Link to={`https://accessiscan.vercel.app/`} target="_blank">
                <img id="projects" src="accessiscan.png" alt="AccessiScan Project"/>
            </Link>
            <Link to={`https://github.com/AccessiScan-XC475`} target="_blank">
                <p>GitHub Repo</p>
            </Link>
            </div>
            <div>
            <h3 id="proj-title">Global Conflict Visualizer</h3>
            <img id="projects" src="gcv3.png" alt="Global Conflict Visualizer Project"/>
            <Link to={`https://github.com/ethanrkey/global-conflict-visualizer`} target="_blank">
                <p>GitHub Repo</p>
            </Link>
            </div>
            <div>
            <h3 id="proj-title">Stock Trading Simulator</h3>
            <img id="projects" src="stocktrading.png" alt="Stock Trading Simulator Project"/>
            <Link to={`https://github.com/ethanrkey/stock-trading-app`} target="_blank">
                <p>GitHub Repo</p>
            </Link>
            </div>
            <div>
            <h3 id="proj-title">Text Image Generator</h3>
            <img id="projects" src="texttoimage.png" alt="Text Image Generator Project"/>
            <Link to={`https://github.com/ethanrkey/text-to-image`} target="_blank">
                <p>GitHub Repo</p>
            </Link>
            </div>
        </>
    );
}