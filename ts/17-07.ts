//参考--恶心的输入--查并集
function trulyMostPopular(names: string[], synonyms: string[]): string[] {
  const set: Set<string> = new Set()
  for (const name of names) {
    let temp = name.match(/^([A-Za-z]+)\((\d+)\)$/) as string[]
    set.add(temp[1])
  }
  for (const synonym of synonyms) {
    let temp = synonym.match(/^\((\w+)\,(\w+)\)$/) as string[]
    set.add(temp[1])
    set.add(temp[2])
  }
  const mfs = new MFS([...set])
  const map = new Map()
  for (const synonym of synonyms) {
    let temp = synonym.match(/^\((\w+)\,(\w+)\)$/) as string[]
    mfs.merge(temp[1], temp[2])
  }
  for (const name of names) {
    let temp = name.match(/^([A-Za-z]+)\((\d+)\)$/) as string[]
    const root = mfs.find(temp[1])
    map.set(root, map.has(root) ? map.get(root) + +temp[2] : +temp[2])
  }
  const res: string[] = []
  map.forEach((v, k) => {
    res.push(`${k}(${v})`)
  })
  return res
};

class MFS {
  root: any
  constructor(arr: string[]) {
    this.root = {}
    arr.forEach(name => {
      this.root[name] = name
    })
  }
  merge(a: string, b: string) {
    let ar = this.find(a)
    let br = this.find(b)
    if (ar === br) return // 相同表示已经有根了
    if (ar > br) {
      // 以字典序小的 为根
      this.root[ar] = br
    } else {
      this.root[br] = ar
    }
  }
  find(m: string) {
    let mr = m
    while (this.root[mr] !== mr) {
      // 等于自身时, 表示自身就是根了
      mr = this.root[mr]
    }
    return mr
  }
}

trulyMostPopular(["Fcclu(70)", "Ommjh(63)", "Dnsay(60)", "Qbmk(45)", "Unsb(26)", "Gauuk(75)", "Wzyyim(34)", "Bnea(55)", "Kri(71)", "Qnaakk(76)", "Gnplfi(68)", "Hfp(97)", "Qoi(70)", "Ijveol(46)", "Iidh(64)", "Qiy(26)", "Mcnef(59)", "Hvueqc(91)", "Obcbxb(54)", "Dhe(79)", "Jfq(26)", "Uwjsu(41)", "Wfmspz(39)", "Ebov(96)", "Ofl(72)", "Uvkdpn(71)", "Avcp(41)", "Msyr(9)", "Pgfpma(95)", "Vbp(89)", "Koaak(53)", "Qyqifg(85)", "Dwayf(97)", "Oltadg(95)", "Mwwvj(70)", "Uxf(74)", "Qvjp(6)", "Grqrg(81)", "Naf(3)", "Xjjol(62)", "Ibink(32)", "Qxabri(41)", "Ucqh(51)", "Mtz(72)", "Aeax(82)", "Kxutz(5)", "Qweye(15)", "Ard(82)", "Chycnm(4)", "Hcvcgc(97)", "Knpuq(61)", "Yeekgc(11)", "Ntfr(70)", "Lucf(62)", "Uhsg(23)", "Csh(39)", "Txixz(87)", "Kgabb(80)", "Weusps(79)", "Nuq(61)", "Drzsnw(87)", "Xxmsn(98)", "Onnev(77)", "Owh(64)", "Fpaf(46)", "Hvia(6)", "Kufa(95)", "Chhmx(66)", "Avmzs(39)", "Okwuq(96)", "Hrschk(30)", "Ffwni(67)", "Wpagta(25)", "Npilye(14)", "Axwtno(57)", "Qxkjt(31)", "Dwifi(51)", "Kasgmw(95)", "Vgxj(11)", "Nsgbth(26)", "Nzaz(51)", "Owk(87)", "Yjc(94)", "Hljt(21)", "Jvqg(47)", "Alrksy(69)", "Tlv(95)", "Acohsf(86)", "Qejo(60)", "Gbclj(20)", "Nekuam(17)", "Meutux(64)", "Tuvzkd(85)", "Fvkhz(98)", "Rngl(12)", "Gbkq(77)", "Uzgx(65)", "Ghc(15)", "Qsc(48)", "Siv(47)"]
  , ["(Gnplfi,Qxabri)", "(Uzgx,Siv)", "(Bnea,Lucf)", "(Qnaakk,Msyr)", "(Grqrg,Gbclj)", "(Uhsg,Qejo)", "(Csh,Wpagta)", "(Xjjol,Lucf)", "(Qoi,Obcbxb)", "(Npilye,Vgxj)", "(Aeax,Ghc)", "(Txixz,Ffwni)", "(Qweye,Qsc)", "(Kri,Tuvzkd)", "(Ommjh,Vbp)", "(Pgfpma,Xxmsn)", "(Uhsg,Csh)", "(Qvjp,Kxutz)", "(Qxkjt,Tlv)", "(Wfmspz,Owk)", "(Dwayf,Chycnm)", "(Iidh,Qvjp)", "(Dnsay,Rngl)", "(Qweye,Tlv)", "(Wzyyim,Kxutz)", "(Hvueqc,Qejo)", "(Tlv,Ghc)", "(Hvia,Fvkhz)", "(Msyr,Owk)", "(Hrschk,Hljt)", "(Owh,Gbclj)", "(Dwifi,Uzgx)", "(Iidh,Fpaf)", "(Iidh,Meutux)", "(Txixz,Ghc)", "(Gbclj,Qsc)", "(Kgabb,Tuvzkd)", "(Uwjsu,Grqrg)", "(Vbp,Dwayf)", "(Xxmsn,Chhmx)", "(Uxf,Uzgx)"])