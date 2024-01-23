"use client"

import React, { useState } from 'react';

// Components
import Header from '@/components/shared/Header';
import MentorshipHeroSection from './_components/MentorshipHero';
import DisplayAllMentors from './_components/DisplayAllMentors';
import Footer from '@/components/shared/Footer';
import Container from '@/components/shared/Container';

// Mocks
import allMentors, { mentorTags } from '@/mocks/mentors';

const Page = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagClick = (tag) => {
    setSelectedTags((prevTags) => {
      if (prevTags.includes(tag)) {
        return prevTags.filter((t) => t !== tag);
      } else {
        return [...prevTags, tag];
      }
    });
  };

  const filteredMentors = allMentors.filter((mentor) => {
    if (selectedTags.length === 0) {
      return true;
    }
    return selectedTags.includes(mentor.tag.value);
  });

  return (
    <main className="min-h-[100vh] sm:min-h-[95vh] bg-[#f6f6f6] sm:m-[20px] sm:rounded-[16px] flex flex-col gap-[160px] pt-[20px] pb-[20px] sm:py-[30px]">
      <div className='flex-1'>
        <Header />
        <MentorshipHeroSection />
        {
          allMentors?.length > 0 && (
            <Container className='mt-[20px]'>
              <div className='flex justify-start items-center gap-2'>
                {
                  mentorTags.map((tag, index) => (
                    <button
                      key={index}
                      className={`w-fit bg-[#ebebeb] text-black rounded-[8px] px-[12px] py-[8px] text-[14px] md:text-[16px] sm:text-[16px]`}
                      // onClick={() => handleTagClick(tag.name)}
                    >
                      {tag.name}
                    </button>
                  ))
                }
              </div>
            </Container>
          )
        }
        <DisplayAllMentors allMentors={filteredMentors} />

      </div>
      <Footer />
    </main>
  )
}

export default Page