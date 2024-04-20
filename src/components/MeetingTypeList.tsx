'use client';

import React,{ useState } from 'react';
import { useRouter } from 'next/navigation';

import HomeCard from './HomeCard';
import MeetingModal from './MeetingModal';
import AddOrganisation from './AddOrganisation'


const MeetingTypeList = () => {
    const [action, setAction] = useState<
    'isScheduleMeeting' | 'isCreatingTeam' | 'isInstantMeeting' | undefined>(undefined);
    const router=useRouter();
    const createMeeting=()=>{}

    return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => setAction('isInstantMeeting')}
      />
      <HomeCard
        title="Create Your Team"
        description="Add upto 5 memebers"
        className="bg-blue-1"
        handleClick={() => setAction('isCreatingTeam')}
      />
      <HomeCard
        title="Schedule Meeting"
        description="Plan your meeting"
        className="bg-purple-1"
        handleClick={() => setAction('isScheduleMeeting')}
      />
      <HomeCard
        title="View Recordings"
        description="Meeting Recordings"
        className="bg-yellow-1"
        handleClick={() => router.push('/recordings')}
      />
      <MeetingModal
        isOpen={action === 'isInstantMeeting'}
        onClose={() => setAction(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
      <AddOrganisation
        isOpen={action === 'isCreatingTeam'}
        onClose={() => setAction(undefined)}
        title="Create Your Team"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />

    </section>
  )
}

export default MeetingTypeList;
