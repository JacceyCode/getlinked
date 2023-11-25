/* eslint-disable react/prop-types */
function Button({ children }) {
  return (
    <button className="w-44 rounded-[.25rem] bg-gradient-to-l from-primary from-0% via-secondary  via-[48.42%] to-gradient2 to-90% px-12 py-4 text-base text-white">
      {children}
    </button>
  );
}

export default Button;
