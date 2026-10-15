const REVIEW_SECTIONS = [
  ["overview", "简介与结论"],
  ["price", "套餐价格"],
  ["speed", "测速报告"],
  ["unlock", "流媒体与 AI"],
  ["topology", "专线拓扑"],
  ["guide", "使用教程"],
  ["troubleshoot", "问题排查"],
  ["faq", "常见问题"]
];

const reviewRoot = document.querySelector("#review-content");
const reviewSectionNav = document.querySelector("#section-nav");
const reviewToc = document.querySelector("#toc");
const reviewMenu = document.querySelector("#menu-toggle");
const reviewTopNav = document.querySelector("#top-nav");
let reviewObserver;

function currentReview() {
  const id = new URLSearchParams(location.search).get("id") || "speed";
  return AIRPORTS.find(item => item.id === id) || AIRPORTS[0];
}

function textOrPending(value, fallback = "本次未在官网或后台读取到可核验信息。") {
  return value || fallback;
}

function buildTopology(item) {
  const nodes = item.topology || ["用户设备", "本地网络", "线路入口", "出口节点", "目标服务"];
  return nodes.map((label, index) => `
    <div class="route-node"><span>${String(index + 1).padStart(2, "0")}</span><b>${label}</b></div>
    ${index < nodes.length - 1 ? '<i class="route-arrow" aria-hidden="true">→</i>' : ""}
  `).join("");
}

function buildFaqs(item) {
  return getFiveFaqs(item).map(([question, answer], index) => `
    <article class="review-faq-card">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <div><h3>${question}</h3><p>${answer}</p></div>
    </article>
  `).join("");
}

function buildVerifiedData(item) {
  if (!item.priceLines?.length) return `
    <div class="review-callout muted-callout"><span>i</span><div><b>当前信息范围</b><p>套餐、节点或客户端未能完整进入后台核验，文章保留为待确认状态，不用宣传文案补齐缺失数据。</p></div></div>`;
  return `
    <div class="review-data-grid">
      <div class="review-data-card"><span>${item.verified === false ? "公开信息" : "套餐快照"}</span><p>${item.priceLines.join("<br>")}</p></div>
      <div class="review-data-card"><span>节点信息</span><p>${textOrPending(item.nodeInfo)}</p></div>
      <div class="review-data-card"><span>IPLC / IEPL</span><p>${textOrPending(item.ipInfo)}</p></div>
      <div class="review-data-card"><span>客户端清单</span><p>${textOrPending(item.clientInfo)}</p></div>
    </div>`;
}

