import React, {useState} from 'react';

export default function Form(props) {
    const [text, setText] = useState("");

    const handleUpclick = ()=>{
        setText(text.toUpperCase());
    }

    const handleOnchange = (event)=>{
        setText(event.target.value);
    }

    const handleLowclick = ()=>{
        setText(text.toLowerCase());
    }

    const handleCtext = ()=>{
        setText("");
    }

    const handleCaptext = ()=>{
        var fl = text.slice(0,1).toUpperCase();
        var text1 = fl+text.slice(1, text.length);
        setText(text1);
    }
    
    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <label htmlFor="box" className="form-label">{props.heading}</label>
                    <textarea className="form-control" value={text} onChange={handleOnchange} id="box" rows="10"></textarea>
                </div>

                <div className="btn btn-primary mx-3" onClick={handleUpclick}>To Uppercase</div>
                <div className="btn btn-primary mx-3" onClick={handleLowclick}>To Lowercase</div>
                <div className="btn btn-primary mx-3" onClick={handleCtext}>Clear Text</div>
                <div className="btn btn-primary mx-3" onClick={handleCaptext}>Capitalize</div>
            </div>

            <div className="container my-3">
                <h6>Word Summary</h6>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008*text.split(" ").length} minutes read</p>
            </div>

            <div className="container my-3">
                <h4>Preview</h4>
                <p>{text}</p>
            </div>
        </>
    );
}
