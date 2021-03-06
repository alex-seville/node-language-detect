require('nodeunit');

var Parser = require('../lib/Parser');
var str = 'from SW HOUSTON to #PVnation SOPHOMORE STATUS Just A Soul Whose Intentions Are Good Self-expression should always b limitless if that bothers u...dont follow me';

exports.getBlockCount = function (t) {
  t.equal((new Parser()).getBlockCount(), 145);

  return t.done();
};

exports.analyse = function (t) {
  var l = new Parser();
  l.string = str;
  l.analyze();

  return t.done();
};

exports.arrRank = function (t) {
  var l = new Parser();

  t.deepEqual(l.arrRank({
    "ion":3,
    "on ":3,
    " so":2,
    "ess":2,
    "hou":2,
    "n s":2,
    "oul":2,
    "re ":2,
    "tio":2,
    "ust":2,
    " a ":1,
    " al":1,
    " ar":1,
    " b ":1,
    " bo":1,
    " do":1,
    " ex":1,
    " fo":1,
    " fr":1,
    " go":1,
    " ho":1,
    " if":1,
    " in":1,
    " ju":1,
    " li":1,
    " me":1,
    " pv":1,
    " se":1,
    " sh":1,
    " st":1,
    " sw":1,
    " th":1,
    " to":1,
    " u ":1,
    " wh":1,
    "a s":1,
    "alw":1,
    "are":1,
    "at ":1,
    "ati":1,
    "atu":1,
    "ays":1,
    "b l":1,
    "bot":1,
    "d a":1,
    "d s":1,
    "don":1,
    "e g":1,
    "e i":1,
    "e s":1,
    "elf":1,
    "ent":1,
    "ers":1,
    "exp":1,
    "f e":1,
    "f t":1,
    "fol":1,
    "fro":1,
    "goo":1,
    "hat":1,
    "her":1,
    "hom":1,
    "hos":1,
    "if ":1,
    "imi":1,
    "int":1,
    "itl":1,
    "jus":1,
    "l w":1,
    "ld ":1,
    "les":1,
    "lf ":1,
    "lim":1,
    "llo":1,
    "low":1,
    "lwa":1,
    "m s":1,
    "me ":1,
    "mit":1,
    "mor":1,
    "n t":1,
    "nat":1,
    "ns ":1,
    "nt ":1,
    "nte":1,
    "nti":1,
    "od ":1,
    "oll":1,
    "om ":1,
    "omo":1,
    "ons":1,
    "ont":1,
    "ood":1,
    "oph":1,
    "ore":1,
    "ose":1,
    "oth":1,
    "ous":1,
    "ow ":1,
    "pho":1,
    "pre":1,
    "pvn":1,
    "res":1,
    "rom":1,
    "rs ":1,
    "s a":1,
    "s b":1,
    "s i":1,
    "s j":1,
    "s u":1,
    "se ":1,
    "sel":1,
    "sho":1,
    "sio":1,
    "sop":1,
    "sou":1,
    "ss ":1,
    "ssi":1,
    "st ":1,
    "sta":1,
    "sto":1,
    "sw ":1,
    "t a":1,
    "t b":1,
    "t f":1,
    "tat":1,
    "ten":1,
    "tha":1,
    "the":1,
    "tle":1,
    "to ":1,
    "ton":1,
    "tus":1,
    "ul ":1,
    "uld":1,
    "us ":1,
    "vna":1,
    "w h":1,
    "w m":1,
    "way":1,
    "who":1,
    "xpr":1,
    "ys ":1
  }), {
    "ion":0,
    "on ":1,
    " so":2,
    "ess":3,
    "hou":4,
    "n s":5,
    "oul":6,
    "re ":7,
    "tio":8,
    "ust":9,
    " a ":10,
    " al":11,
    " ar":12,
    " b ":13,
    " bo":14,
    " do":15,
    " ex":16,
    " fo":17,
    " fr":18,
    " go":19,
    " ho":20,
    " if":21,
    " in":22,
    " ju":23,
    " li":24,
    " me":25,
    " pv":26,
    " se":27,
    " sh":28,
    " st":29,
    " sw":30,
    " th":31,
    " to":32,
    " u ":33,
    " wh":34,
    "a s":35,
    "alw":36,
    "are":37,
    "at ":38,
    "ati":39,
    "atu":40,
    "ays":41,
    "b l":42,
    "bot":43,
    "d a":44,
    "d s":45,
    "don":46,
    "e g":47,
    "e i":48,
    "e s":49,
    "elf":50,
    "ent":51,
    "ers":52,
    "exp":53,
    "f e":54,
    "f t":55,
    "fol":56,
    "fro":57,
    "goo":58,
    "hat":59,
    "her":60,
    "hom":61,
    "hos":62,
    "if ":63,
    "imi":64,
    "int":65,
    "itl":66,
    "jus":67,
    "l w":68,
    "ld ":69,
    "les":70,
    "lf ":71,
    "lim":72,
    "llo":73,
    "low":74,
    "lwa":75,
    "m s":76,
    "me ":77,
    "mit":78,
    "mor":79,
    "n t":80,
    "nat":81,
    "ns ":82,
    "nt ":83,
    "nte":84,
    "nti":85,
    "od ":86,
    "oll":87,
    "om ":88,
    "omo":89,
    "ons":90,
    "ont":91,
    "ood":92,
    "oph":93,
    "ore":94,
    "ose":95,
    "oth":96,
    "ous":97,
    "ow ":98,
    "pho":99,
    "pre":100,
    "pvn":101,
    "res":102,
    "rom":103,
    "rs ":104,
    "s a":105,
    "s b":106,
    "s i":107,
    "s j":108,
    "s u":109,
    "se ":110,
    "sel":111,
    "sho":112,
    "sio":113,
    "sop":114,
    "sou":115,
    "ss ":116,
    "ssi":117,
    "st ":118,
    "sta":119,
    "sto":120,
    "sw ":121,
    "t a":122,
    "t b":123,
    "t f":124,
    "tat":125,
    "ten":126,
    "tha":127,
    "the":128,
    "tle":129,
    "to ":130,
    "ton":131,
    "tus":132,
    "ul ":133,
    "uld":134,
    "us ":135,
    "vna":136,
    "w h":137,
    "w m":138,
    "way":139,
    "who":140,
    "xpr":141,
    "ys ":142
  });

  return t.done();
};

