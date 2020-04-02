//import data from './data.js'

const covid19ImpactEstimator = (data) => {
    let reportedCases = 10;
    reportedCases = reportedCases || 0;
   
    let output = {
        data:{data},
        impact:{
            currentlyInfected: reportedCases * 10,
            infectionsByRequestedTime = currentlyInfected

        },
        severeImpact:{
            currentlyInfected: reportedCases * 50,
        }
    };
    console.log(output.impact.currentlyInfected);
};
covid19ImpactEstimator();


export default covid19ImpactEstimator;
