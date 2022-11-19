import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
} from 'chart.js';
import { buildData, configureOptions } from '@/utilities/chart-helper';
import type { ChartProperties } from '@/types';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  CategoryScale,
);

function LineChart({ dates, values, label, title, scale }: ChartProperties) {
  const data = buildData(dates, values, label, scale);
  const options = configureOptions(title);

  return (
    <section className="relative flex h-72 content-center justify-center bg-white px-5 py-4 shadow md:h-96 md:rounded-md">
      <Line data={data} options={options} />
    </section>
  );
}

export { LineChart };
