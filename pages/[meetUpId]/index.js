import React, { Fragment } from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';
function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://www.travelandleisure.com/thmb/9xr8CFGR14sLvR4IhLwKV64fEV0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-Eiffel-Tower-BESTFRANCE0323-dada0673f8764c099b68d01695ef8057.jpg"
      title="first meetup"
      address="Some street 5"
      description="this is a first meetup"
    />
  );
}

export default MeetupDetails;
