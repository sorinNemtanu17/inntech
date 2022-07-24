export const IconMenu = ({ displayHidden }) => {
  return (
    <svg
      onClick={() => displayHidden()}
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 ml-auto cursor-pointer"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
};
