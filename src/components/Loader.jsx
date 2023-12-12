import { useTheme } from "../Config";

const Loader = ({ w, h, round }) => {
  const Light = useTheme();
  return (
    <div
      className={`w-[${w}] h-[550px] after:from-transparent after:to-transparent  loader relative bg-transparent  after:absolute after:inset-0 after:z-[20] after:bg-gradient-to-r ${
        Light
          ? " after:via-gray-300  bg-[#f2f2f2]"
          : " after:via-gray-600 bg-gray-800"
      } rounded-${round} overflow-hidden`}
    ></div>
  );
};

export default Loader;
