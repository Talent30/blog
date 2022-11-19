import { type ChartOptions } from 'chart.js';

const baseDatasetConfig = {
  tension: 0.5,
  pointHoverRadius: 4,
};
// Purpose of this is to help setting up the chart components quickly
function buildData(
  dates: string[],
  data: number[],
  label: string,
  scale?: number,
) {
  const datasets =
    // If scale value is 1 don't render extra line
    scale && scale > 1
      ? [
          {
            label,
            data,
            borderColor: '#fb923c',
            backgroundColor: '#fb923c',
            ...baseDatasetConfig,
          },
          {
            label: `Scaled ${label}`,
            data: data.map((element) => element * scale),
            borderColor: '#38bdf8',
            backgroundColor: '#38bdf8',
            ...baseDatasetConfig,
          },
        ]
      : [
          {
            label,
            data,
            borderColor: '#fb923c',
            backgroundColor: '#fb923c',
            ...baseDatasetConfig,
          },
        ];

  return {
    labels: dates,
    datasets,
  };
}

function configureOptions(title: string): ChartOptions<'line' | 'bar'> {
  const config = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: title,
        color: '#334155',
        padding: { bottom: 10 },
        font: { size: 18, weight: '500' },
      },
    },
    backgroundColor: '#e5e7eb',
    scales: {
      y: {
        beginAtZero: false,
        border: {
          dash: [5, 5],
        },
      },
      x: {
        grid: {
          display: false,
          circular: true,
          color: '#e5e7eb',
        },
      },
    },
  };

  return config;
}

export { configureOptions, buildData };
