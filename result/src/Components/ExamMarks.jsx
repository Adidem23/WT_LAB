import React from 'react'
import { useState } from 'react'
import axios from 'axios';


const ElecComp = () => {

    const [Name, setName] = useState("")
    const [Phone, setPhone] = useState("");
    const [Clicked, setClicked] = useState(false);
    const [MSE, setMSE] = useState(0);
    const [ESE, setESE] = useState(0);
    const [FinalMarksPercentage,setFinalMarksPercentage] = useState(0);

    const GenerateReport=async()=>{
        setClicked(true);

        await axios.post("http://localhost:9000/genResult",{UserName:Name,UserMSE:MSE,USerESE:ESE},{ withCredentials: true }).then((res)=>{
         setFinalMarksPercentage(res.data);
        }).catch((err)=>{
            console.log(`${err} is Occured`);
        })
    }

 
    return (
        <>
            <div class="MainDiv" style={{display:'block',margin:'auto',width:'fit-content'}}>

                <h1>Result Generator</h1>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                    <input required type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" name="fullName" onChange={(e)=>{setName(e.target.value)}} />
                </div>


                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">PhoneNumber</label>
                    <input required type="phonenumber" class="form-control" id="exampleFormControlInput2" placeholder="Enter Your Phone Number" name="RollNumber" onChange={(e) => setPhone(e.target.value)} />
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">MSE_Marks</label>
                    <input required type="number" class="form-control" id="exampleFormControlInput3" placeholder="Enter Your MSE Marks" name="MSE" onChange={(e)=>{setMSE(e.target.value)}}  />
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">ESE_Marks</label>
                    <input required type="number" class="form-control" id="exampleFormControlInput3" placeholder="Enter Your ESE Marks" name="ESE" onChange={(e)=>{setESE(e.target.value)}} />
                </div>

                <div class="mb-3" style={{ display: 'block', margin: 'auto', width: 'fit-content' }}>
                    <button type="button" class="btn btn-secondary" onClick={GenerateReport}>Generate</button>
                </div>

                {Clicked ? <div class="mb-3">

                    <div class="card" style={{ display: 'block', margin: 'auto', width: 'fit-content' }} id="head3">
                        <div class="card-body">
                            <p class="card-title">Name:  <span id="nameuser">{Name}</span></p>
                            <p class="card-text">PhoneNumber:  <span id="phoneuser">{Phone}</span></p>
                            <p class="card-text" >Final Percentage is:  <span id="bill">{FinalMarksPercentage}%</span></p>
                        </div>
                    </div>

                </div> : <p style={{ display: 'block', margin: 'auto', width: 'fit-content', fontSize: '30px' }}>Fill Form To Check Bill!!</p>}

            </div>
        </>
    )
}

export default ElecComp