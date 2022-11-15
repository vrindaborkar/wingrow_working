import React from 'react'

const Stall = ({data , handleClick , bookedStalls , alreadyBooked , date}) => {
  return (
        <div className={data.length > 18 ?'Stalls_info':'Stalls_info_xl'}>
        {alreadyBooked && 
            data.map((e,i)=>{
                const isBookedarr = alreadyBooked.filter(ele=> ele.stallNo === e.stallNo && ele.bookedAt === date)
                const isBooked = isBookedarr.length === 0 ? false : true;
                const { stallName , _id , stallPrice } = e;
                const isSelected = bookedStalls.some(e=>e._id === _id)
                let stallClass;
                if(isBooked)
                {
                    stallClass = "booked";
                }else
                {
                    stallClass = "available"
                }
                
                if(isSelected && !isBooked){
                    stallClass = "selected"
                }
            
                return(
                    <div onClick={handleClick} className={stallClass} id={_id} key={i}>{stallName}<br/>Rs.{stallPrice}</div>
                )
            })
        }
        </div>
  )
}

export default Stall