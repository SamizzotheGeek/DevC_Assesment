import data from './data.js'

const covid19ImpactEstimator = (data) =>{
    let reportedCases;
    reportedCases = reportedCases || 0;
    const currentlyInfected = reportedCases * 10;

    console.log(reportedCases);

    return {
        impact:{
            currentlyInfected:currentlyInfected,
            
        },
        severeImpact:{

        }
    };
};
covid19ImpactEstimator(data);
//console.log(data);

export default covid19ImpactEstimator;
