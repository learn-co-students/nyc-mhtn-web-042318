const getCostFromUser = cost => parseInt(cost)
const addProcessingFeeToCost = cost => cost + 1
const addShippingFeeToTotalCost = totalCost => totalCost + 2
const returnCostToUser = totalCost => `The total cost is ${totalCost}`


//returnCostToUser(addShippingFeeToTotalCost(addProcessingFeeToCost(getCostFromUser('12'))))


const combineFs = (...fns) => (fnArg) => fns.reduce( (fnArg,fn) => fn(fnArg) , fnArg )

const getCostFromUserAndCalculateTotalCost = combineFs(getCostFromUser,addProcessingFeeToCost,addShippingFeeToTotalCost,returnCostToUser)

console.log(getCostFromUserAndCalculateTotalCost('12'))