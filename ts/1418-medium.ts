/*
 * @lc app=leetcode.cn id=1418 lang=typescript
 *
 * [1418] 点菜展示表
 */

//自己--hash表统计
//按餐桌号统计上了什么菜，就是写的麻烦

// @lc code=start
function displayTable(orders: string[][]): string[][] {
  const foodSet: Set<string> = new Set(), tableSet: Set<string> = new Set()
  for (const [customerName, tableNumber, foodItem] of orders) {
    foodSet.add(foodItem)
    tableSet.add(tableNumber)
  }
  const foodList: string[] = [...foodSet], tableList: string[] = [...tableSet]
  foodList.sort()
  tableList.sort((a, b) => (+a) - (+b))
  const foodMap = new Map(), tableMap = new Map()
  for (let i = 0; i < foodList.length; i++) {
    foodMap.set(foodList[i], i + 1)
  }
  for (let i = 0; i < tableList.length; i++) {
    tableMap.set(tableList[i], i + 1)
  }
  const res = [['Table', ...foodList]]

  for (let i = 0; i < tableList.length; i++) {
    const floor = Array.from({ length: foodList.length + 1 }, () => '0')
    floor[0] = tableList[i]
    res.push(floor)
  }

  for (const [customerName, tableNumber, foodItem] of orders) {
    const indexTable = tableMap.get(tableNumber), indexFood = foodMap.get(foodItem)
    res[indexTable][indexFood] = +res[indexTable][indexFood] + 1 + ''
  }

  return res
};
// @lc code=end

displayTable([["Laura", "2", "Bean Burrito"], ["Jhon", "2", "Beef Burrito"], ["Melissa", "2", "Soda"]])

displayTable([["James", "12", "Fried Chicken"], ["Ratesh", "12", "Fried Chicken"], ["Amadeus", "12", "Fried Chicken"], ["Adam", "1", "Canadian Waffles"], ["Brianna", "1", "Canadian Waffles"]])

displayTable([["David", "3", "Ceviche"], ["Corina", "10", "Beef Burrito"], ["David", "3", "Fried Chicken"], ["Carla", "5", "Water"], ["Carla", "5", "Ceviche"], ["Rous", "3", "Ceviche"]])