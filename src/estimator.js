import data from './data.js'
//let {data} = {data};
const covid19ImpactEstimator = (data) =>{
    const {reportedCases} = data;
    const currentlyInfected = reportedCases * 10;

    console.log(data);
};
covid19ImpactEstimator();
//console.log(data);

export default covid19ImpactEstimator;
