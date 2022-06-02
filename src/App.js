import React from "react";
import './App.css';

function App() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const values = Object.fromEntries(data.entries());
    console.log(values);

    try {
      let res = fetch("https://localhost:8001/v1jobs/job", {
        method: "POST",
        body: JSON.stringify ({
          values
        }),
      });
    }

    catch (err) {
      console.log(err);
    }
    alert("You form data is present on console!");
  };

  return (
    <div className="container">
      <div className = "form-cont">
      <b>Post Job</b>
      <span className='form-heading' > Basic Details</span>
      <form action='localhost:8001/v1jobs/job' method='POST' onSubmit={(e) => {handleSubmit(e)}}>
        <label htmlFor="Title" >
          Job Title*
        </label>
        <input required placeholder='Write a title that appropriately describes this job' type='text' name='Title'></input>
        <label htmlFor="Location">
          Location*
        </label>

        <input required placeholder="+Add Location" type='text' name='Location'></input>

          <div className='split'>
            <div>
              <label htmlFor="MinExp">
                Years of experience*
              </label>
              <input required name='MinExp' className='inpsplit' placeholder='Select Min' type="number" list="exp" />
              <datalist id="exp">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
                <option>10+</option>
                <option>15+</option>

              </datalist>
            </div>
            <div>


              <input required name='MaxExp' className='hhsplit' placeholder='Select Max' type="number" list="exp" />
              <datalist id="exp">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
                <option>10+</option>
                <option>15+</option>

              </datalist>
            </div>
          </div>

          <label >
            Job Descption
          </label>


          <textarea name='description' placeholder="Describe the role and responsibilities" rows='10' required> </textarea>
          <span className='form-heading' > Targeting</span>

          <div className='split'>
            <div>
              <label htmlFor="functionalarea">
                Functional Area*
              </label>
              <input required name='functionalarea' className='inpsplit'  type="text"  />
            
            </div>
            <div>
              <label htmlFor="Category">
                Category*
              </label>
              <input required name='category' className='inpsplit' placeholder='Select' type="text" list="category" />
              <datalist id="category">
                <option>strategy</option>
                <option>marketing</option>
                <option>finance</option>
                <option>human resources</option>
                <option>technology and equipment</option>
                <option>operations</option>
              </datalist>
            </div>
          </div>


          <label htmlFor="Tags" >
            Tags*
          </label>
          <input required placeholder='+Add tags' type='text' name='tags'></input>
         <div>
         <button type='submit'>Post Job</button>
          <button >Post Job And Add Another Job</button>
          <button type='reset'>Cancel </button>
       
         </div> 

      </form>
      </div>
    
    </div>
  );
}

export default App;
