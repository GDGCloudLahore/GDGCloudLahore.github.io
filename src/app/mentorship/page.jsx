import React from 'react';

// Components
import Header from '@/components/shared/Header';
import MentorshipHeroSection from './_components/MentorshipHero';
import DisplayAllMentors from './_components/DisplayAllMentors';
import Footer from '@/components/shared/Footer';

// Mocks
import allMentors from '@/mocks/mentors';

const Page = () => {
  return (
    <main className="min-h-[100vh] sm:min-h-[95vh] bg-[#f6f6f6] sm:m-[20px] sm:rounded-[16px] flex flex-col gap-[160px] pt-[20px] pb-[20px] sm:py-[30px]">
      <div className='flex-1'>
        <Header />
        <MentorshipHeroSection />
        <DisplayAllMentors allMentors={allMentors} />
      </div>
      <Footer />
    </main>
  )
}

export default Page