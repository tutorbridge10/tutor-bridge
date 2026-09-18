/* TutorBridge Addis shared components loader.
   header.html and footer.html remain the editable source files.
   A local-file fallback is included because browsers block fetch(file://...). */
(function(){
  const HEADER_FALLBACK = '<div class="topbar"><div class="container row"><span>📍 <span data-i18n="location">Addis Ababa, Ethiopia</span></span><span data-i18n="tag">Learn • Grow • Succeed</span></div></div>\n<nav><div class="container navin">\n<a class="brand" href="index.html"><img src="logo.png" alt="TutorBridge Addis logo"><span><strong>Tutor<span class="brand-bridge">Bridge</span> Addis</strong><small>LEARN • GROW • SUCCEED</small></span></a>\n<div class="links"><a href="index.html" data-i18n="home">Home</a><a href="how-it-works.html" data-i18n="how">How It Works</a><a href="about.html" data-i18n="about">About Us</a><a href="contact.html" data-i18n="contact">Contact</a>\n<select id="languageSelect" class="lang" aria-label="Language" onchange="setLanguage(this.value)">\n<option value="en">English</option><option value="am">አማርኛ</option><option value="om">Afaan Oromoo</option><option value="ti">ትግርኛ</option><option value="so">Soomaali</option><option value="af">Afar</option><option value="sid">Sidama</option><option value="wal">Wolaytta</option><option value="ha">Hadiyya</option><option value="gm">Gamo</option><option value="kaa">Kafa</option>\n</select>\n<a class="btn small" href="javascript:void(0)" onclick="goStudent()" data-i18n="find">Find My Tutor</a><a class="btn small gold" href="javascript:void(0)" onclick="goTutor()" data-i18n="tutor">Become a Tutor</a></div></div></nav>\n';
  const FOOTER_FALLBACK = '<footer><div class="container footgrid">\n<div><div class="footerbrand"><img src="logo.png" alt="TutorBridge Addis logo"><span><strong>Tutor<span class="brand-bridge">Bridge</span> Addis</strong><small>LEARN • GROW • SUCCEED</small></span></div><p style="color:#d4e2ef;margin-top:14px">Connecting students, parents and tutors across Addis Ababa.  </p></div>\n<div><h4 data-i18n="quick">Quick Links</h4>  <a href="index.html" data-i18n="home">Home</a>  <a href="how-it-works.html" data-i18n="how">How It Works</a>  <a href="about.html" data-i18n="about">About Us</a>  <a href="contact.html" data-i18n="contact">Contact</a>  </div>\n<div><h4 data-i18n="connect">Connect With Us</h4><div class="socials tb-socials">\n  </a>\n<a class="social-slot tg" href="https://t.me/+i28BQkS1yzY5NTg0" aria-label="Telegram"><i class="fa-brands fa-telegram"></i></a>\n  <a class="social-slot tt" href="https://www.tiktok.com/@tutor_bridge?is_from_webapp=1&sender_device=pc" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>\n  <a class="social-slot wa" href="https://whatsapp.com/channel/0029Vb9AeAjFcow4jGPL272V" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>\n  </div><p class="social-note" data-i18n="socialnote">join our social media acounts.</p></div>\n  <div><h4 data-i18n="contactus">Contact Us</h4><a href="https://t.me/+i28BQkS1yzY5NTg0">telegram</a><a href="https://whatsapp.com/channel/0029Vb9AeAjFcow4jGPL272V">whatsapp</a>  <a href="mailto:TutorBridge10@gmail.com">TutorBridge10@gmail.com</a><a data-i18n="location">Addis Ababa, Ethiopia</a></div>\n  </div><div class="container copyright"><span>© 2026 TutorBridge Addis. <span data-i18n="rights">All rights reserved.</span></span><span>    <a href="terms.html" data-i18n="terms">Terms & Conditions</a> ·   <a href="privacy.html" data-i18n="privacy">Privacy Policy</a></span></div></footer>';

  async function getPart(file, fallback){
    try{
      const r = await fetch(file, {cache:"no-cache"});
      if(!r.ok) throw new Error(file + " " + r.status);
      return await r.text();
    }catch(err){
      console.warn("TutorBridge: using local fallback for " + file, err);
      return fallback;
    }
  }

  async function inject(id, file, fallback){
    const target = document.getElementById(id);
    if(!target) return;
    const html = await getPart(file, fallback);
    target.outerHTML = html;
  }

  async function init(){
    // Load header first so navigation/language controls are ready before footer.
    await inject("site-header", "header.html", HEADER_FALLBACK);
    await inject("site-footer", "footer.html", FOOTER_FALLBACK);

    // Re-apply the saved language after dynamic components have been inserted.
    const lang = localStorage.getItem("tb_lang") || "en";
    if(typeof window.setLanguage === "function") window.setLanguage(lang);
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", init, {once:true});
  }else{
    init();
  }
})();
