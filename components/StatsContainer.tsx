import type { ApiResponse } from '@/types';
import {
  averageSentimentIndex,
  getSentimentIndexNetGrowth,
} from '@/utilities/calculate-helper';

type Properties = {
  sentusData: ApiResponse;
  popusData: ApiResponse;
};

function StatsContainer(properties: Properties) {
  const { sentusData, popusData } = properties;
  const averageIndex = averageSentimentIndex(sentusData.data.values);
  const netGrowth = getSentimentIndexNetGrowth(popusData.data.values);
  // If the value is greater than 0, color it green; else color it red.
  return (
    <div className="flex flex-col overflow-hidden bg-white px-5 py-4 shadow sm:mx-0 md:mx-0 md:rounded-md">
      <h2 className="text-lg font-medium text-slate-700">
        Average US sentiment index (SENTUS)
      </h2>
      <p
        className={`mt-1 text-3xl font-semibold tracking-tight text-slate-900 ${
          Number(averageIndex) > 0 ? 'text-green-400' : 'text-red-400'
        }`}
      >
        {averageIndex}
      </p>
      <h2 className="mt-10 text-lg font-medium text-slate-700">
        Population growth during the selected period (POPUS)
      </h2>
      <p className="mt-1 text-3xl font-semibold tracking-tight text-slate-900">
        {netGrowth}
      </p>
    </div>
  );
}

export { StatsContainer };