function renderReview() {
  const item = currentReview();
  const index = AIRPORTS.findIndex(entry => entry.id === item.id);
  const previous = AIRPORTS[(index - 1 + AIRPORTS.length) % AIRPORTS.length];
  const next = AIRPORTS[(index + 1) % AIRPORTS.length];
  const metrics = item.metrics.map(metric => `<span>${metric}</span>`).join("");
  const tags = item.tags.map(tag => `<span class="review-tag">${tag}</span>`).join("");
  const prices = item.priceLines?.length
    ? `<ul class="review-price-list">${item.priceLines.map(line => `<li>${line}</li>`).join("")}</ul>`
    : `<div class="review-empty-data">当前未读取到可公开核验的完整套餐，购买前请在官网后台确认价格、流量、周期和退款规则。</div>`;
  const related = AIRPORTS.filter(entry => entry.id !== item.id).slice(0, 3).map(entry => `
    <a class="related-review-card" href="review.html?id=${entry.id}"><span>${entry.logo}</span><div><b>${entry.name}</b><p>${entry.evidence}</p></div><i>→</i></a>
  `).join("");

  document.title = `${item.name}评测：套餐、测速与专线信息｜一元机场收录`;
  document.querySelector('meta[name="description"]')?.setAttribute("content", `${item.name}独立深度评测：套餐价格、节点、测速、流媒体与 AI、IPLC/IEPL、客户端和常见问题。`);
  document.querySelector("#updated-at").textContent = item.verifiedAt || "2026.10.15";

  reviewRoot.innerHTML = `
    <div class="breadcrumbs"><a href="index.html#home">一元机场收录</a><span>/</span><a href="index.html#reviews">深度测评</a><span>/</span><b>${item.name}</b></div>
    <header class="article-header review-article-header">
      <span class="category-pill">独立深度测评 · 2026</span>
      <h1>${item.name}评测：套餐、测速与专线信息</h1>
      <p class="article-lead">${item.lead}</p>
      <div class="byline"><span class="avatar">${item.logo}</span><span>由 <b>一元编辑部</b> 整理</span><span>·</span><span>最后核验 ${item.verifiedAt || "2026.10.15"}</span></div>
    </header>

    <section class="review-summary" aria-label="${item.name}核验摘要">
      <div class="review-summary-copy"><div class="review-summary-title"><span class="review-logo-large">${item.logo}</span><div><span class="section-kicker">VERIFIED SNAPSHOT</span><h2>${item.name}<small>${item.english}</small></h2></div></div><p>${item.evidence}</p><div class="review-tags">${tags}</div><div class="review-actions"><a class="review-primary-action" href="${item.url}" target="_blank" rel="noopener sponsored">进入官网入口 <span>↗</span></a><a class="review-secondary-action" href="index.html#reviews">返回评测目录</a></div><small class="affiliate-disclosure">本文含推广入口。套餐、价格、节点与服务规则可能变化，请以下单前官网页面为准。</small></div>
      <div class="review-metrics">${metrics}<p>${item.caution}</p></div>
    </section>

    <section class="content-section review-section" id="overview"><span class="section-kicker">01 · OVERVIEW</span><h2>机场简介与编辑结论</h2><p>${item.lead} 稳定、安全、高速与高性价比需要落到可核验的线路、套餐限制和售后响应，而不是只看宣传词。</p><div class="review-callout"><span>✓</span><div><b>适合谁</b><p>${item.fit}</p></div></div>${buildVerifiedData(item)}</section>

    <section class="content-section review-section" id="price"><span class="section-kicker">02 · PLANS</span><h2>套餐价格与购买建议</h2><p>${item.price}。${item.priceLines?.length ? (item.verified === false ? "以下为当前能够公开核验的信息。" : "以下为登录后台读取到的套餐快照，实际活动价以结账页为准。") : ""}</p>${prices}<div class="purchase-grid"><div><b>首次体验</b><span>优先月付或最小套餐</span></div><div><b>验证重点</b><span>晚高峰、常用节点与设备</span></div><div><b>长期购买</b><span>确认退款、倍率和售后</span></div></div><p class="internal-links">继续查看 <a href="index.html#airports">机场选购指南</a> 和 <a href="index.html#about">商业关系与免责声明</a>。</p></section>

    <section class="content-section review-section" id="speed"><span class="section-kicker">03 · SPEED REPORT</span><h2>测速报告与数据口径</h2><div class="review-report"><b>核验记录</b><p>${item.speedReport || item.evidence}</p><span>入口 HTTP 响应、客户端延迟、节点在线率和持续下载速度不是同一个指标，结果会随地区、运营商、设备和时段变化。</span></div><p class="internal-links">需要自行复测时，可参考 <a href="index.html#network">故障与线路技术说明</a>。</p></section>

    <section class="content-section review-section" id="unlock"><span class="section-kicker">04 · STREAMING & AI</span><h2>流媒体与 AI 解锁情况</h2><p>${item.unlockInfo || "官网未提供完整统一的解锁清单，本文不对未经验证的平台作确定性承诺。"}</p><div class="review-unlock-grid"><div><span>流媒体</span><b>Netflix / Disney+ / TikTok</b><p>按节点地区、出口 IP 和平台风控实时判断。</p></div><div><span>AI 服务</span><b>ChatGPT 与其他 AI 工具</b><p>还可能受到账号地区、IP 信誉和服务政策影响。</p></div></div></section>

    <section class="content-section review-section" id="topology"><span class="section-kicker">05 · NETWORK ROUTE</span><h2>IPLC / IEPL 网络拓扑示意</h2><div class="review-route" role="img" aria-label="${item.name}网络访问路径">${buildTopology(item)}</div><p class="route-note">这是根据官网披露信息绘制的逻辑示意，不代表真实机房地址、物理路由或保密网络配置。</p></section>

    <section class="content-section review-section" id="guide"><span class="section-kicker">06 · QUICK START</span><h2>从官网到连接的 3 个步骤</h2><ol class="review-steps">${item.steps.map((step, stepIndex) => `<li><span>${String(stepIndex + 1).padStart(2, "0")}</span><p>${step}</p></li>`).join("")}</ol><p class="internal-links">客户端安装与订阅导入请查看 <a href="index.html#clients">客户端教程</a>。</p></section>

    <section class="content-section review-section" id="troubleshoot"><span class="section-kicker">07 · TROUBLESHOOTING</span><h2>连接慢、断流或打不开怎么办</h2><ul class="checklist">${item.troubleshoot.map(problem => `<li>${problem}</li>`).join("")}</ul><div class="callout"><span>!</span><div><b>账号与订阅安全</b><p>不要把登录密码或完整订阅链接发给他人；排障前先保存错误时间、节点名称和客户端版本。</p></div></div></section>

    <section class="content-section review-section" id="faq"><span class="section-kicker">08 · FAQ</span><h2>关于 ${item.name} 的 5 个常见问题</h2><div class="review-faq-stack">${buildFaqs(item)}</div></section>

    <nav class="review-pagination" aria-label="深度测评翻页"><a href="review.html?id=${previous.id}"><span>← 上一篇</span><b>${previous.name}</b></a><a class="review-pagination-home" href="index.html#reviews"><span>全部 15 篇</span><b>返回深度测评</b></a><a class="next" href="review.html?id=${next.id}"><span>下一篇 →</span><b>${next.name}</b></a></nav>

    <section class="content-section other-reviews"><span class="section-kicker">MORE REVIEWS</span><h2>继续阅读其他机场评测</h2><div>${related}</div></section>
  `;

  reviewSectionNav.innerHTML = REVIEW_SECTIONS.map(([id, label], sectionIndex) => `<a href="#${id}"><span>${String(sectionIndex + 1).padStart(2, "0")}</span>${label}</a>`).join("");
  reviewToc.innerHTML = [...reviewRoot.querySelectorAll(".review-section h2")].map(heading => `<a href="#${heading.closest("section").id}">${heading.textContent}</a>`).join("");
  bindReviewNavigation();
  observeReviewSections();
}

function bindReviewNavigation() {
  [...reviewSectionNav.querySelectorAll("a"), ...reviewToc.querySelectorAll("a")].forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      document.querySelector(link.getAttribute("href"))?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function observeReviewSections() {
  reviewObserver?.disconnect();
  reviewObserver = new IntersectionObserver(entries => {
    const current = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!current) return;
    [...reviewSectionNav.querySelectorAll("a"), ...reviewToc.querySelectorAll("a")].forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${current.target.id}`));
  }, { rootMargin: "-18% 0px -65%", threshold: [0, .2, .6] });
  document.querySelectorAll(".review-section").forEach(section => reviewObserver.observe(section));
}

reviewMenu.addEventListener("click", () => {
  const open = reviewTopNav.classList.toggle("open");
  reviewMenu.setAttribute("aria-expanded", String(open));
});

window.addEventListener("scroll", () => {
  const doc = document.documentElement;
  const maximum = doc.scrollHeight - innerHeight;
  document.querySelector("#reading-progress").style.width = `${maximum > 0 ? (scrollY / maximum) * 100 : 0}%`;
}, { passive: true });

renderReview();
