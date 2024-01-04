import React from 'react';


export const Education = ({ department, school, degree, country, date }) => {
    return (
        <div> {
            <><div>
                <div>
                    {school}
                </div>
                <div>
                    {country}
                </div>
            </div>
            <div>
                <div>
                    {degree} of {department}
                </div>
                <div>
                    {date}
                </div>
            </div></>
        }</div>
    )
}
