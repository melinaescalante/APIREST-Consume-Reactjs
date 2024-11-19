import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
function DetailsUserView(){
    const { id } = useParams()
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUser = async () => {
        const endPoint = "http://127.0.0.1:3000/api/users/" + id;
        const resp = await fetch(endPoint);
        const user = await resp.json();
        setUser(user.data);

        setLoading(false)
    };

    useEffect(() => {
        getUser();


    }, []);
    return (
        <>

            {
                !loading ? (
                    <>
                        <h2 className="font-medium text-2xl m-3">Detalle de {user.full_name}</h2>
                        <div className="text-start border border-cyan-700 rounded-md p-4">
                            <p><strong>Nombre Completo: </strong>{user.full_name} </p>
                            <p><strong>Email: </strong> {user.email}</p>
                          
                        </div>
                    </>
                ) : (
                    <div>
                        <p>Cargando...</p>
                    </div>
                )}
        </>

    )
}
export default DetailsUserView