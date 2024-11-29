import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardUser from "../../components/CardUser";
function UsersView() {
    const [users, setUsers] = useState([])
    const [msgError, setMsgError] = useState('');
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
    const [isSearching, setIsSearching] = useState(false); 

    const [formUserData, setFormUserData] = useState({ full_name: '' })

    const getUserByName = async (e) => {
        e.preventDefault()
        setIsSearching(true)
        const endPoint = "http://127.0.0.1:3000/api/users/name/" + formUserData.full_name;
        const resp = await fetch(endPoint);
        const user = await resp.json();
        setFormUserData(user);

        if (resp.ok) {
            setUsers([user.data.user])
        } else {
            setMsgError(user.msg || 'No se ha podido podido el usuario correctamente')
            setTimeout(() => {
                setMsgError('')
            }, 3000);
            setIsSearching(false); // 
        }
    }
    const handlerChange = (e) => {
        const { name, value } = e.target
        setFormUserData({ ...formUserData, [name]: value || '' })
    }
    const handleDelete = (id) => {

        setUsers(users.filter(users => users._id !== id));
    }; return (
        <>
            <h2 className="font-medium text-xl mb-5 mt-5">Usuarios registrados</h2>
            <Link to={`/singup`} className="m-2 px-2 py-1 border rounded-lg border-cyan-800">
                Crear usuario
            </Link>

            <form onSubmit={getUserByName} className="flex flex-col justify-start items-start ms-2 mb-5">
                <div className="ms-0 m-3">
                    <label htmlFor="user" className="">
                        Buscar por nombre de usuario
                    </label>
                </div>
                <div className="flex gap-3">
                    <input
                        type="text"
                        name="full_name"
                        id="full_name"
                        className="border border-cyan-800 rounded-md p-1"
                        onChange={handlerChange}
                        value={formUserData.full_name || ''}
                    />
                    <button type="submit" className="rounded-md bg-cyan-800 text-white px-2 py-1">
                        Buscar por nombre
                    </button>
                </div>
            </form>

            {msgError && (
                <div className="bg-red-200 rounded-lg p-3 mt-3">
                    <p>{msgError}</p>
                </div>
            )}

            <div className="grid grid-cols-3">
                {isSearching ? (
                    users.map((user) => (
                        <div key={user._id} className="">
                            <CardUser
                                key={user._id}
                                id={user._id}
                                full_name={user.full_name}
                                email={user.email}
                                onDelete={handleDelete}

                            />
                        </div>))
                ) : (
                    // Mostrar lista de todos los usuarios
                    users.map((user) => (
                        <div key={user._id} className="">
                            <CardUser
                                key={user._id}
                                id={user._id}
                                full_name={user.full_name}
                                email={user.email}
                                onDelete={handleDelete}
                            />
                        </div>
                    ))
                )}
            </div>
        </>
    );
}

export default UsersView;