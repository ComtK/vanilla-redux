import React, {useState} from 'react';

export default function Home() {
    const [text, setText] = useState("");
    function onChange(e){
        setText(e.target.value);
    }
    function onSubmit(e){
        e.preventDefault();
        console.log(text);
        setText("");
    }
    return (
        <div>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type='text' onChange={onChange} value={text} />
                <button>Add</button>
            </form>
            <ul></ul>
        </div>
    )
}
