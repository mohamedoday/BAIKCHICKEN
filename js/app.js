// منطق الموقع: التبويبات، السلة، اختيار الفرع، البحث
const $=i=>document.getElementById(i),reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
const BR=[["البلديات","07733334269"],["الأمين","07704077790"],["الدورة","07737772772"],["بسماية","07755556323"]];
const fm=n=>n.toLocaleString('en')+' IQD';
function chips(a,p1,p2){const ps=p1.includes(' · ')?p1.split(' · '):[p1],lb=ps.length==3?['صغير','وسط','كبير']:ps.length==2?['وسط','كبير']:[''];
 const L=ps.map((x,i)=>[x,lb[i]]);if(p2)L.push([p2,'']);
 return L.map(([x,l])=>{const m=x.match(/[\d,]+/),n=m?+m[0].replace(/,/g,''):0,t=x.replace(/[\d,]+/,'').trim(),lab=(l+' '+t).trim();
  return n?'<button class="chip" data-a="'+a+'" data-l="'+lab+'" data-p="'+n+'"><span>'+(l?l+' ':'')+n.toLocaleString('en')+(t?' '+t:'')+'</span><i>+</i></button>':'<span class="chip off">'+x+'</span>'}).join('')}
const nav=$('nav'),ind=$('ind'),main=$('menu'),tabs=[],secs=[];let cur=0;
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -5% 0px'});
D.forEach(([ic,t,n,items],i)=>{
 const b=document.createElement('button');b.textContent=t;b.onclick=()=>show(i);nav.appendChild(b);tabs.push(b);
 const s=document.createElement('section');s.className='sec';
 s.innerHTML='<h2>'+t+'</h2><p class="note">'+n+'</p><div class="grid">'+items.map(([a,p1,p2])=>
  '<div class="c rv" data-n="'+a+'"><div class="im">'+(IMGS[PH[a]]?'<img loading="lazy" alt="'+a+'" src="'+IMGS[PH[a]]+'">':'<span class="mono">'+t+'</span>')+'</div><b>'+a+'</b><div class="p">'+chips(a,p1,p2)+'</div></div>').join('')+'</div>';
 main.appendChild(s);secs.push(s)});
function mv(b){ind.style.width=b.offsetWidth+'px';ind.style.transform='translateX('+b.offsetLeft+'px)'}
function show(i){cur=i;ind.style.opacity=1;tabs.forEach((b,j)=>b.classList.toggle('on',i==j));
 secs.forEach((s,j)=>{s.classList.toggle('on',i==j);if(i==j)s.querySelectorAll('.c').forEach((c,k)=>{c.style.display='';c.classList.remove('in');c.style.transitionDelay=(k<12?k*50:0)+'ms';io.observe(c)})});
 mv(tabs[i]);tabs[i].scrollIntoView({inline:'center',block:'nearest'})}
show(0);addEventListener('load',()=>mv(tabs[cur]));document.fonts&&document.fonts.ready.then(()=>mv(tabs[cur]));addEventListener('resize',()=>mv(tabs[cur]));
// اختيارنا لك
const all=[];D.forEach(d=>d[3].forEach(x=>all.push(x)));
const fea=document.createElement('div');fea.id='fea';
fea.innerHTML='<h2 class="fh">اختيارنا لك</h2><div class="bsw">'+["وجبة 8 قطع","ريزو سبايسي","برغر لحم دبل","مشكل","زنجر","ستربس 6 قطع","فاهيتا دجاج","ريزو عائلي"].map(n=>{const x=all.find(y=>y[0]==n);if(!x)return'';const [a,p1,p2]=x;
 return '<div class="bs"><div class="im"><img alt="'+a+'" src="'+IMGS[PH[a]]+'"></div><b>'+a+'</b><div class="p">'+chips(a,p1,p2)+'</div></div>'}).join('')+'</div>';
main.insertBefore(fea,main.firstChild);
// البحث
$('q').oninput=()=>{const v=$('q').value.trim();fea.style.display=v?'none':'';if(!v){show(cur);return}
 tabs.forEach(b=>b.classList.remove('on'));ind.style.opacity=0;
 secs.forEach(s=>{let a=0;s.querySelectorAll('.c').forEach(c=>{const m=c.dataset.n.includes(v);c.style.display=m?'':'none';c.style.transitionDelay='0ms';c.classList.add('in');if(m)a=1});s.classList.toggle('on',!!a)})};
