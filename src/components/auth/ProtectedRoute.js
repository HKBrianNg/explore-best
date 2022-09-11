import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'

function ProtectedRoute({ children }) {
    let { user } = useAuthContext()
    if (!user) {
        return <Navigate to="/auth/logout" replace />
    }
    return children
}

export default ProtectedRoute