import React from "react";

// Components
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import DisplayAllTeam from "@/components/shared/DisplayAllTeam";

// Mocks
import teamMembers from "@/mocks/team";

const TeamSection = () => {
  return (
    <section>
      <Container>
        <SectionHeader
          title="Say hello to our amazing team!"
          badge="Our Team"
        />

        <DisplayAllTeam allTeam={teamMembers} />
      </Container>
    </section>
  );
};

export default TeamSection;
