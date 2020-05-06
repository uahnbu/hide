{
  let source = document.querySelector('');
  let vowelsLenSorted = ["á","à","ả","ã","ạ","ă","ắ","ằ","ẳ","ẵ","ặ","â","ấ","ầ","ẩ","ẫ","ậ","é","è","ẻ","ẽ","ẹ","ê","ế","ề","ể","ễ","ệ","í","ì","ỉ","ĩ","ị","ó","ò","ỏ","õ","ọ","ô","ố","ồ","ổ","ỗ","ộ","ơ","ớ","ờ","ở","ỡ","ợ","ú","ù","ủ","ũ","ụ","ư","ứ","ừ","ử","ữ","ự","ý","ỳ","ỷ","ỹ","ỵ","ai","ái","ài","ải","ãi","ại","ao","áo","ào","ảo","ão","ạo","au","áu","àu","ảu","ãu","ạu","âu","ấu","ầu","ẩu","ẫu","ậu","eo","éo","èo","ẻo","ẽo","ẹo","êu","ếu","ều","ểu","ễu","ệu","ia","ía","ìa","ỉa","ĩa","ịa","iê","iế","iề","iể","iễ","iệ","iêu","iếu","iều","iểu","iễu","iệu","oa","oá","oà","oả","oã","oạ","oai","oái","oài","oải","oãi","oại","oă","oắ","oằ","oẳ","oẵ","oặ","oe","oé","oè","oẻ","oẽ","oẹ","oi","ói","òi","ỏi","õi","ọi","ôi","ối","ồi","ổi","ỗi","ội","ua","uá","uà","uả","uã","uạ","uâ","uấ","uầ","uẩ","uẫ","uậ","uê","uế","uề","uể","uễ","uệ","ui","úi","ùi","ủi","ũi","ụi","uô","uố","uồ","uổ","uỗ","uộ","ưa","ứa","ừa","ửa","ữa","ựa","ươ","ướ","ườ","ưở","ưỡ","ượ","ươi","ưới","ười","ưởi","ưỡi","ượi","uyê","uyế","uyề","uyể","uyễ","uyệ","uỷu","uya"].sort((a, b) => b.length - a.length);
  let counter = {};
  let data = source.innerText.match(/[abcdeghiklmnopqrstuvxyđáưàạôâếêốảơóộấệíầậờắăồớìịọúềụợòứổùéựủặãểửỏèĩởừẩữỉũằẻẹỗễỡýẫẳỷõẽỳỵỹẵ]/gi).join('').toLowerCase();
  vowelsLenSorted.forEach((c, i) => (
    i = new RegExp(c, 'g'),
    counter[c] = (data.match(i) || '').length,
    c.length > 1 && data.replace(i, '')
  ));
  console.log(JSON.stringify(Object.entries(counter).sort((a, b) => b[1] - a[1]).map(c => c[0])));
  console.table(Object.fromEntries(Object.entries(counter).sort((a, b) => b[1] - a[1])));
}

