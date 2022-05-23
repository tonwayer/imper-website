import Accordion from "../Accordion"
import FadeInSection from "../FadeInSection"

const FAQSection = () => {

  return <section className="md:mt-[380px] md:px-[210px] mt-[90px]">
    <FadeInSection>
      <h3 className="medium-title text-center">Got questions ?</h3>
    </FadeInSection>
    <h4 className="font-bold text-md text-primary-500 font-inter mb-16 text-center">
      We have the answers
    </h4>
    <FadeInSection>
      <div className="mb-4">
        <Accordion
          title="How do i stake ?"
          content={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum"}
        />
      </div>
      <div className="mb-4">
        <Accordion
          title="What makes me sure it is safe ?"
          content={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum"}
        />
      </div>
      <div className="mb-4">
        <Accordion
          title="What problems does Imperator solves ?"
          content={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum"}
        />
      </div>
      <div className="mb-4">
        <Accordion
          title="How do i earn my money ?"
          content={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum"}
        />
      </div>
    </FadeInSection>
  </section>
}

export default FAQSection
