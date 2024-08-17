// Wishlist.js
import React, {useState, useEffect, useContext} from 'react';
import ExperienceService from "../../services/ExperienceService";
import Experience from "./Experience";
import AuthContext from "../../context/AuthContext";
import Header from "../Profile/Header";
import Filters from "./Filters";

const Wishlist = () => {
    const [experiences, setExperiences] = useState([]);
    const [filteredExperiences, setFilteredExperiences] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { currentUser, isAuthenticated } = useContext(AuthContext);
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (currentUser) {
            setUser(currentUser);
        }
    }, [currentUser]); // update user state when currentUser changes

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                const response = await ExperienceService.getAllExperiences();
                const experiencesData = response.data;
                setExperiences(experiencesData);
                console.log("experiences data " + experiencesData);
                if (user && user.id) {
                    // Filter out experiences that include the user in their `users` field
                    const filtered = experiencesData.filter(experience =>
                        !experience.users.some(userObj => userObj.id === user.id)
                    );
                    setFilteredExperiences(filtered);
                    console.log("filtered data " + filtered);
                } else {
                    // If no user is logged in, show all experiences
                    setFilteredExperiences(experiencesData);
                }
            } catch (error) {
                setError('Failed to fetch experiences');
                console.error('Error fetching experiences:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchExperiences();
    }, [user]);

    const handleExperienceAdded = (id) => {
        // Remove the experience with the given id from the filteredExperiences state
        setFilteredExperiences(prevExperiences =>
            prevExperiences.filter(experience => experience.id !== id)
        );
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <Header className="sticky top-0"/>
            <Filters className=""/>
            <ul className="px-4 py-3 space-y-4 ">
                {filteredExperiences.map(experience => (
                    <Experience
                        key={experience.id}
                        id={experience.id}
                        title={experience.title}
                        description={experience.description}
                        user ={user}
                        experienceAdded = {handleExperienceAdded}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Wishlist;
