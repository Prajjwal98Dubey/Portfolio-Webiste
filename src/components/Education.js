import React from 'react'

const Education = () => {
  return (
    <>
    <div className="myeducation">
    <div className="card text-center" style={{marginBottom:"15px"}}>
  <div className="card-header">
    B.Tech[CSE]
  </div>
  <div className="card-body" style={{paddingBottom:"10px"}}>
    <h5 className="card-title">Pranveer Singh Institute of Technology,Kanpur</h5>
    <p className="card-text">AKTU,Lucknow</p>
    <a href="https://www.psit.ac.in/" target="_blank" className="btn btn-primary">Visit College</a>
  </div>
  <div className="card-footer text-muted">
    Duration : 2018-2022
  </div>
</div>
<div className="card text-center" style={{marginBottom:"15px"}}>
  <div className="card-header">
    Class 12<sup>th</sup>
  </div>
  <div className="card-body" style={{paddingBottom:"10px"}}>
    <h5 className="card-title">Harmilap Mission School,Kanpur</h5>
    <p className="card-text">CBSE,Delhi</p>
    <a href="http://hmsknp.in/"  target="_blank" className="btn btn-primary">Visit School</a>
  </div>
  <div className="card-footer text-muted">
    Duration:2016-2017
  </div>
</div>
<div className="card text-center" style={{marginBottom:"15px"}}>
  <div className="card-header">
    Class 10<sup>th</sup>
  </div>
  <div className="card-body" style={{paddingBottom:"10px"}}>
    <h5 className="card-title">Harmilap Mission School,Kanpur</h5>
    <p className="card-text">CBSE,Delhi</p>
    <a href="http://hmsknp.in/" target="_blank" className="btn btn-primary">Visit School</a>
  </div>
  <div className="card-footer text-muted">
   Duration: 2014-2015
  </div>
</div>
</div>
    </>
  )
}

export default Education