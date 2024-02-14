import { Link } from "react-router-dom"

function PageIndex() {
    return (
        <Link to="/countries">
            <div>
                <h1>Info countries</h1>
            </div>
        </Link>
    )
}

export default PageIndex