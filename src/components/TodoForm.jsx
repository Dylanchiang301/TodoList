import React, {useState, useEffect, useRef} from 'react';

const Todoform = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);
    useEffect(() =>{
        inputRef.current.focus();
    });

    const handleChange = e =>{
        setInput(e.target.value); 
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({      //雙向綁定！？
            id: Math.floor(Math.random()* 10000),
            text: input
        });
        setInput('');  //setInput這邊表示新state就是輸入的 input？
    };

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ?(
                <>
                <input
                    type='text'
                    placeholder='修改、更新'
                    value={input}
                    name='text'
                    className='todo-input edit'
                    onChange={handleChange}
                    ref={inputRef}
                    />
                <button className='todo-button edit'>Update</button>
                </>
            ):
            (
                <>
                <input
                type='text'
                placeholder='輸入代辦事項'
                value={input}
                name='text'
                className='todo-input'
                onChange={handleChange}
                ref={inputRef}
                />
            <button className='todo-button'>Add todo</button>
            </>
            )}
        </form> 
    )
};
export default Todoform