{
  let vowelsPopSorted = {
    Viet74k   : ["á","ư","à","ạ","ô","â","ế","ê","ố","ả","ơ","ó","ộ","ấ","ệ","í","ầ","ậ","ờ","ắ","ă","ồ","ớ","ì","ị","ọ","ú","ề","iệ","ụ","ợ","iế","ò","iê","ứ","ổ","ù","ươ","é","ự","ườ","ướ","ủ","ặ","ã","ai","ể","ử","ao","ỏ","ầu","ại","è","oa","ĩ","ái","ở","ua","iề","ừ","áo","ượ","ẩ","ữ","ối","uố","ia","oá","oà","ỉ","ũ","âu","ào","ài","ải","ôi","ội","ằ","ẻ","ẹ","oạ","ói","iể","êu","uâ","ười","ễ","ỗ","ỡ","uộ","uô","ửa","uyê","ồi","ý","ẫ","ạo","ẳ","au","ảo","ưa","ấu","ều","iêu","ĩa","uyế","ếu","eo","uậ","uyề","ệu","iệu","ậu","èo","iều","ỷ","uyệ","õ","uồ","uấ","ổi","uả","ưở","iễ","iếu","ãi","uá","ểu","éo","oả","oi","àu","ẽ","ừa","iểu","oại","ịa","ỳ","ưỡ","ui","áu","ữa","uầ","ùi","ão","ỏi","úi","uế","ẩu","uyể","ựa","òi","ỗi","ứa","oài","uê","ỵ","ẫu","ẹo","ũi","uổ","ưới","ẻo","ía","uẩ","ỹ","oe","oai","ụi","ủi","uạ","oé","ươi","ẵ","ễu","ìa","ỉa","oái","ọi","ưỡi","iễu","oắ","uệ","oă","oè","oẹ","oã","uà","uỗ","ẽo","oặ","õi","oẻ","ảu","uya","oằ","ưởi","uề","uẫ","oải","uyễ","ạu","ượi","oẳ","uã","uỷu","uể","oẵ","oãi","ãu","oẽ","uễ"],
    TruyenKieu: ["à","ư","ờ","â","ê","ế","ì","ơ","á","ô","ớ","ạ","ầ","ó","ườ","ấ","ộ","ề","ò","ã","iế","ồ","ố","ai","ướ","ươ","ười","ắ","ă","ả","ào","ao","ặ","âu","ậ","ọ","oa","ằ","ú","iề","ưa","ệ","ũ","ừ","ại","ài","iê","ôi","ù","ữ","ở","ợ","au","ều","ầu","ử","iều","ể","é","ụ","ẳ","iệ","ỏ","ia","uyê","ứ","ự","í","uâ","ửa","ua","ỗ","uố","ổ","ải","ượ","ẻ","ĩ","ủ","ối","ồi","ói","ễ","oà","ỗi","ị","uô","êu","ội","è","ừa","ỉ","eo","uyề","oài","ẹ","ái","ổi","ỏi","ẫ","ỡ","uồ","ẽ","iể","uộ","uyế","ữa","õ","ẩ","ưới","oạ","iêu","iệu","ệu","uyệ","áo","ọi","ui","àu","uê","ựa","ấu","ếu","ểu","òi","ý","iếu","iểu","iễ","uá","ẵ","éo","ĩa","ãi","ạo","oá","uả","ảo","èo","ùi","uổ","oi","ỳ","iễu","ễu","oắ","ươi","áu","ẫu","ẻo","uầ","ưở","úi","uya","uấ","ứa","ìa","ủi","ụi","õi","ậu","uậ","ão","oại","oai","uyể","oả","uạ","ỷ","ía","ịa","uề","ưỡ","oặ","oái","uà","uế","ưỡi","ẽo","oă","oe","uẩ","uệ","ỹ","uyễ","ẩu","ẹo","ỉa","ũi","oải","oãi","ưởi","ượi","uỷu","ảu","ãu","ạu","oã","oằ","oẳ","oẵ","oé","oè","oẻ","oẽ","oẹ","uã","uẫ","uể","uễ","uỗ","ỵ"],
    common1000: ["á","ư","à","ạ","ô","â","ế","ờ","ố","ấ","ộ","ó","ơ","ả","ệ","í","ê","ể","ớ","ườ","iệ","ậ","ầ","ại","ă","ắ","ị","ợ","ụ","ặ","ề","iế","ự","ì","iể","ỏ","ọ","ia","ù","ai","ướ","ứ","ử","ối","ua","ồ","ổ","ừ","ười","iê","ôi","ò","ở","ủ","au","iề","ượ","é","ú","ữ","ầu","uố","ài","ao","ươ","ẻ","iều","àu","âu","ều","oạ","ổi","uô","ửa","ĩ","ỗ","ũ","oa","oà","ói","uộ","iệu","uyế","ái","ải","áo","ấu","êu","ệu","ẽ","ý","iểu","ào","eo","ểu","ỏi","ội","uậ","ui","uổ","ưa","ữa","ưở","ẩ","ẫ","è","ẹ","ỉ","oại","uyê","uyệ","ảo","èo","ếu","ía","ĩa","oá","ỗi","uá","uả","ã","iêu","ươi","ưới","uyề","uyể","ạo","áu","ậu","éo","ìa","ịa","oặ","ồi","uấ","uầ","ằ","ẳ","ỡ","iếu","ãi","ẫu","iễ","oă","oe","õi","ọi","uâ","uẩ","úi","ùi","ũi","uồ","uỗ","ứa","ựa","ẵ","ễ","õ","ỳ","ỷ","ỹ","iễu","oai","oái","oài","oải","oãi","ưởi","ưỡi","ượi","uyễ","uỷu","uya","ão","ảu","ãu","ạu","ẩu","ẻo","ẽo","ẹo","ễu","ỉa","oả","oã","oắ","oằ","oẳ","oẵ","oé","oè","oẻ","oẽ","oẹ","oi","òi","uà","uã","uạ","uẫ","uê","uế","uề","uể","uễ","uệ","ủi","ụi","ừa","ưỡ","ỵ"]
  }
}

