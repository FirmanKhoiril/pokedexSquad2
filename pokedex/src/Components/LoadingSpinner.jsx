const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="relative w-16 h-16 animate-spin">
        <div className="absolute inset-0 rounded-full bg-red-500 border-4 border-black"></div>
        <div className="absolute inset-0 rounded-full bg-white border-b-8 border-black"></div>
        <div className="absolute inset-2 rounded-full bg-black"></div>
        <div className="absolute inset-[10px] rounded-full bg-white"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
