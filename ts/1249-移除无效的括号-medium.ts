/*
 * @lc app=leetcode.cn id=1249 lang=typescript
 *
 * [1249] 移除无效的括号
 */

// @lc code=start
//copy--使用栈处理
function minRemoveToMakeValid(s: string): string {
  if (s === '') return s;
  let arr = [...s];
  let stack = [];
  for (let i = 0, length = s.length; i < length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    }
    if (s[i] === ')') {
      if (stack.length > 0) {
        stack.pop()
      } else {
        delete (arr[i])
      }
    }
  }
  while (stack.length) {
    delete (arr[stack[0]]);
    stack.shift();
  }
  arr = arr.filter(val => val);
  return arr.join('')
};
// @lc code=end
//"lee(t(c)o)de)"
console.log(minRemoveToMakeValid("lee(t(c)o)de)"))
console.log(minRemoveToMakeValid("))))(())))())))())()()()(db)))()(i))(())(((((()(()))(((()((((()))(m(())()((x)))((y())(()())(())))()()()))((())f(()m()((((()))(t()(nn)())(f)))(h)()()))n(()))(())(())(m)()))((()))())))())(()(()(())((()p((()(()((()(())))r)(m()))()(jo())(()()()())))()r)(())(j()(()g)()))(()()((())((())))(((())((((y)(kq))a)(u))()d(()))i()(())()())())()()m())(()))()(h))())()((j)))a(p(((()()p)()(()((()p))))))))))((()))((()(())()()()()))(()k))))(u))((())(()(()((()))(x((()(()(()()(()(((s)()()())()(g())))h)(((dc)(()(())()))c)(((()d)((((())))()()(()(())(((())v)(()(())z())(z()())(())s((()()((z)())((()l))()()a)()()(w)(((()(((((()(p()h)f((()(((())))()))()))r)()))((o))(()())()()y((())()((((()))))))((()(q)))(dz((((((s))))()()(l())vg(())())((())))k((()(a)(()(())(u()))())(())))())))b)(p((()()(()()((()()))(()(())()))(()))((k()))()))()(j((())))(()a))))f))()()(()(())(()()))())(()((()()())((((()()l)()a)(((usg)(((()(()))))())(((i))))((()))))))()(())))(()))z)a)))())())(((())((()()(d)()(((())l()()y)()))l))))(())v(()()()(l((()(())x)))))())(())((()()))))))())()d())()(f(((()((u(()))())()(a)e(()(())(())()()()()()))t(()())()((((o())(r(())())n()()))(((((())())))))))(v((((((()e)m)(()))((()))b)((()()(()(u()()((()(()()(k(i()())(()))())()()(()(o()(())(((v)))(s))((()ow(()((()()()))(((k()((((()())()((((())j()))(())((())(((()))))))(((()(c(bog(b)e(((((()()(())()x(())))s)(((()l()()))))))()()((())))())((b(())()((()())(((ls(((((c)w((()))(()))))()()((k()())n(()((((((())))(g)(((p))(m(((()))(())v()((())))()((()m)((()()()())()()()q)(()()t)((ht((((())(()((()))(()(c()h(()((()()v)()(()((()(((()(()((()(()))()()(((y(())(in())((()c))()()(yc())))())(())))()(((())()(w)p((()(((()f(((())))(()))((()()()()()(())()()((()(())(()))(g()))()))()o))(b(()())(()r(()(((u))()))(z))(((((()()(())l((d())(())((())()((r(()(()()(rg()(j()))))(n))())))(z)()(i())(p(()()())))a((()(()()(())()())(()()()))((()))h))h((()(z)(())((g()x)))))())()()v)())s)()()ct)(p))))((((())()(())(())))))((()((im)k))()()k)((((()))())(((()())l)))((l()(())())()()(((()()n()(())((()))()()()))w(((())))()())))(((()))))))())))(gz))(((o(f))()((y)aa()((()()j))(()))))())(()((q((())())()))())((())()b)())()))(((()((()())g)()))()()))((e))(()((())(((()s)a()))j())()))((())(()(((())))((())))er()(())a))()())(()sz))((()(()()))t)()(mu)((((v)m)))((q((y))))g(((r(a(()()v()()))()))j)()()ac))())()(o(()(()x))rh()))()()(()((())((()(((y)(((y)((o((((((())(()()))a((())()()()(()beg()))fh(((w()())()))(()((())()))()((()m)(((((()(()()z)i()()(()()f))((()(k(((x))(()))())()()(i)))))()((s)))()))())))n)())()()c))s())m)zbf)((j(((())(()(())))()o()()))())((s()())((((((c(a)))t(s())()((()(((b))(((r)h)))()()))))())())((()))()))())))())((n())(((((()))))(w()((()((((((()(())()())(((())(g))))()((((((()(()g((()(((()y))))()(f()())(()(())(f()yu))))))()())((())g))()(()o))))bz))()())g))()())(t(()()))))(()ce(g((()((()()))()())())(()))((()(()m))e(z)p(())(c))(((ye)x)o))((g))())w(()(()y)()))(()()()())nd(()())er())m)(w)w()l))())h)(s()(()))u)))(((()(()()))(()()()((s(()))))((()))()s))()()(()))(((())(l))()x())((f(())((()((w)()(i()()y(()())()(()))))))))b)(()((())()))(()(c((h((((((()(()s)(((t(()())))()())w()))(()(()hh(((()((((o(g))((()(()(((()))))))()())((()))u((()()e))))(()()(()a))r(q((()())(()(t())q)(()()()))))))))())((()()))(j(iw()())()()(c(c((((())()(dr(()()()(()((((())i((())(()))()(()(m)i()s)()))c)j)((()p())((((m((())(((()()(((p(((((()((()))((())()(((()(()()(((()))((((ij())))()(()())()h)()(o())w()())))())())(e()(())p))z)ox)(q(q)((())()(())())e))((e)x)(()(x)((()(()()))(((())()))n))n))k))))())((()()(kq))d(())((b()))((())()(((()()(((i()((((()()))(n((())(r()(((((l())))(i()(())(()))))))()((()(()(())nk)()))r))()()(n))((()))))))))(()((())(()))()(())((n)g())(()((((hck()(p))(((()())y()()))()()(())((()((((((t))()((((()(()((((()((s)f(()m()))v()()()))()()()((())((((((((((()(((((((()()())()()(())()qi((((()t())())())))((()()(n(((())()()(d)q(((((r())cx()((()))(g(rm(n()((()()(()))()))(k(((())((()(g)bz())(((((()((ri(((()(())))((u((())a)d()()m((()((()((()))(t()(())((()))f(())))e(())(()(u(()()y(((()((()(()o))(k(()k((r()r))b()())())()(())h))r)(()(((()))u()))(()w())())))()(((((((((()))(g((()(((()(()))())((((()())())()h)))((()l())))(f)))(()((()l()()(())))j))())(()i)n((()))())((w()))()c)(())fq())())(((x((k)))()((()(()()))((()()((e))(((()e((t))()(()((y()((())()))(((()))(((())((())n())(u)(((((()(()(((((((o))()()))(()(()(()(()))())()(())))((()()()()kc)e))()()))nl)())(()()(()((m(())())()())))))(n(()(((((()b))(()))(x(((()()))()g(e((c())w(c((o()()(()()(e(())())iy)))(())()((((q)))))))k()(n(r)(())((h)))j)())y))((i)h)))((g()())()))r)(b(()((()())))(b))))()(((())()(((d))))((()(((v()))((w(c))()()y)())s)())((t(()()(()w)()))()()))))))()(((vp)((()d())))(r)((()))(()()))((((m(()d)(())(()))((((((()))(()d)(())))))()))(((()))()))))(())())(()()((((()((((p))()))()))((y()()((())(c))(())))())(())u((()))()q)(()()()(b((((())()())())tk)))((((()(x((()(()()()))f))(()())()()(()()(()((((()))(((()(g))(()()()nr()(()(vt))(p(()h(((d))(y(()(())()((()(())())))s)aj()()))((()())((()((()(n)())(()())(()(()((())))()((d()(()))(fm((x)(((m))))())(("))

//"ab(c)d"
console.log(minRemoveToMakeValid("a)b(c)d"))

//"a(b(c)d)"
console.log(minRemoveToMakeValid("(a(b(c)d)"))