/* eslint-disable linebreak-style */
const covid19ImpactEstimator = (data) => {
  const { reportedCases } = { data } || 0;
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
      get infectionsByRequestedTime() { return this.currentlyInfected * factor; },
      get severeCasesByRequestedTime() {
        return Math.floor(this.infectionsByRequestedTime * 0.15);
      },
      get hospitalBedsByRequestedTime() {
        return Math.floor((totalHospitalBeds * 0.35))
      - this.severeCasesByRequesedtTime;
      },
      get casesForICUByRequestedTime() {
        return Math.floor(0.05 * this.infectionsByRequestedTime);
      },
      get casesForVentilatorsByRequestedTime() {
        return Math.floor(0.02 * this.infectionsByRequestedTime);
      },
      get dollarsInFlight() {
        return this.infectionsByRequestedTime * avgDailyIncomeInUSD
      * avgDailyIncomePopulation * timeToElapse;
      }

    },
    severeImpact: {
      currentlyInfected: reportedCases * 50,
      get infectionsByRequestedTime() { return this.currentlyInfected * factor; },
      get severeCasesByRequestedTime() {
        return Math.floor(this.infectionsByRequestedTime * 0.15);
      },
      get hospitalBedsByRequestedTime() {
        return Math.floor((totalHospitalBeds * 0.35))
      - this.severeCasesByRequesedtTime;
      },
      get casesForICUByRequestedTime() {
        return Math.floor(0.05 * this.infectionsByRequestedTime);
      },
      get casesForVentilatorsByRequestedTime() {
        return Math.floor(0.02 * this.infectionsByRequestedTime);
      },
      get dollarsInFlight() {
        return this.infectionsByRequestedTime * avgDailyIncomeInUSD
      * avgDailyIncomePopulation * timeToElapse;
      }
    }
  };
};


export default covid19ImpactEstimator;