// الفروع
$('bg').innerHTML=BR.map(([n,p])=>'<div class="bc"><h3>فرع '+n+'</h3><div class="n">'+p+'</div><div class="bb"><a class="w" href="https://wa.me/964'+p.slice(1)+'" target="_blank" rel="noopener">واتساب</a><a class="t" href="tel:+964'+p.slice(1)+'">اتصال</a></div></div>').join('');
$('bl').innerHTML=BR.map(([n,p],i)=>'<label class="bo"><input type="radio" name="br" value="'+i+'"><b>'+n+'</b><small>'+p+'</small></label>').join('');
// السلة
let cart={},br=-1;try{cart=JSON.parse(localStorage.getItem('bc')||'{}');br=+(localStorage.getItem('bb')||-1)}catch(e){}
function render(){let n=0,t=0,L=[];
 $('ci').innerHTML=Object.keys(cart).map(k=>{const c=cart[k];n+=c.q;t+=c.q*c.p;L.push('• '+c.q+' × '+c.n+(c.l?' ('+c.l+')':'')+' = '+fm(c.q*c.p));
  return '<div class="ln"><span>'+c.n+(c.l?' <small>('+c.l+')</small>':'')+'</span><span class="qt"><button data-k="'+k+'" data-d="-1">−</button><b>'+c.q+'</b><button data-k="'+k+'" data-d="1">+</button></span><em>'+fm(c.q*c.p)+'</em></div>'}).join('')||'<p class="note">السلة فاضية</p>';
 $('cn').textContent=n;$('cs').textContent=fm(t);
 document.querySelectorAll('input[name=br]').forEach(r=>r.checked=+r.value==br);
 const w=$('wa'),ok=n&&br>=0;
 if(ok){const ty=(document.querySelector('input[name=ty]:checked')||{}).value||'';
  w.href='https://wa.me/964'+BR[br][1].slice(1)+'?text='+encodeURIComponent('طلب جديد — فرع '+BR[br][0]+'\n'+L.join('\n')+'\nالمجموع: '+fm(t)+'\nالنوع: '+ty+'\nالاسم: '+$('nm').value+'\nالعنوان/الهاتف: '+$('ad').value);w.classList.remove('off');w.textContent='أرسل الطلب إلى فرع '+BR[br][0]}
 else{w.removeAttribute('href');w.classList.add('off');w.textContent=n?'اختر الفرع لإرسال الطلب':'السلة فاضية'}
 try{localStorage.setItem('bc',JSON.stringify(cart));localStorage.setItem('bb',br)}catch(e){}}
main.addEventListener('click',e=>{const b=e.target.closest('.chip');if(!b||!b.dataset.p)return;
 const k=b.dataset.a+'|'+b.dataset.l;cart[k]=cart[k]||{n:b.dataset.a,l:b.dataset.l,p:+b.dataset.p,q:0};cart[k].q++;render();
 const c=$('cb');c.classList.remove('bump');void c.offsetWidth;c.classList.add('bump');b.classList.add('ok');setTimeout(()=>b.classList.remove('ok'),700)});
$('ci').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const c=cart[b.dataset.k];c.q+=+b.dataset.d;if(c.q<1)delete cart[b.dataset.k];render()});
$('bl').addEventListener('change',e=>{br=+e.target.value;render()});
$('sh').addEventListener('change',render);$('nm').oninput=$('ad').oninput=render;
$('wa').onclick=e=>{if($('wa').classList.contains('off')){e.preventDefault();if(Object.keys(cart).length){const b=$('bl');b.classList.remove('need');void b.offsetWidth;b.classList.add('need');b.scrollIntoView({behavior:'smooth',block:'center'})}}};
const open=v=>$('sh').classList.toggle('open',v);
$('cb').onclick=()=>open(true);$('x').onclick=()=>open(false);$('sh').onclick=e=>{if(e.target.id=='sh')open(false)};
addEventListener('keydown',e=>{if(e.key=='Escape')open(false)});
$('cl').onclick=()=>{cart={};render();open(false)};render();
// اختيار الفرع للواتساب والاتصال
function pick(m){$('pt').textContent=m=='wa'?'اطلب عبر واتساب':'اتصل بالفرع';
 $('pl').innerHTML=BR.map(([n,p])=>'<a class="pr2" href="'+(m=='wa'?'https://wa.me/964'+p.slice(1)+'?text='+encodeURIComponent('هلا، أريد أطلب من فرع '+n):'tel:+964'+p.slice(1))+'"'+(m=='wa'?' target="_blank" rel="noopener"':'')+'><span>'+n+'</span><small>'+p+'</small></a>').join('');$('pk').classList.add('open')}
document.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>pick(b.dataset.m));
$('px').onclick=()=>$('pk').classList.remove('open');$('pk').onclick=e=>{if(e.target.id=='pk')$('pk').classList.remove('open')};
$('pl').addEventListener('click',()=>setTimeout(()=>$('pk').classList.remove('open'),400));
addEventListener('keydown',e=>{if(e.key=='Escape')$('pk').classList.remove('open')});
// فتح الشاشة
const s0=$('s0');setTimeout(()=>s0.classList.add('out'),reduce?0:1300);setTimeout(()=>s0.remove(),reduce?100:2200);
// حركة خفيفة للصورة الرئيسية
if(!reduce){const hp=document.querySelector('.hp');let t=0;addEventListener('scroll',()=>{if(t)return;t=requestAnimationFrame(()=>{t=0;const y=Math.min(scrollY,600);hp.style.transform='translateY('+y*.1+'px) scale('+(1+y/3500)+')'})},{passive:true})}
