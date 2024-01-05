import React from 'react';
import { MembersList } from './MembersList';

import membersData from '../../../assets/members.json';
import '../styles/Default.css';
import '../styles/Members.css';


const Bachelor = () => {
    return (
        <div className="wrapper">
            <div className="main-content">
                <MembersList memberInfo={membersData['bachelor-members']} />
            </div>
        </div>
    )
}

export default Bachelor;
