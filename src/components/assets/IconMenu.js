export const IconMenu = ({ displayHidden, hidden }) => {
  return (
    <>
      {hidden ? (
        <svg
          onClick={() => displayHidden()}
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 cursor-pointer md:hidden"
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
      ) : (
        <svg
          onClick={() => displayHidden()}
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 cursor-pointer md:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}
    </>
  );
};
