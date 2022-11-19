// Format number
const numberFromater = new Intl.NumberFormat('en', {
  style: 'decimal',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

function averageSentimentIndex(values: number[]) {
  // Get Average US sentiment index (series name “SENTUS”) for the selected period.
  const avarage =
    values.reduce((accumulator, current) => accumulator + current) /
    values.length;
  return numberFromater.format(avarage);
}

function getSentimentIndexNetGrowth(values: number[]) {
  // Ending date population - starting date population
  // Handle edge case
  const netGrowth = (values.at(-1) ?? 0) - (values.at(0) ?? 0);
  return numberFromater.format(netGrowth);
}

export { averageSentimentIndex, getSentimentIndexNetGrowth };
