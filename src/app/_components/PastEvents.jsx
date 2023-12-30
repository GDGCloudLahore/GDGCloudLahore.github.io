import React from "react";

// Components
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import DisplayAllEvents from "@/components/shared/DisplayAllEvents";

// Mocks
import { pastEvents } from "@/mocks/events";

const PastEventsSection = () => {
  return (
    <section>
      <Container>
        <SectionHeader
          title="Showcase of selected events and archive"
          badge="Past Event"
        />

        <DisplayAllEvents allEvents={pastEvents} />
      </Container>
    </section>
  );
};

export default PastEventsSection;
