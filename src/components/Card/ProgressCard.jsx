import React from 'react';
import { toast } from 'react-toastify';

const ProgressCard = ({element,data,setData}) => {
     const handleProgress=()=>{
          const currentData = data.find(elm=>elm.ticketId==element.ticketId)
          if (currentData.status ==="In-Progress") {
               currentData.status="Resolved"
               toast.success('Resolved')
          }
          
          const restData = data.filter(elm=>elm.ticketId!==element.ticketId)
          setData([currentData,...restData])
          

          
     }
     return (
          <div className='flex flex-col shadow-xl  p-3'>
               <h1 className='text-xl font-semibold '>{element.subject}</h1>
               <button onClick={handleProgress} className='btn w-full text-white bg-green-500 text-center'>Complete</button>
          </div>
     );
};

export default ProgressCard;