exports.bubleSort = function (t) {
  var l = new Parser();

  t.deepEqual(l.bubleSort({
    " fr":1,
    "fro":1,
    "rom":1,
    "om ":1,
    "m s":1,
    " sw":1,
    "sw ":1,
    "w h":1,
    " ho":1,
    "hou":2,
    "ous":1,
    "ust":2,
    "sto":1,
    "ton":1,
    "on ":3,
    "n t":1,
    " to":1,
    "to ":1,
    " pv":1,
    "pvn":1,
    "vna":1,
    "nat":1,
    "ati":1,
    "tio":2,
    "ion":3,
    "n s":2,
    " so":2,
    "sop":1,
    "oph":1,
    "pho":1,
    "hom":1,
    "omo":1,
    "mor":1,
    "ore":1,
    "re ":2,
    "e s":1,
    " st":1,
    "sta":1,
    "tat":1,
    "atu":1,
    "tus":1,
    "us ":1,
    "s j":1,
    " ju":1,
    "jus":1,
    "st ":1,
    "t a":1,
    " a ":1,
    "a s":1,
    "sou":1,
    "oul":2,
    "ul ":1,
    "l w":1,
    " wh":1,
    "who":1,
    "hos":1,
    "ose":1,
    "se ":1,
    "e i":1,
    " in":1,
    "int":1,
    "nte":1,
    "ten":1,
    "ent":1,
    "nti":1,
    "ons":1,
    "ns ":1,
    "s a":1,
    " ar":1,
    "are":1,
    "e g":1,
    " go":1,
    "goo":1,
    "ood":1,
    "od ":1,
    "d s":1,
    " se":1,
    "sel":1,
    "elf":1,
    "lf ":1,
    "f e":1,
    " ex":1,
    "exp":1,
    "xpr":1,
    "pre":1,
    "res":1,
    "ess":2,
    "ssi":1,
    "sio":1,
    " sh":1,
    "sho":1,
    "uld":1,
    "ld ":1,
    "d a":1,
    " al":1,
    "alw":1,
    "lwa":1,
    "way":1,
    "ays":1,
    "ys ":1,
    "s b":1,
    " b ":1,
    "b l":1,
    " li":1,
    "lim":1,
    "imi":1,
    "mit":1,
    "itl":1,
    "tle":1,
    "les":1,
    "ss ":1,
    "s i":1,
    " if":1,
    "if ":1,
    "f t":1,
    " th":1,
    "tha":1,
    "hat":1,
    "at ":1,
    "t b":1,
    " bo":1,
    "bot":1,
    "oth":1,
    "the":1,
    "her":1,
    "ers":1,
    "rs ":1,
    "s u":1,
    " u ":1,
    " do":1,
    "don":1,
    "ont":1,
    "nt ":1,
    "t f":1,
    " fo":1,
    "fol":1,
    "oll":1,
    "llo":1,
    "low":1,
    "ow ":1,
    "w m":1,
    " me":1,
    "me ":1
  }), {
    "ion":3,
    "on ":3,
    " so":2,
    "ess":2,
    "hou":2,
    "n s":2,
    "oul":2,
    "re ":2,
    "tio":2,
    "ust":2,
    " a ":1,
    " al":1,
    " ar":1,
    " b ":1,
    " bo":1,
    " do":1,
    " ex":1,
    " fo":1,
    " fr":1,
    " go":1,
    " ho":1,
    " if":1,
    " in":1,
    " ju":1,
    " li":1,
    " me":1,
    " pv":1,
    " se":1,
    " sh":1,
    " st":1,
    " sw":1,
    " th":1,
    " to":1,
    " u ":1,
    " wh":1,
    "a s":1,
    "alw":1,
    "are":1,
    "at ":1,
    "ati":1,
    "atu":1,
    "ays":1,
    "b l":1,
    "bot":1,
    "d a":1,
    "d s":1,
    "don":1,
    "e g":1,
    "e i":1,
    "e s":1,
    "elf":1,
    "ent":1,
    "ers":1,
    "exp":1,
    "f e":1,
    "f t":1,
    "fol":1,
    "fro":1,
    "goo":1,
    "hat":1,
    "her":1,
    "hom":1,
    "hos":1,
    "if ":1,
    "imi":1,
    "int":1,
    "itl":1,
    "jus":1,
    "l w":1,
    "ld ":1,
    "les":1,
    "lf ":1,
    "lim":1,
    "llo":1,
    "low":1,
    "lwa":1,
    "m s":1,
    "me ":1,
    "mit":1,
    "mor":1,
    "n t":1,
    "nat":1,
    "ns ":1,
    "nt ":1,
    "nte":1,
    "nti":1,
    "od ":1,
    "oll":1,
    "om ":1,
    "omo":1,
    "ons":1,
    "ont":1,
    "ood":1,
    "oph":1,
    "ore":1,
    "ose":1,
    "oth":1,
    "ous":1,
    "ow ":1,
    "pho":1,
    "pre":1,
    "pvn":1,
    "res":1,
    "rom":1,
    "rs ":1,
    "s a":1,
    "s b":1,
    "s i":1,
    "s j":1,
    "s u":1,
    "se ":1,
    "sel":1,
    "sho":1,
    "sio":1,
    "sop":1,
    "sou":1,
    "ss ":1,
    "ssi":1,
    "st ":1,
    "sta":1,
    "sto":1,
    "sw ":1,
    "t a":1,
    "t b":1,
    "t f":1,
    "tat":1,
    "ten":1,
    "tha":1,
    "the":1,
    "tle":1,
    "to ":1,
    "ton":1,
    "tus":1,
    "ul ":1,
    "uld":1,
    "us ":1,
    "vna":1,
    "w h":1,
    "w m":1,
    "way":1,
    "who":1,
    "xpr":1,
    "ys ":1
  });
  return t.done();
};

