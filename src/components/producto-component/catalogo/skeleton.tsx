export const CatalagoSkeleton = () => {
  return (
    <div className="animate-pulse px-8">
      <div className="bg-gray-300 h-10 rounded-full w-96"></div>
      <div className="flex gap-10 container mx-auto mt-5">
        <div className="w-96 rounded-2xl bg-gray-300"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          <div className="h-72 w-60 rounded-2xl bg-gray-300"></div>
          <div className="h-full w-full rounded-2xl bg-gray-300"></div>
          <div className="h-full w-full rounded-2xl bg-gray-300"></div>
          <div className="h-full w-full rounded-2xl bg-gray-300"></div>
          <div className="h-72 w-60 rounded-2xl bg-gray-300"></div>
          <div className="h-full w-full rounded-2xl bg-gray-300"></div>
          <div className="h-full w-full rounded-2xl bg-gray-300"></div>
          <div className="h-full w-full rounded-2xl bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};
