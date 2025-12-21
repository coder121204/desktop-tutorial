import React, { use, useState } from "react";

export default function About() {
    
    const[myStyle, setmyStyle] = useState( {
        color: 'black',
        backgroundColor: 'white'
        
    })
    const[btntext, setBtnText] = useState("Enable Dark mode")

    const toggleStyle = () =>{
      if(myStyle.color === 'black'){
        setmyStyle({
          color : 'white',
          backgroundColor:'black',
          border: '2px solid white'
        })
        setBtnText("Enable Light Mode")
      }
      else{
        setmyStyle({
          color : 'black',
          backgroundColor:'white'
          
        })
        setBtnText("Enable Dark Mode")
      }
    }

  return (
    <div className="contanier my-3"  style={myStyle}>
        <h2 className="my-3">About Us</h2>
      <div classname="accordion" id="accordionExample"  style={myStyle}> 
        <div classname="accordion-item">
          <h2 classname="accordion-header">
            <button
              classname="accordion-button"
              type="button"  style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            classname="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div classname="accordion-body"   style={myStyle}>
              <strong>This is the first item’s accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It’s also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div classname="accordion-item">
          <h2 classname="accordion-header">
            <button
              classname="accordion-button collapsed"  style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            classname="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div classname="accordion-body"  style={myStyle}>
              <strong>This is the second item’s accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It’s also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div classname="accordion-item">
          <h2 classname="accordion-header">
            <button
              classname="accordion-button collapsed"  style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            classname="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div classname="accordion-body"  style={myStyle}>
              <strong>This is the third item’s accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It’s also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <div className="container  my-3 ">
      <button  onClick ={toggleStyle}  type = "button"  className="btn btn-primary">{btntext}</button>
      </div>
    </div>
  );
}
