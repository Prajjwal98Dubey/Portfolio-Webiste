/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react'

const Skills = () => {
  return (
   <>
   <div className="container">
    <div className="skills-part">
       <div className='react'>
        <img className='skills-img' src="https://miro.medium.com/max/1400/0*EitUXT-pqbaQSCTt.gif" alt="loading" />
        <h3>Reactjs</h3>
       </div>
       <div className="html">
        <img className="skills-img" src="https://i.gifer.com/7rxj.gif" alt="loading.."/>
        <h3>HTML</h3>
       </div>
       <div className="css">
        <img className='skills-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" alt="loading..." />
        <h3>CSS</h3>
       </div>
       <div className="js">
        <img  className='skills-img'  src="https://media0.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif?cid=790b7611429f88333fdaa2be19a63fb41e9bdc157705dd16&rid=giphy.gif&ct=s" alt="loading..." />
        <h3>JavaScript</h3>
       </div>
       <div className="mongo">
        <img className='skills-img' src="https://miro.medium.com/max/1200/0*GTTsEc-bsWoqcOoM.gif" alt="loading..." />
        <h3>mongoDB</h3>
       </div>
    </div>
   </div>
   </>
  )
}

export default Skills