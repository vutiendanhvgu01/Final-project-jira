import React from 'react'
import { Input } from 'antd';
type Props = {}

const Profile = (props: Props) => {
  return (

    <>
    <div className="container">
   <div className="title-profile" style={{textAlign:'center'}}>
    <h1>Profile</h1>
   </div>
        <div className="profile-wrap row">
            <div className="col-6">
                <img src="https://ui-avatars.com/api/?name=Bao%20Toan" alt="..." />
            </div>
            <div className="col-6">
                <div className="profile-content">
                    <h3>Bao Toan</h3>
                    <div className="form-group">
                    <p>Id <span className='required-icon'>*</span></p>
                    <Input placeholder="input with clear icon" allowClear  />
                    </div>
                    <div className="form-group">
                    <p>Email <span className='required-icon'>*</span></p>
                    <Input placeholder="input with clear icon" allowClear />
                    </div>
                    <div className="form-group">
                    <p>Name <span className='required-icon'>*</span></p>
                    <Input placeholder="input with clear icon" allowClear  />
                    </div>
                    <div className="form-group">
                    <p>Phone number <span className='required-icon'>*</span></p>
                    <Input placeholder="input with clear icon" allowClear  />
                    </div>
                    <div className="form-group">
                    <p>Password <span className='required-icon'>*</span></p>
                    <Input placeholder="input with clear icon" allowClear  />
                    </div>
                    <div className="form-group">
                    <p>Password confirmation <span className='required-icon'>*</span></p>
                    <Input placeholder="input with clear icon" allowClear  />
                    </div>

                </div>
                <div className="group-button d-flex">
                    <button className="btn">
                        Update
                    </button>
                    <button className="btn">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    </div>
    
    </>

  )
}

export default Profile