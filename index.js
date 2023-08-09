import { useState } from 'react';
import db  from "./firebase";
import {  collection, addDoc } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
 // Import compat version for older syntax if needed

// Your Firebase configuration and initialization code here

const Index = () => {
  const [UserData, setUserData] = useState({
    name:'',
  });

  const postUserData = (e) => {
    setUserData({ ...UserData, [e.target.name]: e.target.value });
  };

  const data = collection(db, 'Contact');

  const handlesubmit = async (e) => {
    e.preventDefault();
    addDoc(data, {
      UserData: UserData.name,
    })
      .then(() => {
        alert('Submitted successfully');
        setUserData({}); // Reset form after successful submission
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  };

  return (
    <>
      <form onSubmit={handlesubmit}>
        <div>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          hello world
          <input type="text" name="name" value={UserData.name} onChange={postUserData} />
          <button type="submit">submit</button>
        </div>
      </form>
    </>
  );
};

export default Index;