exports.sortFunc = function (t) {
  var l = new Parser();

  t.equal(l.sortFunc([" go", 1], ["fro", 1]), -70);
  t.equal(l.sortFunc(["me ", 1], [" go", 1]), 77);
  t.equal(l.sortFunc([" me", 1], [" go", 1]), 6);
  t.equal(l.sortFunc(["w m", 1], [" go", 1]), 87);
  t.equal(l.sortFunc(["ow ", 1], [" go", 1]), 79);
  t.equal(l.sortFunc(["low", 1], [" go", 1]), 76);
  t.equal(l.sortFunc(["llo", 1], [" go", 1]), 76);
  t.equal(l.sortFunc(["oll", 1], [" go", 1]), 79);
  t.equal(l.sortFunc(["fol", 1], [" go", 1]), 70);
  t.equal(l.sortFunc([" fo", 1], [" go", 1]), -1);
  t.equal(l.sortFunc([" go", 1], ["rom", 1]), -82);
  t.equal(l.sortFunc(["t f", 1], [" go", 1]), 84);
  t.equal(l.sortFunc(["nt ", 1], [" go", 1]), 78);
  t.equal(l.sortFunc(["ont", 1], [" go", 1]), 79);
  t.equal(l.sortFunc(["don", 1], [" go", 1]), 68);
  t.equal(l.sortFunc([" do", 1], [" go", 1]), -3);
  t.equal(l.sortFunc([" go", 1], ["om ", 1]), -79);
  t.equal(l.sortFunc([" u ", 1], [" go", 1]), 14);
  t.equal(l.sortFunc(["s u", 1], [" go", 1]), 83);
  t.equal(l.sortFunc(["rs ", 1], [" go", 1]), 82);
  t.equal(l.sortFunc(["ers", 1], [" go", 1]), 69);
  t.equal(l.sortFunc(["her", 1], [" go", 1]), 72);
  t.equal(l.sortFunc(["the", 1], [" go", 1]), 84);
  t.equal(l.sortFunc(["oth", 1], [" go", 1]), 79);
  t.equal(l.sortFunc(["bot", 1], [" go", 1]), 66);
  t.equal(l.sortFunc([" bo", 1], [" go", 1]), -5);
  t.equal(l.sortFunc([" go", 1], ["m s", 1]), -77);
  t.equal(l.sortFunc(["t b", 1], [" go", 1]), 84);
  t.equal(l.sortFunc(["at ", 1], [" go", 1]), 65);
  t.equal(l.sortFunc(["hat", 1], [" go", 1]), 72);
  t.equal(l.sortFunc(["tha", 1], [" go", 1]), 84);
  t.equal(l.sortFunc([" th", 1], [" go", 1]), 13);
  t.equal(l.sortFunc(["f t", 1], [" go", 1]), 70);
  t.equal(l.sortFunc(["if ", 1], [" go", 1]), 73);

  return t.done();
};

