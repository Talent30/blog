import { useState, useEffect } from 'react';
import { format } from 'date-fns';

type SeriesCode = 'CPIUS' | 'CONFUS' | 'RETAUS' | 'SENTUS' | 'POPUS';

function useEconDatabaseData<T>(
  seriesCode: SeriesCode,
  fromDate: Date,
  toDate: Date,
) {
  const [data, setData] = useState<T | undefined>();
  useEffect(() => {
    let ignore = false;

    // Format tge date to meet the api requirement
    const formatFromDate = format(fromDate, 'yyyy-MM-dd');
    const formatToDate = format(toDate, 'yyyy-MM-dd');

    void fetch(
      `https://www.econdb.com/api/series/${seriesCode}/?from=${formatFromDate}&to=${formatToDate}&format=json`,
    )
      .then(async (response) => {
        if (response.ok) return response.json();
        throw new Error('Something went wrong');
      })
      .then((json) => {
        if (!ignore) {
          setData(json);
        }
      })
      .catch((error: unknown) => {
        console.log(error);
      });

    return () => {
      // Prevent race condition
      ignore = true;
    };
  }, [fromDate, seriesCode, toDate]);
  return data;
}

export { useEconDatabaseData };
