import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { PersonCircle } from 'react-bootstrap-icons';
import { LinkContainer } from 'react-router-bootstrap';
import { auth } from '../../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import UserProfile from './UserProfile';
import { useNavigate } from 'react-router-dom';

const UserIcon = () => {
  const [onlineUser, setOnlineUser] = useState(false);
  const navigate = useNavigate();

  const routeSignIn = () => {
    navigate('/sign-in');
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log('User logged in');
        setOnlineUser(auth.currentUser);
      } else {
        // console.log('No user');
        setOnlineUser(false);
      }
    });
  }, []);

  return (
    <>
      {onlineUser ? (
        <UserProfile user={onlineUser} />
      ) : (
        // <LinkContainer to="sign-in">
        <Button className="p-2 btn-nav-custom" onClick={routeSignIn}>
          <PersonCircle size={25} className="cursor-pointer" />
        </Button>
        // </LinkContainer>
      )}
    </>
  );
};

export default UserIcon;
