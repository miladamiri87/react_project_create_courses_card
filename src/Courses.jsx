import React from 'react'
import Course from './Course'

export default function Courses() {
  const data = [
    { name: "front", name_teacher: "Kazemi", price: "1000" },
    { name: "Backend", name_teacher: "Rasouli", price: "5000" },
    { name: "UI-UX", name_teacher: "Bahari", price: "2000" },
  ];


  const items_course = data.map((cr, index) => {
    return (
      <>
        <Course name={cr.name} name_teacher={cr.name_teacher} price={cr.price} key={index} />
      </>)
  });

  return (<>

    {items_course}

    {/* <Course name= "front" name_teacher= "Kazemi" price= "1000"/> */}
  </>)

}
