import React,{useContext} from 'react'
import Form from "../components/analysis/Analysisform";
import { PatientContext } from '../PatientContext';

const Patient=()=>{
    const data= useContext(PatientContext) ;
    return (
        <div>
            <Form value={data}/>
        </div>
    );
};

export default Patient;