import React, { useState } from "react";
import "./fullName.css";

const FullNameForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");
    const [formError, setFormError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!firstName || !lastName) {
            setFormError('Please fill in both first name and last name.');
        } else {
            setFullName(`${firstName} ${lastName}`);
            setFormError('');
        }
    };

    return (
        <div className="container">
            <h2 className="heading">Full Name Display</h2>
            <form onSubmit={handleSubmit} className="form">
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input 
                        type="text" 
                        id="firstName" 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input 
                        type="text" 
                        id="lastName" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="submitBtn">Submit</button>
                {formError && <p className="error">{formError}</p>}
            </form>
            {fullName && <p className="fullName">Full Name: {fullName}</p>}
        </div>
    );
};

export default FullNameForm;
