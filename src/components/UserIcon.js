import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Person } from 'react-bootstrap-icons';
import { LinkContainer } from 'react-router-bootstrap';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import UserProfile from './UserProfile';

const UserIcon = () => {
  const [onlineUser, setOnlineUser] = useState(false);

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
        <LinkContainer to="sign-in">
          <Button className="p-0 bg-custom-secondary border-custom-secondary text-custom-text">
            <Person size={32} className="cursor-pointer" />
          </Button>
        </LinkContainer>
      )}
    </>
  );
};

export default UserIcon;
