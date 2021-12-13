/*
 * @Author: yubingfeng
 * @Date: 2021-12-13 15:56:08
 * @LastEditors: yubingfeng
 * @LastEditTime: 2021-12-13 18:00:28
 * @Description: 自己--预处理+二分
 * todo--ts的类型错误
 */
import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree, Trie, NumberOfTrailingZeros, LinkedEdge } from 'lc-tool';
interface obj {
  [index: number]: number,
  [key: string]: number
}
class TopVotedCandidate {
  times: number[]
  personList: obj[]
  constructor(persons: number[], times: number[]) {
    this.times = times;
    this.personList = [];
    let obj = {
      max: 1,
      lastMax: persons[0],
    };
    obj[persons[0]] = 1;
    this.personList.push(obj);
    for (let i = 1; i < persons.length; i++) {
      const temp = Object.assign({}, this.personList[this.personList.length - 1]);
      if (!temp[persons[i]]) {
        temp[persons[i]] = 1;
      } else {
        temp[persons[i]]++;
      }
      if (temp[persons[i]] >= temp.max) {
        temp.max = temp[persons[i]];
        temp.lastMax = persons[i];
      }
      this.personList.push(temp);
    }

    return this;
  }

  q(t: number): number {
    const index = this.search(t);
    return this.personList[index].lastMax;
  }
  search(target: number): number {
    const nums = this.times;
    let left = 0,
      right = nums.length - 1;
    while (left <= right) {
      const mid = left + ((right - left) >> 1);
      if (nums[mid] == target) {
        return mid;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else if (nums[mid] > target) {
        right = mid - 1;
      }
    }
    return right;
  }
}

const topVotedCandidate = new TopVotedCandidate([0, 1, 1, 0, 0, 1, 0], [0, 5, 10, 15, 20, 25, 30]);

topVotedCandidate.q(15);