{
  let sortLen = (e, d, lf = 0, rt = e.length - 1) => {
    if (e.length <= 1) return;
    let pivot = -e[rt + lf >> 1].length;
    let i = lf, j = rt, t;
    while (i <= j) {
      while (-e[i].length < pivot) i++;
      while (-e[j].length > pivot) j--;
      i <= j && (t = e[i], e[i] = e[j], e[j] = t, t = d[i], d[i++] = d[j], d[j--] = t);
    }
    lf < i - 1 && sortLen(e, d, lf, i - 1);
    i < rt && sortLen(e, d, i, rt);
  };
  let source = [...document.querySelectorAll('li')].map(li => li.innerText.slice(0, li.innerText.indexOf(' -')));
  let vowels = ["á","ư","à","ạ","ô","â","ế","ờ","ố","ấ","ộ","ó","ơ","ả","ệ","í","ê","ể","ớ","ườ","iệ","ậ","ầ","ại","ă","ắ","ị","ợ","ụ","ặ","ề","iế","ự","ì","iể","ỏ","ọ","ia","ù","ai","ướ","ứ","ử","ối","ua","ồ","ổ","ừ","ười","iê","ôi","ò","ở","ủ","au","iề","ượ","é","ú","ữ","ầu","uố","ài","ao","ươ","ẻ","iều","àu","âu","ều","oạ","ổi","uô","ửa","ĩ","ỗ","ũ","oa","oà","ói","uộ","iệu","uyế","ái","ải","áo","ấu","êu","ệu","ẽ","ý","iểu","ào","eo","ểu","ỏi","ội","uậ","ui","uổ"];
  let letters = 'abcdeghiklmnopqrstuvxy';
  let combs = 'aaabacadaeagahakalapaqarasatavaxeaebecedeeegeheiekelepeqereseteuevexeyibicidigihiiikilioipiqirisitivixiyobocodogohokolomooopoqorosotouovoxoyubucuduguhukuluoupuqurusutuuuvuxybycydyeygyhyiykylymyoypyqyrysytyuyvyxyy'.match(/../g);
  let data = source.join('').replace(/ /g, '');
  for (let k = 0; k < 10; k++) {
    let counter = {a:199,b:89,c:297,d:58,e:92,g:294,h:471,i:356,k:57,l:104,m:159,n:628,o:118,p:98,q:21,r:114,s:100,t:393,u:171,v:69,x:35,y:87};
    let exems = vowels.slice(0, combs.filter(c => letters.indexOf(c[0]) < 11 || letters.indexOf(c[1]) < 11).length);
    let excerpt = data;
    sortLen(exems, combs);
    exems.forEach((c, i) => {
      let r = new RegExp(c, 'g'), l = (excerpt.match(c) || '').length;
      counter[combs[i][0]] += l; counter[combs[i][1]] += l;
      c.length > 1 && excerpt.replace(r, '');
    });
    letters = Object.entries(counter).sort((a, b) => b[1] - a[1]).map(c => c[0]).join('');
    combs.sort((x, y) => letters.indexOf(x[0]) + letters.indexOf(x[1]) - letters.indexOf(y[0]) - letters.indexOf(y[1]));
    let cbExems = combs.filter(c => letters.indexOf(c[0]) < 11 || letters.indexOf(c[1]) < 11);
    console.log(k, letters, cbExems.length);
    console.log(cbExems.join(''));
  }
}

{
  let exems = vowels.slice(0, combs.filter(c => letters.indexOf(c[0]) < 11 || letters.indexOf(c[1]) < 11).length);
  sortLen(exems, combs);
  letters.split('').join('\n');
  n  8234  8236    a  8299  8236
  h  8289  8236    b  8298  8237
  t  8290  8236    c  8292  8236
  i  8291  8236    d  8300  8237
  c  8292  8236    e  8289  8237
  g  8298  8236    f  8236  8236 *
  a  8299  8236    g  8298  8236
  u  8300  8236    h  8289  8236
  m  8301  8236    i  8291  8236
  o  8302  8236    j  8236  8236 *
  r  8303  8236    k  8301  8237
  *                l  8234  8237
  *                m  8301  8236
  *                n  8234  8236
  l  8234  8237    o  8302  8236
  e  8289  8237    p  8291  8237
  s  8290  8237    q  8303  8237
  p  8291  8237    r  8303  8236
  y  8292  8237    s  8290  8237
  b  8298  8237    t  8290  8236
  v  8299  8237    u  8300  8236
  d  8300  8237    v  8299  8237
  k  8301  8237    w  8236  8236 *
  x  8302  8237    x  8302  8237
  q  8303  8237    y  8292  8237
}

