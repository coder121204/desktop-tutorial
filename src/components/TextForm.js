import React, {useState} from 'react'

export default function TextForm(props) {
    const handelUpClick =()=>{
        // console.log("Uppercase was clicked " +  text);
        let newText = text.toUpperCase();
        setText (newText);
        props.showAlert("converted to Uppercase!", "success");
    }
     const handelUpClick2 =()=>{
        // console.log("Uppercase was clicked " +  text);
        let newText = text.toLowerCase();
        setText (newText);
         props.showAlert("converted to lowercase!", "success");
    }
         const handelclearClick =()=>{
        // console.log("Uppercase was clicked " +  text);
        let newText = '';
        setText (newText);
         props.showAlert("clear the text!", "success");
    }

    const handelVowelClick =()=>{
        let Vowels = "aeiouAEIOU";
        let count = 0;
        for (let i=0; i<text.length; i++){
            if(Vowels.includes(text [i])){
                count++;
            }
        }
        alert("Total vowels:" +count);
         props.showAlert("count vowels!", "success");
        }

    const handelcapitalClick =()=>{

    // 1) split the text into words
    let words = text.split(" ");

    // 2) capitalize each word
    let capitalizeWords = words.map((word)=>{
        // if word is empty (like multiple spaces), skip it safely
        if(word.length === 0){
            return word;
        }

        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });

    // 3) join the words back together
    let newText = capitalizeWords.join(" ");

    // 4) update text
    setText(newText);
     props.showAlert("capiralize the word !", "success");
    }

       const handelDownloadClick =()=>{
        // console.log("Uppercase was clicked " +  text);
        //check if text is empty 
         if (text.trim().length === 0) {  
        alert("Please enter some text before downloading!");
        return;  // stop the function
         }
        let file = new Blob([text], { type: "text/plain" });  //create a text file from the current text
        let downloadLink = document.createElement("a");   //create hidden link
        downloadLink.href = URL.createObjectURL(file);
        downloadLink.download = "mytext.txt";   //set file name
        document.body.appendChild(downloadLink);  // add to body
        downloadLink.click();  //click the link to start download
        document.body.removeChild(downloadLink);  //remove and clean url
        URL.revokeObjectURL(downloadLink.href);
         props.showAlert("download the textfile !", "success");
        }
    
    const handelOnChange =(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const [text,setText] = useState("Enter text here");
    // text = "new text"; //wrong way to change the state
    // setText("new text"); // correct wy to change the state
  return (
    <>
    <div className='container' style={{color:props.mode==='dark' ? 'white' : 'black'}}>
        <h1>{props.heading}  </h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor:props.mode==='dark' ? 'gray' : 'white',color:props.mode==='dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
        </div>
        {/* <button className="btn btn primary" onClick={handelUpClick} >Convert to Uppercase</button> */}
        <button className='mx-2' onClick={handelUpClick}  >Convert to Uppercase </button>
        <button className='mx-2' onClick={handelUpClick2} >Convert to lowercase</button> 
        <button className='mx-2' onClick={handelclearClick}>Clear Text</button>
        <button className='mx-2' onClick={handelDownloadClick}>Download Text</button>
        <button className='mx-2' onClick={handelcapitalClick}>Capitalized  text</button>
        <button className='mx-2' onClick={handelVowelClick}>count vowels</button>
    </div>
    <div className='container my-2' style={{color:props.mode==='dark' ? 'white' : 'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words, and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h3>preview</h3>
        <p>{text .length>0?text:"Enter something  in the textbox above to previw it here"}</p>
    </div>
    </>
  )
}
