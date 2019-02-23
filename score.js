const outputs = [];

const k = 4;

function onScoreUpdate(dropPosition, ballBounciness, ballSize, bucketLabel) {
  // Ran every time a balls drops into a bucket

  outputs.push([dropPosition, ballBounciness, ballSize, bucketLabel]);
}

function distance(point, predictionPoint) {
  return Math.abs(point - predictionPoint);
}

function Knn(data, predictionPoint) {
  return _.chain(data)
    .map(row => [distance(row[0], predictionPoint), row[3]])
    .sortBy(row => row[0])
    .slice(0, k)
    .countBy(row => row[1])
    .toPairs()
    .sortBy(row => row[1])
    .last()
    .first()
    .parseInt()
    .value();
}

function runAnalysis() {
  //  code here to predict the chance of ball falling into bucket
  // const bucket =
}

//Spliting the data into two different sets
//1)Training Set
//2) and Test Set

function splitDataSet(data, testCount) {
  const shuffled = _.shuffle(data);

  const testSet = _.slice(shuffled, 0, testCount);
  const trainingSet = _.slice(shuffled, testCount);

  return [testSet, trainingSet];
}
