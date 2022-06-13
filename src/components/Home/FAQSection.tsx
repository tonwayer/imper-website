import Accordion from '../Accordion';
import FadeInSection from '../FadeInSection';
import { useAxios } from '../../services/useAxios';

const FAQSection = () => {
  const { data } = useAxios('/faq', 'get');

  return (
    <section className="md:mt-[380px] lg:px-[210px] mt-[90px]">
      <FadeInSection>
        <h3 className="medium-title text-center">Got questions ?</h3>
        <h4 className="font-bold text-md text-primary-500 font-inter mb-16 text-center">
          We have the answers
        </h4>
      </FadeInSection>
      {data &&
        data.map((qa: any, index: number) => (
          <FadeInSection key={index}>
            <div className="mb-4">
              <Accordion title={qa.question} content={qa.answer} />
            </div>
          </FadeInSection>
        ))}
    </section>
  );
};

export default FAQSection;
