"use client";

import React, { useEffect } from "react";
import Button from "../../../components/ui/Button";
import Mentor from "@/app/mentorship/_components/Mentor";
import Container from "@/components/shared/Container";

const DisplayAllMentors = ({ allMentors }) => {
  useEffect(() => {
    console.log("Updated allMentors:", allMentors);
  }, [allMentors]);

  const maxEventsToShow = 8;

  return (
    <Container>
      {allMentors.length > 0 ? (
        <div className="mt-[64px] sm:mt-[40px] grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-[20px]">
          {allMentors.slice(0, maxEventsToShow).map((mentor, i) => (
            <Mentor
              key={i}
              image={mentor.image}
              name={mentor.name}
              skill={mentor.skill}
              bio={mentor.bio}
              tags={mentor.tags}
              topmate={mentor.topmate}
            />
          ))}
        </div>
      ) : (
        <div className="mt-[16px] md:mt-[20px] sm:mt-[40px] flex flex-col gap-[20px] justify-center items-center bg-[#f8f8f8] max-w-fit mx-auto py-[40px] px-[60px] rounded-[16px] border-2 border-[#dadada]">
          <h4 className="text-[28px] font-semibold text-black">👀 Oops!</h4>
          <p className="max-w-[300px] text-[16px] text-[#4d4d4d] text-center">
            Currently, there&apos;s no mentor information available.
          </p>
        </div>
      )}

      {allMentors.length > maxEventsToShow && (
        <div className="flex justify-center items-center">
          <Button
            onClick={() => { /* Handle "See More" button click if needed */ }}
            variant="primary"
            size="small"
            className="mt-[40px] max-w-[200px] mx-auto"
          >
            See More
          </Button>
        </div>
      )}
    </Container>
  );
};

export default DisplayAllMentors;
