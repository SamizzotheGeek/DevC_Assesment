/* eslint-disable linebreak-style */
const covid19ImpactEstimator = (data) => {
  const { reportedCases } = { data };
  let { timeToElapse } = { data };
  const periodType = { data };
  const avgDailyIncomeInUSD = { data };
  const avgDailyIncomePopulation = { data };
  const totalHospitalBeds = { data };
  let factor;

  // increment factor
  switch (timeToElapse) {
    case periodType === 'days':
      factor = 2 ** Math.floor((timeToElapse) / 3);
      break;
    case periodType === 'weeks':
      timeToElapse *= 7;
      factor = 2 ** Math.floor((timeToElapse) / 3);
      break;
    case periodType === 'months':
      timeToElapse *= 30;
      factor = 2 ** Math.floor((timeToElapse) / 3);
      break;
    default:
      timeToElapse = 0;
      factor = 2 ** Math.floor((timeToElapse) / 3);
      break;
  }
  return {
    data: { data },
    impact: {
      currentlyInfected: reportedCases * 10,
      infectionsByRequestedTime: this.currentlyInfected * factor,
      severeCasesByRequestedTime: Math.floor(this.infectionsByRequestedTime * 0.15),
      hospitalBedsByRequestedTime: Math.floor((totalHospitalBeds * 0.35))
      - this.severeCasesByRequesedtTime,
      casesForICUByRequestedTime: Math.floor(0.05 * this.infectionsByRequestedTime),
      casesForVentilatorsByRequestedTime: Math.floor(0.02 * this.infectionsByRequestedTime),
      dollarsInFlight: this.infectionsByRequestedTime * avgDailyIncomeInUSD
      * avgDailyIncomePopulation * timeToElapse

    },
    severeImpact: {
      currentlyInfected: reportedCases * 50,
      infectionsByRequestedTime: this.currentlyInfected * factor,
      severeCasesByRequestedTime: Math.floor(this.infectionsByRequestedTime * 0.15),
      hospitalBedsByRequestedTime: Math.floor((totalHospitalBeds * 0.35))
      - this.severeCasesByRequesedtTime,
      casesForICUByRequestedTime: Math.floor(0.05 * this.infectionsByRequestedTime),
      casesForVentilatorsByRequestedTime: Math.floor(0.02 * this.infectionsByRequestedTime),
      dollarsInFlight: this.infectionsByRequestedTime * avgDailyIncomeInUSD
      * avgDailyIncomePopulation * timeToElapse
    }
  };
};


export default covid19ImpactEstimator;