exports.getTrigramRank = function (t) {
  var l = new Parser(str);

  l.setPadStart(true);
  l.analyze();
  t.deepEqual(l.getTrigramRanks(), { ion:0,
    'on ':1,
    ' so':2,
    ess:3,
    hou:4,
    'n s':5,
    oul:6,
    're ':7,
    tio:8,
    ust:9,
    ' a ':10,
    ' al':11,
    ' ar':12,
    ' b ':13,
    ' bo':14,
    ' do':15,
    ' ex':16,
    ' fo':17,
    ' fr':18,
    ' go':19,
    ' ho':20,
    ' if':21,
    ' in':22,
    ' ju':23,
    ' li':24,
    ' me':25,
    ' pv':26,
    ' se':27,
    ' sh':28,
    ' st':29,
    ' sw':30,
    ' th':31,
    ' to':32,
    ' u ':33,
    ' wh':34,
    'a s':35,
    alw:36,
    are:37,
    'at ':38,
    ati:39,
    atu:40,
    ays:41,
    'b l':42,
    bot:43,
    'd a':44,
    'd s':45,
    don:46,
    'e g':47,
    'e i':48,
    'e s':49,
    elf:50,
    ent:51,
    ers:52,
    exp:53,
    'f e':54,
    'f t':55,
    fol:56,
    fro:57,
    goo:58,
    hat:59,
    her:60,
    hom:61,
    hos:62,
    'if ':63,
    imi:64,
    'int':65,
    itl:66,
    jus:67,
    'l w':68,
    'ld ':69,
    les:70,
    'lf ':71,
    lim:72,
    llo:73,
    low:74,
    lwa:75,
    'm s':76,
    'me ':77,
    mit:78,
    mor:79,
    'n t':80,
    nat:81,
    'ns ':82,
    'nt ':83,
    nte:84,
    nti:85,
    'od ':86,
    oll:87,
    'om ':88,
    omo:89,
    ons:90,
    ont:91,
    ood:92,
    oph:93,
    ore:94,
    ose:95,
    oth:96,
    ous:97,
    'ow ':98,
    pho:99,
    pre:100,
    pvn:101,
    res:102,
    rom:103,
    'rs ':104,
    's a':105,
    's b':106,
    's i':107,
    's j':108,
    's u':109,
    'se ':110,
    sel:111,
    sho:112,
    sio:113,
    sop:114,
    sou:115,
    'ss ':116,
    ssi:117,
    'st ':118,
    sta:119,
    sto:120,
    'sw ':121,
    't a':122,
    't b':123,
    't f':124,
    tat:125,
    ten:126,
    tha:127,
    the:128,
    tle:129,
    'to ':130,
    ton:131,
    tus:132,
    'ul ':133,
    uld:134,
    'us ':135,
    vna:136,
    'w h':137,
    'w m':138,
    way:139,
    who:140,
    xpr:141,
    'ys ':142
  });

  return t.done();
};
