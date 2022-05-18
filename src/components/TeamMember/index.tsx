import CircleIcon from "../CircleIcon"
type Props = {
  name: string,
  role: string,
  position: string,
  className?: string
}
const TeamMember = (props: Props) => {
  return <div className={`bg-[#65474D]/50 p-7 px-10 max-w-[300px] flex flex-col items-center rounded-2xl ${props.className ? props.className : ''}`}>
    <div>
      <img src="/assets/default_avatar.svg" alt="avatar" className="mx-auto" />
    </div>
    <p className="mt-4">{props.name}</p>
    <p>{props.role}</p>
    <p className="mt-8">{props.position}</p>
    <div className="w-full mt-8">
      <div className="flex justify-around">
        <CircleIcon icon="akar-icons:linkedin-fill" classNames="w-x-big h-x-big bg-[#2E2224]" fontSize="12px" />
        <CircleIcon icon="akar-icons:github-fill" classNames="w-x-big h-x-big bg-[#2E2224]" fontSize="12px" />
      </div>
    </div>
  </div>
}

export default TeamMember
