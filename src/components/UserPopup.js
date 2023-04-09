import { Button, Image } from 'react-bootstrap';
import { BoxArrowRight } from 'react-bootstrap-icons';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserPopup = () => {
  const { email, displayName, photoURL } = auth.currentUser;
  const photolessUser =
    'https://lh3.googleusercontent.com/FG3DgMZJTaToQnGjjnMIEHAxC90WmFHLj1mLzALqNtj4L71hvuwOQKR7qvQNiYgANa3lWHEYRWWyN7HERIhlWX-J2rk=s124';
  const [showOption, setShowOption] = useState(false);
  const navigate = useNavigate();

  const showPopUp = () => {
    setShowOption(!showOption);
  };

  const logOutUser = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="position-relative">
      <div onClick={showPopUp}>
        <Image
          src={photoURL == null ? photolessUser : photoURL}
          style={{
            height: '32px',
            width: '32px',
            borderRadius: '50%',
            cursor: 'pointer',
          }}
        />
      </div>
      {showOption && (
        <div
          className="p-3 rounded bg-secondary position-absolute mt-3 end-0"
          style={{ zIndex: 8 }}
        >
          <div className="d-flex gap-2 align-items-center mb-3">
            <Image
              src={photoURL == null ? photolessUser : photoURL}
              style={{
                height: '64px',
                width: '64px',
                borderRadius: '50%',
                cursor: 'pointer',
              }}
            ></Image>
            <div className='w-auto'>
              <p className="m-0 text-nowrap">{displayName == null ? '' : '@' + displayName}</p>
              <p className="m-0 text-nowrap">{email == null ? '@Demo User' : email}</p>
            </div>
          </div>
          <Button onClick={logOutUser} className="w-100">
            <BoxArrowRight className="me-1" />
            Sign Out
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserPopup;
