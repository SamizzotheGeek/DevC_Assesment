/* eslint-disable linebreak-style */
const covid19ImpactEstimator = (data) => {
  const reportedCases = { data };
  let { timeToElapse } = { data: timeToElapse };
  const periodType = { data: periodType };
  const avgDailyIncomeInUSD = { data: region.avgDailyIncomeInUSD };
  const avgDailyIncomePopulation = { data: reportedCases.avgDailyIncomePopulation };
  const population = { data: population };
  const totalHospitalBeds = { data: totalHospitalBeds };
  let factor;

  // increment factor
  switch (timeToElapse) {
    case periodType === 'days':
      factor = 2 ** Math.floor((timeToElapse) / 3);
      break;
    case periodType == 'weeks':
      timeToElapse *= 7;
      factor = 2 ** Math.floor((timeToElapse) / 3);
      break;
    case periodType == 'months':
      timeToElapse *= 30;
      factor = 2 ** Math.floor((timeToElapse) / 3);
      break;
    default:
      timeToElapse = 0;
      factor = 2 ** Math.floor((timeToElapse) / 3);
      break;
  }
  const output = {
    data: { data },
    impact: {
      currentlyInfected: reportedCases * 10,
      infectionsByRequestedTime: currentlyInfected * factor,
      severeCasesByRequestedTime: Math.floor(infectionsByRequestedTime * 0.15),
      hospitalBedsByRequestedTime: Math.floor((totalHospitalBeds * 0.35)) - severeCasesByRequesedtTime,
      casesForICUByRequestedTime: Math.floor(0.05 * infectionsByRequestedTime),
      casesForVentilatorsByRequestedTime: Math.floor(0.02 * infectionsByRequestedTime),
      dollarsInFlight: infectionsByRequestedTime * avgDailyIncomeInUSD * avgDailyIncomePopulation * timeToElapse

    },
    severeImpact: {
      currentlyInfected: reportedCases * 50,
      infectionsByRequestedTime: currentlyInfected * factor,
      severeCasesByRequestedTime: Math.floor(infectionsByRequestedTime * 0.15),
      hospitalBedsByRequestedTime: Math.floor((totalHospitalBeds * 0.35)) - severeCasesByRequesedtTime,
      casesForICUByRequestedTime: Math.floor(0.05 * infectionsByRequestedTime),
      casesForVentilatorsByRequestedTime: Math.floor(0.02 * infectionsByRequestedTime),
      dollarsInFlight: infectionsByRequestedTime * avgDailyIncomeInUSD * avgDailyIncomePopulation * timeToElapse
    }
  };
};


export default covid19ImpactEstimator;
