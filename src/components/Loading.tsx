const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center">
        <svg
          className="animate-spin h-12 w-12 text-green-500 mb-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-20"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-80"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
        <span className="text-green-600 text-xl font-semibold tracking-wide">
          Please wait...
        </span>
        <p className="text-green-500 text-sm mt-1">
          We’re loading your content.
        </p>
      </div>
    </div>
  );
};

export default Loading;
