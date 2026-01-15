
import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
      <Child  skills={["html", "css","js"]} userDetails={{name:"ravi",age:25 ,course:"MERN Full Stack"}}/>
    </div>
  )
}

export default Parent
