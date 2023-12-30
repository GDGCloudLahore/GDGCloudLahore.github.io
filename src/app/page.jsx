// Components
import Header from "@/components/shared/Header";
import HeroSection from "./_components/Hero";
import UpcomingEventSection from "./_components/UpcomingEvent";
import PastEventsSection from "./_components/PastEvents";
import TeamSection from "./_components/Team";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <main className="bg-[#FFFBFB] m-[20px] rounded-[16px] flex flex-col gap-[140px] py-[20px]">
      <div>
        <Header />
        <HeroSection />
      </div>
      <UpcomingEventSection />
      <PastEventsSection />
      <TeamSection />
      <Footer />
    </main>
  );
}
