# 算法刷题代码仓库

使用的 js，ts 来进行刷题。
本地调试推荐 [lc-tool](https://github.com/YBFACC/lc-tool) ，方便调试。

## 堆

    * 1046-最后一块石头的重量-easy
    * 778水位上升的泳池中游泳-hard
    * 703-数据流中的第K大元素-easy
    * 480-滑动窗口中位数-hard(双堆--延迟删除)
    * LCP30-魔塔游戏-mid
    * 692-前K个高频单词-mid

### 优先队列

    * 973-最接近原点的-k-个点-mid
    * 871-最低加油次数-hard
    * 767-重构字符串-mid
    * 621-任务调度器-mid
    * 659-分割数组为连续子序列-mid
    * 1642-可以到达的最远建筑-mid
    * 826-安排工作以达到最大收益-mid
    * 870-优势洗牌-mid(解法2:二分查找)
    * 135-分发糖果-hard(贪心)


## 树

    * 1666-改变二叉树的根节点-mid
    * 331-验证二叉树的前序序列化-mid(出/入度)

### 平衡二叉搜索树

    * 975-奇偶跳-hard
    * 220-存在重复元素-iii-mid
    * 456-132-模式-mid
    * 493-翻转对-hard

### 最近公共祖先问题

    * 1257-最小公共区域-mid（不是树结构）
    * 1644-二叉树的最近公共祖先-II-mid
    * 1650-二叉树的最近公共祖先-III-mid
    * 1676-二叉树的最近公共祖先-IV-mid

### 先序

    * 1022-从根到叶的二进制数之和-easy
    * 1469-寻找所有的独生节点-easy
    * 545-二叉树的边界-mid
    * 1484-克隆含随机指针的二叉树-mid
    * 938-二叉搜索树的范围和-easy(递归)

### 层序遍历

    * 1609-奇偶树-mid
    * 1660-纠正二叉树-mid
    * 314-二叉树的垂直遍历-mid
    * 993-二叉树的堂兄弟节点-easy

### 中序遍历

    * 面试题 17.12. BiNode

### 后序遍历

    * 1522-N 叉树的直径-mid

## 动态规划

    * 276-栅栏涂色-easy
    * 1563-石子游戏-v-hard
    * 1230-抛掷硬币-mid(排列组合)
    * 562-矩阵中最长的连续1线段-mid
    * 132-分割回文串-II-hard
    * 115-不同的子序列-hard
    * 1143-最长公共子序列-mid
    * 1477-找两个和为目标值且不重叠的子数组-mid
    * 474-一和零-mid
    * 1049-最后一块石头的重量-II-mid
    * 518-零钱兑换-II-mid
    * 494-目标和-mid(类似1049)
    * 279-完全平方数-mid
    * 740-删除并获得点数-mid

### 单串

    * 256-粉刷房子-mid
    * 265-粉刷房子-II-hard 类似（1289-下降路径最小和-ii-hard）
    * 338-比特位计数-mid

### 双串

    * 514-自由之路-hard

### 股票问题

    * 122-买卖股票的最佳时机-II-easy

### 树形 dp

    * 1644-二叉树的最近公共祖先-II-mid

## 广搜

    * 286-墙与门-mid(多源)

### 双向广搜

    * 127-单词接龙-mid
    * 1345-跳跃游戏-iv-hard

## 二进制

    * 338-比特位计数-mid
    * 1018-可被5整除的二进制前缀-easy
    * 338-比特位计数-mid(找规律)
    * 191-位1的个数-easy
    * 190-颠倒二进制位-easy
    * 461-汉明距离-easy
    * 231-2 的幂-easy
    * 477-汉明距离总和-mid（排列组合）
    * 1720-解码异或后的数组-easy
    * 1734-解码异或后的排列-mid(1720升级版)
    * 137-只出现一次的数字-II-mid

## 深搜

    * 514-自由之路-hard
    * 851-喧闹和富有-mid
    * 261-以图判树-mid
    * 1631-最小体力消耗路径-mid(+二分)

## 滑动窗口问题

    * 159-至多包含两个不同字符的最长子串-mid
    * 1208-尽可能使字符串相等-mid
    * 1423-可获得的最大点数-mid
    * 1438-绝对差不超过限制的最长连续子数组-mid（单调队列）

## 贪心

    * 406-根据身高重建队列-mid
    * 402-移掉K位数字-mid
    * 1564-把箱子放进仓库里-I-mid
    * 670-最大交换-mid
    * 452-用最少数量的箭引爆气球-mid
    * 976-三角形的最大周长-easy
    * 767-重构字符串-mid
    * 948-令牌放置-mid
    * 621-任务调度器-mid
    * 659-分割数组为连续子序列-mid
    * 861-翻转矩阵后的得分-mid
    * 649-dota-2-参议院-mid
    * 1642-可以到达的最远建筑-mid
    * 738-单调递增的数字-mid
    * 455-分发饼干-easy
    * 605-种花问题-easy
    * 435-无重叠区间-mid（类似452）
    * 995-K连续位的最小翻转次数-hard(+差分)
    * 330-按要求补齐数组-hard(数学)
    * 395-至少有K个重复字符的最长子串-mid（递归）

## 分类讨论

    * 161-相隔为-1-的编辑距离-mid（编辑距离的简单版）

## 数学

    * 233-数字-1-的个数-hard
    * 402-移掉K位数字-mid
    * 1015-可被-k-整除的最小整数-mid(取余)
    * 204-计数质数-easy
    * 728-自除数-easy
    * 166-分数到小数-mid（竖式除法）
    * 1017-负二进制转换-mid（长除法）
    * 1131-绝对值表达式的最大值-mid(n维曼哈顿距离)
    * 1590-使数组和能被P整除-mid(同余定理)
    * 974-和可被-K-整除的子数组(同余定理)
    * 189-旋转数组-mid(gcd-最大公约数)
    * 1447-最简分数-mid(gcd)
    * 1232-缀点成线-easy(斜率)
    * 989-数组形式的整数加法(按位相加)
    * 7-整数反转-easy
    * 342-4的幂-easy

### 找规律

    * 390-消除游戏-mid
    * 777-在LR字符串中交换相邻字符-mid
    * 766-托普利茨矩阵-easy

### 画 x-y 轴折线图

    * 910-最小差值-ii-mid

### 异或

    * 389-找不同-easy

## 排列组合

    * LCP22-黑白方格画-easy
    * 923-三数之和的多种可能-mid
    * 1010-总持续时间可被60整除的歌曲-mid
    * 1128-等价多米诺骨牌对的数量-easy
    * 90-子集-II-mid（后加入元素与已有的内容各项结合）

## 旋转/环形问题--拼接原数据（A+A）

    * 796-旋转字符串-easy
    * 918-环形子数组的最大和-mid
    * 503-下一个更大元素-II-mid（单调栈）

## 栈

    * 402-移掉K位数字-mid
    * 456-132-模式-mid
    * 439-三元表达式解析器-mid
    * 232-用栈实现队列（双栈模拟）
    * 227-基本计算器-II-mid
    * 224-基本计算器-hard
    * 150-逆波兰表达式求值-mid
    * 173-二叉搜索树迭代器-mid
    * 1190-反转每对括号间的子串-mid

## 差分

    * 252-会议室-easy
    * 253-会议室-mid

## 链表

    * 148-排序链表-mid
    * 1265-逆序打印不可变链表-mid
    * 1669-合并两个链表-mid
    * 86-分隔链表-mid
    * 92-反转链表-II-mid
    * 82-删除排序链表中的重复元素-II-mid
    * 61-旋转链表-mid
    * 88-合并两个有序数组-easy
    * 1006-笨阶乘-mid
    * 203-移除链表元素-easy
    * 160-相交链表-easy

## 排序

    * 969-煎饼排序-mid

### 基数排序

    * 164-最大间距-hard

### 二分

    * 1064-不动点-easy
    * 1198-找出所有行中最小公共元素-mid
    * 852-山脉数组的峰顶索引-easy
    * 259-较小的三数之和-mid
    * LCP28-采购方案-easy
    * 278-第一个错误的版本-easy
    * 1482-制作m束花所需的最少天数-mid
    * 1011-在D天内送达包裹的能力-mid

### 归并

    * 148-排序链表-mid

## 哈希表

    * 242-有效的字母异位词-easy
    * 290-单词规律-easy
    * 205-同构字符串-easy
    * 1178-猜字谜-hard（状态压缩+暴力枚举）
    * 705-设计哈希集合-easy
    * 781-森林中的兔子-mid

## 区间问题

    * 452-用最少数量的箭引爆气球-mid

## 树状数组

    * 327-区间和的个数-hard（离散化）
    * 493-翻转对-hard（离散化）

## 图

### 拓扑排序

    * 851-喧闹和富有-mid
    * 261-以图判树-mid
    * 1203-项目管理-hard(双层)
    
### 最小生成树

    * 1584-连接所有点的最小费用-mid(prim)

### 最短路径

    * 1631-最小体力消耗路径-mid(dijkstra)
    * 778-水位上升的泳池中游泳-hard(dijkstra)
    * 1334-阈值距离内邻居最少的城市(dijkstra，Floyd)

## 字符串

    * 186-翻转字符串里的单词-II-mid
    * 1138-字母板上的路径-mid(二维网格)

## 硬做无技巧

    * 163-缺失的区间-mid
    * 54-螺旋矩阵-mid
    * 59-螺旋矩阵-II-mid
    * 73-矩阵置零-mid
    * 1603-设计停车系统-easy
    * LCP29-乐团站位-easy

## 前缀和

    * 1658-将-x-减到-0-的最小操作数-mid
    * 1031-两个非重叠子数组的最大和-mid
    * 724-寻找数组的中心索引-easy
    * 303-区域和检索-数组不可变-easy
    * 304-二维区域和检索-矩阵不可变-mid（二维前缀和）
    * 525-连续数组-mid
    * 523-连续的子数组和-mid
    * 1744-你能在你最喜欢的那天吃到你最喜欢的糖果吗？-mid

## 数组

    * 624-数组列表中的最大距离-mid
    * 888-公平的糖果棒交换-easy（求和）
    * 665-非递减数列-easy
    * 119-杨辉三角-II-easy(滚动数组)
    * 867-转置矩阵-easy
    * 88-合并两个有序数组-easy
    * 74-搜索二维矩阵-mid

## 回溯

    * 842-将数组拆分成斐波那契序列-mid
    * 1258-近义词句子-mid
    * 131-分割回文串-mid（回文）

## 查并集

    * 1258-近义词句子-mid
    * 547-省份数量-mid
    * 1319-连通网络的操作次数-mid
    * 1202-交换字符串中的元素-mid
    * 684-冗余连接-mid
    * 947-移除最多的同行或同列石头-mid
    * 1489-找到最小生成树里的关键边和伪关键边-hard(kruskal,Tarjan)
    * 721-账户合并-mid
    * 959-由斜杠划分区域-mid(二维空间)
    * 1579-保证图可完全遍历-hard(贪心)
    * 803-打砖块-hard(逆向)
    * 1631-最小体力消耗路径-mid(Kruskal)
    * 778-水位上升的泳池中游泳-hard
    * 399-除法求值-mid(维护权值)
    * 765-情侣牵手-hard(连通分量--合并规律)
    * 839-相似字符串组-hard

## 双指针

    * 1099-小于K的两数之和-easy
    * 992-K个不同整数的子数组-hard（离散化--atMostK）
    * 567-字符串的排列-mid(指针距离固定--统计字母个数)
    * 1004-最大连续1的个数III
    * 697-数组的度
    * 1052-爱生气的书店老板-mid
    * 面试题-17.21-直方图的水量-hard
    * 80-删除有序数组中的重复项-II-mid
    * 153-寻找旋转排序数组中的最小值-mid(分类讨论)
    * 154-寻找旋转排序数组中的最小值II-mid(递归)

## trie 树

    * 792-匹配子序列的单词数-mid(变形-节点指针集合)

## 桶

    * 792-匹配子序列的单词数-mid

## 递归

    * 509-斐波那契数-easy
    * 1047-删除字符串中的所有相邻重复项-easy（或栈）
    * 81-搜索旋转排序数组-II-mid

## 回文

    * 1332-删除回文子序列-easy

## 最长递增序列（Longest Increasing Subsequence）

    * 674-最长连续递增序列-easy
    * 354-俄罗斯套娃信封问题-hard（降维）

## 单调栈
    * 85-最大矩形-hard（84题升级版）