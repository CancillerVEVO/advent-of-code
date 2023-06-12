import path from "path";
import { readFile } from "fs/promises";

const getData = async () => {
  const filePath = path.join(__dirname, "input.txt");
  const data = await readFile(filePath, "utf-8");
  return data;
};

const testSet = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

// Organizamos la lista en un arreglo
const convertToArray = (data: string) => {
  const numberGroups = data.split("\n\n");
  const formattedGroup = numberGroups.map((item) => {
    const groups = item.split("\n");
    return groups.map((groupItem) => Number(groupItem));
  });

  return formattedGroup;
};

const findGroupSum = (data: number[]) => {
  const groupSum = data.reduce((sum, num) => num + sum, 0);
  return groupSum;
};

const findBiggestThree = (data: number[]) => {
  const sortedData = [...data].sort((num1, num2) => num2 - num1);
  return sortedData.slice(0, 3);
};
const main = async () => {
  try {
    // FIRST PART
    const puzzleInput = await getData();
    const formatInput = convertToArray(puzzleInput);
    const groupSums = formatInput.map((item) => {
      const sum = findGroupSum(item);
      return sum;
    });

    console.log(`Question 1: ${Math.max(...groupSums)}`);
    //

    // SECOND PART
    const biggestThree = findBiggestThree(groupSums);
    const sumOfBiggestGroups = biggestThree.reduce((sum, num) => sum + num, 0);
    console.log(`Question 2: ${sumOfBiggestGroups}`);
    //
  } catch (error) {
    console.error(error);
  }
};

main();
