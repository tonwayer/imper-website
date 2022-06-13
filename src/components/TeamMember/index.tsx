import CircleIcon from '../CircleIcon';

type Props = {
  name: string;
  role: string;
  position: string;
  className?: string;
  github: string;
  linkedin: string;
  photo: string;
};

const TeamMember = (props: Props) => {
  return (
    <div
      className={`bg-[#65474D]/50 p-7 px-10 max-w-[300px] flex flex-col items-center rounded-2xl ${
        props.className ? props.className : ''
      }`}
    >
      <div className="min-w-[220px] min-h-[220px]">
        <img
          src={`/assets/${props.photo ?? 'default_avatar.svg'}`}
          alt="avatar"
          className="mx-auto"
        />
      </div>
      <p className="mt-4 title-large">{props.name}</p>
      <p>{props.role}</p>
      <p className="mt-8">{props.position}</p>
      <div className="w-full mt-10">
        <div className="flex justify-around mx-6">
          <a className="cursor-pointer" href={props.linkedin}>
            <CircleIcon
              icon="akar-icons:linkedin-fill"
              classNames="w-x-big h-x-big bg-[#2E2224]"
              fontSize="12px"
            />
          </a>
          <a className="cursor-pointer" href={props.github}>
            <CircleIcon
              icon="akar-icons:github-fill"
              classNames="w-x-big h-x-big bg-[#2E2224]"
              fontSize="12px"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
