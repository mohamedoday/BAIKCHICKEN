// واجهة الصفحة (HTML)
document.body.insertAdjacentHTML("afterbegin",`
<div id="s0"><img class="lg" alt=""></div>
<header class="top glass"><div class="tb"><img class="lg" alt="Baik Chicken"><b>بيك جكن</b><button id="cb" class="cbtn">السلة <span id="cn">0</span></button></div></header>
<section class="hero"><div class="hw"><div class="ht"><h1 style="--d:0">بيك جكن</h1><p style="--d:1">دجاج مقرمش، برغر، بيتزا ومشاوي.<br>اختار أقرب فرع واطلب بضغطة.</p><div class="hb" style="--d:2"><a class="btn pr" href="#menu">شوف المنيو</a><button class="btn wa" data-m="wa">اطلب واتساب</button><button class="btn" data-m="tel">اتصال</button></div></div><div class="hi" style="--d:2"><img class="hp" alt="وجبة كنتاكي" src="img/hero.jpg"></div></div></section>
<nav class="nv glass"><div class="seg" id="nav"><i id="ind"></i></div></nav>
<div class="sr"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><input id="q" type="search" placeholder="ابحث في المنيو"></div>
<main id="menu"></main>
<section class="br" id="branches"><h2>فروعنا</h2><p>اتصل أو راسل أقرب فرع إلك.</p><div class="bg" id="bg"></div></section>
<div class="sh" id="pk"><div class="sp"><div class="sph"><h3 id="pt"></h3><button id="px" aria-label="إغلاق">✕</button></div><p class="note" style="margin:0">اختر منطقتك وراح نحولك مباشرة للفرع</p><div class="pl" id="pl"></div></div></div>
<footer>Baik Chicken · الأسعار بالدينار العراقي (IQD)</footer>
<div class="sh" id="sh"><div class="sp"><div class="sph"><h3>طلبك</h3><button id="x" aria-label="إغلاق">✕</button></div><div id="ci"></div><div class="tot"><span>المجموع</span><b id="cs"></b></div>
<h4>اختر الفرع</h4><div class="bl" id="bl"></div>
<h4>طريقة الاستلام</h4><div class="ty"><label><input type="radio" name="ty" value="توصيل" checked>توصيل</label><label><input type="radio" name="ty" value="استلام من الفرع">استلام من الفرع</label></div>
<input id="nm" placeholder="الاسم"><input id="ad" placeholder="العنوان ورقم الهاتف">
<a id="wa" class="send off" target="_blank" rel="noopener">السلة فاضية</a><button id="cl" class="clr">تفريغ السلة</button></div></div>`);
document.querySelectorAll(".lg").forEach(i=>i.src=LOGO);
