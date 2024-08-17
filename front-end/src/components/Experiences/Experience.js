import React, {useState} from 'react'
import AuthService from "../../services/AuthService";
import ExperienceService from "../../services/ExperienceService";
import {useNavigate} from "react-router-dom";

const Experience = ({ user, id, title, description, experienceAdded}) => {
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    const handleAdd = (e) => {
        e.preventDefault();

        if (!user) {
            navigate('/login');
        }
        ExperienceService.addExperienceToUser(id).then(
            response => {
                setMessage("adding successful!");
                console.log(response.data);
                experienceAdded(id);
                navigate("/wishlist");
            },
            error => {
                const resMessage = (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(resMessage);
            }
        );
    };

    return (
        <div className="relative border-cyan-800 border-2 py-3 px-3 rounded-lg">
            {/*<p>id {id}</p>*/}
            <h2>Title: {title}</h2>
            <p>Description: {description}</p>
            <button type="submit" onClick={handleAdd} className="absolute right-2 bottom-3 border-cyan-800 border-2 rounded-full px-2"> + </button>
            {message && <div>{message}</div>}
        </div>
    )
}

export default Experience