/*
 * @lc app=leetcode.cn id=355 lang=javascript
 *
 * [355] 设计推特
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
/**
 * 自己--又臭又长
 * @param obj {
 * user_id
 * follow_user_id
 * }
 * @param obj{
 * msg_id
 * belong_id
 * }
 *
 */
var Twitter = function () {
  this.user = []
  this.msg = []
}

/**
 * Compose a new tweet.
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  let index = this.user.find((item) => item.user_id === userId)
  if (this.user.length === 0 || !index) {
    let person = { user_id: userId, follow_user_id: [] }
    this.user.push(person)
  }
  let msg = { msg_id: tweetId, belong_id: userId }
  this.msg.push(msg)
  return
}

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  let user = this.user.findIndex((item) => item.user_id === userId)
  let id
  if (this.msg.length === 0 || user === -1) return []
  if (user !== -1) {
    id = [userId, ...this.user[user].follow_user_id]
  }
  let res = []
  let index = this.msg.length
  while (res.length < 10 && index > 0) {
    index--
    if (id.includes(this.msg[index].belong_id)) {
      res.push(this.msg[index].msg_id)
    }
  }

  return res
}

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  let follower = this.user.findIndex((item) => item.user_id === followerId)
  let followee = this.user.findIndex((item) => item.user_id === followeeId)
  if (this.user.length === 0 || follower === -1) {
    let person = { user_id: followerId, follow_user_id: [followeeId] }
    this.user.push(person)
  }
  if (this.user.length === 0 || followee === -1) {
    let person = { user_id: followeeId, follow_user_id: [] }
    this.user.push(person)
  }
  if (follower !== -1) {
    this.user[follower].follow_user_id.push(followeeId)
  }
  return
}

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  let follower = this.user.findIndex((item) => item.user_id === followerId)

  if (follower !== -1) {
    this.user[follower].follow_user_id = this.user[
      follower
    ].follow_user_id.filter((item) => item !== followeeId)
  }
  return
}

// var obj = new Twitter()
// obj.postTweet(1, 1)
// obj.postTweet(1, 2)
// obj.postTweet(1, 3)
// obj.postTweet(1, 4)
// obj.postTweet(1, 5)
// obj.postTweet(1, 00)
// obj.postTweet(1, 7)
// obj.postTweet(1, 8)
// obj.postTweet(1, 9)
// obj.postTweet(1, 10)

// var param_2 = obj.getNewsFeed(1)
// obj.follow(1, 2)
// obj.postTweet(2, 6)
// var param_3 = obj.getNewsFeed(1)
// obj.unfollow(1, 2)
// var param_4 = obj.getNewsFeed(1)

// @lc code=end
