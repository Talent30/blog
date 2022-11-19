import Head from 'next/head';
import { LayoutContainer } from '@/components/LayoutContainer';
import type { ReactElement } from 'react';
import { useTransition, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useEconDatabaseData } from '@/hooks/use-data';
import {
  StatsContainer,
  LineChart,
  RangeSlider,
  BarChart,
  LoadingContainer,
} from '@/components';
import type { ApiResponse } from '@/types';
import { addMonths } from 'date-fns';

function Home() {
  const [startDate, setStartDate] = useState(new Date(2015, 0));
  const [endDate, setEndDate] = useState(new Date(2021, 0));
  const [scaleValue, setScaleValue] = useState(1);
  const [rangeValue, setRangeValue] = useState(1);
  const [_isPending, startTransition] = useTransition();

  const scaleHandler = (value: number) => {
    // React concurrent make sure slider gets first response
    setRangeValue(value);
    startTransition(() => {
      setScaleValue(value);
    });
  };

  /* Not sure if SWR or Query counts as a state management lib using a typed custom data fetching hook */
  const cpiusData = useEconDatabaseData<ApiResponse>(
    'CPIUS',
    startDate,
    endDate,
  );
  const confusData = useEconDatabaseData<ApiResponse>(
    'CONFUS',
    startDate,
    endDate,
  );
  const retausData = useEconDatabaseData<ApiResponse>(
    'RETAUS',
    startDate,
    endDate,
  );

  const sentusData = useEconDatabaseData<ApiResponse>(
    'SENTUS',
    startDate,
    endDate,
  );

  const popusData = useEconDatabaseData<ApiResponse>(
    'POPUS',
    startDate,
    endDate,
  );

  useEffect(() => {
    // Make sure the start date end date range is correct
    if (startDate >= endDate) setEndDate(addMonths(startDate, 1));
  }, [startDate]);

  useEffect(() => {
    // Make sure the start date end date range is correct
    if (endDate <= startDate) setStartDate(addMonths(endDate, -1));
  }, [endDate]);

  return (
    <>
      <Head>
        <title>Economic Dashboard</title>
        <meta name="description" content="PwC Technical assessment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="divide-y divide-gray-200 overflow-hidden">
        <span className="grid content-center gap-8 py-6 sm:px-6 md:grid-cols-4 md:justify-center">
          <div className="col-span-1 inline-grid content-center justify-center">
            <h1 className="text-2xl font-semibold text-slate-800">
              Economic Dashboard
            </h1>
          </div>
          <div className="col-span-1">
            {/* Hi, PwC team I was trying to implement the browser build in date picker however the type=month is not fully supported by all the browsers :( */}
            <label htmlFor="From">From</label>
            <DatePicker
              showMonthYearPicker
              selectsStart
              ariaLabelledBy="From"
              selected={startDate}
              startDate={startDate}
              endDate={endDate}
              dateFormat="MM/yyyy"
              nextYearButtonLabel=">"
              previousYearButtonLabel="<"
              popperClassName="react-datepicker-bottom"
              onChange={(date) => {
                setStartDate(date ?? new Date(2015, 0));
              }}
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="To">To</label>
            <DatePicker
              showMonthYearPicker
              selectsEnd
              ariaLabelledBy="To"
              selected={endDate}
              startDate={startDate}
              endDate={endDate}
              dateFormat="MM/yyyy"
              nextYearButtonLabel=">"
              previousYearButtonLabel="<"
              popperClassName="react-datepicker-bottom"
              onChange={(date) => {
                setEndDate(date ?? new Date(2021, 0));
              }}
            />
          </div>
          <div className="col-span-1 flex flex-col">
            <RangeSlider value={rangeValue} setRangevalue={scaleHandler} />
          </div>
        </span>
      </div>
      <div className="-mx-4 mt-10 grid space-y-4 md:grid-cols-2 md:gap-6 md:space-y-0">
        {cpiusData ? (
          <LineChart
            title="CPIUS - United States - Consumer price index
            "
            dates={cpiusData.data.dates}
            values={cpiusData.data.values}
            label="CPIUS"
            scale={scaleValue}
          />
        ) : (
          <LoadingContainer />
        )}

        {confusData ? (
          <LineChart
            title="CONFUS - United States - Consumer confidence index"
            dates={confusData.data.dates}
            values={confusData.data.values}
            label="CONFUS"
            scale={scaleValue}
          />
        ) : (
          <LoadingContainer />
        )}

        {retausData ? (
          <BarChart
            title="RETAUS - United States - Consumer confidence index"
            dates={retausData.data.dates}
            values={retausData.data.values}
            label="RETAUS"
          />
        ) : (
          <LoadingContainer />
        )}
        {sentusData && popusData ? (
          <StatsContainer sentusData={sentusData} popusData={popusData} />
        ) : (
          <LoadingContainer />
        )}
      </div>
    </>
  );
}

Home.getLayout = (page: ReactElement) => {
  return <LayoutContainer>{page}</LayoutContainer>;
};

export default Home;
