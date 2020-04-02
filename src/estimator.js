/*const data = fetch('data.js')
.then(res => res.json())
.then((data) => {
   data;
}).catch(err => console.error(err));*/

import data from './data.js'

const covid19ImpactEstimator = (data) =>{
    const {reportedCases} = data;
    //const currentlyInfected = reportedCases * 10;

    console.log(data);
};
covid19ImpactEstimator();
console.log(data);

export default covid19ImpactEstimator;
