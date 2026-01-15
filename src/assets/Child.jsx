import React from 'react'

const Child = (props) => {
  return (
    <div>
      <div>
        Skills: {props.skills}
      </div>
      <div>
        User Details : {props.userDetails.name} , {props.userDetails.age}, {props.userDetails.course} 
      </div>
    </div>
  )
}

export default Child