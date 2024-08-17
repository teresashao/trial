// import React, { useState } from 'react'
// //import axiosInstance from '../../config/axiosConfig'
//
// const AddExperience = () => {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axiosInstance.post('/api/experiences', { title, description });
//             if (response.status == 200) {
//                 console.log(`experience added successfully ${title}: ${description}`);
//                 console.log(response);
//                 setTitle('');
//                 setDescription('');
//             }
//         } catch (error) {
//             console.error("Error adding experience ", error);
//         }
//     };
//
//     return (
//         <div>
//             <h2>add new experience</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Title: </label>
//                     <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
//                     <label>Description: </label>
//                     <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
//                 </div>
//                 <button type="submit">Add Experience</button>
//             </form>
//         </div>
//     )
// }
//
// export default AddExperience