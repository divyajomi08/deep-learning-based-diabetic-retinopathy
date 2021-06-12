import React, { useContext } from 'react';
import PatientList from '../components/dashboard/PatientList';
import { PatientContext } from '../PatientContext';

const Patient = () => {
    const data= useContext(PatientContext) ;
    return (
        <div>
            <PatientList value={data}/>
        </div>

    );
}

export default Patient;