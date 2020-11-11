import React, { useState } from 'react'
import './style.css'

const list = [
    {
        id: 1,
        name: 'Bertie Yates',
        age: 29,
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    },
    {
        id: 2,
        name: 'Hester Hogan',
        age: 32,
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
    },
    {
        id: 3,
        name: 'Larry Little',
        age: 36,
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    },
    {
        id: 4,
        name: 'Sean Walsh',
        age: 34,
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    },
    {
        id: 5,
        name: 'Lola Gardner',
        age: 29,
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    },
];

export function Birthday(props) {

const [data,setData] = useState(list)
    const clearAll = () =>{
        setData([])
    }

    return (
        <div className="container">
        <h1>{data.length} birthdays today</h1>

            {data.map((item, index) => {
                return (
                    <div className="listItem">
                        <img src={item.image} alt="" />
                        <div className="details">
                            <h2>{item.name}</h2>
                            <p>{item.age} years</p>

                        </div>
                    </div>
                )
            })}

            <button  class="btn" onClick={clearAll}>Clear All</button>
        </div>
    )
}
