import React from 'react'

function UserDataShowAdmin({UserDivData, UserDiv,setUserDiv}) {
  return (
    <>
    <div className={`${UserDiv} h-screen`}>
    </div> {" "}

    <div className={`${UserDiv} h-screen`}>
        <div>
            <div>
                <h1>User Information</h1>
                <button></button>
            </div>
            <div>
                <label htmlFor="">username:{""} 
                    <span>{UserDivData.username}</span>
                </label>
            </div>


            <div>
                <label htmlFor="">useremail:{""} 
                    <span>{UserDivData.useremail}</span>
                </label>
            </div>

            <div>
                <label htmlFor="">Address:{""} 
                    <span>{UserDivData.address}</span>
                </label>
            </div>
        </div>
        
    </div>


    
    </>
  )
}


export default UserDataShowAdmin