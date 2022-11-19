import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { buildData, configureOptions } from '@/utilities/chart-helper';
import type { ChartProperties } from '@/types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

function BarChart({ dates, values, label, title }: ChartProperties) {
  const data = buildData(dates, values, label);
  const options = configureOptions(title);
  return (
    <section className="relative flex h-72 content-center justify-center bg-white px-5 py-4 shadow md:h-96 md:rounded-md">
      <Bar data={data} options={options} />
    </section>
  );
}

export { BarChart };
