const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="relative">
        {/* Outer circle */}
        <div className="w-12 h-12 rounded-full border-4 border-primary/30 animate-spin">
          {/* Inner gradient */}
          <div className="absolute top-0 left-0 w-12 h-12 rounded-full border-4 border-transparent border-t-primary animate-spin"></div>
        </div>
        {/* Loading text */}
        <div className="mt-4 text-center text-primary/80 font-medium">Loading...</div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
