import { BallCanvas } from ".";
import { technologies } from "../constants";
import { SectionWrapper } from "./hoc";

const Tech = () => {
  return (
    <div className="flex flex-wrap flex-row justify-center gap-10">
      {technologies.map((technology, index) => (
        <div className="w-28 h-28" key={index}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

const Wrapper = SectionWrapper({ Component: Tech, idName: "" });
export default Wrapper;
