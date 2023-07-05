import { Navigate, useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('authenticated');
        navigate('/login');
      };
      if (!localStorage.getItem('authenticated')) {
        return <Navigate to="/login" />;
      }
    
  return(
    <>
        <button onClick={handleLogout} className="btn btn-danger">Logout</button>
    </>
  )
}
export default Logout