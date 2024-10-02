import { useNavigate } from "react-router-dom";

const Logout = ()=> {
    const navigate = useNavigate()
    const handleLogout = async ()=> {
        const token = localStorage.getItem('authToken')
        const API_URL = `${import.meta.env.VITE_APP_EVENTRYBE_AUTH_URL}/logout/`;
        try {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${token}`
                },
                // credentials: 'include'
            })

            if (res.ok) {
                localStorage.removeItem('authToken')
                sessionStorage.removeItem('authToken')
                console.log('successfully logged out user');
                navigate('/SignIn')
            } else {
                console.error('Logout Failed: ', res.statusText);
                
            }
        } catch (error) {
            console.error('error during log out: ', error);
            
        }
    }
return(
    <div className="bg-red-900">
        <button className="text-lg text-white" onClick={handleLogout}>Logout</button>
    </div>
)
}

export default Logout