import React from 'react';

export default function About() {
  const myStyle = {
    color: "black",
    backgroundColor: "white"
  };

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About TextUtils</h1>
      <div className="accordion" id="accordionExample">
        
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
             <strong>Analyze Your Text</strong> 
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>TextUtils</strong> is a utility that allows you to analyze your text quickly and efficiently. It provides functionalities like word count, character count, reading time estimation, and more.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
             <strong>Free to Use</strong> 
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              TextUtils is a completely free tool that helps you manipulate text in any way you want. Whether you're editing documents, notes, or web content, it's all at your fingertips.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
             <strong> Browser Compatible</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              This app works in any web browser such as Chrome, Firefox, Safari, or Edge. It's responsive and optimized for mobile and desktop usage alike.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
