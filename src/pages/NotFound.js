
import {Link} from 'react-router-dom'

const NotFound = ()=>{
    return (
        <div className="not-found">
        <h1>404 page not found</h1>
        <Link to="/">Return to homepage</Link>
        </div>
    )
}
export default NotFound