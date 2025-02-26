import React from 'react'
import AnimatedCursor from 'react-animated-cursor'

function AnimCurser() {

  return (
    <div>
        <AnimatedCursor 
         innerSize={40}
      outerSize={8}
      color='255, 240, 0'
      outerAlpha={0.9}
      innerScale={1}
      outerScale={0}
     
      innerStyle={{
        border:"1px solid yellow",
        backgroundColor:"transparent"
      }}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
       
      ]}
      />
    </div>
  )
}

export default AnimCurser




