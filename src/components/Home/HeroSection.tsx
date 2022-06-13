import { Icon } from '@iconify/react';
import { useEffect, useMemo, useState } from 'react';
import CornerBorderDiv from '../CornerBorderDiv';
import FadeInSection from '../FadeInSection';
import Lode from '../Lode';
import { useAxios } from '../../services/useAxios';
import { nFormatter } from '../../services/utils';
import Button from '../Button';

const topT = 0.1;

const HeroSection = () => {
  const [scrollRate, setScrollRate] = useState(0);
  const { data } = useAxios('/overview', 'get');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, []);

  const handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollRate = winScroll / height;
    setScrollRate(scrollRate);
  };

  const marginX = useMemo(() => {
    if (scrollRate > topT) return 0;
    else return 8000 * scrollRate;
  }, [scrollRate]);

  const handleSeeProjects = (() => {
    const stakeSection = document.getElementById("stake-section");
    if (stakeSection) {
      const { top } = stakeSection.getBoundingClientRect()
      window.scrollTo(0, top - 10)
    }
  })

  return (
    <section
      className={`md:px-[180px] left-0 right-0 md:fixed md:top-[115px] mt-[115px]`}
      style={{
        opacity: 1 - scrollRate * 10,
      }}
    >
      <Lode />
      <div className="md:max-w-[587px] md:mb-xx-sm mb-[80px] relative">
        <CornerBorderDiv className="block md:hidden pt-[380px]">
          <div className="md:-mr-16">
            <h2 className="font-bold md:text-d-lg leading-[64px] mb-2 text-center md:text-left text-[45px]">
              <FadeInSection>Imperator.co</FadeInSection>
              <p>Venture Capital</p>
            </h2>
            <p className="font-inter mb-x-big text-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore
            </p>
            <Button className="px-[60px] py-4 w-full" handleClick={() => handleSeeProjects()}>
              <div className="flex items-center justify-center">
                See the projects
                <Icon icon="bi:arrow-down" className="ml-md" />
              </div>
            </Button>
          </div>
        </CornerBorderDiv>
        <CornerBorderDiv
          className="hidden md:block right-top-corner left-bottom-corner md:pl-16 md:pb-16 md:pt-8"
          style={{ left: -marginX }}
        >
          <div className="md:-mr-16">
            <h2 className="font-bold md:text-d-lg leading-[64px] mb-2 text-center md:text-left text-[45px]">
              <FadeInSection>Imperator.co</FadeInSection>
              <p>
                The next level <br /> of staking services
              </p>
            </h2>
            <p className="font-inter mb-x-big text-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum
            </p>
            <Button className="px-[60px] py-4 w-full" handleClick={() => handleSeeProjects()}>
              <div className="flex items-center justify-center">
                See the projects
                <Icon icon="bi:arrow-down" className="ml-md" />
              </div>
            </Button>
          </div>
        </CornerBorderDiv>
      </div>
      <div
        className="md:grid md:grid-cols-5 md:ml-[110px] md:-mt-5 fixed w-full hidden"
        style={{ right: -marginX }}
      >
        <div className="col-end-5">
          <FadeInSection>
            <div className="md:mb-md mb-[70px]">
              <span>More than</span>
              <h2 className="font-bold text-d-lg leading-[64px]">
                {nFormatter(data?.delegator_number, 0) ?? 5000}
              </h2>
              <span>Customers worldwide</span>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="md:mb-md mb-[70px]">
              <span>More than</span>
              <h2 className="font-bold text-d-lg leading-[64px]">
                {nFormatter(data?.total_asset_staked, 0) ?? '15M'}
              </h2>
              <span>Delegated to us</span>
            </div>
          </FadeInSection>
        </div>
        <div className="col-end-6 md:mt-1">
          <FadeInSection>
            <div className="md:mb-md mb-[70px]">
              <span>We operate on</span>
              <h2 className="font-bold text-d-lg leading-[64px]">
                {data?.total_operated_project ?? 147}
              </h2>
              <span>Projects</span>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="md:mb-md">
              <span>More than</span>
              <h2 className="font-bold text-d-lg leading-[64px]">$35M</h2>
              <span>Distributed revenues</span>
            </div>
          </FadeInSection>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="col-end-5">
          <FadeInSection>
            <div className="md:mb-md mb-[70px]">
              <span>More than</span>
              <h2 className="font-bold text-d-lg leading-[64px]">
                {nFormatter(data?.delegator_number, 0) ?? 5000}
              </h2>
              <span>Customers worldwide</span>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="md:mb-md mb-[70px]">
              <span>More than</span>
              <h2 className="font-bold text-d-lg leading-[64px]">
                {nFormatter(data?.total_asset_staked, 0) ?? '15M'}
              </h2>
              <span>Delegated to us</span>
            </div>
          </FadeInSection>
        </div>
        <div className="col-end-6 md:mt-1">
          <FadeInSection>
            <div className="md:mb-md mb-[70px]">
              <span>We operate on</span>
              <h2 className="font-bold text-d-lg leading-[64px]">
                {data?.total_operated_project ?? 147}
              </h2>
              <span>Projects</span>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="md:mb-md">
              <span>More than</span>
              <h2 className="font-bold text-d-lg leading-[64px]">$35M</h2>
              <span>Distributed revenues</span>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
