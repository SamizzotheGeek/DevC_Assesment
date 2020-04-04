// import data from './data.js'

const covid19ImpactEstimator = (data) => {
  const reportedCases = data.reportedCases;
  let timeToElapse = data.timeToElapse;
  let periodType = data.periodType;
  let avgDailyIncomeInUSD = data.region.avgDailyIncomeInUSD;
  let avgDailyIncomePopulation = data.reportedCases.avgDailyIncomePopulation;
  let population = data.population;
  let totalHospitalBeds = data.totalHospitalBeds;

    //increment factor
    switch(timeToElapse){
        case periodType == 'days':
            timeToElapse = timeToElapse;
            factor = Math.pow(2, Math.floor((timeToElapse)/3));
            break;
        case periodType == 'weeks':
            timeToElapse = timeToElapse * 7;
            factor = Math.pow(2, Math.floor((timeToElapse)/3));
            break;
        case periodType == 'months':
            timeToElapse = timeToElapse * 30;
            factor = Math.pow(2, Math.floor((timeToElapse)/3));
            break;
        default:
            timeToElapse = 0;
            factor = Math.pow(2, Math.floor((timeToElapse)/3));
            break;
    };

   
    let output = {
        data:{data},
        impact:{
            currentlyInfected: reportedCases * 10,
            infectionsByRequestedTime: currentlyInfected * factor,
            severeCasesByRequestedTime : Math.floor(infectionsByRequestedTime * 0.15),
            hospitalBedsByRequestedTime : Math.floor((totalHospitalBeds * 0.35)) - severeCasesByRequesedtTime,
            casesForICUByRequestedTime : Math.floor(0.05 * infectionsByRequestedTime),
            casesForVentilatorsByRequestedTime : Math.floor(0.02 * infectionsByRequestedTime),
            dollarsInFlight : infectionsByRequestedTime * avgDailyIncomeInUSD * avgDailyIncomePopulation * timeToElapse,

        },
        severeImpact:{
            currentlyInfected: reportedCases * 50,
            infectionsByRequestedTime: currentlyInfected * factor,
            severeCasesByRequestedTime : Math.floor(infectionsByRequestedTime * 0.15),
            hospitalBedsByRequestedTime : Math.floor((totalHospitalBeds * 0.35)) - severeCasesByRequesedtTime,
            casesForICUByRequestedTime : Math.floor(0.05 * infectionsByRequestedTime),
            casesForVentilatorsByRequestedTime : Math.floor(0.02 * infectionsByRequestedTime),
            dollarsInFlight : infectionsByRequestedTime * avgDailyIncomeInUSD * avgDailyIncomePopulation * timeToElapse,
        }
    };
   
};



export default covid19ImpactEstimator;
