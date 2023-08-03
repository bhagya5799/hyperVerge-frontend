import { Route, Redirect } from 'react-router-dom'
const ProtectedRoute = props => {
    const getId = localStorage.getItem("id")
    if (getId === null) {
        return <Redirect to="/admin" />
    }
    return <Route {...props} />
}

export default ProtectedRoute