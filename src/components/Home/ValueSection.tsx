import CornerBorderDiv from "../CornerBorderDiv"

const ValueSection = () => {

  return <section className="mt-[230px]">
    <div className="md:px-[150px]">
      <div className="md:flex justify-between">
        <div className="bg-[#65474D]/50 rounded-2xl p-7 md:max-w-[280px] md:mt-[145px] md:ml-16">
          <h3 className="text-[32px] font-spaceGrotesk">Dream Big.</h3>
          <p className="mt-4 label-large">
            We think big, take smart risks, and do things that have never been done before. We are not afraid to make tough choices that align with our long-term objectives. We know that it always seems impossible until it’s done
          </p>
        </div>
        <div>
          <CornerBorderDiv className="right-top-corner left-bottom-corner p-8 max-w-[360px]">
            <h4 className="font-bold text-md text-primary-500 font-inter mb-2">
              This is
            </h4>
            <h3 className="font-bold text-[45px] leading-[64px] mb-2 text-center md:text-left">
              Our values
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum
            </p>
          </CornerBorderDiv>
        </div>
      </div>
      <div className="md:flex justify-between md:mt-6 md:ml-12">
        <div className="bg-[#65474D]/50 rounded-2xl p-7 md:max-w-[290px] md:mr-[80px] md:mt-[80px]">
          <h3 className="text-[32px] font-spaceGrotesk">Stay Determined.</h3>
          <p className="mt-4 label-large">
            We never give up, carry each other through hard times, and recognise grit in our colleagues. We understand that building a world-changing company is a monumental task, but we love every minute of it We celebrate milestones together, recharge, and get back to work
          </p>
        </div>
        <div>
          <div className="bg-[#65474D]/50 rounded-2xl p-7 mx-auto">
            <h3 className="text-[32px] font-spaceGrotesk">Take Ownership and Be Decisive.</h3>
            <p className="mt-4 label-large">
              We think big, take smart risks, and do things that have never been done before. We are not afraid to make tough choices that align with our long-term objectives. We are all empowered to take initiative, make the right decisions, and act as owners. We are committed to protecting our company culture and seek to bring in the best people we’ve ever worked with. We aim to surprise and inspire with the quality and speed of our decision-making
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default ValueSection
