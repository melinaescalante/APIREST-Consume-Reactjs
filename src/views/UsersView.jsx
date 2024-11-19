import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardUser from "../components/CardUser";
function UsersView(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const endPoint = "http://127.0.0.1:3000/api/users";
            const resp = await fetch(endPoint);
            const users = await resp.json();
            setUsers(users.data);
            console.log(users);
        };

        getUsers();
    }, []);
    const handleDelete = (id) => {
    
        setSneakers(sneakers.filter(sneaker => sneaker._id !== id));
    };
    return (
        <>
            <h2 className="font-medium text-xl mb-5 mt5">Usuarios registrados</h2>
            <Link className="m-2 px-2 py-1 border rounded-lg border-cyan-800">Crear usuario</Link>
            <div className="grid grid-cols-3">

                {users.map((user) => (
                    <div key={user._id} className="">
                        <CardUser
                            key={user._id}
                            id={user._id}
                            full_name={user.full_name}
                            email={user.email}
                            // onDelete={handleDelete} 
                        ></CardUser>
                    </div>
                ))}

            </div>
        </>
    );
}
export default UsersView