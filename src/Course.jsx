import React from 'react'

export default function course(props) {
    return (
        <div>
            <p>This is {props.name} Courese</p>
            <p>Teacher is {props.name_teacher} Courese</p>
            <p>Price is {props.price || 40000}</p>
            {/* <p>Teacher is Aghaee and mis Kazemi</p> */}
        </div>
    )
}