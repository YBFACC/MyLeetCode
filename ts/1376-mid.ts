
/**
 * 自己--广搜记录时间
 * @param n 
 * @param headID 
 * @param manager 
 * @param informTime 
 * @returns 
 */
function numOfMinutes(n: number, headID: number, manager: number[], informTime: number[]): number {

  const managerMap = new Map<number, number[]>();
  for (let i = 0; i < n; i++) {
    const managerID = manager[i];
    if (!managerMap.has(managerID)) managerMap.set(managerID, [])
    managerMap.get(managerID)?.push(i);
  }
  const timelist: number[] = []
  timelist[headID] = informTime[headID]

  let bfs = [headID]
  while (bfs.length > 0) {
    let size = bfs.length
    while (size-- > 0) {
      let curr = bfs.shift() as number
      if (!managerMap.has(curr)) break
      const childList = managerMap.get(curr) as number[]
      for (const child of childList) {
        timelist[child] = informTime[child] + timelist[curr]
        bfs.push(child)
      }
    }
  }

  console.log(Math.max(...timelist))
  return Math.max(...timelist)
};

numOfMinutes(1, 0, [-1], [0])
numOfMinutes(6, 2, [2, 2, -1, 2, 2, 2], [0, 0, 1, 0, 0, 0])