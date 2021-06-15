/*
 * @lc app=leetcode.cn id=690 lang=typescript
 *
 * [690] 员工的重要性
 */

// @lc code=start


class Employee {
  id: number
  importance: number
  subordinates: number[]
  constructor(id: number, importance: number, subordinates: number[]) {
    this.id = (id === undefined) ? 0 : id;
    this.importance = (importance === undefined) ? 0 : importance;
    this.subordinates = (subordinates === undefined) ? [] : subordinates;
  }
}

function getImportance(employees: Employee[], id: number): number {
  const map: Map<number, Employee> = new Map()
  for (const emp of employees) {
    map.set(emp.id, emp)
  }
  let res = 0
  let bfs = [id]
  while (bfs.length > 0) {
    let size = bfs.length
    while (size-- > 0) {
      let index = bfs.shift() as number
      const item = map.get(index) as Employee
      res += item.importance
      bfs.push(...item.subordinates)
    }
  }
  return res
};


// function GetImportance(employees, id) {
// 	const map = new Map()
// 	for (const emp of employees) {
// 		map.set(emp.id, emp)
// 	}
// 	let res = 0
// 	let bfs = [id]
// 	while (bfs.length > 0) {
// 		let size = bfs.length
// 		while (size-- > 0) {
// 			let index = bfs.shift()
// 			const item = map.get(index)
// 			res += item.importance
// 			bfs.push(...item.subordinates)
// 		}
// 	}
// 	return res
// }


// @lc code=end

