import React from 'react';
import { useNavigate } from 'react-router-dom';

const HandleToEditPageButton = ({plant}) => {
    const navigate = useNavigate();

    const handleToEditPage = () => {
        navigate(`/plant/${plant._id}/edit`);
    }
    return (
        <button onClick={handleToEditPage}>Edit</button>
    );
};

export default HandleToEditPageButton;