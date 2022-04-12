import React from 'react'

import Typewriter from 'typewriter-effect'

const TypeWriter = (props) => {
  return (
    <div>
      <Typewriter
        options={{
          strings: props.arr,
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  )
}

export default TypeWriter
