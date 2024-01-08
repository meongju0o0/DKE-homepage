import React, { useState } from 'react';

import '../styles/Default.css';
import '../styles/Alumni.css';


export function AlumniList({ memberInfo }) {
    const [members] = useState(memberInfo || []);

    return (
        <div className="alumni-container">
            {members.map((member, index) => (
                <div key={index}>
                    <div className={index % 2 === 0 ? 'left-container' : 'right-container'}>
                        <div className='sub-container'>
                            <h2 style={ {marginTop: "4px", marginBottom:"4px"}}>{member.name}</h2>
                            <p style={ {marginTop: "10px", marginBottom:"10px"}}>Company: {member.company}</p>
                        </div>
                        <hr />
                    </div>
                </div>
            ))}
        </div>
    );
}
