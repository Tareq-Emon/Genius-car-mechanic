import React from 'react';

import mechanic1 from '../../../images/mechanic/1.jpg'
import mechanic2 from '../../../images/mechanic/2.jpg'
import mechanic3 from '../../../images/mechanic/3.jpg'
import mechanic4 from '../../../images/mechanic/4.jpg'
import mechanic5 from '../../../images/mechanic/5.jpg'
import mechanic6 from '../../../images/mechanic/6.jpg'
import Expert from '../Expert/Expert';

const experts = [
    {
        img: mechanic1,
        name: "Arena Joly",
        expertize: "-Engine Expert-"
    },
    {
        img: mechanic2,
        name: "Karina Kajoly",
        expertize: "-Polish Expert-"
    },
    {
        img: mechanic3,
        name: "Jasina Noly",
        expertize: "-Mashine Expert-"
    },
    {
        img: mechanic4,
        name: "Anjali Naliya",
        expertize: "-Tyre Expert-"
    },
    {
        img: mechanic5,
        name: "Banjony Kapor",
        expertize: "-Light Expert-"
    },
    {
        img: mechanic6,
        name: "Nacholy Kanchi",
        expertize: "-Pupm Expert-"
    }
]

const Experts = () => {
    return (
        <div id="experts" className="container">
            <h2 className="text-primary mt-5">Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;