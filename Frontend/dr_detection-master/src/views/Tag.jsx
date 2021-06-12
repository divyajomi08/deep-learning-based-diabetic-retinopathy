import React, { useContext } from 'react'
import Tag from '../components/tag/Tag';
import { PatientContext } from '../PatientContext';

const Tagging=()=>{
    const data = useContext(PatientContext);

    return (
        <div>
           <Tag value={data}></Tag>
        </div>
    );
};

export default Tagging;