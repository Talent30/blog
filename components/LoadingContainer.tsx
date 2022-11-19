// Skeleton for loading
function LoadingContainer() {
  return (
    <div
      role="status"
      className="animate-pulse rounded border border-gray-200 bg-white p-4 shadow md:p-6"
    >
      <div className="mb-2.5 h-2.5 w-32 rounded-full bg-gray-200" />
      <div className="mb-10 h-2 w-48 rounded-full bg-gray-200" />
      <div className="mt-4 flex items-baseline space-x-6">
        <div className="h-52 w-full rounded-t-lg bg-gray-200" />
        <div className="h-36 w-full rounded-t-lg bg-gray-200" />
        <div className="h-52 w-full rounded-t-lg bg-gray-200" />
        <div className="h-44 w-full rounded-t-lg bg-gray-200" />
        <div className="h-60 w-full rounded-t-lg bg-gray-200" />
        <div className="h-52 w-full rounded-t-lg bg-gray-200" />
        <div className="h-60 w-full rounded-t-lg bg-gray-200" />
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export { LoadingContainer };
