import CornerBorderDiv from "../CornerBorderDiv"

const InfraSection = () => {

  return <section className="md:mt-[320px] mt-[70px]">
    <div className="md:grid md:grid-cols-2">
      <div className="md:mr-10">
        <CornerBorderDiv className="left-top-corner right-bottom-corner md:p-8 max-w-[380px] ml-auto">
          <h4 className="font-bold text-md text-primary-500 font-inter mb-2 text-left">
            We provide reliable infrastructure for next generation technologies
          </h4>
          <h3 className="md:text-4xl text-[36px] font-bold leading-[64px] mb-2 text-left">
            Infrastructure
          </h3>
          <p className="title-medium">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum
          </p>
        </CornerBorderDiv>
      </div>
      <div className="max-w-[340px] md:mt-[85px] md:ml-[120px] mt-10">
        <img src="/assets/security.png" alt="security" className="w-[140px] h-[140px]" />
        <h4 className="headline-large">Security, <br /> Monitoring & Alerting</h4>
        <p className="label-large text-left">
          Reducing risk with physical, highly renowned, Hardware Security Module. Monitoring and alerting 24/7 with a home-made overlay to meet our most demanding monitoring and analysis needs.
        </p>
      </div>
      <div className="md:max-w-[190px] md:mt-[80px] md:ml-auto mr-5 mt-10">
        <img src="/assets/gigs.png" alt="gigs" className="w-[150px] h-[150px]" />
        <h4 className="headline-large">Engineering</h4>
        <p className="label-large text-left">
          Benefit from the experience of 2 Data Engineers specialized in DataScience and DevOps who have worked for large international companies.
        </p>
      </div>
      <div className="md:max-w-[265px] md:ml-[120px] md:mt-[110px] mt-10">
        <img src="/assets/servers.png" alt="servers" className="w-[150px] h-[150px]" />
        <h4 className="headline-large">Entreprise-grade infrastructure</h4>
        <p className="label-large text-left md:mt-5">
          We have developed and adapted modules initially used in Big Data for our fully customized infrastructure service.<br /> The latest technologies in terms of high availability, security and efficiency are naturally present in our system on Tier 3+ provider to ensure a close 100% uptime.
        </p>
      </div>
    </div>
  </section>
}

export default InfraSection