function hidevn(ctx, msg, key) {
  var cs = 'abcdeghiklmnopqrstuvxy{';
  var vi = ["iệu","iều","ười","uyế","ầu","uố","iế","iề","ượ","ao","ươ","ài","ại","ôi","iê","ướ","ua","ối","iể","au","ai","ia","ửa","uô","oa","oạ","ổi","uộ","ái","oà","ói","àu","ườ","âu","ều","iệ","ỗ","ũ","ừ","ẻ","ữ","ủ","é","ú","ĩ","ò","ở","ơ","ó","ả","ấ","ộ","ể","ê","ớ","ệ","í","ạ","à","ô","á","ư","ờ","ố","â","ế","ọ","ỏ","ù","ự","ì","ồ","ổ","ứ","ử","ắ","ă","ị","ậ","ầ","ặ","ề","ợ","ụ"," "];
  var en = 'ukiqapeyopavipikerixymeletusygaeibycomidoouludyrepadyoylodaxoveeiroyuvilesakorubabupyuosobivolucotagohacocugehaaioahiiicihitatutiguhegytiyalureuaseayiyheiecoguuisarouuo'.match(/../g).concat`{`;
  var t = msg.replace(new RegExp(`${vi.join('|')}`,'g'), c => en[vi.indexOf(c)]);
  var d = '⁫⁪⁤⁬⁡‬⁪⁡⁣‬⁭‪⁭‪⁮⁣⁯⁯⁢⁢⁬⁫‬⁮⁤', p = '‬‭‬‭‭‬‬‬‬‬‭‭‬‬‬‭‭‬‭‬‬‭‬‭‭', a = 'charCodeAt';
  console.log(t);
  return ctx.slice(0, ctx.length / 2) + '‬'.repeat(20) + t.split``.map((c,i,s) => (
    s = cs[(cs.indexOf(c) + cs.indexOf(key[i % key.length])) % 23], s == '{' ? '‬' : ((i = p[s[a](0) - 97]) == '‬' ? '' : i) + d[s[a](0) - 97]
  )).join`` + '‬'.repeat(20) + ctx.slice(ctx.length / 2);
}

function showvn(enc, key) {
  function minus(c1, c2) {
    var c = 'abcdeghiklmnopqrstuvxy{';
    return c[(c.indexOf(c1) - c.indexOf(c2) + 23) % 23];
  }
  var cs = 'abcdeghiklmnopqrstuvxy{';
  var vi = ["iệu","iều","ười","uyế","ầu","uố","iế","iề","ượ","ao","ươ","ài","ại","ôi","iê","ướ","ua","ối","iể","au","ai","ia","ửa","uô","oa","oạ","ổi","uộ","ái","oà","ói","àu","ườ","âu","ều","iệ","ỗ","ũ","ừ","ẻ","ữ","ủ","é","ú","ĩ","ò","ở","ơ","ó","ả","ấ","ộ","ể","ê","ớ","ệ","í","ạ","à","ô","á","ư","ờ","ố","â","ế","ọ","ỏ","ù","ự","ì","ồ","ổ","ứ","ử","ắ","ă","ị","ậ","ầ","ặ","ề","ợ","ụ"," "];
  var en = 'ukiqapeyopavipikerixymeletusygaeibycomidoouludyrepadyoylodaxoveeiroyuvilesakorubabupyuosobivolucotagohacocugehaaioahiiicihitatutiguhegytiyalureuaseayiyheiecoguuisarouuo'.match(/../g).concat`{`;
  var a = ['nhticgaumor', 'lespybvdkxq'], d = '‪⁡⁢⁣⁤⁪⁫⁬⁭⁮⁯', r = 0;
  return enc.match(/[‪⁡⁢⁣⁤⁪⁫⁬⁭⁮⁯‬‭]+/)[0].replace(/^‬+|‬+$/g, '').split``.map(c => c == '‬' ? '{' : c == '‭' ? (r = 1, '') : (c = a[r][d.indexOf(c)], r = 0, c)).join``.split``.map((c, i) => cs[(cs.indexOf(c) - cs.indexOf(key[i % key.length]) + 23) % 23]).join``.replace(new RegExp(en.join`|`, 'g'), c => vi[en.indexOf(c)]);
}
