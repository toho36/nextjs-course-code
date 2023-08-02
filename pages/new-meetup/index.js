import React from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeeetUp() {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeeetUp;
