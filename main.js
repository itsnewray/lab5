console.log("hello, world")
///// the dataset created in spreadsheet
let dataset = [
    [6, 6, 50, 96],
    [2, 5, 81, 50],
    [10, 4, 49, 90],
    [4, 5, 97, 99],
    [4, 8, 58, 69],
    [3, 5, 61, 63],
    [2, 7, 74, 84],
    [8, 6, 90, 71],
    [4, 4, 45, 64],
    [9, 5, 69, 90],
    [5, 3, 59, 81],
    [1, 3, 69, 71],
    [10, 10, 92, 77],
    [8, 9, 80, 75],
    [6, 7, 62, 60],
    [10, 6, 52, 89],
    [9, 9, 69, 60],
    [2, 7, 95, 43],
    [8, 6, 64, 91],
    [5, 8, 81, 48],
    [3, 4, 63, 68],
    [5, 9, 94, 77],
    [3, 5, 97, 59],
    [2, 2, 99, 50],
    [10, 5, 77, 74],
    [10, 9, 80, 57],
    [2, 1, 69, 89],
    [5, 7, 78, 79],
    [6, 9, 78, 60],
    [1, 2, 64, 81],
  ];
  
  //// array of column  values
  let column_1 = dataset.map(row => row[0]);
  
  let column_2 = dataset.map(row => row[1]);
  
  let column_3 = dataset.map(row => row[2]);
  
  let column_4 = dataset.map(row => row[3]);
  
  //// sum of each column
  let sum_1 = column_1.reduce((a, b) => a + b, 0);
  let sum_2 = column_2.reduce((a, b) => a + b, 0);
  let sum_3 = column_3.reduce((a, b) => a + b, 0);
  let sum_4 = column_4.reduce((a, b) => a + b, 0);
  
  /////array of the column sums
  let sums = [sum_1, sum_2, sum_3, sum_4];
  
  // Compute the total score
  let total_score = sums.reduce((a, b) => a + b, 0);
  
  ///// results object
  const results = {
    col1: column_1,
    col2: column_2,
    col3: column_3,
    col4: column_4,
    sums: sums,
    total_score: total_score,
  };
  
  // Output 
  console.log(results);
  
