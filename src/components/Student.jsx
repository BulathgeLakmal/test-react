import React, {useState} from 'react';

const Student = () =>{
    const[Name, setName] =useState ();
    const[Number, setContactNo] =useState ();


    const handleSubmit = e => {
        e.preventDefault(e);

      };

    const handleClear= () => {
        setName('');
        setContactNo('');
    }
    return(
        <div>
            <h3>Student Table</h3>
            <div>
            <form>
                <label>
                Student Name:
                <input type="text" value={Name} onChange={(e) => setName(e.target.value)} /><br/>
                Telephone No:
                <input type="text" value={Number} onChange={(e) => setContactNo(e.target.value)} /><br/>
                </label>
                <button onClick ={handleSubmit}> Submit</button>
                <button onClick ={handleClear}>Clear</button>

            </form>
                
            </div>
        </div>

    );
}
export default Student;