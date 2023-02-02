import React from 'react'
import { spoon } from '../../constants/images'
const SubHeading = ({title}) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
         <p className="p__cormorant">{title}</p>
         <img src={spoon} alt="spoon_image" className="spoon__img" />
    </div>
  )
}

export default SubHeading