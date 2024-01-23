import React from 'react';
import Link from 'next/link';

// Components
import Container from '@/components/shared/Container';
import Button from '@/components/ui/Button';

const MentorshipHeroSection = () => {
    const headingClassNames = "uppercase leading-[140%] font-semibold max-w-[500px] md:max-w-[660px] text-[22px] sm:text-[28px] md:text-[40px]";

    return (
        <section className="pt-[120px] flex justify-center items-center">
            <Container>
                <div className='flex flex-col gap-[20px] lg:gap-0 lg:flex-row lg:justify-between lg:items-end'>
                    <div className="flex flex-col gap-[8px]">
                        <h1 className={headingClassNames}>
                        Unlock Your Potential with{" "}
                        <span className="mt-[8px] md:mt-0 pt-[2px] sm:pt-0 w-fit text-white bg-black px-[16px] py-[4px] rounded-[12px] block md:inline">
                        Cloud Experts!
                        </span>
                        </h1>
                        <p className="mt-[8px] max-w-[350px] sm:max-w-[500px] md:max-w-[500px] text-[14px] sm:text-[16px] md:text-[18px] text-[#4d4d4d] leading-[140%]">
                        Discover mentors from various industries, each equipped with a unique set of skills and insights.
                        </p>
                    </div>
                    <Link className='w-full max-w-[200px]' target='_blank' href="https://github.com/GDGCloudLahore/GDGCloudLahore/issues/new?assignees=hasnaat-iftikhar&labels=mentorship&projects=&template=user_info_template.md&title=Information+Submission%3A+%5BYour+Name%5D">
                        <Button variant='default' size='small'>Add your detail</Button>
                    </Link>
                </div>
            </Container>
        </section>
    )
}

export default MentorshipHeroSection