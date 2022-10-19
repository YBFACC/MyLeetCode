/**
 * 自己--模拟
 * @param students 
 * @param sandwiches 
 * @returns 
 */

function countStudents(students: number[], sandwiches: number[]): number {
  let sandwichesIndex = 0, studentsIndex = 0
  let endIndex = students.length, getSandwiches = false
  while (studentsIndex < students.length && sandwichesIndex < sandwiches.length) {
    if (studentsIndex === endIndex) {
      if (getSandwiches) {
        getSandwiches = false
        endIndex = students.length
      } else {
        break
      }
    }
    if (sandwiches[sandwichesIndex] === students[studentsIndex]) {
      sandwichesIndex++
      getSandwiches = true
    } else {
      const student = students[studentsIndex]
      students.push(student)
    }
    studentsIndex++
  }

  return students.length - endIndex
};

countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])
countStudents([1, 1, 0, 0], [0, 1, 0, 1])