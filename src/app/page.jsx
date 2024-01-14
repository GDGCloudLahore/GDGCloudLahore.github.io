// Components
import Header from "@/components/shared/Header";
import HeroSection from "./_components/Hero";
import UpcomingEventSection from "./_components/UpcomingEvent";
import PastEventsSection from "./_components/PastEvents";
import TeamSection from "./_components/Team";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <main className="bg-[#f6f6f6] sm:m-[20px] sm:rounded-[16px] flex flex-col gap-[160px] pt-[20px] pb-[20px] sm:py-[30px]">
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
