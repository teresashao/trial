import React, { useContext, useEffect, useState } from 'react';
import AuthContext from "../../context/AuthContext";

const Profile = () => {
    const { currentUser, isAuthenticated } = useContext(AuthContext);
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (currentUser) {
            setUser(currentUser);
        }
    }, [currentUser]); // Update user state when currentUser changes

    if (!currentUser) {
        return <div>Please log in to view this page.</div>;
    }

    if (!user) {
        return <div>Loading...</div>; // Or a similar loading indicator
    }

    return (
        <div>
            <h1>Profile</h1>
            <p><strong>First Name:</strong> {user.firstName}</p>
            <p><strong>Last Name:</strong> {user.lastName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <h2>Experiences</h2>
            {user.experiences && user.experiences.length > 0 ? (
                <ul>
                    {user.experiences.map(experience => (
                        <li key={experience.id}>
                            <strong>Title:</strong> {experience.title} <br/>
                            <strong>Description:</strong> {experience.description}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No experiences found.</p>
            )}
        </div>
    );
};

export default Profile;
