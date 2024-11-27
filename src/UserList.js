import { useEffect, useState } from "react"; // import useEffect et useState

import axios from "axios"; // import axios

const ListOfUser = () => {

    const [users, setUsers] = useState([]); // pour stocker les données récupérées

    useEffect(() => {  // pour récupérer les données
        axios
            .get("https://jsonplaceholder.typicode.com/users") // pour récupérer les données
            .then((response) => {  
                setUsers(response.data); 
            })
            .catch((error) => {
                console.error("Error fetching data: ", error); // pour afficher un message d'erreur
            });
    }, []);

    return (
        <div className="ni">
            <h1>Liste des Utilisateurs</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {users.map((user) => (
                    <li key={user.id} >
                        <h2>{user.name}</h2>
                        <p>Email: {user.email}</p>
                        <p>Adresse: {user.address.city}, {user.address.street}</p>
                        <p>Téléphone: {user.phone}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};



export default ListOfUser;