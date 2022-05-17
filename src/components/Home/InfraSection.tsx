import CornerBorderDiv from "../CornerBorderDiv"

const InfraSection = () => {

  return <section className="mt-[320px]">
    <div className="md:grid md:grid-cols-2 gap-36">
      <CornerBorderDiv className="left-top-corner right-bottom-corner p-8 max-w-[360px] ml-auto">
        <h4 className="font-bold text-md text-primary-500 font-inter mb-2">
          We provide reliable infrastructure for next generation technologies
        </h4>
        <h3 className="font-bold text-[45px] leading-[64px] mb-2 text-center md:text-left">
          Infrastructure
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum
        </p>
      </CornerBorderDiv>
      <div className="max-w-[340px] md:mt-[85px]">
        <img src="/assets/security.png" alt="security" className="w-[150px] h-[150px]" />
        <h4 className="font-spaceGrotesk text-[32px]">Security, <br /> Monitoring & Alerting</h4>
        <p className="font-inter text-imperGrey">
          Reducing risk with physical, highly renowned, Hardware Security Module. Monitoring and alerting 24/7 with a home-made overlay to meet our most demanding monitoring and analysis needs.
        </p>
      </div>
      <div className="max-w-[340px] ml-auto">
        <img src="/assets/gigs.png" alt="gigs" className="w-[150px] h-[150px]" />
        <h4 className="font-spaceGrotesk text-[32px]">Engeering</h4>
        <p className="font-inter text-imperGrey">
        Benefit from the experience of 2 Data Engineers specialized in DataScience and DevOps who have worked for large international companies.
        </p>
      </div>
      <div className="max-w-[340px] md:mt-12">
        <img src="/assets/servers.png" alt="servers" className="w-[150px] h-[150px]" />
        <h4 className="font-spaceGrotesk text-[32px]">Entreprise-grade infrastructure</h4>
        <p className="font-inter text-imperGrey">
        We have developed and adapted modules initially used in Big Data for our fully customized infrastructure service.<br /> The latest technologies in terms of high availability, security and efficiency are naturally present in our system on Tier 3+ provider to ensure a close 100% uptime.
        </p>
      </div>
    </div>
  </section>
}

export default InfraSection
