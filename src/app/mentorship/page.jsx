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

function filterPostsByCategory(posts, selectedCategory) {
  // console.log("posts, selectedCategory", posts, selectedCategory)
  const filteredPosts = [];

  for (const post of posts) {
    // Assuming each post has a 'categories' property, which is an array of category objects
    const postCategories = post.tags || [];  // You should adjust this based on your data structure

    // Check if the selected category is present in the post's categories
    const categoryFound = postCategories.some(category => 
        category.name === selectedCategory
    );

    console.log("categoryFound", categoryFound)

    if (categoryFound) {
        filteredPosts.push(post);
    }
}

  return filteredPosts;
}

const Page = () => {
  
  const [selectedMentor, setSelectedMentor] = useState([...allMentors]);
  
  const handleTagClick = (tag) => {
    const disiredResult = filterPostsByCategory(allMentors, tag.name);
    console.log("disiredResult", disiredResult)
    setSelectedMentor(disiredResult);
  };

  

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
                      onClick={() => handleTagClick(tag)}
                    >
                      {tag.name}
                    </button>
                  ))
                }
              </div>
            </Container>
          )
        }
        <DisplayAllMentors allMentors={selectedMentor} />

      </div>
      <Footer />
    </main>
  )
}

export default Page