import React, { useState } from 'react';

import { NewTabLink } from '../../NewTabLink';
import '../styles/Default.css';
import '../styles/Members.css';


export const MembersList = ({ memberInfo }) => {
    const [members] = useState(memberInfo || []);

    return (
        <div>
            {members.map((member, index) => (
                <div className='section' key={index}>
                    <div className='members'>
                        <div className='img-members'>
                            <img className='members' src={member.profileImage} alt={member.name} />
                        </div>
                        <div className='text-members'>
                            <h3>{member.name}</h3>
                            <p className='p-members'>Contact: {member.contact}</p>
                            <p className='p-members'>Interests: {member.interests}</p>
                            <p className='p-members'>Project: {member.projects}</p>
                            <p className='p-members'>
                                <NewTabLink to='https://github.com/'>
                                    <span style={ {marginRight: '10px'} }>
                                        Github
                                    </span>
                                </NewTabLink>
                                <NewTabLink style={ {marginRight: '10px'} } to='https://scholar.google.co.kr/'>
                                    <span style={ {marginRight: '10px'} }>
                                        Google Scholar
                                    </span>
                                </NewTabLink>
                            </p>
                        </div>
                    </div>
                    <br />
                    <hr />
                </div>
            ))}
        </div>
    );
};
