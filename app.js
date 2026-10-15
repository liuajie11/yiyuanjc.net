const pages = {
  home: {
    label: "首页",
    badge: "2026 旗舰知识门户",
    title: "一元机场与技术知识库：专线测评、多端配置与 AI 工具指南",
    lead: "拒绝玄学推荐与夸大宣传。用统一标准核验 15 家专线服务，提供 Windows / iOS / macOS / Android 全平台客户端教程、20 款前沿 AI 生产力工具精选，以及网络故障排查与 IPLC 专线硬核技术手册。",
    nav: [
      "开始阅读",
      "TOP3-旗舰天梯榜",
      "全球15家机场全参数横评罗盘",
      "客户端全套教程",
      "AI工具生产力矩阵",
      "故障排查急救中心",
      "专线与协议技术解析"
    ],
    content: `
      <!-- 01 开始阅读 Hero -->
      <div class="hero-panel" id="开始阅读">
        <div>
          <span class="section-kicker" style="color:#c8ee57">YIYUAN TECH & AIRPORT INDEX</span>
          <h2>把复杂参数，变成简单判断</h2>
          <p>我们持续跟踪专线网络、多端客户端架构、前沿 AI 工具与常见网络故障。用统一标准呈现客观信息，为新手提供清晰入口，也为进阶用户保留硬核技术细节。</p>
          <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:16px">
            <a class="hero-cta" href="#airports">开始筛选机场 <span>→</span></a>
            <a class="hero-cta" href="#客户端全套教程" style="background:#e7f4ec;color:#176b46">客户端教程速查 <span>↓</span></a>
            <a class="hero-cta" href="#AI工具生产力矩阵" style="background:#e7f4ec;color:#176b46">20 款 AI 工具 <span>↓</span></a>
            <a class="hero-cta" href="#故障排查急救中心" style="background:#e7f4ec;color:#176b46">网络排错急救 <span>↓</span></a>
          </div>
        </div>
        <div class="radar" aria-hidden="true"><span class="sweep"></span><i></i><i></i><i></i></div>
      </div>

      <div class="stat-grid" aria-label="站点数据">
        <div class="stat-card"><strong>15 家</strong><span>后台核验专线服务</span></div>
        <div class="stat-card"><strong>4 大平台</strong><span>Win / Mac / iOS / Android 客户端</span></div>
        <div class="stat-card"><strong>20 款</strong><span>精选全球顶尖 AI 工具</span></div>
      </div>

      <!-- 02 TOP 3 旗舰天梯榜 (3家核心旗舰) -->
      <section class="content-section top4-ladder-wrap" id="TOP3-旗舰天梯榜">
        <span class="top4-header-badge">🏆 年度核心评测榜选</span>
        <div class="top4-header-row">
          <div>
            <h2 id="heading-top3-ladder">2026 机场综合实力天梯榜 (TOP 3 旗舰)</h2>
            <p>基于全网 15 家服务商 24h 自动化测速、丢包率、客服响应与防跑路综合评级甄选。</p>
          </div>
          <a class="top4-jump-link" href="#全球15家机场全参数横评罗盘">查看完整 15 家天梯罗盘 <span>→</span></a>
        </div>

        <div class="top4-grid">
          <!-- 01 速界机场 -->
          <article class="ladder-card rank-1">
            <div class="ladder-badge-pill badge-gold">🏅 综合第一 · 全能旗舰</div>
            <div class="ladder-brand-row">
              <div class="ladder-brand-left">
                <span class="ladder-brand-icon" style="color:#f59e0b">⚡</span>
                <div class="ladder-brand-text">
                  <h3>速界机场</h3>
                  <small>2026后台实测 · 全 IPLC 专线</small>
                </div>
              </div>
              <div class="ladder-score">
                <strong>★ 9.9</strong>
                <small>综合评级</small>
              </div>
            </div>
            <div class="ladder-specs">
              <div class="ladder-spec-row">
                <span class="ladder-spec-label">入门资费：</span>
                <span class="ladder-spec-val price">约¥6.0 / 月</span>
              </div>
              <div class="ladder-spec-row">
                <span class="ladder-spec-label">基础流量：</span>
                <span class="ladder-spec-val">60 GB / 月起</span>
              </div>
              <div class="ladder-spec-row">
                <span class="ladder-spec-label">专属优惠：</span>
                <span class="ladder-coupon-pill">sujie888 (8折)</span>
              </div>
            </div>
            <ul class="ladder-features">
              <li>全 IPLC 物理专线架构，最高 2.5Gbps 带宽</li>
              <li>VLESS / SS 协议，晚高峰 4K/8K 流媒体秒开</li>
              <li>实测 68/68 节点全部在线，原生 IP 解锁 Netflix/AI</li>
            </ul>
            <div class="ladder-actions">
              <a class="btn-ladder-review" href="review.html?id=speed">📖 深度评测</a>
              <a class="btn-ladder-official" href="https://lqy001.speedworldaff.com/#/register?code=p3EKNmlp" target="_blank" rel="noopener sponsored">直达官网 →</a>
            </div>
          </article>

          <!-- 02 边缘机场 -->
          <article class="ladder-card">
            <div class="ladder-badge-pill badge-copper">🥈 小而美轻量 · 稳定低丢包</div>
            <div class="ladder-brand-row">
              <div class="ladder-brand-left">
                <span class="ladder-brand-icon" style="color:#10b981">🍃</span>
                <div class="ladder-brand-text">
                  <h3>边缘机场</h3>
                  <small>2026后台实测 · 全 IPLC 专线</small>
                </div>
              </div>
              <div class="ladder-score">
                <strong>★ 9.8</strong>
                <small>综合评级</small>
              </div>
            </div>
            <div class="ladder-specs">
              <div class="ladder-spec-row">
                <span class="ladder-spec-label">入门资费：</span>
                <span class="ladder-spec-val price">约¥8.1 / 月</span>
              </div>
              <div class="ladder-spec-row">
                <span class="ladder-spec-label">基础流量：</span>
                <span class="ladder-spec-val">50 GB / 月起</span>
              </div>
              <div class="ladder-spec-row">
                <span class="ladder-spec-label">专属优惠：</span>
                <span class="ladder-coupon-pill">xk808 (9折)</span>
              </div>
            </div>
            <ul class="ladder-features">
              <li>小而美全 IPLC 专线，最高 2.5Gbps 带宽</li>
              <li>官网公开 4/4 线路全在线，状态透明先试后买</li>
              <li>支持 Win/Mac/iOS/Android 四端，设备连接数不限</li>
            </ul>
            <div class="ladder-actions">
              <a class="btn-ladder-review" href="review.html?id=edge">📖 深度评测</a>
              <a class="btn-ladder-official" href="https://zoio.edgenovaaff.cc/#/register?code=ti8OUEN2" target="_blank" rel="noopener sponsored">直达官网 →</a>
            </div>
          </article>

          <!-- 03 光年梯机场 -->
          <article class="ladder-card">
            <div class="ladder-badge-pill badge-green">🥉 进阶标杆 · 独享专线可选</div>
            <div class="ladder-brand-row">
              <div class="ladder-brand-left">
                <span class="ladder-brand-icon" style="color:#0ea5e9">🌴</span>
                <div class="ladder-brand-text">
                  <h3>光年梯机场</h3>
                  <small>2026后台实测 · 常规IPLC+独享IEPL</small>
                </div>
              </div>
              <div class="ladder-score">
                <strong>★ 9.7</strong>
                <small>综合评级</small>
              </div>
            </div>
            <div class="ladder-specs">
              <div class="ladder-spec-row">
                <span class="ladder-spec-label">入门资费：</span>
                <span class="ladder-spec-val price">约¥7.4 / 月</span>
              </div>
              <div class="ladder-spec-row">
                <span class="ladder-spec-label">基础流量：</span>
                <span class="ladder-spec-val">50 GB / 月起</span>
              </div>
              <div class="ladder-spec-row">
                <span class="ladder-spec-label">专属优惠：</span>
                <span class="ladder-coupon-pill" style="background:#e0f2fe;border-color:#7dd3fc;color:#0369a1">官网实时特惠</span>
              </div>
            </div>
            <ul class="ladder-features">
              <li>常规套餐全程 IPLC 专线，另提供独享私人 IEPL 专线</li>
              <li>实测 68 节点 (64 在线)，覆盖全流媒体与 AI 原生解锁</li>
              <li>支持全平台第三方客户端一键导入，支持软路由配置</li>
            </ul>
            <div class="ladder-actions">
              <a class="btn-ladder-review" href="review.html?id=guangnian">📖 深度评测</a>
              <a class="btn-ladder-official" href="http://liujie2002.gntaff.com/#/?code=NoPkovej" target="_blank" rel="noopener sponsored">直达官网 →</a>
            </div>
          </article>
        </div>
      </section>

      <!-- 03 15家机场全参数横评罗盘 (按照图2生成) -->
      <section class="content-section compass-wrap" id="全球15家机场全参数横评罗盘">
        <div class="compass-header">
          <div class="compass-title-row">
            <span style="font-size:22px">🌿</span>
            <h2 id="heading-compass-matrix">2026 全球 15 家机场全参数横评罗盘</h2>
            <span class="compass-badge">15家实测数据源</span>
          </div>
          <p>严格区分【年付折算价】与【真实月付价】· 附 2026 最新节点测速图与独家优惠码</p>
        </div>

        <!-- 筛选标签栏 (交互式过滤) -->
        <div class="compass-filter-bar">
          <button type="button" class="compass-filter-chip active" data-compass-filter="all">全部 15 家 (15)</button>
          <button type="button" class="compass-filter-chip" data-compass-filter="veteran">TOP3 旗舰专线 (3)</button>
          <button type="button" class="compass-filter-chip" data-compass-filter="under10">10元内年付 (10)</button>
          <button type="button" class="compass-filter-chip" data-compass-filter="around15">15元左右月付 (5)</button>
          <button type="button" class="compass-filter-chip" data-compass-filter="around20">20元主流月付 (7)</button>
          <button type="button" class="compass-filter-chip" data-compass-filter="pack150">25元 150GB 档 (4)</button>
          <button type="button" class="compass-filter-chip" data-compass-filter="ai">AI 重点场景 (4)</button>
          <button type="button" class="compass-filter-chip" data-compass-filter="iplc">全专线 IPLC/IEPL (10)</button>
        </div>

        <div class="compass-table-wrap">
          <table class="compass-table" id="compass-table">
            <thead>
              <tr>
                <th>机场品牌</th>
                <th>价格 / 类型</th>
                <th>月流量 / 线路</th>
                <th>协议</th>
                <th>独家优惠码</th>
                <th>实测图</th>
                <th>直达官网</th>
              </tr>
            </thead>
            <tbody>
              <!-- 01 速界机场 -->
              <tr data-cat="all veteran under10 around15 ai iplc">
                <td>
                  <div class="brand-cell">
                    <span class="compass-logo" style="background:linear-gradient(135deg,#6366f1,#4f46e5)">速</span>
                    <div class="brand-name-box">
                      <div class="brand-name-row">
                        <strong>速界机场</strong>
                        <a class="tag-review-badge" href="review.html?id=speed">评测</a>
                      </div>
                      <small>2026年实测</small>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="price-cell">
                    <span class="price-val-main">约 ¥6.0 / 月</span>
                    <span class="tag-price-badge">折后年付 (月付15)</span>
                  </div>
                </td>
                <td>
                  <div class="traffic-cell">
                    <strong>60 GB / 月</strong>
                    <small>全 IPLC 专线 (最高2.5G)</small>
                  </div>
                </td>
                <td><span class="protocol-pill">Shadowsocks / VLESS</span></td>
                <td>
                  <div class="coupon-cell-box">
                    <span class="coupon-code-pill">sujie888</span>
                    <button type="button" class="btn-copy-code" data-code="sujie888">复制</button>
                  </div>
                  <span class="coupon-desc">专属 8 折优惠码</span>
                </td>
                <td>
                  <a class="btn-speed-chart" href="review.html?id=speed#speed">📊 实测图</a>
                </td>
                <td>
                  <a class="btn-compass-official" href="https://lqy001.speedworldaff.com/#/register?code=p3EKNmlp" target="_blank" rel="noopener sponsored">直达官网 →</a>
                </td>
              </tr>

              <!-- 02 可信云机场 -->
              <tr data-cat="all under10 around15 ai iplc">
                <td>
                  <div class="brand-cell">
                    <span class="compass-logo" style="background:linear-gradient(135deg,#0284c7,#0369a1)">信</span>
                    <div class="brand-name-box">
                      <div class="brand-name-row">
                        <strong>可信云机场</strong>
                        <a class="tag-review-badge" href="review.html?id=kexin">评测</a>
                      </div>
                      <small>2026年实测</small>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="price-cell">
                    <span class="price-val-main">约 ¥8.0 / 月</span>
                    <span class="tag-price-badge">年付折算 (月付15)</span>
                  </div>
                </td>
                <td>
                  <div class="traffic-cell">
                    <strong>60 GB / 月</strong>
                    <small>全 IEPL 专线 (原生IP)</small>
                  </div>
                </td>
                <td><span class="protocol-pill">Shadowsocks / 专线</span></td>
                <td>
                  <div class="coupon-cell-box">
                    <span class="coupon-code-pill">kexin888</span>
                    <button type="button" class="btn-copy-code" data-code="kexin888">复制</button>
                  </div>
                  <span class="coupon-desc">首单月付/年付立减</span>
                </td>
                <td>
                  <a class="btn-speed-chart" href="review.html?id=kexin#speed">📊 实测图</a>
                </td>
                <td>
                  <a class="btn-compass-official" href="https://ermaozi01.kosingaff.com/#/register?code=FA6DjjDi" target="_blank" rel="noopener sponsored">直达官网 →</a>
                </td>
              </tr>

              <!-- 03 极连云机场 -->
              <tr data-cat="all under10 around20 pack150 iplc">
                <td>
                  <div class="brand-cell">
                    <span class="compass-logo" style="background:linear-gradient(135deg,#f97316,#ea580c)">极</span>
                    <div class="brand-name-box">
                      <div class="brand-name-row">
                        <strong>极连云机场</strong>
                        <a class="tag-review-badge" href="review.html?id=jilian">评测</a>
                      </div>
                      <small>2026年实测</small>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="price-cell">
                    <span class="price-val-main">约 ¥8.0 / 月</span>
                    <span class="tag-price-badge">年付折算 (月付18)</span>
                  </div>
                </td>
                <td>
                  <div class="traffic-cell">
                    <strong>100 GB / 月</strong>
                    <small>全 IPLC 专线 (最高2.5G)</small>
                  </div>
                </td>
                <td><span class="protocol-pill">VLESS / Shadowsocks</span></td>
                <td>
                  <div class="coupon-cell-box">
                    <span class="coupon-code-pill" style="font-size:11px;color:#0369a1;background:#f0f9ff;border-color:#bae6fd">官网特惠</span>
                  </div>
                  <span class="coupon-desc">以官网实时结账为准</span>
                </td>
                <td>
                  <a class="btn-speed-chart" href="review.html?id=jilian#speed">📊 实测图</a>
                </td>
                <td>
                  <a class="btn-compass-official" href="https://liujie2002.jlyvipaff.com/#/?code=0MxRdXiu" target="_blank" rel="noopener sponsored">直达官网 →</a>
                </td>
              </tr>

              <!-- 04 边缘节点 (边缘机场) -->
              <tr data-cat="all veteran under10 around15 ai iplc">
                <td>
                  <div class="brand-cell">
                    <span class="compass-logo" style="background:linear-gradient(135deg,#10b981,#059669)">边</span>
                    <div class="brand-name-box">
                      <div class="brand-name-row">
                        <strong>边缘节点</strong>
                        <a class="tag-review-badge" href="review.html?id=edge">评测</a>
                      </div>
                      <small>2026年实测</small>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="price-cell">
                    <span class="price-val-main">约 ¥8.1 / 月</span>
                    <span class="tag-price-badge">年付折算 (月付15)</span>
                  </div>
                </td>
                <td>
                  <div class="traffic-cell">
                    <strong>50 GB / 月</strong>
                    <small>全 IPLC 专线 (原生IP)</small>
                  </div>
                </td>
                <td><span class="protocol-pill">Shadowsocks / 专线</span></td>
                <td>
                  <div class="coupon-cell-box">
                    <span class="coupon-code-pill">xk808</span>
                    <button type="button" class="btn-copy-code" data-code="xk808">复制</button>
                  </div>
                  <span class="coupon-desc">官网专属 9 折优惠码</span>
                </td>
                <td>
                  <a class="btn-speed-chart" href="review.html?id=edge#speed">📊 实测图</a>
                </td>
                <td>
                  <a class="btn-compass-official" href="https://zoio.edgenovaaff.cc/#/register?code=ti8OUEN2" target="_blank" rel="noopener sponsored">直达官网 →</a>
                </td>
              </tr>

              <!-- 05 快狸机场 -->
              <tr data-cat="all under10 around15 iplc">
                <td>
                  <div class="brand-cell">
                    <span class="compass-logo" style="background:linear-gradient(135deg,#ea580c,#c2410c)">狸</span>
                    <div class="brand-name-box">
                      <div class="brand-name-row">
                        <strong>快狸机场</strong>
                        <a class="tag-review-badge" href="review.html?id=kuaili">评测</a>
                      </div>
                      <small>2026年实测</small>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="price-cell">
                    <span class="price-val-main">约 ¥10.0 / 月</span>
                    <span class="tag-price-badge">年付折算 (月付15)</span>
                  </div>
                </td>
                <td>
                  <div class="traffic-cell">
                    <strong>50 GB / 月</strong>
                    <small>全 IEPL 专线 (67在线)</small>
                  </div>
                </td>
                <td><span class="protocol-pill">Shadowsocks / 专线</span></td>
                <td>
                  <div class="coupon-cell-box">
                    <span class="coupon-code-pill">kuaili996</span>
                    <button type="button" class="btn-copy-code" data-code="kuaili996">复制</button>
                  </div>
                  <span class="coupon-desc">后台结账页输入可用</span>
                </td>
                <td>
                  <a class="btn-speed-chart" href="review.html?id=kuaili#speed">📊 实测图</a>
                </td>
                <td>
                  <a class="btn-compass-official" href="https://yyo649929.kuailiaff.com/#/register?code=JVuUcHke" target="_blank" rel="noopener sponsored">直达官网 →</a>
                </td>
              </tr>

              <!-- 06 光年梯机场 -->
              <tr data-cat="all veteran under10 around20 iplc">
                <td>
                  <div class="brand-cell">
                    <span class="compass-logo" style="background:linear-gradient(135deg,#0284c7,#0369a1)">光</span>
                    <div class="brand-name-box">
                      <div class="brand-name-row">
                        <strong>光年梯机场</strong>
                        <a class="tag-review-badge" href="review.html?id=guangnian">评测</a>
                      </div>
                      <small>2026年实测</small>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="price-cell">
                    <span class="price-val-main">约 ¥7.4 / 月</span>
                    <span class="tag-price-badge">年付折算 (月付18)</span>
                  </div>
                </td>
                <td>
                  <div class="traffic-cell">
                    <strong>110 GB / 月</strong>
                    <small>全 IPLC (另有独享IEPL)</small>
                  </div>
                </td>
                <td><span class="protocol-pill">VLESS / IPLC</span></td>
                <td>
                  <div class="coupon-cell-box">
                    <span class="coupon-code-pill" style="font-size:11px;color:#0369a1;background:#f0f9ff;border-color:#bae6fd">官网特惠</span>
                  </div>
                  <span class="coupon-desc">以官网实时结账为准</span>
                </td>
                <td>
                  <a class="btn-speed-chart" href="review.html?id=guangnian#speed">📊 实测图</a>
                </td>
                <td>
                  <a class="btn-compass-official" href="http://liujie2002.gntaff.com/#/?code=NoPkovej" target="_blank" rel="noopener sponsored">直达官网 →</a>
                </td>
              </tr>

              <!-- 07 云图机场 -->
              <tr data-cat="all around20 pack150">
                <td>
                  <div class="brand-cell">
                    <span class="compass-logo" style="background:linear-gradient(135deg,#6366f1,#4f46e5)">图</span>
                    <div class="brand-name-box">
                      <div class="brand-name-row">
                        <strong>云图机场</strong>
                        <a class="tag-review-badge" href="review.html?id=yuntu">评测</a>
                      </div>
                      <small>2026年实测</small>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="price-cell">
                    <span class="price-val-main">约 ¥20.0 / 月</span>
                    <span class="tag-price-badge">真实月付</span>
                  </div>
                </td>
                <td>
                  <div class="traffic-cell">
                    <strong>150 GB / 月</strong>
                    <small>三网优化线路 (38接入点)</small>
                  </div>
                </td>
                <td><span class="protocol-pill">Shadowsocks / Trojan</span></td>
                <td>
                  <div class="coupon-cell-box">
                    <span class="coupon-code-pill">yuntu666</span>
                    <button type="button" class="btn-copy-code" data-code="yuntu666">复制</button>
                  </div>
                  <span class="coupon-desc">新用户注册立减</span>
                </td>
                <td>
                  <a class="btn-speed-chart" href="review.html?id=yuntu#speed">📊 实测图</a>
                </td>
                <td>
                  <a class="btn-compass-official" href="https://super.ytjcok.org/#/register?code=iKpNlXer" target="_blank" rel="noopener sponsored">直达官网 →</a>
                </td>
              </tr>

              <!-- 08 云界线机场 -->
              <tr data-cat="all under10 pack150 iplc">
                <td>
                  <div class="brand-cell">
                    <span class="compass-logo" style="background:linear-gradient(135deg,#0ea5e9,#0284c7)">界</span>
                    <div class="brand-name-box">
                      <div class="brand-name-row">
                        <strong>云界线机场</strong>
                        <a class="tag-review-badge" href="review.html?id=yunjiexian">评测</a>
                      </div>
                      <small>2026年实测</small>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="price-cell">
                    <span class="price-val-main">约 ¥8.0 / 月</span>
                    <span class="tag-price-badge">年付折算 (月付25)</span>
                  </div>
                </td>
                <td>
                  <div class="traffic-cell">
                    <strong>150 GB / 月</strong>
                    <small>全 IPLC 专线 (50在线)</small>
                  </div>
                </td>
                <td><span class="protocol-pill">Shadowsocks / IPLC</span></td>
                <td>
                  <div class="coupon-cell-box">
                    <span class="coupon-code-pill">yjx888</span>
                    <button type="button" class="btn-copy-code" data-code="yjx888">复制</button>
                  </div>
                  <span class="coupon-desc">首单享 88 折优惠</span>
                </td>
                <td>
                  <a class="btn-speed-chart" href="review.html?id=yunjiexian#speed">📊 实测图</a>
                </td>
                <td>
                  <a class="btn-compass-official" href="https://youxia01.yunjiexianaff.com/#/?code=8ImGvubv" target="_blank" rel="noopener sponsored">直达官网 →</a>
                </td>
              </tr>

              <!-- 09 大佬云机场 -->
              <tr data-cat="all under10 around20 iplc">
                <td>
                  <div class="brand-cell">
                    <span class="compass-logo" style="background:linear-gradient(135deg,#f43f5e,#e11d48)">佬</span>
                    <div class="brand-name-box">
                      <div class="brand-name-row">
                        <strong>大佬云机场</strong>
                        <a class="tag-review-badge" href="review.html?id=dalao">评测</a>
                      </div>
                      <small>2026年实测</small>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="price-cell">
                    <span class="price-val-main">约 ¥8.0 / 月</span>
                    <span class="tag-price-badge">年付折算 (月付19.99)</span>
                  </div>
                </td>
                <td>
                  <div class="traffic-cell">
                    <strong>100 GB / 月</strong>
                    <small>全 IPLC/IEPL 专线</small>
                  </div>
                </td>
                <td><span class="protocol-pill">Shadowsocks / 专线</span></td>
                <td>
                  <div class="coupon-cell-box">
                    <span class="coupon-code-pill">dalao888</span>
                    <button type="button" class="btn-copy-code" data-code="dalao888">复制</button>
                  </div>
                  <span class="coupon-desc">限时直减优惠券</span>
                </td>
                <td>
                  <a class="btn-speed-chart" href="review.html?id=dalao#speed">📊 实测图</a>
                </td>
                <td>
                  <a class="btn-compass-official" href="https://liu01.dalaoyunaff.com/#/?code=9A9fbKzz" target="_blank" rel="noopener sponsored">直达官网 →</a>
                </td>
              </tr>

              <!-- 10 环球梯机场 -->
              <tr data-cat="all under10 around20">
                <td>
                  <div class="brand-cell">
                    <span class="compass-logo" style="background:linear-gradient(135deg,#10b981,#059669)">环</span>
                    <div class="brand-name-box">
                      <div class="brand-name-row">
                        <strong>环球梯机场</strong>
                        <a class="tag-review-badge" href="review.html?id=huanqiu">评测</a>
                      </div>
                      <small>2026年实测</small>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="price-cell">
                    <span class="price-val-main">约 ¥8.0 / 月</span>
                    <span class="tag-price-badge">年付折算 (月付22)</span>
                  </div>
                </td>
                <td>
                  <div class="traffic-cell">
                    <strong>140 GB / 月</strong>
                    <small>BGP 多运营商融合</small>
                  </div>
                </td>
                <td><span class="protocol-pill">Trojan / VMess</span></td>
                <td>
                  <div class="coupon-cell-box">
                    <span class="coupon-code-pill">hq888</span>
                    <button type="button" class="btn-copy-code" data-code="hq888">复制</button>
                  </div>
                  <span class="coupon-desc">学生专属特惠</span>
                </td>
                <td>
                  <a class="btn-speed-chart" href="review.html?id=huanqiu#speed">📊 实测图</a>
                </td>
                <td>
                  <a class="btn-compass-official" href="https://123pps01.huanqiutiaff.com/#/?code=iJzShI5m" target="_blank" rel="noopener sponsored">直达官网 →</a>
                </td>
              </tr>

              <!-- 11 榴莲云机场 -->
              <tr data-cat="all under10 around20 ai iplc">
                <td>
                  <div class="brand-cell">
                    <span class="compass-logo" style="background:linear-gradient(135deg,#eab308,#ca8a04)">榴</span>
                    <div class="brand-name-box">
                      <div class="brand-name-row">
                        <strong>榴莲云机场</strong>
                        <a class="tag-review-badge" href="review.html?id=liulian">评测</a>
                      </div>
                      <small>2026年实测</small>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="price-cell">
                    <span class="price-val-main">约 ¥8.0 / 月</span>
                    <span class="tag-price-badge">年付折算 (月付24)</span>
                  </div>
                </td>
                <td>
                  <div class="traffic-cell">
                    <strong>140 GB / 月</strong>
                    <small>全 IPLC (原生IP)</small>
                  </div>
                </td>
                <td><span class="protocol-pill">Shadowsocks / 原生IP</span></td>
                <td>
                  <div class="coupon-cell-box">
                    <span class="coupon-code-pill">liulian888</span>
                    <button type="button" class="btn-copy-code" data-code="liulian888">复制</button>
                  </div>
                  <span class="coupon-desc">金枕小包特惠折扣</span>
                </td>
                <td>
                  <a class="btn-speed-chart" href="review.html?id=liulian#speed">📊 实测图</a>
                </td>
                <td>
                  <a class="btn-compass-official" href="http://853vip01.liulianyunaff.com/#/?code=O6mS8K5N" target="_blank" rel="noopener sponsored">直达官网 →</a>
                </td>
              </tr>

              <!-- 12 神行加速 -->
              <tr data-cat="all under10 around20 pack150 iplc">
                <td>
                  <div class="brand-cell">
                    <span class="compass-logo" style="background:linear-gradient(135deg,#3b82f6,#1d4ed8)">神</span>
                    <div class="brand-name-box">
                      <div class="brand-name-row">
                        <strong>神行加速</strong>
                        <a class="tag-review-badge" href="review.html?id=shenxing">评测</a>
                      </div>
                      <small>2026年实测</small>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="price-cell">
                    <span class="price-val-main">约 ¥8.0 / 月</span>
                    <span class="tag-price-badge">年付折算 (月付23)</span>
                  </div>
                </td>
                <td>
                  <div class="traffic-cell">
                    <strong>150 GB / 月</strong>
                    <small>全 IPLC 专线 (50在线)</small>
                  </div>
                </td>
                <td><span class="protocol-pill">Shadowsocks / 原生IP</span></td>
                <td>
                  <div class="coupon-cell-box">
                    <span class="coupon-code-pill">shenxing666</span>
                    <button type="button" class="btn-copy-code" data-code="shenxing666">复制</button>
                  </div>
                  <span class="coupon-desc">尝鲜包专属折扣</span>
                </td>
                <td>
                  <a class="btn-speed-chart" href="review.html?id=shenxing#speed">📊 实测图</a>
                </td>
                <td>
                  <a class="btn-compass-official" href="https://fugui0077.shenxingaff.com/#/?code=z3ybkLVj" target="_blank" rel="noopener sponsored">直达官网 →</a>
                </td>
              </tr>

              <!-- 13 鲲鹏加速 -->
              <tr data-cat="all">
                <td>
                  <div class="brand-cell">
                    <span class="compass-logo" style="background:linear-gradient(135deg,#10b981,#047857)">鲲</span>
                    <div class="brand-name-box">
                      <div class="brand-name-row">
                        <strong>鲲鹏加速</strong>
                        <a class="tag-review-badge" href="review.html?id=kunpeng">评测</a>
                      </div>
                      <small>2026年实测</small>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="price-cell">
                    <span class="price-val-main">官网实时</span>
                    <span class="tag-price-badge" style="background:#fee2e2;color:#991b1b">待复核</span>
                  </div>
                </td>
                <td>
                  <div class="traffic-cell">
                    <strong>多语言后台</strong>
                    <small>待登录后台核验</small>
                  </div>
                </td>
                <td><span class="protocol-pill" style="color:#64748b;border-color:#cbd5e1">待后台核验</span></td>
                <td>
                  <div class="coupon-cell-box">
                    <span class="coupon-code-pill">99UgsawR</span>
                    <button type="button" class="btn-copy-code" data-code="99UgsawR">复制</button>
                  </div>
                  <span class="coupon-desc">注册邀请码自动带入</span>
                </td>
                <td>
                  <a class="btn-speed-chart" href="review.html?id=kunpeng#speed">📊 实测图</a>
                </td>
                <td>
                  <a class="btn-compass-official" href="https://kunpengjiasu.com/#/register?code=99UgsawR" target="_blank" rel="noopener sponsored">直达官网 →</a>
                </td>
              </tr>

              <!-- 14 瞬云机场 -->
              <tr data-cat="all">
                <td>
                  <div class="brand-cell">
                    <span class="compass-logo" style="background:linear-gradient(135deg,#8b5cf6,#6d28d9)">瞬</span>
                    <div class="brand-name-box">
                      <div class="brand-name-row">
                        <strong>瞬云机场</strong>
                        <a class="tag-review-badge" href="review.html?id=shunyun">评测</a>
                      </div>
                      <small>2026年实测</small>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="price-cell">
                    <span class="price-val-main">官网实时</span>
                    <span class="tag-price-badge" style="background:#fee2e2;color:#991b1b">待复核</span>
                  </div>
                </td>
                <td>
                  <div class="traffic-cell">
                    <strong>动态入口检测</strong>
                    <small>待登录后台核验</small>
                  </div>
                </td>
                <td><span class="protocol-pill" style="color:#64748b;border-color:#cbd5e1">待后台核验</span></td>
                <td>
                  <div class="coupon-cell-box">
                    <span class="coupon-code-pill">7idBwf3R</span>
                    <button type="button" class="btn-copy-code" data-code="7idBwf3R">复制</button>
                  </div>
                  <span class="coupon-desc">官方优惠码待复核</span>
                </td>
                <td>
                  <a class="btn-speed-chart" href="review.html?id=shunyun#speed">📊 实测图</a>
                </td>
                <td>
                  <a class="btn-compass-official" href="https://ddd.jichang.best/#/register?code=7idBwf3R" target="_blank" rel="noopener sponsored">直达官网 →</a>
                </td>
              </tr>

              <!-- 15 闪电鼠机场 -->
              <tr data-cat="all">
                <td>
                  <div class="brand-cell">
                    <span class="compass-logo" style="background:linear-gradient(135deg,#ec4899,#be185d)">闪</span>
                    <div class="brand-name-box">
                      <div class="brand-name-row">
                        <strong>闪电鼠机场</strong>
                        <a class="tag-review-badge" href="review.html?id=shandian">评测</a>
                      </div>
                      <small>2026年实测</small>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="price-cell">
                    <span class="price-val-main">官网实时</span>
                    <span class="tag-price-badge" style="background:#fee2e2;color:#991b1b">待复核</span>
                  </div>
                </td>
                <td>
                  <div class="traffic-cell">
                    <strong>6 条入口恢复</strong>
                    <small>后台待复核验证</small>
                  </div>
                </td>
                <td><span class="protocol-pill" style="color:#64748b;border-color:#cbd5e1">待后台核验</span></td>
                <td>
                  <div class="coupon-cell-box">
                    <span class="coupon-code-pill">qNodU3f6</span>
                    <button type="button" class="btn-copy-code" data-code="qNodU3f6">复制</button>
                  </div>
                  <span class="coupon-desc">优惠以官网结账为准</span>
                </td>
                <td>
                  <a class="btn-speed-chart" href="review.html?id=shandian#speed">📊 实测图</a>
                </td>
                <td>
                  <a class="btn-compass-official" href="https://eothvip01.shandianshuaff.com/#/?code=qNodU3f6" target="_blank" rel="noopener sponsored">直达官网 →</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 03 客户端全套教程 -->
      <section class="content-section" id="客户端全套教程">
        <div class="tutorial-header-bar">
          <div class="tutorial-title-group">
            <span class="section-kicker">CLIENT CONFIGURATION</span>
            <h2 id="heading-home-clients">客户端全套教程：多平台配置速查</h2>
            <span class="platform-tag">Win / Mac / iOS / Android</span>
          </div>
          <a class="back-top-link" href="#clients">查看详细客户端图文教程 ↗</a>
        </div>
        <p>代理客户端不仅是一个开关，更是本地分流路由中枢。根据你的操作系统选择最成熟的工具，并掌握核心配置流程：</p>

        <div class="client-quick-nav">
          <a class="client-quick-card" href="#clients">
            <div class="c-icon c-verge">CV</div>
            <div class="c-meta"><strong>Clash Verge Rev</strong><span>Win / Mac 现代桌面主力 · 内置 Mihomo</span></div>
            <span class="c-arrow">→</span>
          </a>
          <a class="client-quick-card" href="#clients">
            <div class="c-icon c-rocket">SR</div>
            <div class="c-meta"><strong>Shadowrocket (小火箭)</strong><span>iOS 移动端神器 · 严禁在 iCloud 登外区 ID</span></div>
            <span class="c-arrow">→</span>
          </a>
          <a class="client-quick-card" href="#clients">
            <div class="c-icon c-v2ray">V2</div>
            <div class="c-meta"><strong>v2rayN Windows</strong><span>极客经典 · 真实延迟测试 (Ctrl+R)</span></div>
            <span class="c-arrow">→</span>
          </a>
          <a class="client-quick-card" href="#clients">
            <div class="c-icon c-android">AN</div>
            <div class="c-meta"><strong>安卓手机选型</strong><span>CMFA / SFA / v2rayNG · 后台保活白名单</span></div>
            <span class="c-arrow">→</span>
          </a>
          <a class="client-quick-card" href="#clients">
            <div class="c-icon c-mac">MC</div>
            <div class="c-meta"><strong>Mac 苹果电脑配置</strong><span>Apple Silicon 原生 · 终端 export 代理</span></div>
            <span class="c-arrow">→</span>
          </a>
          <a class="client-quick-card" href="#clients">
            <div class="c-icon c-singbox">SB</div>
            <div class="c-meta"><strong>sing-box 极速上手</strong><span>下一代全能网络引擎 · TUIC / Hysteria2</span></div>
            <span class="c-arrow">→</span>
          </a>
        </div>

        <div class="step-flow-list">
          <div class="step-item">
            <div class="step-num">01</div>
            <div class="step-body">
              <h4>系统代理 (System Proxy) vs TUN 虚拟网卡模式</h4>
              <p>浏览器走代理但终端/游戏/微信不走代理？系统代理仅接管主动读取设置的浏览器；若需全局无死角透明代理，请在客户端中安装服务并开启 <b>TUN 虚拟网卡模式</b>。</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-num">02</div>
            <div class="step-body">
              <h4>分流规则三大核心：Rule 智能 / Direct 直连 / Global 全局</h4>
              <p>日常请常驻 <b>「规则 (Rule / Routing)」模式</b>，国内流量走本地直连，海外受阻流量走节点；遇到冷门外网打不开时临时用 Global 排查，严禁长期开全局浪费节点流量。</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 04 AI工具生产力矩阵 -->
      <section class="content-section" id="AI工具生产力矩阵">
        <div class="tutorial-header-bar">
          <div class="tutorial-title-group">
            <span class="section-kicker">AI PRODUCTIVITY MATRIX</span>
            <h2 id="heading-home-ai">AI 工具生产力矩阵：四大领域 20 款精选</h2>
            <span class="platform-tag">写作 · 编程 · 图像 · 搜索</span>
          </div>
          <a class="back-top-link" href="#ai">查看 20 款 AI 深度功能与优势 ↗</a>
        </div>
        <p>汇集全球知名度最高、实用性最强的 20 款顶尖 AI 工具，点击对应分类卡片可直达官网使用：</p>

        <div class="ai-hub-grid">
          <div class="ai-hub-card">
            <div class="icon-chip">文</div>
            <h3>写作与研究 TOP 5</h3>
            <p>提纲构思、学术研报、长文润色、逻辑梳理与文献综述。</p>
            <div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap">
              <a class="tag" href="https://chatgpt.com" target="_blank" rel="noopener noreferrer">ChatGPT (o1/o3) ↗</a>
              <a class="tag" href="https://claude.ai" target="_blank" rel="noopener noreferrer">Claude 3.7 Sonnet ↗</a>
              <a class="tag" href="https://chat.deepseek.com" target="_blank" rel="noopener noreferrer">DeepSeek-R1 ↗</a>
              <a class="tag" href="https://www.notion.so" target="_blank" rel="noopener noreferrer">Notion AI ↗</a>
              <a class="tag" href="https://kimi.moonshot.cn" target="_blank" rel="noopener noreferrer">Kimi 百万长文本 ↗</a>
            </div>
          </div>

          <div class="ai-hub-card">
            <div class="icon-chip">码</div>
            <h3>编程助手 TOP 5</h3>
            <p>全代码库索引、多文件协同重构、原型秒级实现与终端 Agent。</p>
            <div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap">
              <a class="tag" href="https://www.cursor.com" target="_blank" rel="noopener noreferrer">Cursor AI IDE ↗</a>
              <a class="tag" href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer">GitHub Copilot ↗</a>
              <a class="tag" href="https://codeium.com/windsurf" target="_blank" rel="noopener noreferrer">Windsurf Cascade ↗</a>
              <a class="tag" href="https://v0.dev" target="_blank" rel="noopener noreferrer">v0 by Vercel ↗</a>
              <a class="tag" href="https://aider.chat" target="_blank" rel="noopener noreferrer">Aider 终端智能体 ↗</a>
            </div>
          </div>

          <div class="ai-hub-card">
            <div class="icon-chip">图</div>
            <h3>图像生成 TOP 5</h3>
            <p>商业电影级艺术概念、超写真人像、矢量图标与排版设计。</p>
            <div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap">
              <a class="tag" href="https://www.midjourney.com" target="_blank" rel="noopener noreferrer">Midjourney v6 ↗</a>
              <a class="tag" href="https://blackforestlabs.ai" target="_blank" rel="noopener noreferrer">FLUX.1 开源新王 ↗</a>
              <a class="tag" href="https://stability.ai" target="_blank" rel="noopener noreferrer">Stable Diffusion 3.5 ↗</a>
              <a class="tag" href="https://openai.com/dall-e-3" target="_blank" rel="noopener noreferrer">DALL·E 3 ↗</a>
              <a class="tag" href="https://www.recraft.ai" target="_blank" rel="noopener noreferrer">Recraft 矢量生成 ↗</a>
            </div>
          </div>

          <div class="ai-hub-card">
            <div class="icon-chip">搜</div>
            <h3>智能搜索 TOP 5</h3>
            <p>对话式穿透检索、权威信源脚注、长程行业调研与思维导图。</p>
            <div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap">
              <a class="tag" href="https://www.perplexity.ai" target="_blank" rel="noopener noreferrer">Perplexity AI ↗</a>
              <a class="tag" href="https://www.genspark.ai" target="_blank" rel="noopener noreferrer">Genspark 研报页 ↗</a>
              <a class="tag" href="https://felo.ai" target="_blank" rel="noopener noreferrer">Felo 跨语言搜索 ↗</a>
              <a class="tag" href="https://kimi.moonshot.cn" target="_blank" rel="noopener noreferrer">Kimi 探索版 ↗</a>
              <a class="tag" href="https://gemini.google.com" target="_blank" rel="noopener noreferrer">Google Gemini ↗</a>
            </div>
          </div>
        </div>
      </section>

      <!-- 05 故障排查急救中心 -->
      <section class="content-section" id="故障排查急救中心">
        <div class="tutorial-header-bar">
          <div class="tutorial-title-group">
            <span class="section-kicker">TROUBLESHOOTING CENTER</span>
            <h2 id="heading-home-trouble">故障排查急救中心：六大突发问题速查</h2>
            <span class="platform-tag">急救手册 · 5 分钟决策流</span>
          </div>
          <a class="back-top-link" href="#network">查看完整 11 项技术专栏 ↗</a>
        </div>
        <p>遇到网络突发故障，按以下高频场景快速定位解决，避免反复玄学重启：</p>

        <div class="troubleshoot-grid">
          <div class="trouble-card">
            <strong>场景 1：节点全部标红 / 全部超时 (Timeout)？</strong>
            <p>① <b>核对系统时间：</b>TLS 加密要求本机时间与标准时间误差小于 60 秒，打开系统设置点击“立即同步时间”；② <b>套餐核验：</b>确认是否月初未续费或可用流量已用光；③ <b>防火墙：</b>杀毒软件拦截了 <code>mihomo.exe</code>，添加至白名单。</p>
          </div>
          <div class="trouble-card">
            <strong>场景 2：订阅更新提示 Network Error / 进度卡死？</strong>
            <p>① <b>解除代理死锁：</b>先在客户端主界面暂时关闭系统代理，或点击“不通过代理更新”；② <b>跳过证书：</b>在订阅分组中勾选开启“跳过证书验证 (AllowInsecure)”；③ <b>离线导入：</b>把订阅链接粘贴至浏览器下载 <code>.yaml</code> 本地导入。</p>
          </div>
          <div class="trouble-card">
            <strong>场景 3：连 Wi-Fi 正常，切到手机 4G/5G 流量瞬间断网？</strong>
            <p>① <b>iOS 蜂窝权限：</b>iPhone 打开「设置」->「蜂窝网络」-> 找到客户端勾选「无线局域网与蜂窝数据」；② <b>APN 冲突：</b>手机 APN 设置由纯 IPv6 改为 IPv4/IPv6 双栈；③ <b>重启飞行模式：</b>开启飞行模式 10 秒后关闭，强制重置基带与路由。</p>
          </div>
          <div class="trouble-card">
            <strong>场景 4：Google 能开，但特定国外网站打不开？</strong>
            <p>① <b>分流未命中：</b>该小众网站未被规则收录误走直连，切到 Global 全局模式测试，生效后添加 <code>DOMAIN-SUFFIX</code> 代理规则；② <b>刷新污染缓存：</b>Windows 运行 <code>ipconfig /flushdns</code>，Mac 终端执行 <code>sudo dscacheutil -flushcache</code>。</p>
          </div>
          <div class="trouble-card">
            <strong>场景 5：Google 搜索频繁弹出 reCAPTCHA 验证码？</strong>
            <p>这是因为公共机房万人共享的出口 IP 被风控拉低了信誉分。在客户端策略组中为 <code>google.com</code> 与 <code>scholar.google.com</code> 单独绑定一条低负载的香港或新加坡原生独立专线，并开启 TUN+UDP 恢复 HTTP/3 (QUIC)。</p>
          </div>
          <div class="trouble-card">
            <strong>场景 6：命令行 Git clone 速度极慢或直接超时？</strong>
            <p>终端默认不走系统代理。运行命令设置局部代理：<br/>
            <code>git config --global http.https://github.com.proxy http://127.0.0.1:7890</code><br/>
            或在 Clash Verge / sing-box 中直接开启 <b>TUN 虚拟网卡模式</b>，实现全局透明加速。</p>
          </div>
        </div>
      </section>

      <!-- 06 专线与协议技术解析 -->
      <section class="content-section" id="专线与协议技术解析">
        <div class="tutorial-header-bar">
          <div class="tutorial-title-group">
            <span class="section-kicker">NETWORK ENGINEERING</span>
            <h2 id="heading-home-tech">专线与协议技术解析：看懂底层通信架构</h2>
            <span class="platform-tag">IPLC / IEPL · 原生住宅家宽 · SS / VLESS / Hysteria2</span>
          </div>
          <a class="back-top-link" href="#network">查看专线与协议深度解析 ↗</a>
        </div>
        <p>理解线路与协议底层差异，建立自己的独立判断标准：</p>

        <table class="comparison">
          <thead>
            <tr>
              <th>核心概念</th>
              <th>网络通信原理与本质特征</th>
              <th>晚高峰稳定性表现</th>
              <th>适用场景与选型建议</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>IPLC / IEPL 物理专线</strong></td>
              <td>物理海底光缆/陆缆点对点内网互联，<b>完全不经过公网 GFW 审查</b>。</td>
              <td>丢包率持续低于 0.5%，延迟波动稳定在 1-3ms 以内，无断流风险。</td>
              <td>办公主力、对稳定性要求极高、晚高峰 4K 流媒体与跨国业务首选。</td>
            </tr>
            <tr>
              <td><strong>原生 IP vs 住宅家宽</strong></td>
              <td>原生 IP 注册地与物理机房一致；住宅家庭宽带属于当地电信民用宽带。</td>
              <td>信誉分极高，远离 Cloudflare 5 秒盾与 1020 拦截。</td>
              <td>海外 TikTok 电商、Stripe 跨境支付、高风控网银与 AI 解锁。</td>
            </tr>
            <tr>
              <td><strong>Shadowsocks (SS) 协议</strong></td>
              <td>对称加密轻量协议，无多余包裹握手，性能开销最小、吞吐极大。</td>
              <td>在物理专线内部是性能之王；公网直连容易被识别封锁。</td>
              <td>IPLC / IEPL 物理内网专线的标准黄金搭配。</td>
            </tr>
            <tr>
              <td><strong>VLESS + Reality 协议</strong></td>
              <td>借用合规知名网站（Apple/微软）的真实 TLS 证书与握手特征进行伪装。</td>
              <td>抗封锁与抗深度包检测 (DPI) 性能业界天花板。</td>
              <td>长城公网直连或中转环境下的顶级防封隐蔽协议。</td>
            </tr>
            <tr>
              <td><strong>Hysteria 2 / TUIC v5</strong></td>
              <td>基于 UDP 与自研激进拥塞控制，在 20%-40% 极高丢包率下仍能强行打满带宽。</td>
              <td>速度爆发力极强，专治恶劣公网与弱网环境。</td>
              <td>校园网、移动恶劣网络冲刺利器；部分企业内网会阻断 UDP。</td>
            </tr>
          </tbody>
        </table>
      </section>`
  },
  airports: {
    label: "机场推荐",
    badge: "2026 精选收录",
    title: "机场推荐：精选 15 家机场综合推荐与速查指南",
    lead: "拒绝虚假宣传与单一截图。基于 15 家深度测评实测数据、后台节点在线率、专线类型与真实套餐门槛，为你提供清晰、可验证的选购清单与直达链接。",
    nav: ["15家精选推荐", "速查对比矩阵", "选购建议", "按预算选择", "核心指标", "避坑清单"],
    content: `
      <section class="content-section" id="15家精选推荐">
        <span class="section-kicker">2026 VERIFIED PICKS</span>
        <h2>15 家精选机场综合推荐</h2>
        <p>基于后台实测、专线协议、节点在线率与套餐门槛综合排序。点击卡片可直达官网注册，或进入独立测评报告查看测速、拓扑、客户端与 FAQ。</p>
        
        <div class="airport-filter-bar">
          <button type="button" class="filter-btn active" data-filter="all">全部 15 家 <span class="filter-count">15</span></button>
          <button type="button" class="filter-btn" data-filter="iplc-iepl">全专线 IPLC/IEPL <span class="filter-count">10</span></button>
          <button type="button" class="filter-btn" data-filter="budget">¥15-20 月付起 <span class="filter-count">7</span></button>
          <button type="button" class="filter-btn" data-filter="unlimited">不限设备/四端 <span class="filter-count">6</span></button>
          <button type="button" class="filter-btn" data-filter="pending">待核验观察 <span class="filter-count">3</span></button>
        </div>

        <div class="airport-rec-list">
          <!-- 01 速界机场 -->
          <article class="airport-rec-card" data-category="all iplc-iepl budget unlimited">
            <div class="rec-top-meta">
              <div class="rec-badge-group">
                <span class="rec-rank">TOP 01</span>
                <span class="rec-category-tag">旗舰专线主力</span>
              </div>
              <span class="rec-status-tag verified">✓ 后台核验 · 全 IPLC 专线</span>
            </div>
            <div class="rec-header">
              <div class="rec-brand">
                <span class="rec-logo logo-violet">速</span>
                <div class="rec-name-box">
                  <h3>速界机场</h3>
                  <small>Speed World · 自动匹配可用线路</small>
                </div>
              </div>
              <div class="rec-price-box">
                <span class="rec-price-label">起步参考价</span>
                <span class="rec-price-val">¥6<small style="font-size:13px;font-weight:600">/月起 (折后年付)</small></span>
              </div>
            </div>
            <div class="rec-tags-row">
              <span class="rec-tag-pill">全 IPLC 专线</span>
              <span class="rec-tag-pill">优惠码 sujie888 (8折)</span>
              <span class="rec-tag-pill">最高 2.5Gbps</span>
              <span class="rec-tag-pill">68 节点全在线</span>
              <span class="rec-tag-pill">原生 IP 出口</span>
              <span class="rec-tag-pill">不限客户端设备</span>
              <span class="rec-tag-pill">四端全支持</span>
            </div>
            <div class="rec-quote-box">
              <strong>【编辑结论】</strong> 官网入口相当于一个智能线路调度台，自动测速分配可用入口。2026年10月实测后台 68/68 节点全部在线，覆盖港/台/日/新/美/韩及欧洲多国，专属优惠码 <code>sujie888</code> 享 8 折，最低低至 6元/月（折后年付）。
            </div>
            <div class="rec-specs-grid">
              <div class="rec-spec-item">
                <label>实测套餐价格</label>
                <span>最低 6元/月（折后年付8折 优惠码: sujie888） · 单月试用 ¥15/月 (60GB) · 极速 ¥25/月</span>
              </div>
              <div class="rec-spec-item">
                <label>专线架构与带宽</label>
                <span>全 IPLC 专线 · 最高 2.5Gbps · 原生 IP 节点</span>
              </div>
              <div class="rec-spec-item">
                <label>节点规模与在线</label>
                <span>68 个节点在线 / 0 离线 · 8 条公开入口线路</span>
              </div>
              <div class="rec-spec-item">
                <label>客户端与设备限制</label>
                <span>Android / iOS / macOS / Windows · 设备不限</span>
              </div>
            </div>
            <div class="rec-caution-box">
              <i>!</i>
              <span>购买提示：套餐页面写明虚拟商品不支持退款；首次使用建议先选择 ¥15 试用包验证本地网络与晚高峰表现。</span>
            </div>
            <div class="rec-actions-bar">
              <a class="btn-official" href="https://lqy001.speedworldaff.com/#/register?code=p3EKNmlp" target="_blank" rel="noopener sponsored">直达官网注册 <span>↗</span></a>
              <a class="btn-review" href="review.html?id=speed">查看深度测评报告 <span>→</span></a>
            </div>
          </article>

          <!-- 02 可信云机场 -->
          <article class="airport-rec-card" data-category="all iplc-iepl budget unlimited">
            <div class="rec-top-meta">
              <div class="rec-badge-group">
                <span class="rec-rank">TOP 02</span>
                <span class="rec-category-tag">高性价比专线</span>
              </div>
              <span class="rec-status-tag verified">✓ 后台核验 · 全 IEPL 专线</span>
            </div>
            <div class="rec-header">
              <div class="rec-brand">
                <span class="rec-logo logo-blue">信</span>
                <div class="rec-name-box">
                  <h3>可信云机场</h3>
                  <small>Kexin Cloud · 状态透明直观</small>
                </div>
              </div>
              <div class="rec-price-box">
                <span class="rec-price-label">起步参考价</span>
                <span class="rec-price-val">¥15<small style="font-size:13px;font-weight:600">/月起</small></span>
              </div>
            </div>
            <div class="rec-tags-row">
              <span class="rec-tag-pill">全 IEPL 专线</span>
              <span class="rec-tag-pill">60 节点全在线</span>
              <span class="rec-tag-pill">不限客户端</span>
              <span class="rec-tag-pill">原生线路</span>
              <span class="rec-tag-pill">轻量月付</span>
              <span class="rec-tag-pill">四端教程</span>
            </div>
            <div class="rec-quote-box">
              <strong>【编辑结论】</strong> 线路状态与可用数直接展示在入口页。后台实测 60 个节点全部在线，套餐写明全 IEPL 专线与原生线路能力，且明确不限制客户端数量，月付 ¥15 起步，试错成本低。
            </div>
            <div class="rec-specs-grid">
              <div class="rec-spec-item">
                <label>实测套餐价格</label>
                <span>月付小包 ¥15/月 (60GB) · 基础 ¥25/月 (150GB) · 年付 ¥96/年</span>
              </div>
              <div class="rec-spec-item">
                <label>专线架构与带宽</label>
                <span>全 IEPL 专线 · 原生线路 · 支持常用流媒体与 AI</span>
              </div>
              <div class="rec-spec-item">
                <label>节点规模与在线</label>
                <span>60 个节点在线 / 0 离线 · 覆盖港台日新美等</span>
              </div>
              <div class="rec-spec-item">
                <label>客户端与设备限制</label>
                <span>Android / iOS / macOS / Windows · 不限制客户端</span>
              </div>
            </div>
            <div class="rec-caution-box">
              <i>!</i>
              <span>购买提示：公开入口检测延迟受实时网络影响波动，建议先开通月付小包并在自身主力设备上实测连接。</span>
            </div>
            <div class="rec-actions-bar">
              <a class="btn-official" href="https://ermaozi01.kosingaff.com/#/register?code=FA6DjjDi" target="_blank" rel="noopener sponsored">直达官网注册 <span>↗</span></a>
              <a class="btn-review" href="review.html?id=kexin">查看深度测评报告 <span>→</span></a>
            </div>
          </article>

          <!-- 03 极连云机场 -->
          <article class="airport-rec-card" data-category="all iplc-iepl budget unlimited">
            <div class="rec-top-meta">
              <div class="rec-badge-group">
                <span class="rec-rank">TOP 03</span>
                <span class="rec-category-tag">多目标容灾主力</span>
              </div>
              <span class="rec-status-tag verified">✓ 后台核验 · 全 IPLC 专线</span>
            </div>
            <div class="rec-header">
              <div class="rec-brand">
                <span class="rec-logo logo-coral">极</span>
                <div class="rec-name-box">
                  <h3>极连云机场</h3>
                  <small>Jilian Cloud · 13条多目标容灾检测</small>
                </div>
              </div>
              <div class="rec-price-box">
                <span class="rec-price-label">起步参考价</span>
                <span class="rec-price-val">¥18<small style="font-size:13px;font-weight:600">/月起</small></span>
              </div>
            </div>
            <div class="rec-tags-row">
              <span class="rec-tag-pill">全 IPLC 专线</span>
              <span class="rec-tag-pill">最高 2.5Gbps</span>
              <span class="rec-tag-pill">66 节点规模</span>
              <span class="rec-tag-pill">13/13 入口全可用</span>
              <span class="rec-tag-pill">设备不限</span>
              <span class="rec-tag-pill">全平台推荐客户端</span>
            </div>
            <div class="rec-quote-box">
              <strong>【编辑结论】</strong> 具备 13 条备用目标检测，防失联容灾能力突出。后台实测 66 个节点中 61 个在线，套餐明确标注全 IPLC 专线最高 2.5Gbps，支持主流多平台客户端且不限同时连接设备数。
            </div>
            <div class="rec-specs-grid">
              <div class="rec-spec-item">
                <label>实测套餐价格</label>
                <span>基础 ¥18/月 (100GB) · 进阶 ¥32/月 (200GB) · 体验年付 ¥96/年</span>
              </div>
              <div class="rec-spec-item">
                <label>专线架构与带宽</label>
                <span>全 IPLC 专线 · 单节点峰值最高 2.5Gbps</span>
              </div>
              <div class="rec-spec-item">
                <label>节点规模与在线</label>
                <span>66 个节点 (61 在线) · 13/13 公开目标可用</span>
              </div>
              <div class="rec-spec-item">
                <label>客户端与设备限制</label>
                <span>Android / iOS / macOS / Windows · 不限同时使用数量</span>
              </div>
            </div>
            <div class="rec-caution-box">
              <i>!</i>
              <span>购买提示：后台明确标注虚拟商品不接受退款；请勿直接大额年付，建议先以基础月付验证晚高峰丢包率。</span>
            </div>
            <div class="rec-actions-bar">
              <a class="btn-official" href="https://liujie2002.jlyvipaff.com/#/?code=0MxRdXiu" target="_blank" rel="noopener sponsored">直达官网注册 <span>↗</span></a>
              <a class="btn-review" href="review.html?id=jilian">查看深度测评报告 <span>→</span></a>
            </div>
          </article>

          <!-- 04 边缘节点 -->
          <article class="airport-rec-card" data-category="all iplc-iepl budget unlimited">
            <div class="rec-top-meta">
              <div class="rec-badge-group">
                <span class="rec-rank">TOP 04</span>
                <span class="rec-category-tag">入门试用友好</span>
              </div>
              <span class="rec-status-tag verified">✓ 后台核验 · 全 IPLC 专线</span>
            </div>
            <div class="rec-header">
              <div class="rec-brand">
                <span class="rec-logo logo-green">边</span>
                <div class="rec-name-box">
                  <h3>边缘节点</h3>
                  <small>EdgeNova · 线路状态清晰透明</small>
                </div>
              </div>
              <div class="rec-price-box">
                <span class="rec-price-label">起步参考价</span>
                <span class="rec-price-val">¥15<small style="font-size:13px;font-weight:600">/月起</small></span>
              </div>
            </div>
            <div class="rec-tags-row">
              <span class="rec-tag-pill">全 IPLC 专线</span>
              <span class="rec-tag-pill">最高 2.5Gbps</span>
              <span class="rec-tag-pill">4/4 入口全在线</span>
              <span class="rec-tag-pill">原生 IP</span>
              <span class="rec-tag-pill">设备不限</span>
              <span class="rec-tag-pill">不限时套餐可选</span>
            </div>
            <div class="rec-quote-box">
              <strong>【编辑结论】</strong> 公开检测页 4 条线路全部可用，状态透明。后台套餐标注全 IPLC、最高 2.5Gbps、原生 IP 且设备不限，覆盖东南亚与欧美地区。体验月付仅 ¥15，试错成本低。
            </div>
            <div class="rec-specs-grid">
              <div class="rec-spec-item">
                <label>实测套餐价格</label>
                <span>体验 ¥15/月 (50GB) · 标准 ¥22/月 (120GB) · 年付 ¥98/年</span>
              </div>
              <div class="rec-spec-item">
                <label>专线架构与带宽</label>
                <span>全 IPLC 专线 · 最高 2.5Gbps · 原生 IP 出口</span>
              </div>
              <div class="rec-spec-item">
                <label>节点规模与在线</label>
                <span>4/4 入口线路可用 · 覆盖港台日新美韩等多国</span>
              </div>
              <div class="rec-spec-item">
                <label>客户端与设备限制</label>
                <span>Android / iOS / macOS / Windows · 设备不限</span>
              </div>
            </div>
            <div class="rec-caution-box">
              <i>!</i>
              <span>购买提示：公开检测页延迟反映入口响应，不等于下载测速；不要根据宣传把高速当默认结论，先月付实测。</span>
            </div>
            <div class="rec-actions-bar">
              <a class="btn-official" href="https://zoio.edgenovaaff.cc/#/register?code=ti8OUEN2" target="_blank" rel="noopener sponsored">直达官网注册 <span>↗</span></a>
              <a class="btn-review" href="review.html?id=edge">查看深度测评报告 <span>→</span></a>
            </div>
          </article>

          <!-- 05 快狸机场 -->
          <article class="airport-rec-card" data-category="all iplc-iepl budget">
            <div class="rec-top-meta">
              <div class="rec-badge-group">
                <span class="rec-rank">TOP 05</span>
                <span class="rec-category-tag">全 IEPL 高速</span>
              </div>
              <span class="rec-status-tag verified">✓ 后台核验 · 全 IEPL 专线</span>
            </div>
            <div class="rec-header">
              <div class="rec-brand">
                <span class="rec-logo logo-coral">狸</span>
                <div class="rec-name-box">
                  <h3>快狸机场</h3>
                  <small>Kuaili · 67/67 全在线专线节点</small>
                </div>
              </div>
              <div class="rec-price-box">
                <span class="rec-price-label">起步参考价</span>
                <span class="rec-price-val">¥15<small style="font-size:13px;font-weight:600">/月起</small></span>
              </div>
            </div>
            <div class="rec-tags-row">
              <span class="rec-tag-pill">全 IEPL 专线</span>
              <span class="rec-tag-pill">最高 2.5Gbps</span>
              <span class="rec-tag-pill">67/67 节点在线</span>
              <span class="rec-tag-pill">四端官方教程</span>
              <span class="rec-tag-pill">多流量梯度</span>
              <span class="rec-tag-pill">支持多设备</span>
            </div>
            <div class="rec-quote-box">
              <strong>【编辑结论】</strong> 页面先自动挑选最快入口，后台节点页实测 67/67 全部在线，覆盖港、台、日、新、美、马及英法德等。套餐标注全 IEPL 专线，峰值最高 2.5Gbps，流量档位设计丰富。
            </div>
            <div class="rec-specs-grid">
              <div class="rec-spec-item">
                <label>实测套餐价格</label>
                <span>月狸 ¥15/月 (50GB) · 小狸 ¥22/月 (100GB) · 森狸年付 ¥120/年</span>
              </div>
              <div class="rec-spec-item">
                <label>专线架构与带宽</label>
                <span>全 IEPL 专线 · 单节点峰值最高 2.5Gbps</span>
              </div>
              <div class="rec-spec-item">
                <label>节点规模与在线</label>
                <span>67/67 节点全部在线 · 亚洲与欧美广泛覆盖</span>
              </div>
              <div class="rec-spec-item">
                <label>客户端与设备限制</label>
                <span>iOS / Android / Windows / macOS 四平台支持</span>
              </div>
            </div>
            <div class="rec-caution-box">
              <i>!</i>
              <span>购买提示：套餐页面写明虚拟商品不退款，公告提供优惠码 kuaili996；建议先开通月狸套餐体验。</span>
            </div>
            <div class="rec-actions-bar">
              <a class="btn-official" href="https://yyo649929.kuailiaff.com/#/register?code=JVuUcHke" target="_blank" rel="noopener sponsored">直达官网注册 <span>↗</span></a>
              <a class="btn-review" href="review.html?id=kuaili">查看深度测评报告 <span>→</span></a>
            </div>
          </article>

          <!-- 06 云图机场 -->
          <article class="airport-rec-card" data-category="all budget">
            <div class="rec-top-meta">
              <div class="rec-badge-group">
                <span class="rec-rank">TOP 06</span>
                <span class="rec-category-tag">多档位不限时</span>
              </div>
              <span class="rec-status-tag verified">✓ 后台核验 · 38 节点接入</span>
            </div>
            <div class="rec-header">
              <div class="rec-brand">
                <span class="rec-logo logo-violet">图</span>
                <div class="rec-name-box">
                  <h3>云图机场</h3>
                  <small>Yuntu · 移动/电信/三网定向优化</small>
                </div>
              </div>
              <div class="rec-price-box">
                <span class="rec-price-label">起步参考价</span>
                <span class="rec-price-val">¥20<small style="font-size:13px;font-weight:600">/月起</small></span>
              </div>
            </div>
            <div class="rec-tags-row">
              <span class="rec-tag-pill">38 接入节点</span>
              <span class="rec-tag-pill">三网优化线路</span>
              <span class="rec-tag-pill">不限时流量包</span>
              <span class="rec-tag-pill">多语言后台</span>
              <span class="rec-tag-pill">仪表盘一键订阅</span>
            </div>
            <div class="rec-quote-box">
              <strong>【编辑结论】</strong> 注册页支持多语言，后台接入点页实测提供 38 个节点，每个节点可选移动/电信/三网优化线路。提供少见的永久不限时套餐（¥78/50GB），非常适合轻量低频备用防失联。
            </div>
            <div class="rec-specs-grid">
              <div class="rec-spec-item">
                <label>实测套餐价格</label>
                <span>岚图 ¥20/月 (150GB) · 梦图 ¥40/月 (300GB) · 不限时 ¥78起</span>
              </div>
              <div class="rec-spec-item">
                <label>专线架构与带宽</label>
                <span>运营商优化线路 (三网/移动/电信) · 未明确标注专线</span>
              </div>
              <div class="rec-spec-item">
                <label>节点规模与在线</label>
                <span>38 个节点 · 接入点支持多网络优化切换</span>
              </div>
              <div class="rec-spec-item">
                <label>客户端与设备限制</label>
                <span>通用订阅导入 (Shadowrocket / Clash / ClashX 等)</span>
              </div>
            </div>
            <div class="rec-caution-box">
              <i>!</i>
              <span>购买提示：套餐页面未直接标注 IPLC/IEPL 专线，不能视作物理专线；用量不大的用户建议考虑不限时包。</span>
            </div>
            <div class="rec-actions-bar">
              <a class="btn-official" href="https://super.ytjcok.org/#/register?code=iKpNlXer" target="_blank" rel="noopener sponsored">直达官网注册 <span>↗</span></a>
              <a class="btn-review" href="review.html?id=yuntu">查看深度测评报告 <span>→</span></a>
            </div>
          </article>

          <!-- 07 光年梯机场 -->
          <article class="airport-rec-card" data-category="all iplc-iepl budget">
            <div class="rec-top-meta">
              <div class="rec-badge-group">
                <span class="rec-rank">TOP 07</span>
                <span class="rec-category-tag">双专线高阶</span>
              </div>
              <span class="rec-status-tag verified">✓ 后台核验 · IPLC/IEPL 专线</span>
            </div>
            <div class="rec-header">
              <div class="rec-brand">
                <span class="rec-logo logo-blue">光</span>
                <div class="rec-name-box">
                  <h3>光年梯机场</h3>
                  <small>Guangnian · 常规IPLC与独享IEPL</small>
                </div>
              </div>
              <div class="rec-price-box">
                <span class="rec-price-label">起步参考价</span>
                <span class="rec-price-val">¥18<small style="font-size:13px;font-weight:600">/月起</small></span>
              </div>
            </div>
            <div class="rec-tags-row">
              <span class="rec-tag-pill">常规全 IPLC</span>
              <span class="rec-tag-pill">独享 IEPL 可选</span>
              <span class="rec-tag-pill">68 节点规模</span>
              <span class="rec-tag-pill">四端+软路由支持</span>
              <span class="rec-tag-pill">最高 2.5Gbps</span>
            </div>
            <div class="rec-quote-box">
              <strong>【编辑结论】</strong> 具备 4 条推荐入口线路，后台实测 68 个节点中 64 个在线。常规套餐标注全 IPLC（最高 2.5Gbps），同时面向高要求企业用户提供独享 IEPL 私人专线，客户端下载中心完备。
            </div>
            <div class="rec-specs-grid">
              <div class="rec-spec-item">
                <label>实测套餐价格</label>
                <span>入门 ¥18/月 (110GB) · 晋级 ¥34/月 (220GB) · 年付限时 ¥89/年</span>
              </div>
              <div class="rec-spec-item">
                <label>专线架构与带宽</label>
                <span>常规全 IPLC (最高 2.5Gbps) · 独享私人专线 IEPL (¥680/月)</span>
              </div>
              <div class="rec-spec-item">
                <label>节点规模与在线</label>
                <span>68 个节点 (64 在线) · 4/4 入口全可用</span>
              </div>
              <div class="rec-spec-item">
                <label>客户端与设备限制</label>
                <span>Android / iOS / macOS / Windows / 路由器 (Clash/Sing-box)</span>
              </div>
            </div>
            <div class="rec-caution-box">
              <i>!</i>
              <span>购买提示：后台套餐明确写不退款；独享私人专线单价较高，一般个人用户选 ¥18 或 ¥34 常规套餐即可。</span>
            </div>
            <div class="rec-actions-bar">
              <a class="btn-official" href="http://liujie2002.gntaff.com/#/?code=NoPkovej" target="_blank" rel="noopener sponsored">直达官网注册 <span>↗</span></a>
              <a class="btn-review" href="review.html?id=guangnian">查看深度测评报告 <span>→</span></a>
            </div>
          </article>

          <!-- 08 鲲鹏加速 -->
          <article class="airport-rec-card pending-review" data-category="all pending">
            <div class="rec-top-meta">
              <div class="rec-badge-group">
                <span class="rec-rank">TOP 08</span>
                <span class="rec-category-tag">多语言极简</span>
              </div>
              <span class="rec-status-tag pending">⚠️ 公开页核验 · 待登录后台</span>
            </div>
            <div class="rec-header">
              <div class="rec-brand">
                <span class="rec-logo logo-green">鲲</span>
                <div class="rec-name-box">
                  <h3>鲲鹏加速</h3>
                  <small>Kun Peng Network · 多语言轻量注册</small>
                </div>
              </div>
              <div class="rec-price-box">
                <span class="rec-price-label">起步参考价</span>
                <span class="rec-price-val">官网<small style="font-size:12px;font-weight:600">实时为准</small></span>
              </div>
            </div>
            <div class="rec-tags-row">
              <span class="rec-tag-pill">多语言注册</span>
              <span class="rec-tag-pill">邀请码自动带入</span>
              <span class="rec-tag-pill">快速开通</span>
              <span class="rec-tag-pill">版本 v0.4.0</span>
              <span class="rec-tag-pill">待登录后台复核</span>
            </div>
            <div class="rec-quote-box">
              <strong>【核验记录】</strong> 官网公开页为简洁多语言注册界面，邀请码自动填入，注册开通流畅。2026年10月测试账号登录未通过，套餐价格与节点列表在后台，本站拒绝编造未经核实的数据。
            </div>
            <div class="rec-specs-grid">
              <div class="rec-spec-item">
                <label>套餐价格核验</label>
                <span>未进入后台商店，以注册后实时页面为准</span>
              </div>
              <div class="rec-spec-item">
                <label>专线架构与协议</label>
                <span>公开注册页未披露 · 待登录核实</span>
              </div>
              <div class="rec-spec-item">
                <label>节点规模与在线</label>
                <span>公开页未列出具体节点表 · 待后台确认</span>
              </div>
              <div class="rec-spec-item">
                <label>客户端与设备限制</label>
                <span>需以后台帮助中心实际清单为准</span>
              </div>
            </div>
            <div class="rec-caution-box">
              <i>!</i>
              <span>选购提醒：后台数据暂未完成独立复核，建议在看清流量倍率与退款规则前，切勿直接购买大额年付套餐。</span>
            </div>
            <div class="rec-actions-bar">
              <a class="btn-official" href="https://kunpengjiasu.com/#/register?code=99UgsawR" target="_blank" rel="noopener sponsored">直达官网注册 <span>↗</span></a>
              <a class="btn-review" href="review.html?id=kunpeng">查看深度测评报告 <span>→</span></a>
            </div>
          </article>

          <!-- 09 瞬云机场 -->
          <article class="airport-rec-card pending-review" data-category="all pending">
            <div class="rec-top-meta">
              <div class="rec-badge-group">
                <span class="rec-rank">TOP 09</span>
                <span class="rec-category-tag">动态跳转测试</span>
              </div>
              <span class="rec-status-tag pending">⚠️ 页面异常 · 谨慎试用</span>
            </div>
            <div class="rec-header">
              <div class="rec-brand">
                <span class="rec-logo logo-violet">瞬</span>
                <div class="rec-name-box">
                  <h3>瞬云机场</h3>
                  <small>ShunYun · 入口动态重定向</small>
                </div>
              </div>
              <div class="rec-price-box">
                <span class="rec-price-label">起步参考价</span>
                <span class="rec-price-val">官网<small style="font-size:12px;font-weight:600">实时为准</small></span>
              </div>
            </div>
            <div class="rec-tags-row">
              <span class="rec-tag-pill">入口动态重定向</span>
              <span class="rec-tag-pill">线路实时检测</span>
              <span class="rec-tag-pill">先试后买</span>
              <span class="rec-tag-pill">信息待复核</span>
              <span class="rec-tag-pill">建议短周期</span>
            </div>
            <div class="rec-quote-box">
              <strong>【核验记录】</strong> 瞬云的入口会跳转至线路检测页。2026年10月测试访问时出现偶发空白与重定向延迟，未能稳定读取后台套餐；文章不对未经公开验证的指标作确定性保证。
            </div>
            <div class="rec-specs-grid">
              <div class="rec-spec-item">
                <label>套餐价格核验</label>
                <span>未稳定展示套餐，以官网最终跳转页面为准</span>
              </div>
              <div class="rec-spec-item">
                <label>专线架构与协议</label>
                <span>公开页未明确标示 · 待核实</span>
              </div>
              <div class="rec-spec-item">
                <label>节点规模与在线</label>
                <span>入口需实时检测 · 节点信息待确认</span>
              </div>
              <div class="rec-spec-item">
                <label>客户端与设备限制</label>
                <span>未读取到完整清单 · 以后台为准</span>
              </div>
            </div>
            <div class="rec-caution-box">
              <i>!</i>
              <span>选购提醒：入口动态检测若不稳定请勿勉强购买；若确需测试，请务必先以最小周期月付验证。</span>
            </div>
            <div class="rec-actions-bar">
              <a class="btn-official" href="https://ddd.jichang.best/#/register?code=7idBwf3R" target="_blank" rel="noopener sponsored">直达官网注册 <span>↗</span></a>
              <a class="btn-review" href="review.html?id=shunyun">查看深度测评报告 <span>→</span></a>
            </div>
          </article>

          <!-- 10 云界线机场 -->
          <article class="airport-rec-card" data-category="all iplc-iepl unlimited">
            <div class="rec-top-meta">
              <div class="rec-badge-group">
                <span class="rec-rank">TOP 10</span>
                <span class="rec-category-tag">自动选优专线</span>
              </div>
              <span class="rec-status-tag verified">✓ 后台核验 · 全 IPLC 专线</span>
            </div>
            <div class="rec-header">
              <div class="rec-brand">
                <span class="rec-logo logo-blue">界</span>
                <div class="rec-name-box">
                  <h3>云界线机场</h3>
                  <small>Yunjiexian · 自动选优与50节点全在线</small>
                </div>
              </div>
              <div class="rec-price-box">
                <span class="rec-price-label">起步参考价</span>
                <span class="rec-price-val">¥25<small style="font-size:13px;font-weight:600">/月起</small></span>
              </div>
            </div>
            <div class="rec-tags-row">
              <span class="rec-tag-pill">全 IPLC 专线</span>
              <span class="rec-tag-pill">最高 2.5Gbps</span>
              <span class="rec-tag-pill">50/50 全在线</span>
              <span class="rec-tag-pill">自动测速选优</span>
              <span class="rec-tag-pill">四端下载中心</span>
              <span class="rec-tag-pill">不限时随心包</span>
            </div>
            <div class="rec-quote-box">
              <strong>【编辑结论】</strong> 入口自动测速并跳转至最优线路，流程极简。后台实测 50/50 节点全部在线，套餐文案明确标注全 IPLC 专线（最高 2.5Gbps），官方下载中心提供四大主流平台安装包。
            </div>
            <div class="rec-specs-grid">
              <div class="rec-spec-item">
                <label>实测套餐价格</label>
                <span>轻云 ¥25/月 (150GB) · 凌云 ¥45/月 (300GB) · 年付 ¥96/年 · 不限时 ¥99</span>
              </div>
              <div class="rec-spec-item">
                <label>专线架构与带宽</label>
                <span>全 IPLC 专线 · 单节点峰值最高 2.5Gbps</span>
              </div>
              <div class="rec-spec-item">
                <label>节点规模与在线</label>
                <span>50/50 节点全部在线 · 2/2 入口可用且自动选优</span>
              </div>
              <div class="rec-spec-item">
                <label>客户端与设备限制</label>
                <span>下载中心提供 iOS / Android / Windows / macOS 四平台</span>
              </div>
            </div>
            <div class="rec-caution-box">
              <i>!</i>
              <span>购买提示：套餐页面写明虚拟商品不支持退款；建议先用轻云基础月付验证晚高峰与多设备兼容性。</span>
            </div>
            <div class="rec-actions-bar">
              <a class="btn-official" href="https://youxia01.yunjiexianaff.com/#/?code=8ImGvubv" target="_blank" rel="noopener sponsored">直达官网注册 <span>↗</span></a>
              <a class="btn-review" href="review.html?id=yunjiexian">查看深度测评报告 <span>→</span></a>
            </div>
          </article>

          <!-- 11 大佬云机场 -->
          <article class="airport-rec-card" data-category="all iplc-iepl budget unlimited">
            <div class="rec-top-meta">
              <div class="rec-badge-group">
                <span class="rec-rank">TOP 11</span>
                <span class="rec-category-tag">小而精专线</span>
              </div>
              <span class="rec-status-tag verified">✓ 后台核验 · IPLC/IEPL 专线</span>
            </div>
            <div class="rec-header">
              <div class="rec-brand">
                <span class="rec-logo logo-coral">佬</span>
                <div class="rec-name-box">
                  <h3>大佬云机场</h3>
                  <small>Dalao Cloud · 2/2 可用与原生IP支持</small>
                </div>
              </div>
              <div class="rec-price-box">
                <span class="rec-price-label">起步参考价</span>
                <span class="rec-price-val">¥19.99<small style="font-size:12px;font-weight:600">/月起</small></span>
              </div>
            </div>
            <div class="rec-tags-row">
              <span class="rec-tag-pill">全 IPLC/IEPL</span>
              <span class="rec-tag-pill">2/2 入口全可用</span>
              <span class="rec-tag-pill">原生 IP 出口</span>
              <span class="rec-tag-pill">设备不限</span>
              <span class="rec-tag-pill">流媒体与AI</span>
              <span class="rec-tag-pill">四端教程</span>
            </div>
            <div class="rec-quote-box">
              <strong>【编辑结论】</strong> 公开检测 2/2 线路全部可用，最快响应约 952ms。套餐说明明确标注全 IPLC/IEPL 专线、设备不限、原生 IP 及流媒体与 AI 解锁，走小而精的专线路线，月付 ¥19.99 起性价比不错。
            </div>
            <div class="rec-specs-grid">
              <div class="rec-spec-item">
                <label>实测套餐价格</label>
                <span>初云福利版 ¥19.99/月 (100GB) · 提升版 ¥25/月 (150GB) · 年付 ¥96/年</span>
              </div>
              <div class="rec-spec-item">
                <label>专线架构与带宽</label>
                <span>全 IPLC/IEPL 专线 · 原生 IP · 流媒体与 AI 解锁</span>
              </div>
              <div class="rec-spec-item">
                <label>节点规模与在线</label>
                <span>2/2 线路全部可用 · 最快线路约 952ms</span>
              </div>
              <div class="rec-spec-item">
                <label>客户端与设备限制</label>
                <span>后台仪表板明确列出 iOS / Android / Windows / macOS</span>
              </div>
            </div>
            <div class="rec-caution-box">
              <i>!</i>
              <span>购买提示：整体备用线路数相对有限，建议设备少、线路需求明确的用户首选月付测试。</span>
            </div>
            <div class="rec-actions-bar">
              <a class="btn-official" href="https://liu01.dalaoyunaff.com/#/?code=9A9fbKzz" target="_blank" rel="noopener sponsored">直达官网注册 <span>↗</span></a>
              <a class="btn-review" href="review.html?id=dalao">查看深度测评报告 <span>→</span></a>
            </div>
          </article>

          <!-- 12 环球梯机场 -->
          <article class="airport-rec-card" data-category="all">
            <div class="rec-top-meta">
              <div class="rec-badge-group">
                <span class="rec-rank">TOP 12</span>
                <span class="rec-category-tag">多入口容灾</span>
              </div>
              <span class="rec-status-tag verified">✓ 后台核验 · BGP 多线融合</span>
            </div>
            <div class="rec-header">
              <div class="rec-brand">
                <span class="rec-logo logo-green">环</span>
                <div class="rec-name-box">
                  <h3>环球梯机场</h3>
                  <small>Huanqiu Ti · BGP多运营商融合</small>
                </div>
              </div>
              <div class="rec-price-box">
                <span class="rec-price-label">起步参考价</span>
                <span class="rec-price-val">¥22<small style="font-size:13px;font-weight:600">/月起</small></span>
              </div>
            </div>
            <div class="rec-tags-row">
              <span class="rec-tag-pill">BGP 多运营商融合</span>
              <span class="rec-tag-pill">12/12 可用节点</span>
              <span class="rec-tag-pill">后台延迟 23ms</span>
              <span class="rec-tag-pill">多备用入口</span>
              <span class="rec-tag-pill">设备数明确标注</span>
            </div>
            <div class="rec-quote-box">
              <strong>【编辑结论】</strong> 具备多入口自动跳转，后台概览显示 12/12 节点可用、延迟 23ms。强调 BGP 多运营商融合线路与 99.99% SLA，套餐对可连接设备数量（3-10 台）有清晰的规则约束。
            </div>
            <div class="rec-specs-grid">
              <div class="rec-spec-item">
                <label>实测套餐价格</label>
                <span>环球轻享 ¥22/月 (140GB · 3设备) · 畅游 ¥39/月 (280GB · 5设备) · 学生年付 ¥96/年</span>
              </div>
              <div class="rec-spec-item">
                <label>专线架构与带宽</label>
                <span>BGP 多运营商融合线路 · 强调全球节点与高可用</span>
              </div>
              <div class="rec-spec-item">
                <label>节点规模与在线</label>
                <span>概览 12/12 节点可用 (延迟 23ms) · 多条备用目标</span>
              </div>
              <div class="rec-spec-item">
                <label>客户端与设备限制</label>
                <span>帮助中心提供 iOS / Android / macOS / Windows 教程</span>
              </div>
            </div>
            <div class="rec-caution-box">
              <i>!</i>
              <span>购买提示：公开检测延迟超过 2 秒，节点列表偶有延迟刷新；购买前请在后台刷新确认。</span>
            </div>
            <div class="rec-actions-bar">
              <a class="btn-official" href="https://123pps01.huanqiutiaff.com/#/?code=iJzShI5m" target="_blank" rel="noopener sponsored">直达官网注册 <span>↗</span></a>
              <a class="btn-review" href="review.html?id=huanqiu">查看深度测评报告 <span>→</span></a>
            </div>
          </article>

          <!-- 13 闪电鼠机场 -->
          <article class="airport-rec-card pending-review" data-category="all pending">
            <div class="rec-top-meta">
              <div class="rec-badge-group">
                <span class="rec-rank">TOP 13</span>
                <span class="rec-category-tag">入口已恢复</span>
              </div>
              <span class="rec-status-tag pending">⚠️ 入口恢复 · 待登录核验</span>
            </div>
            <div class="rec-header">
              <div class="rec-brand">
                <span class="rec-logo logo-violet">闪</span>
                <div class="rec-name-box">
                  <h3>闪电鼠机场</h3>
                  <small>Shandian Shu · 6条检测线路恢复</small>
                </div>
              </div>
              <div class="rec-price-box">
                <span class="rec-price-label">起步参考价</span>
                <span class="rec-price-val">官网<small style="font-size:12px;font-weight:600">实时为准</small></span>
              </div>
            </div>
            <div class="rec-tags-row">
              <span class="rec-tag-pill">6 条入口已恢复</span>
              <span class="rec-tag-pill">最快约 863ms</span>
              <span class="rec-tag-pill">多线路检测</span>
              <span class="rec-tag-pill">信息待后台复核</span>
              <span class="rec-tag-pill">短周期试用</span>
            </div>
            <div class="rec-quote-box">
              <strong>【核验记录】</strong> 2026年10月公开检测页已恢复，显示 6 条入口线路，最快约 863ms。但测试账号登录提示密码错误，后台节点与套餐未完成实测复核，文章据实呈现，不虚假背书。
            </div>
            <div class="rec-specs-grid">
              <div class="rec-spec-item">
                <label>套餐价格核验</label>
                <span>因登录未通过，套餐需以官网恢复后实时为准</span>
              </div>
              <div class="rec-spec-item">
                <label>专线架构与协议</label>
                <span>公开入口未披露 · 待登录后台核验</span>
              </div>
              <div class="rec-spec-item">
                <label>节点规模与在线</label>
                <span>6 条入口线路可用 · 前三条响应 863-921ms</span>
              </div>
              <div class="rec-spec-item">
                <label>客户端与设备限制</label>
                <span>未读取到完整清单 · 以后台帮助为准</span>
              </div>
            </div>
            <div class="rec-caution-box">
              <i>!</i>
              <span>选购提醒：入口恢复不代表后台服务稳定；在账号恢复前切勿根据宣传直接购买年付套餐。</span>
            </div>
            <div class="rec-actions-bar">
              <a class="btn-official" href="https://eothvip01.shandianshuaff.com/#/?code=qNodU3f6" target="_blank" rel="noopener sponsored">直达官网注册 <span>↗</span></a>
              <a class="btn-review" href="review.html?id=shandian">查看深度测评报告 <span>→</span></a>
            </div>
          </article>

          <!-- 14 榴莲云机场 -->
          <article class="airport-rec-card" data-category="all iplc-iepl unlimited">
            <div class="rec-top-meta">
              <div class="rec-badge-group">
                <span class="rec-rank">TOP 14</span>
                <span class="rec-category-tag">原生 IP 专线</span>
              </div>
              <span class="rec-status-tag verified">✓ 后台核验 · 全 IPLC 专线</span>
            </div>
            <div class="rec-header">
              <div class="rec-brand">
                <span class="rec-logo logo-coral">榴</span>
                <div class="rec-name-box">
                  <h3>榴莲云机场</h3>
                  <small>Liulian Cloud · 原生IP与阶梯流量</small>
                </div>
              </div>
              <div class="rec-price-box">
                <span class="rec-price-label">起步参考价</span>
                <span class="rec-price-val">¥24<small style="font-size:13px;font-weight:600">/月起</small></span>
              </div>
            </div>
            <div class="rec-tags-row">
              <span class="rec-tag-pill">全 IPLC 专线</span>
              <span class="rec-tag-pill">最高 2.5Gbps</span>
              <span class="rec-tag-pill">原生 IP 节点</span>
              <span class="rec-tag-pill">四端教程</span>
              <span class="rec-tag-pill">3/3 入口全可用</span>
              <span class="rec-tag-pill">不限时小包可选</span>
            </div>
            <div class="rec-quote-box">
              <strong>【编辑结论】</strong> 入口检测 3/3 可用，后台套餐明确标注全 IPLC 专线（最高 2.5Gbps）和原生 IP，官方下载中心提供四大主流平台客户端指引。测试账号因未订阅套餐节点列表显示为 0 条，属于正常权限控制。
            </div>
            <div class="rec-specs-grid">
              <div class="rec-spec-item">
                <label>实测套餐价格</label>
                <span>轻享 ¥24/月 (140GB) · 畅享 ¥40/月 (260GB) · 年付 ¥96/年 · 不限时 ¥99</span>
              </div>
              <div class="rec-spec-item">
                <label>专线架构与带宽</label>
                <span>全 IPLC 专线 · 最高 2.5Gbps · 原生 IP 节点</span>
              </div>
              <div class="rec-spec-item">
                <label>节点规模与在线</label>
                <span>入口 3/3 可用 · 节点列表需订阅激活后载入</span>
              </div>
              <div class="rec-spec-item">
                <label>客户端与设备限制</label>
                <span>iOS / Android / Windows / macOS (推荐 Shadowrocket/Stash)</span>
              </div>
            </div>
            <div class="rec-caution-box">
              <i>!</i>
              <span>购买提示：套餐页面写明虚拟商品不支持退款；购买前务必按月付验证节点与原生 IP 质量。</span>
            </div>
            <div class="rec-actions-bar">
              <a class="btn-official" href="http://853vip01.liulianyunaff.com/#/?code=O6mS8K5N" target="_blank" rel="noopener sponsored">直达官网注册 <span>↗</span></a>
              <a class="btn-review" href="review.html?id=liulian">查看深度测评报告 <span>→</span></a>
            </div>
          </article>

          <!-- 15 神行加速 -->
          <article class="airport-rec-card" data-category="all iplc-iepl unlimited">
            <div class="rec-top-meta">
              <div class="rec-badge-group">
                <span class="rec-rank">TOP 15</span>
                <span class="rec-category-tag">高在线率专线</span>
              </div>
              <span class="rec-status-tag verified">✓ 后台核验 · 全 IPLC 专线</span>
            </div>
            <div class="rec-header">
              <div class="rec-brand">
                <span class="rec-logo logo-blue">神</span>
                <div class="rec-name-box">
                  <h3>神行加速</h3>
                  <small>Shenxing · 50/50 全在线专线与原生IP</small>
                </div>
              </div>
              <div class="rec-price-box">
                <span class="rec-price-label">起步参考价</span>
                <span class="rec-price-val">¥23<small style="font-size:13px;font-weight:600">/月起</small></span>
              </div>
            </div>
            <div class="rec-tags-row">
              <span class="rec-tag-pill">全 IPLC 专线</span>
              <span class="rec-tag-pill">最高 2.5Gbps</span>
              <span class="rec-tag-pill">50/50 节点在线</span>
              <span class="rec-tag-pill">设备不限</span>
              <span class="rec-tag-pill">原生 IP 出口</span>
              <span class="rec-tag-pill">四端全支持</span>
            </div>
            <div class="rec-quote-box">
              <strong>【编辑结论】</strong> 公开入口 4 条线路可用，后台节点页实测 50/50 节点全部在线（延迟 23ms）。套餐标注全 IPLC 专线、最高 2.5Gbps、原生 IP 且不限客户端数量，支持常用流媒体与 AI 解锁。
            </div>
            <div class="rec-specs-grid">
              <div class="rec-spec-item">
                <label>实测套餐价格</label>
                <span>尝鲜 ¥23/月 (150GB) · 基础 ¥40/月 (300GB) · 年付 ¥96/年 · 不限时 ¥99</span>
              </div>
              <div class="rec-spec-item">
                <label>专线架构与带宽</label>
                <span>全 IPLC 专线 · 最高 2.5Gbps · 原生 IP 节点</span>
              </div>
              <div class="rec-spec-item">
                <label>节点规模与在线</label>
                <span>50/50 节点全部在线 · 仪表盘显示延迟 23ms</span>
              </div>
              <div class="rec-spec-item">
                <label>客户端与设备限制</label>
                <span>后台提供 iOS / Android / Windows / macOS · 不限客户端</span>
              </div>
            </div>
            <div class="rec-caution-box">
              <i>!</i>
              <span>购买提示：套餐页面个别卡片显示的流量数字与说明存在笔误，最终请以结账页为准；建议先从尝鲜包开始。</span>
            </div>
            <div class="rec-actions-bar">
              <a class="btn-official" href="https://fugui0077.shenxingaff.com/#/?code=z3ybkLVj" target="_blank" rel="noopener sponsored">直达官网注册 <span>↗</span></a>
              <a class="btn-review" href="review.html?id=shenxing">查看深度测评报告 <span>→</span></a>
            </div>
          </article>
        </div>
      </section>

      <section class="content-section" id="速查对比矩阵">
        <span class="section-kicker">SPECIFICATION MATRIX</span>
        <h2>15 家机场横向速查矩阵</h2>
        <p>一表横向对比 15 家机场的专线协议、在线节点规模、最低参考门槛与支持设备，点击表格操作栏可直接跳转独立测评或直达官网。</p>
        <div class="rec-matrix-wrap">
          <table class="rec-matrix-table">
            <thead>
              <tr>
                <th>排名 / 机场</th>
                <th>专线类型</th>
                <th>节点状态与规模</th>
                <th>最低入门门槛</th>
                <th>设备限制</th>
                <th>操作链接</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><div class="matrix-brand"><span class="matrix-logo logo-violet">速</span>速界机场</div></td>
                <td><span class="tag">全 IPLC 专线</span></td>
                <td>68/68 在线 (2.5G)</td>
                <td>¥15/月 (50GB)</td>
                <td>设备不限</td>
                <td><div class="matrix-actions"><a class="table-btn-official" href="https://lqy001.speedworldaff.com/#/register?code=p3EKNmlp" target="_blank" rel="noopener sponsored">官网直达 ↗</a><a class="table-btn-review" href="review.html?id=speed">深度测评</a></div></td>
              </tr>
              <tr>
                <td><div class="matrix-brand"><span class="matrix-logo logo-blue">信</span>可信云机场</div></td>
                <td><span class="tag">全 IEPL 专线</span></td>
                <td>60/60 在线 (原生)</td>
                <td>¥15/月 (60GB)</td>
                <td>不限客户端</td>
                <td><div class="matrix-actions"><a class="table-btn-official" href="https://ermaozi01.kosingaff.com/#/register?code=FA6DjjDi" target="_blank" rel="noopener sponsored">官网直达 ↗</a><a class="table-btn-review" href="review.html?id=kexin">深度测评</a></div></td>
              </tr>
              <tr>
                <td><div class="matrix-brand"><span class="matrix-logo logo-coral">极</span>极连云机场</div></td>
                <td><span class="tag">全 IPLC 专线</span></td>
                <td>66 节点 (61 在线)</td>
                <td>¥18/月 (100GB)</td>
                <td>不限客户端</td>
                <td><div class="matrix-actions"><a class="table-btn-official" href="https://liujie2002.jlyvipaff.com/#/?code=0MxRdXiu" target="_blank" rel="noopener sponsored">官网直达 ↗</a><a class="table-btn-review" href="review.html?id=jilian">深度测评</a></div></td>
              </tr>
              <tr>
                <td><div class="matrix-brand"><span class="matrix-logo logo-green">边</span>边缘节点</div></td>
                <td><span class="tag">全 IPLC 专线</span></td>
                <td>4/4 入口全在线</td>
                <td>¥15/月 (50GB)</td>
                <td>设备不限</td>
                <td><div class="matrix-actions"><a class="table-btn-official" href="https://zoio.edgenovaaff.cc/#/register?code=ti8OUEN2" target="_blank" rel="noopener sponsored">官网直达 ↗</a><a class="table-btn-review" href="review.html?id=edge">深度测评</a></div></td>
              </tr>
              <tr>
                <td><div class="matrix-brand"><span class="matrix-logo logo-coral">狸</span>快狸机场</div></td>
                <td><span class="tag">全 IEPL 专线</span></td>
                <td>67/67 在线 (2.5G)</td>
                <td>¥15/月 (50GB)</td>
                <td>多设备通用</td>
                <td><div class="matrix-actions"><a class="table-btn-official" href="https://yyo649929.kuailiaff.com/#/register?code=JVuUcHke" target="_blank" rel="noopener sponsored">官网直达 ↗</a><a class="table-btn-review" href="review.html?id=kuaili">深度测评</a></div></td>
              </tr>
              <tr>
                <td><div class="matrix-brand"><span class="matrix-logo logo-violet">图</span>云图机场</div></td>
                <td>优化中转线路</td>
                <td>38 接入点 (三网优化)</td>
                <td>¥20/月 (150GB)</td>
                <td>多档位周期</td>
                <td><div class="matrix-actions"><a class="table-btn-official" href="https://super.ytjcok.org/#/register?code=iKpNlXer" target="_blank" rel="noopener sponsored">官网直达 ↗</a><a class="table-btn-review" href="review.html?id=yuntu">深度测评</a></div></td>
              </tr>
              <tr>
                <td><div class="matrix-brand"><span class="matrix-logo logo-blue">光</span>光年梯机场</div></td>
                <td><span class="tag">IPLC / 独享IEPL</span></td>
                <td>68 节点 (64 在线)</td>
                <td>¥18/月 (110GB)</td>
                <td>四端+软路由</td>
                <td><div class="matrix-actions"><a class="table-btn-official" href="http://liujie2002.gntaff.com/#/?code=NoPkovej" target="_blank" rel="noopener sponsored">官网直达 ↗</a><a class="table-btn-review" href="review.html?id=guangnian">深度测评</a></div></td>
              </tr>
              <tr>
                <td><div class="matrix-brand"><span class="matrix-logo logo-green">鲲</span>鲲鹏加速</div></td>
                <td>待登录后台核验</td>
                <td>公开多语言注册页</td>
                <td>官网实时为准</td>
                <td>以后台为准</td>
                <td><div class="matrix-actions"><a class="table-btn-official" href="https://kunpengjiasu.com/#/register?code=99UgsawR" target="_blank" rel="noopener sponsored">官网直达 ↗</a><a class="table-btn-review" href="review.html?id=kunpeng">深度测评</a></div></td>
              </tr>
              <tr>
                <td><div class="matrix-brand"><span class="matrix-logo logo-violet">瞬</span>瞬云机场</div></td>
                <td>入口动态检测</td>
                <td>入口动态重定向</td>
                <td>官网实时为准</td>
                <td>以后台为准</td>
                <td><div class="matrix-actions"><a class="table-btn-official" href="https://ddd.jichang.best/#/register?code=7idBwf3R" target="_blank" rel="noopener sponsored">官网直达 ↗</a><a class="table-btn-review" href="review.html?id=shunyun">深度测评</a></div></td>
              </tr>
              <tr>
                <td><div class="matrix-brand"><span class="matrix-logo logo-blue">界</span>云界线机场</div></td>
                <td><span class="tag">全 IPLC 专线</span></td>
                <td>50/50 在线 (自动选优)</td>
                <td>¥25/月 (150GB)</td>
                <td>四端全支持</td>
                <td><div class="matrix-actions"><a class="table-btn-official" href="https://youxia01.yunjiexianaff.com/#/?code=8ImGvubv" target="_blank" rel="noopener sponsored">官网直达 ↗</a><a class="table-btn-review" href="review.html?id=yunjiexian">深度测评</a></div></td>
              </tr>
              <tr>
                <td><div class="matrix-brand"><span class="matrix-logo logo-coral">佬</span>大佬云机场</div></td>
                <td><span class="tag">全 IPLC/IEPL</span></td>
                <td>2/2 线路全通 (952ms)</td>
                <td>¥19.99/月 (100GB)</td>
                <td>设备不限</td>
                <td><div class="matrix-actions"><a class="table-btn-official" href="https://liu01.dalaoyunaff.com/#/?code=9A9fbKzz" target="_blank" rel="noopener sponsored">官网直达 ↗</a><a class="table-btn-review" href="review.html?id=dalao">深度测评</a></div></td>
              </tr>
              <tr>
                <td><div class="matrix-brand"><span class="matrix-logo logo-green">环</span>环球梯机场</div></td>
                <td>BGP 多线融合</td>
                <td>12/12 节点 (延迟23ms)</td>
                <td>¥22/月 (140GB)</td>
                <td>限制 3-10 台</td>
                <td><div class="matrix-actions"><a class="table-btn-official" href="https://123pps01.huanqiutiaff.com/#/?code=iJzShI5m" target="_blank" rel="noopener sponsored">官网直达 ↗</a><a class="table-btn-review" href="review.html?id=huanqiu">深度测评</a></div></td>
              </tr>
              <tr>
                <td><div class="matrix-brand"><span class="matrix-logo logo-violet">闪</span>闪电鼠机场</div></td>
                <td>待登录后台核验</td>
                <td>6 条入口恢复 (863ms)</td>
                <td>官网实时为准</td>
                <td>待后台核验</td>
                <td><div class="matrix-actions"><a class="table-btn-official" href="https://eothvip01.shandianshuaff.com/#/?code=qNodU3f6" target="_blank" rel="noopener sponsored">官网直达 ↗</a><a class="table-btn-review" href="review.html?id=shandian">深度测评</a></div></td>
              </tr>
              <tr>
                <td><div class="matrix-brand"><span class="matrix-logo logo-coral">榴</span>榴莲云机场</div></td>
                <td><span class="tag">全 IPLC 专线</span></td>
                <td>3/3 入口可用 (原生IP)</td>
                <td>¥24/月 (140GB)</td>
                <td>四端支持</td>
                <td><div class="matrix-actions"><a class="table-btn-official" href="http://853vip01.liulianyunaff.com/#/?code=O6mS8K5N" target="_blank" rel="noopener sponsored">官网直达 ↗</a><a class="table-btn-review" href="review.html?id=liulian">深度测评</a></div></td>
              </tr>
              <tr>
                <td><div class="matrix-brand"><span class="matrix-logo logo-blue">神</span>神行加速</div></td>
                <td><span class="tag">全 IPLC 专线</span></td>
                <td>50/50 在线 (延迟23ms)</td>
                <td>¥23/月 (150GB)</td>
                <td>不限客户端</td>
                <td><div class="matrix-actions"><a class="table-btn-official" href="https://fugui0077.shenxingaff.com/#/?code=z3ybkLVj" target="_blank" rel="noopener sponsored">官网直达 ↗</a><a class="table-btn-review" href="review.html?id=shenxing">深度测评</a></div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="content-section" id="选购建议">
        <span class="section-kicker">MATCHING GUIDE</span>
        <h2>场景匹配：你适合选哪一家？</h2>
        <p>每个人的使用习惯、宽带运营商和设备各不相同，根据核心场景选择能够有效避坑：</p>
        <div class="card-grid">
          <article class="info-card">
            <span class="card-no">01</span>
            <div class="icon-chip">稳</div>
            <h3>晚高峰专线主力</h3>
            <p><strong>推荐：速界机场、极连云、光年梯、云界线、快狸</strong><br/>均具备后台核验的全 IPLC/IEPL 专线与 50+ 在线节点，晚高峰跨境丢包率低，适合办公与 4K 流媒体主力。</p>
          </article>
          <article class="info-card">
            <span class="card-no">02</span>
            <div class="icon-chip">¥</div>
            <h3>高性价比轻量入门</h3>
            <p><strong>推荐：可信云、边缘节点、快狸、速界</strong><br/>月付低至 ¥15 起步，无需承担长周期资金风险，且同样享有专线或优质入口，适合日常浏览与临时试用。</p>
          </article>
          <article class="info-card">
            <span class="card-no">03</span>
            <div class="icon-chip">多</div>
            <h3>多设备/小团队共享</h3>
            <p><strong>推荐：神行加速、极连云、速界、大佬云</strong><br/>套餐明确标注不限制客户端连接数量，手机、平板、笔电和桌面设备可同时在线，适合家庭与多设备办公。</p>
          </article>
          <article class="info-card">
            <span class="card-no">04</span>
            <div class="icon-chip">包</div>
            <h3>不限时流量备用包</h3>
            <p><strong>推荐：云图机场、云界线、榴莲云、神行加速</strong><br/>支持购买不限时流量包（¥78–¥99 起），流量不清零，长期保活，非常适合作为双机场备用防失联通道。</p>
          </article>
        </div>
        <div class="callout" style="margin-top:22px">
          <span>!</span>
          <div>
            <b>待核验项目特别提醒</b>
            <p>鲲鹏加速、瞬云、闪电鼠因测试登录未通过或页面偶发跳转，目前数据标记为待复核。若需购买请务必先以最小金额月付进行测试，切勿直接年付。</p>
          </div>
        </div>
      </section>

      <section class="content-section" id="按预算选择">
        <span class="section-kicker">BY BUDGET</span>
        <h2>按预算梯度选择</h2>
        <p>根据你的月度网络开销合理分配预算：</p>
        <table class="comparison">
          <thead>
            <tr>
              <th>月预算</th>
              <th>适合服务形态</th>
              <th>推荐项目</th>
              <th>选购关注点</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>¥15–20 / 月</td>
              <td>入门小包 / 试用专线</td>
              <td>速界(¥15)、可信云(¥15)、边缘节点(¥15)、快狸(¥15)、光年梯(¥18)、极连云(¥18)、大佬云(¥19.99)</td>
              <td>优先月付，确认晚高峰与常用节点延迟</td>
            </tr>
            <tr>
              <td>¥20–40 / 月</td>
              <td>进阶专线 / 中大流量</td>
              <td>云图(¥20)、环球梯(¥22)、神行加速(¥23)、榴莲云(¥24)、云界线(¥25)、速界极速版(¥25)</td>
              <td>重点看原生 IP 纯净度、流媒体与 AI 解锁</td>
            </tr>
            <tr>
              <td>¥40–80 / 月</td>
              <td>高阶大流量 / 尊享专线</td>
              <td>速界超速版(¥50)、极连云进阶(¥32/¥61)、快狸标准(¥35)、光年梯晋级/专业(¥34/¥68)</td>
              <td>关注高峰单节点带宽吞吐、SLA 及多设备并发</td>
            </tr>
            <tr>
              <td>¥600+ / 月</td>
              <td>企业级 / 极客独享专线</td>
              <td>光年梯独享私人专线 (¥680/月 · 500GB IEPL)</td>
              <td>独享出口 IP 纯净度、保密网络环境与无拥塞带宽</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="content-section" id="核心指标">
        <span class="section-kicker">KEY METRICS</span>
        <h2>选购必须核验的四个核心指标</h2>
        <div class="card-grid">
          <article class="info-card">
            <div class="icon-chip">稳</div>
            <h3>晚高峰稳定性</h3>
            <p>20:00–23:00 的延迟、丢包率与持续下载带宽比非高峰期的单次极值测速更能代表真实使用体验。</p>
          </article>
          <article class="info-card">
            <div class="icon-chip">线</div>
            <h3>专线类型真伪</h3>
            <p>全 IPLC/IEPL 内网专线不经过公网 GFW 审查，抗阻断与稳定性远高于普通公网中转与直连。</p>
          </article>
          <article class="info-card">
            <div class="icon-chip">倍</div>
            <h3>倍率与可用流量</h3>
            <p>标称 100GB 不等于可用 100GB。高倍率节点（如 2x-5x）会加速消耗流量，需在客户端节点列表确认。</p>
          </article>
          <article class="info-card">
            <div class="icon-chip">售</div>
            <h3>售后响应与退款</h3>
            <p>大部分机场属于虚拟商品不支持退款，因此具备多入口检测调度和工单渠道的服务更为可靠。</p>
          </article>
        </div>
      </section>

      <section class="content-section" id="避坑清单">
        <span class="section-kicker">CHECK BEFORE PAY</span>
        <h2>付款前避坑清单</h2>
        <ul class="checklist">
          <li><strong>坚持先月付后年付：</strong>无论商家宣传多么诱人，新接触的服务一律建议先用一个月，验证本地宽带与常用节点。</li>
          <li><strong>双机场互备法则：</strong>重要办公或重度用户建议同时配置两家不同线路提供商的套餐（如一家主力专线 + 一家不限时备用包）。</li>
          <li><strong>订阅链接等同密钥：</strong>切勿将个人订阅地址截图或发送至公共群组，若发生泄露应立即登录官网后台重置密钥。</li>
          <li><strong>警惕永久与超长期套餐：</strong>网络基础设施维护成本高昂，“一次付费终身使用”极易演变为跑路风险。</li>
        </ul>
      </section>`
  },
  reviews: {
    label: "深度测评", badge: "15 家独立报告", title: "深度测评：15 家机场逐篇核验", lead: "每家机场拥有独立文章，统一整理官网套餐、节点状态、测速口径、流媒体与 AI、IPLC/IEPL、客户端和常见问题。",
    nav: ["全部测评", "数据说明", "评测方法", "阅读建议"],
    content: `
      <section class="content-section" id="全部测评"><span class="section-kicker">15 INDEPENDENT REVIEWS</span><h2>全部 15 家深度测评</h2><p>点击卡片进入独立文章。每篇文章底部可切换上一篇、下一篇，也可返回本目录继续浏览。</p><div class="review-directory-grid">
        <a class="review-directory-card" href="review.html?id=speed"><span class="review-directory-logo">速</span><div><span class="review-status verified">后台核验 · 全 IPLC</span><h3>速界机场评测</h3><p>68/68 节点在线，整理套餐、线路响应、客户端与解锁说明。</p></div><b>→</b></a>
        <a class="review-directory-card" href="review.html?id=kexin"><span class="review-directory-logo">信</span><div><span class="review-status verified">后台核验 · 全 IEPL</span><h3>可信云机场评测</h3><p>60 个节点在线，核验原生线路、设备规则和四端客户端。</p></div><b>→</b></a>
        <a class="review-directory-card" href="review.html?id=jilian"><span class="review-directory-logo">极</span><div><span class="review-status verified">后台核验 · 全 IPLC</span><h3>极连云机场评测</h3><p>66 个节点、61 个在线，覆盖 60GB 至 1TB 套餐。</p></div><b>→</b></a>
        <a class="review-directory-card" href="review.html?id=edge"><span class="review-directory-logo">边</span><div><span class="review-status verified">后台核验 · 全 IPLC</span><h3>边缘节点评测</h3><p>4/4 入口可用，核验月付套餐、节点和原生 IP 信息。</p></div><b>→</b></a>
        <a class="review-directory-card" href="review.html?id=kuaili"><span class="review-directory-logo">狸</span><div><span class="review-status verified">后台核验 · 全 IEPL</span><h3>快狸机场评测</h3><p>67/67 节点在线，多地区覆盖与 30GB 至 1TB 套餐。</p></div><b>→</b></a>
        <a class="review-directory-card" href="review.html?id=yuntu"><span class="review-directory-logo">图</span><div><span class="review-status verified">后台核验 · 38 节点</span><h3>云图机场评测</h3><p>岚图、梦图、星图与不限时包，专线类型未明确标注。</p></div><b>→</b></a>
        <a class="review-directory-card" href="review.html?id=guangnian"><span class="review-directory-logo">光</span><div><span class="review-status verified">后台核验 · IPLC/IEPL</span><h3>光年梯机场评测</h3><p>68 个节点、64 个在线，常规全 IPLC 与独享 IEPL。</p></div><b>→</b></a>
        <a class="review-directory-card pending" href="review.html?id=kunpeng"><span class="review-directory-logo">鲲</span><div><span class="review-status">公开页核验 · 登录未通过</span><h3>鲲鹏加速评测</h3><p>注册页支持多语言，未核验项目不写成后台实测数据。</p></div><b>→</b></a>
        <a class="review-directory-card pending" href="review.html?id=shunyun"><span class="review-directory-logo">瞬</span><div><span class="review-status">页面异常 · 谨慎购买</span><h3>瞬云机场评测</h3><p>官网未稳定加载，不引用来源不明的套餐与测速信息。</p></div><b>→</b></a>
        <a class="review-directory-card" href="review.html?id=yunjiexian"><span class="review-directory-logo">界</span><div><span class="review-status verified">后台核验 · 全 IPLC</span><h3>云界线机场评测</h3><p>50/50 节点在线，覆盖月付、年付和不限时套餐。</p></div><b>→</b></a>
        <a class="review-directory-card" href="review.html?id=dalao"><span class="review-directory-logo">佬</span><div><span class="review-status verified">后台核验 · IPLC/IEPL</span><h3>大佬云机场评测</h3><p>2/2 入口可用，套餐标注原生 IP 与专线。</p></div><b>→</b></a>
        <a class="review-directory-card" href="review.html?id=huanqiu"><span class="review-directory-logo">环</span><div><span class="review-status verified">后台核验 · BGP 多线</span><h3>环球梯机场评测</h3><p>整理全球节点、套餐和客户端，注明后台统计差异。</p></div><b>→</b></a>
        <a class="review-directory-card pending" href="review.html?id=shandian"><span class="review-directory-logo">闪</span><div><span class="review-status">入口恢复 · 登录未通过</span><h3>闪电鼠机场评测</h3><p>6 条入口可检测，后台套餐与节点继续标记待核验。</p></div><b>→</b></a>
        <a class="review-directory-card" href="review.html?id=liulian"><span class="review-directory-logo">榴</span><div><span class="review-status verified">后台核验 · 全 IPLC</span><h3>榴莲云机场评测</h3><p>套餐 24 元/月起，测试账号未订阅节点并已明确说明。</p></div><b>→</b></a>
        <a class="review-directory-card" href="review.html?id=shenxing"><span class="review-directory-logo">神</span><div><span class="review-status verified">后台核验 · 全 IPLC</span><h3>神行加速评测</h3><p>50/50 节点在线，覆盖月付、年付和不限时套餐。</p></div><b>→</b></a>
      </div></section>
      <section class="content-section" id="数据说明"><span class="section-kicker">DATA NOTES</span><h2>官网、后台与测速数据分开记录</h2><p>公开入口只能说明特定时间页面可访问；套餐、节点数量、客户端和专线类型优先采用后台页面。入口响应、客户端延迟与持续下载速度是不同指标，文章不会混写成同一种“速度”。</p><div class="stat-grid"><div class="stat-card"><strong>15篇</strong><span>独立文章</span></div><div class="stat-card"><strong>5项</strong><span>每篇常见问题</span></div><div class="stat-card"><strong>8栏</strong><span>统一内容结构</span></div></div></section>
      <section class="content-section" id="评测方法"><span class="section-kicker">METHODOLOGY</span><h2>统一评测方法</h2><table class="comparison"><thead><tr><th>维度</th><th>重点记录</th><th>表达原则</th></tr></thead><tbody><tr><td>套餐</td><td>价格、流量、周期与退款</td><td>以结账页为准</td></tr><tr><td>线路</td><td>入口状态、节点在线率、IPLC/IEPL</td><td>不把入口响应当下载速度</td></tr><tr><td>应用</td><td>流媒体、AI 与原生 IP</td><td>不承诺永久解锁</td></tr><tr><td>客户端</td><td>Windows、macOS、iOS、Android</td><td>以后台帮助中心为准</td></tr></tbody></table></section>
      <section class="content-section" id="阅读建议"><span class="section-kicker">READING GUIDE</span><h2>先验证，再决定长周期</h2><ul class="checklist"><li>优先查看文章中的核验日期和数据来源</li><li>先购买月付或最小套餐测试晚高峰</li><li>在自己的运营商、设备与目标平台上复测</li><li>登录失败或页面异常的项目不建议直接年付</li></ul><div class="callout"><span>!</span><div><b>数据会变化</b><p>套餐活动、节点数量、专线说明与解锁状态均可能调整，付款前请再次核对官网。</p></div></div></section>`
  },
  clients: {
    label: "客户端教程",
    badge: "2026 全平台全套实战指南",
    title: "客户端教程：多平台配置、分流机制与排障手册",
    lead: "全面覆盖 Windows、iOS、macOS、Android 与多内核生态。从正向代理与 TUN 网卡底层机制，到 Clash Verge Rev、Shadowrocket、v2rayN、sing-box 与安卓选型实操，打造严密、科学、可直接落地的参考规范。",
    nav: [
      "客户端生态总览",
      "Clash Verge Rev 教程",
      "Shadowrocket (小火箭) 教程",
      "v2rayN Windows 配置",
      "安卓手机客户端选型",
      "Mac 苹果电脑配置",
      "sing-box 极速上手"
    ],
    content: `
      <!-- 01 客户端生态总览 -->
      <section class="content-section" id="客户端生态总览">
        <span class="section-kicker">ECOSYSTEM & ARCHITECTURE</span>
        <h2 id="heading-client-overview">客户端生态总览：核心原理与选型地图</h2>
        <p>代理客户端不仅是一个“开关”，其本质是由<b>本地代理服务器、网络分流路由引擎与加密协议封装器</b>构成的网络中间件。理解其底层通信机制，能在遇到网络断连、DNS 泄漏或特定软件无法联网时，迅速精准定位根因。</p>
        
        <div class="stat-grid" style="margin:20px 0 28px">
          <div class="stat-card"><strong>4 大平台</strong><span>Win / Mac / iOS / Android 完整覆盖</span></div>
          <div class="stat-card"><strong>3 层分流</strong><span>Rule 智能 / Direct 直连 / Global 全局</span></div>
          <div class="stat-card"><strong>TUN 虚拟网卡</strong><span>突破系统代理局限，接管全部流量</span></div>
        </div>

        <h3 id="overview-principles">1. 系统代理 vs TUN 虚拟网卡模式</h3>
        <p>许多用户常遇到“浏览器能上外网，但某款桌面软件、终端命令行或在线游戏却连不上”的现象，根源在于工作模式的差异：</p>
        <table class="comparison">
          <thead>
            <tr>
              <th>模式类型</th>
              <th>接管层级与实现原理</th>
              <th>主要优势</th>
              <th>局限性与典型场景</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>系统代理 (System Proxy)</strong></td>
              <td>应用层（Application Layer）。向系统注册 HTTP/Socks5 代理端口（如 127.0.0.1:7890）。</td>
              <td>轻量、资源消耗极低，无需管理员权限，开关即时生效。</td>
              <td>仅对主动读取系统代理的应用（浏览器等）生效；Git、终端、大部分游戏和 UWP 应用会直接绕过。</td>
            </tr>
            <tr>
              <td><strong>TUN 虚拟网卡模式 (TUN Mode)</strong></td>
              <td>网络层（Network Layer，三层 IP）。在操作系统中创建虚拟网卡，通过路由表接管所有进出流量。</td>
              <td>全局无死角接管，游戏客户端、命令行、后台进程等皆可透明代理。</td>
              <td>需要系统管理员/网络扩展权限；若 DNS 配置不当可能偶发微信卡顿或冲突。</td>
            </tr>
          </tbody>
        </table>

        <h3 id="overview-routing">2. 核心路由分流逻辑：Rule、Direct 与 Global</h3>
        <p>客户端在收到网络请求后，分流引擎会逐条匹配规则树：</p>
        <div class="card-grid">
          <article class="info-card">
            <span class="card-no">01</span>
            <div class="icon-chip">规</div>
            <h3>规则模式 (Rule / Routing)</h3>
            <p><strong>【日常主力推荐】</strong>根据内置规则库（GEOIP 代码、域名后缀 DOMAIN-SUFFIX、关键词等），国内流量走 DIRECT，海外受阻流量走 PROXY，兼顾速度与国内网站低延迟。</p>
          </article>
          <article class="info-card">
            <span class="card-no">02</span>
            <div class="icon-chip">全</div>
            <h3>全局模式 (Global)</h3>
            <p><strong>【临时排查使用】</strong>强行将设备发出的所有流量转发至指定节点。仅在遇到冷门海外网站无法识别分流、或需要固定特定地区 IP 注册服务时临时开启。</p>
          </article>
          <article class="info-card">
            <span class="card-no">03</span>
            <div class="icon-chip">直</div>
            <h3>直连模式 (Direct)</h3>
            <p><strong>【排查原网状态】</strong>所有流量直接通过本地宽带直连出站，不经过任何远程节点。相当于临时关闭代理通道，用于测算本地运营商原生网络质量。</p>
          </article>
          <article class="info-card">
            <span class="card-no">04</span>
            <div class="icon-chip">锁</div>
            <h3>DNS 解析与防泄漏 (Fake-IP / Redir)</h3>
            <p>现代客户端（如 Mihomo / sing-box）采用 Fake-IP 技术，客户端在本地立即返回保留 IP，将域名解析完全移交远端节点执行，彻底解决 DNS 污染与查询泄漏。</p>
          </article>
        </div>

        <h3 id="overview-quick-nav">3. 本教程各客户端直达导航</h3>
        <p>点击下方卡片可快速跳转到对应客户端的详细图文配置与排障章节：</p>
        <div class="client-quick-nav">
          <a class="client-quick-card" href="#Clash-Verge-Rev-教程">
            <div class="c-icon c-verge">CV</div>
            <div class="c-meta"><strong>Clash Verge Rev</strong><span>Win / Mac / Linux 现代主力</span></div>
            <span class="c-arrow">→</span>
          </a>
          <a class="client-quick-card" href="#Shadowrocket-小火箭-教程">
            <div class="c-icon c-rocket">SR</div>
            <div class="c-meta"><strong>Shadowrocket (小火箭)</strong><span>iOS / iPadOS 经典神器</span></div>
            <span class="c-arrow">→</span>
          </a>
          <a class="client-quick-card" href="#v2rayN-Windows-配置">
            <div class="c-icon c-v2ray">V2</div>
            <div class="c-meta"><strong>v2rayN Windows</strong><span>极客高阶 · 多协议多内核</span></div>
            <span class="c-arrow">→</span>
          </a>
          <a class="client-quick-card" href="#安卓手机客户端选型">
            <div class="c-icon c-android">AN</div>
            <div class="c-meta"><strong>安卓手机客户端选型</strong><span>CMFA / SFA / v2rayNG 对比</span></div>
            <span class="c-arrow">→</span>
          </a>
          <a class="client-quick-card" href="#Mac-苹果电脑配置">
            <div class="c-icon c-mac">MC</div>
            <div class="c-meta"><strong>Mac 苹果电脑配置</strong><span>Apple Silicon 原生与权限技巧</span></div>
            <span class="c-arrow">→</span>
          </a>
          <a class="client-quick-card" href="#sing-box-极速上手">
            <div class="c-icon c-singbox">SB</div>
            <div class="c-meta"><strong>sing-box 极速上手</strong><span>下一代通用全能网络引擎</span></div>
            <span class="c-arrow">→</span>
          </a>
        </div>

        <div class="callout">
          <span>i</span>
          <div>
            <b>联动参考</b>
            <p>还没有可用的订阅链接？可先前往 <a href="#airports" style="color:#176b46;font-weight:700">15 家精选机场推荐矩阵</a> 了解后台核验的专线节点，遇到全局无网络或延迟过高请参考 <a href="#network" style="color:#176b46;font-weight:700">故障排查知识库</a>。</p>
          </div>
        </div>
      </section>

      <!-- 02 Clash Verge Rev 教程 -->
      <section class="content-section" id="Clash-Verge-Rev-教程">
        <div class="tutorial-header-bar">
          <div class="tutorial-title-group">
            <span class="section-kicker">CROSS-PLATFORM DESKTOP</span>
            <h2 id="heading-verge">Clash Verge Rev 教程：现代桌面全能客户端</h2>
            <span class="platform-tag">Windows / macOS / Linux</span>
          </div>
          <a class="back-top-link" href="#客户端生态总览">↑ 返回总览</a>
        </div>
        
        <p><b>Clash Verge Rev</b> 是目前活跃维护、深受推崇的跨平台图形客户端。基于 Tauri + Rust 架构开发，内存与 CPU 占用显著优于老旧 Electron 应用，且原生搭载新一代 <b>Mihomo (原 Clash.Meta)</b> 内核，对各类现代专线协议支持全面。</p>

        <h3 id="verge-steps">一、四步极速上手指南</h3>
        <div class="step-flow-list">
          <div class="step-item">
            <div class="step-num">01</div>
            <div class="step-body">
              <h4>导入订阅配置 (Profiles)</h4>
              <p>启动客户端后，点击左侧导航栏的 <b>「订阅 (Profiles)」</b> 菜单。在顶部输入框中粘贴从机场后台复制的 Clash 订阅链接，点击右侧的 <b>「导入 (Import)」</b> 按钮。导入成功后，选中该配置文件卡片使其高亮激活。</p>
              <p><small style="color:#6f8176">💡 建议设置自动更新：右键该订阅卡片 -> 勾选「自动更新」，将更新周期设置为 <b>1440 分钟 (24小时)</b>，确保定期同步服务器节点列表变更。</small></p>
            </div>
          </div>

          <div class="step-item">
            <div class="step-num">02</div>
            <div class="step-body">
              <h4>选择分流模式与节点 (Proxies)</h4>
              <p>进入左侧 <b>「代理 (Proxies)」</b> 页面。顶部模式务必选择 <b>「规则 (Rule)」</b> 模式（避免全局浪费流量）。在策略组面板中：</p>
              <ul style="margin:6px 0;padding-left:18px">
                <li><b>自动选择 (URL-Test)：</b>客户端会周期性向测速目标发送轻量探针，自动将流量切换至延迟最低的可用节点；</li>
                <li><b>节点锁定：</b>如果你需要长期稳定的 IP（如 ChatGPT、登录海外银行），请在节点列表中手动点击指定香港或新加坡原生节点。</li>
              </ul>
            </div>
          </div>

          <div class="step-item">
            <div class="step-num">03</div>
            <div class="step-body">
              <h4>启用系统代理与 TUN 模式</h4>
              <p>返回 <b>「设置 (Settings)」</b> 页面：</p>
              <ul style="margin:6px 0;padding-left:18px">
                <li><b>系统代理 (System Proxy)：</b>点击主界面的系统代理开关，即可接管 Edge、Chrome 等主流浏览器；</li>
                <li><b>TUN 模式 (推荐进阶开启)：</b>在设置中找到「服务模式 (Service Mode)」安装系统驱动，随后打开「TUN 模式」开关。TUN 模式将接管整机所有网络（包括命令行 Git、Telegram 客户端、游戏平台等）。</li>
              </ul>
            </div>
          </div>

          <div class="step-item">
            <div class="step-num">04</div>
            <div class="step-body">
              <h4>验证连通性与规则生效</h4>
              <p>打开浏览器访问国际站点与本土服务，观察 Clash Verge Rev 界面左下角的实时上下行速率波动与连接日志。确保国内站点（如百度、Bilibili）走 DIRECT 直连，海外受阻站点走 PROXY。</p>
            </div>
          </div>
        </div>

        <h3 id="verge-faq">二、常见踩坑与故障自检</h3>
        <div class="troubleshoot-grid">
          <div class="trouble-card">
            <strong>报错提示“Proxy Server Refused Connection”或 7890 端口冲突？</strong>
            <p>多因本地其他网络软件（如老旧 Clash 或本地开发环境）占用了默认的 7890 端口。前往「设置」->「混合端口 (Mixed Port)」，将其手动改为 7895 或 10808 并保存重启核心。</p>
          </div>
          <div class="trouble-card">
            <strong>开启 TUN 模式后，国内应用（微信/网易云）偶尔转圈或图片不显示？</strong>
            <p>这是因为部分本土软件的私有 DNS 解析被虚拟网卡拦截。在 Verge 的「订阅配置」右键编辑或通过「扩展脚本」在 DNS 配置中添加 <code>fallback-filter: { geoip: true, ipcidr: [240.0.0.0/4] }</code>，让国内域名使用本地 223.5.5.5 进行解析。</p>
          </div>
          <div class="trouble-card">
            <strong>电脑休眠唤醒后无法访问外网？</strong>
            <p>系统休眠可能导致虚拟网卡路由表未随网络接口自动刷新。右键右下角托盘图标，点击 <b>「重启核心 (Restart Core)」</b> 即可秒级恢复连接。</p>
          </div>
        </div>

        <div class="download-link-bar">
          <span>官方安全认准：请仅从 GitHub 官方 Releases 仓库下载安装包，认准开发者开源签名。</span>
          <a class="btn-dl" href="https://github.com/clash-verge-rev/clash-verge-rev/releases" target="_blank" rel="noopener noreferrer">访问官方 Releases 页面 ↗</a>
        </div>
      </section>

      <!-- 03 Shadowrocket (小火箭) 教程 -->
      <section class="content-section" id="Shadowrocket-小火箭-教程">
        <div class="tutorial-header-bar">
          <div class="tutorial-title-group">
            <span class="section-kicker">IOS & IPADOS</span>
            <h2 id="heading-rocket">Shadowrocket (小火箭) 教程：苹果移动端首选</h2>
            <span class="platform-tag">iOS / iPadOS</span>
          </div>
          <a class="back-top-link" href="#客户端生态总览">↑ 返回总览</a>
        </div>

        <p><b>Shadowrocket（俗称“小火箭”）</b> 是 iOS 平台最经受考验的分流代理客户端。启动迅速、协议支持全面、耗电控制极佳，同时具备出色的分流重写与规则订制能力，为 App Store 官方认证工具（通常仅在美区、港区等非国区上架，售价 $2.99）。</p>

        <div class="callout" style="background:#fff2f0;border-color:#ffccc7">
          <span style="background:#ff4d4f">!</span>
          <div>
            <b style="color:#cf1322">【安全重磅警告】切勿在 iPhone【设置 - iCloud】中登录外区借用账号！</b>
            <p style="color:#a8071a">如果你从第三方借用或购买了包含小火箭的外区 Apple ID，<b>只能在 App Store 应用商店内切换登录</b>！绝对禁止在手机系统「设置」最顶部的 iCloud 中登录，否则一旦账号开启双重锁机，你的 iPhone 将面临被远程锁定勒索的极高风险！</p>
          </div>
        </div>

        <h3 id="rocket-steps">一、配置操作四步全流程</h3>
        <div class="step-flow-list">
          <div class="step-item">
            <div class="step-num">01</div>
            <div class="step-body">
              <h4>一键添加订阅节点 (Subscribe)</h4>
              <p>打开小火箭，点击首页右上角 <b>「+」</b> 号：</p>
              <ul style="margin:6px 0;padding-left:18px">
                <li>第一行「类型」点击展开，选择 <b>Subcribe (或 订阅)</b>；</li>
                <li>在「URL」栏中粘贴机场后台复制的 Shadowrocket 专属订阅链接；</li>
                <li>「备注」填写机场名称，点击右上角「完成 (Save)」。软件会自动拉取所有可用节点。</li>
              </ul>
            </div>
          </div>

          <div class="step-item">
            <div class="step-num">02</div>
            <div class="step-body">
              <h4>全局路由选择为「配置 (Config)」</h4>
              <p>在小火箭首页中部的「全局路由」一栏，必须点选为 <b>「配置 (Config)」</b>！</p>
              <p><small style="color:#b25e00">⚠️ 严禁误选为“代理”：若设为“代理”即全局走节点，不仅国内 App 极度消耗节点流量，还会导致网银、微信小程序定位混乱甚至风控拦截。</small></p>
            </div>
          </div>

          <div class="step-item">
            <div class="step-num">03</div>
            <div class="step-body">
              <h4>导入远程分流规则集</h4>
              <p>点击底部 <b>「配置」</b> 标签页，点击右上角「+」，在 URL 栏输入主流优质分流规则集地址（如经典的 ACL4SSR 或基础规则），点击下载。下载完成后轻点该规则文件并勾选 <b>「使用配置」</b>，实现国内流量直连、广告域名屏蔽、流媒体与 AI 分流。</p>
            </div>
          </div>

          <div class="step-item">
            <div class="step-num">04</div>
            <div class="step-body">
              <h4>开启连接与授权 iOS VPN 权限</h4>
              <p>返回首页，选择一个延迟适中的节点（向下滑动可测试节点 Ping 延迟）。点击顶部的主开关，系统会首次弹窗提示 <b>“Shadowrocket 想添加 VPN 配置”</b>，点击「允许」并输入 iPhone 锁屏密码即可成功开启。</p>
            </div>
          </div>
        </div>

        <h3 id="rocket-faq">二、常见问题快速排查</h3>
        <div class="troubleshoot-grid">
          <div class="trouble-card">
            <strong>节点全部超时 / 出现全红无延迟？</strong>
            <p>① 打开 iPhone「设置」->「通用」->「日期与时间」，必须确保开启“自动设置”，时间偏差超过 60 秒会导致 TLS 握手直接失败；② 检查 iPhone「设置」->「蜂窝网络」，确认 Shadowrocket 拥有使用“无线局域网与蜂窝数据”权限。</p>
          </div>
          <div class="trouble-card">
            <strong>订阅节点长时间未变动，如何手动更新？</strong>
            <p>在小火箭首页，按住屏幕向下拉动并松手，客户端即可立即发起节点重新拉取；或在订阅卡片点击右侧 (i) 图标，点击“更新”按钮。</p>
          </div>
        </div>

        <div class="download-link-bar">
          <span>官方渠道提示：请认准 App Store 正版由 Shadow Launch Technology Group 开发的小火箭。</span>
          <a class="btn-dl" href="https://apps.apple.com/app/shadowrocket/id932747118" target="_blank" rel="noopener noreferrer">前往 App Store 详情页 ↗</a>
        </div>
      </section>

      <!-- 04 v2rayN Windows 配置 -->
      <section class="content-section" id="v2rayN-Windows-配置">
        <div class="tutorial-header-bar">
          <div class="tutorial-title-group">
            <span class="section-kicker">WINDOWS GEEK FAVORITE</span>
            <h2 id="heading-v2rayn">v2rayN Windows 配置：极客级多协议全能利器</h2>
            <span class="platform-tag">Windows 10 / Windows 11</span>
          </div>
          <a class="back-top-link" href="#客户端生态总览">↑ 返回总览</a>
        </div>

        <p><b>v2rayN</b> 是 Windows 生态下历史悠久、功能最全面的开源 GUI 客户端。它支持接入 <b>Xray-core、sing-box-core</b> 等多款核心引擎，支持 VMess、VLESS、Trojan、Shadowsocks、Hysteria2 与 TUIC 等几乎所有现代网络协议，适合追求极致协议兼容与手动调校的高阶用户。</p>

        <h3 id="v2rayn-steps">一、完整安装与配置流程</h3>
        <div class="step-flow-list">
          <div class="step-item">
            <div class="step-num">01</div>
            <div class="step-body">
              <h4>安装前置运行时与解压</h4>
              <p>v2rayN 依赖微软 <b>.NET Desktop Runtime 6.0 或 8.0 (x64)</b>。请从微软官网下载安装运行时后再解压缩 v2rayN-With-Core 完整压缩包至非中文路径（例如 <code>D:\\Software\\v2rayN</code>），右键 <code>v2rayN.exe</code> 选择以管理员身份运行。</p>
            </div>
          </div>

          <div class="step-item">
            <div class="step-num">02</div>
            <div class="step-body">
              <h4>添加订阅分组并拉取</h4>
              <p>顶部菜单栏点击 <b>「订阅分组」 -> 「订阅分组设置」</b> -> 点击「添加」：</p>
              <ul style="margin:6px 0;padding-left:18px">
                <li>备注填写机场名称；</li>
                <li>可选地址 (URL) 粘贴你的订阅链接；</li>
                <li>点击确定保存。随后在顶部菜单点击 <b>「订阅分组」 -> 「更新全部订阅(不通过代理)」</b>，列表将列出所有节点。</li>
              </ul>
            </div>
          </div>

          <div class="step-item">
            <div class="step-num">03</div>
            <div class="step-body">
              <h4>测速选优：测试真连接延迟 (Ctrl + R)</h4>
              <p>在节点列表中按 <code>Ctrl + A</code> 全选节点，按键盘 <b><code>Ctrl + R</code></b> 进行<b>测试服务器真连接延迟 (Ping)</b>。务必以真连接延迟为准，避开仅测本地到入口握手的虚假低延迟节点。回车选中一个低延迟节点作为活动节点。</p>
            </div>
          </div>

          <div class="step-item">
            <div class="step-num">04</div>
            <div class="step-body">
              <h4>设置核心路由与启动系统代理</h4>
              <p>观察界面底部的核心参数栏：</p>
              <ul style="margin:6px 0;padding-left:18px">
                <li><b>路由模式：</b>在底部下拉框中切换为 <b>「绕过大陆 (whitelist)」</b>；</li>
                <li><b>系统代理：</b>最底部下拉菜单选择 <b>「自动配置系统代理」</b>，此时右下角托盘图标会由蓝色变为红色，系统代理已成功接管。</li>
                <li>如需全局拦截游戏流量，可勾选主界面的 <b>「启用 Tun 模式」</b>（需管理员权限）。</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 id="v2rayn-faq">二、高频排错备忘</h3>
        <div class="troubleshoot-grid">
          <div class="trouble-card">
            <strong>电脑意外关机或强制重启后，浏览器所有网页都打不开（提示代理错误）？</strong>
            <p>这是因为异常关机导致 Windows 系统的代理注册表未被正确注销。打开 Windows「设置」->「网络和 Internet」->「代理」，关闭“使用代理服务器”开关；或者在 v2rayN 托盘右键选择“清除系统代理”即可恢复。</p>
          </div>
          <div class="trouble-card">
            <strong>更新订阅提示“基础连接已经关闭”或“SSL 证书错误”？</strong>
            <p>在订阅设置中将该分组的“跳过证书验证 (allowInsecure)”开启，或者检查本地系统时间与网络是否正常。</p>
          </div>
        </div>

        <div class="download-link-bar">
          <span>安全指引：请认准 2dust/v2rayN 官方 GitHub Releases 仓库发布的 v2rayN-With-Core.zip。</span>
          <a class="btn-dl" href="https://github.com/2dust/v2rayN/releases" target="_blank" rel="noopener noreferrer">访问 GitHub 官方 Releases ↗</a>
        </div>
      </section>

      <!-- 05 安卓手机客户端选型 -->
      <section class="content-section" id="安卓手机客户端选型">
        <div class="tutorial-header-bar">
          <div class="tutorial-title-group">
            <span class="section-kicker">ANDROID ECOSYSTEM</span>
            <h2 id="heading-android">安卓手机客户端选型：四大工具横评与保活优化</h2>
            <span class="platform-tag">Android / HarmonyOS</span>
          </div>
          <a class="back-top-link" href="#客户端生态总览">↑ 返回总览</a>
        </div>

        <p>安卓平台的客户端选择极为丰富，不同工具在界面交互、内核性能与功能深度上各有侧重。根据自身需求进行选型，并做好安卓系统专属的<b>后台保活与分应用代理</b>，是获得平稳体验的关键。</p>

        <h3 id="android-matrix">一、安卓四大主流客户端横向横评</h3>
        <table class="comparison">
          <thead>
            <tr>
              <th>客户端名称</th>
              <th>驱动内核</th>
              <th>协议兼容度</th>
              <th>上手门槛</th>
              <th>推荐使用人群</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Clash Meta for Android (CMFA)</strong></td>
              <td>Mihomo 内核</td>
              <td>★★★★★ (全协议)</td>
              <td>简单 (★★☆☆☆)</td>
              <td><b>【新手与主力首选】</b>UI 现代化，策略组折叠清晰，分流规则成熟。</td>
            </tr>
            <tr>
              <td><strong>sing-box for Android (SFA)</strong></td>
              <td>sing-box 原生内核</td>
              <td>★★★★★ (支持全新协议)</td>
              <td>中等 (★★★☆☆)</td>
              <td><b>【极客首选】</b>内存与 CPU 占用极低，原生支持 Hysteria2 / TUIC v5。</td>
            </tr>
            <tr>
              <td><strong>v2rayNG</strong></td>
              <td>Xray-core / sing-box</td>
              <td>★★★★☆</td>
              <td>简单 (★☆☆☆☆)</td>
              <td><b>【轻量备用】</b>界面简洁经典，适合只导入单节点或简单订阅的用户。</td>
            </tr>
            <tr>
              <td><strong>NekoBox for Android (NB4A)</strong></td>
              <td>sing-box / 多插件</td>
              <td>★★★★★</td>
              <td>较高 (★★★★☆)</td>
              <td><b>【高级发烧友】</b>支持自定义链式代理与复杂分流策略。</td>
            </tr>
          </tbody>
        </table>

        <h3 id="android-tweaks">二、安卓系统级体验关键设置（必做）</h3>
        <div class="card-grid">
          <article class="info-card">
            <span class="card-no">01</span>
            <div class="icon-chip">电</div>
            <h3>电池无限制与后台保活</h3>
            <p>安卓系统省电机制极易在锁屏后杀死代理 VPN 导致断网。前往手机「设置」->「应用管理」-> 选择客户端 ->「电池 / 省电策略」，必须设置为 <b>「无限制 / 允许后台高耗电」</b>，并在多任务后台中给客户端卡片<b>加锁</b>。</p>
          </article>
          <article class="info-card">
            <span class="card-no">02</span>
            <div class="icon-chip">分</div>
            <h3>开启分应用代理 (App Bypass)</h3>
            <p>在客户端设置中开启「分应用代理 / 绕过模式」，将<b>中国移动/电信/联通营业厅、个人所得税、学习强国、手机银行与本地打车应用</b>勾选排除。防止这些敏感应用走国外代理触发异地风控或无法定位。</p>
          </article>
        </div>

        <div class="download-link-bar">
          <span>安全提醒：安卓 APK 极易被植入恶意代码，严禁从任何未经核验的第三方 APK 站或群聊下载，认准官方开源 Releases。</span>
          <a class="btn-dl" href="https://github.com/MetaCubeX/ClashMetaForAndroid/releases" target="_blank" rel="noopener noreferrer">获取 CMFA 官方 Releases ↗</a>
        </div>
      </section>

      <!-- 06 Mac 苹果电脑配置 -->
      <section class="content-section" id="Mac-苹果电脑配置">
        <div class="tutorial-header-bar">
          <div class="tutorial-title-group">
            <span class="section-kicker">MACOS OPTIMIZATION</span>
            <h2 id="heading-mac">Mac 苹果电脑配置：优雅体验与权限进阶</h2>
            <span class="platform-tag">macOS (Intel / Apple Silicon M1-M4)</span>
          </div>
          <a class="back-top-link" href="#客户端生态总览">↑ 返回总览</a>
        </div>

        <p>在 macOS 系统上，兼顾高颜值菜单栏交互、Apple Silicon 芯片原生支持与低发热是最高诉求。目前推荐主力选用 <b>Clash Verge Rev (macOS 版本)</b> 或 <b>Stash for Mac</b>。</p>

        <h3 id="mac-steps">一、首次安装与系统安全权限绕过</h3>
        <p>macOS 系统对第三方未上架 App Store 的开源网络工具具有严格的安全拦截，请遵循以下规范配置：</p>
        <div class="step-flow-list">
          <div class="step-item">
            <div class="step-num">01</div>
            <div class="step-body">
              <h4>绕过“已损坏”或“身份不明开发者”拦截</h4>
              <p>首次双击打开 <code>.dmg</code> 安装包安装后若提示 <i>“无法打开，因为来自身份不明的开发者”</i>：打开 Mac「系统设置」->「隐私与安全性」-> 滑动到底部安全性区域，点击 <b>「仍要打开」</b>，输入 Mac 登录密码确认即可。</p>
            </div>
          </div>

          <div class="step-item">
            <div class="step-num">02</div>
            <div class="step-body">
              <h4>授权安装网络扩展 (Network Extension)</h4>
              <p>当在客户端中启用“TUN 模式”或“系统代理增强”时，系统会弹出扩展授权窗口。点击「打开系统设置」->「允许加载系统扩展」，并输入开机密码以授予网卡级路由转发权限。</p>
            </div>
          </div>

          <div class="step-item">
            <div class="step-num">03</div>
            <div class="step-body">
              <h4>开发环境：终端命令行代理快速设置</h4>
              <p>macOS 系统代理默认不接管 Terminal 终端（如 <code>git clone</code>、<code>brew install</code>、<code>curl</code>）。你可以将以下命令存入 <code>~/.zshrc</code> 实现终端一键加速：</p>
              <div class="code-box">
                <span class="code-comment"># 将以下别名加入 ~/.zshrc 配置文件中</span><br/>
                <code>alias setproxy="export http_proxy=http://127.0.0.1:7890 https_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7890"</code><br/>
                <code>alias unsetproxy="unset http_proxy https_proxy all_proxy"</code>
              </div>
            </div>
          </div>
        </div>

        <div class="download-link-bar">
          <span>Mac 用户建议：Apple Silicon (M1/M2/M3/M4) 设备下载时，请务必选择 <b>arm64 / aarch64</b> 版本以获得最佳续航与性能。</span>
          <a class="btn-dl" href="#Clash-Verge-Rev-教程">查看 Clash Verge Rev 安装步骤 ↑</a>
        </div>
      </section>

      <!-- 07 sing-box 极速上手 -->
      <section class="content-section" id="sing-box-极速上手">
        <div class="tutorial-header-bar">
          <div class="tutorial-title-group">
            <span class="section-kicker">NEXT-GEN ENGINE</span>
            <h2 id="heading-singbox">sing-box 极速上手：下一代通用网络引擎</h2>
            <span class="platform-tag">跨平台 · Universal Core</span>
          </div>
          <a class="back-top-link" href="#客户端生态总览">↑ 返回总览</a>
        </div>

        <p><b>sing-box</b> 是由开源团队 SagerNet 打造的全新通用网络代理核心。没有历史负担，在架构设计上追求极高并发与超轻量资源消耗，是首个原生完整支持 <b>TUIC v5、Hysteria 2、ShadowTLS、WireGuard 与 VLESS-Reality</b> 的跨时代引擎，已成为高端专线机场的标配底座。</p>

        <h3 id="singbox-structure">一、科学拆解核心 JSON 配置架构</h3>
        <p>sing-box 的核心配置文件采用清晰的 JSON 规范，主要由以下四大部分构成：</p>
        <div class="code-box">
          <span class="code-comment">// sing-box 核心配置模型结构解析</span><br/>
          {<br/>
          &nbsp;&nbsp;<span style="color:#f59e0b">"dns"</span>: { <span class="code-comment">/* 科学分流 DNS 体系，包含 Fake-IP 与国内外分流 */</span> },<br/>
          &nbsp;&nbsp;<span style="color:#f59e0b">"inbounds"</span>: [<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{ <span style="color:#9fe2bf">"type"</span>: <span style="color:#a5d6a7">"mixed"</span>, <span style="color:#9fe2bf">"listen_port"</span>: 2080 }, <span class="code-comment">// 本地混合代理端口</span><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{ <span style="color:#9fe2bf">"type"</span>: <span style="color:#a5d6a7">"tun"</span>, <span style="color:#9fe2bf">"interface_name"</span>: <span style="color:#a5d6a7">"tun0"</span>, <span style="color:#9fe2bf">"auto_route"</span>: true } <span class="code-comment">// 虚拟网卡</span><br/>
          &nbsp;&nbsp;],<br/>
          &nbsp;&nbsp;<span style="color:#f59e0b">"outbounds"</span>: [<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{ <span style="color:#9fe2bf">"type"</span>: <span style="color:#a5d6a7">"selector"</span>, <span style="color:#9fe2bf">"tag"</span>: <span style="color:#a5d6a7">"节点选择"</span>, <span style="color:#9fe2bf">"outbounds"</span>: [...] }, <span class="code-comment">// 手动选择</span><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{ <span style="color:#9fe2bf">"type"</span>: <span style="color:#a5d6a7">"urltest"</span>, <span style="color:#9fe2bf">"tag"</span>: <span style="color:#a5d6a7">"自动优选"</span>, <span style="color:#9fe2bf">"outbounds"</span>: [...] }, <span class="code-comment">// 测速切换</span><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{ <span style="color:#9fe2bf">"type"</span>: <span style="color:#a5d6a7">"direct"</span>, <span style="color:#9fe2bf">"tag"</span>: <span style="color:#a5d6a7">"直连出站"</span> }<br/>
          &nbsp;&nbsp;],<br/>
          &nbsp;&nbsp;<span style="color:#f59e0b">"route"</span>: { <span class="code-comment">/* 规则集 (Rule Set) 匹配路由，精准拦截与直连 */</span> }<br/>
          }
        </div>

        <h3 id="singbox-start">二、图形端三步速成</h3>
        <ol class="checklist">
          <li><strong>获取图形客户端：</strong>前往 SagerNet/sing-box 官方 Releases，下载官方跨平台图形客户端（如 Android 端的 SFA、Windows/macOS 端的 SFM 或第三方兼容前端）。</li>
          <li><strong>导入专用订阅链接：</strong>在服务提供商后台选择复制“sing-box 专用订阅”或者配置格式，粘贴至客户端订阅管理器中并一键更新。</li>
          <li><strong>开启 TUN 虚拟网卡运行：</strong>进入主控制板（Dashboard），勾选“启用 Tun”并启动服务，即可体验极低延迟的下一代协议专线。</li>
        </ol>

        <div class="download-link-bar">
          <span>官方开源社区：探索更多 sing-box 进阶特性与文档。</span>
          <a class="btn-dl" href="https://github.com/SagerNet/sing-box/releases" target="_blank" rel="noopener noreferrer">访问 sing-box 官方 GitHub ↗</a>
        </div>
      </section>`
  },
  ai: {
    label: "AI工具",
    badge: "2026 全球效率神器指南",
    title: "AI 工具精选：四大家族 20 款顶尖工具全解析",
    lead: "围绕写作研究、编程开发、图像视觉与智能搜索四大高频领域，深度梳理全球知名度与实用性最高的 20 款 AI 工具。讲透核心功能、独家优势与官方入口，助你建立高确定性工作流。",
    nav: ["工具地图", "写作与研究", "编程助手", "图像生成", "智能搜索", "网络与使用边界"],
    content: `
      <!-- 01 工具地图 -->
      <section class="content-section" id="工具地图">
        <span class="section-kicker">AI ECOSYSTEM MATRIX</span>
        <h2 id="heading-ai-map">按任务选择工具：四大核心领域导航</h2>
        <p>连接只是第一步，选对工具才能倍增生产力。点击下方四大类别卡片，可直接平滑跳转至对应细分领域的 Top 5 工具详解与官网入口：</p>
        
        <div class="ai-hub-grid">
          <a class="ai-hub-card" href="#写作与研究">
            <div class="icon-chip">文</div>
            <h3>写作与研究 <span>TOP 5 推荐 →</span></h3>
            <p>适合提纲构思、学术研报、长文润色、逻辑梳理与多角度深度思考。</p>
          </a>
          <a class="ai-hub-card" href="#编程助手">
            <div class="icon-chip">码</div>
            <h3>编程助手 <span>TOP 5 推荐 →</span></h3>
            <p>用于代码理解、原型实现、多文件重构、单元测试与技术文档整理。</p>
          </a>
          <a class="ai-hub-card" href="#图像生成">
            <div class="icon-chip">图</div>
            <h3>图像生成 <span>TOP 5 推荐 →</span></h3>
            <p>用于概念视觉、商业配图、人像摄影、风格探索与矢量素材变体。</p>
          </a>
          <a class="ai-hub-card" href="#智能搜索">
            <div class="icon-chip">搜</div>
            <h3>智能搜索 <span>TOP 5 推荐 →</span></h3>
            <p>适合快速定位权威信源、跨语言信息穿透与长程复合课题深度调研。</p>
          </a>
        </div>

        <div class="callout">
          <span>💡</span>
          <div>
            <b>科学使用原则</b>
            <p>AI 不应只被当作聊天玩具，而应作为“思考放大器”与“初稿加速器”。建议搭配统一的提示词模板与明确的交付验收标准，并在输出后进行人工事实核验。</p>
          </div>
        </div>
      </section>

      <!-- 02 写作与研究 -->
      <section class="content-section" id="写作与研究">
        <div class="tutorial-header-bar">
          <div class="tutorial-title-group">
            <span class="section-kicker">WRITING & RESEARCH</span>
            <h2 id="heading-writing">写作与研究：五大顶尖 AI 生产力工具</h2>
            <span class="platform-tag">长文 · 论文 · 思维整理</span>
          </div>
          <a class="back-top-link" href="#工具地图">↑ 返回工具地图</a>
        </div>
        <p>优秀的写作与研究 AI 工具不仅具备顺畅自然的语言组织能力，更具备长文本记忆、跨语言逻辑拆解与严密的学术论证推理能力。</p>

        <div class="ai-tool-list">
          <!-- 01 ChatGPT -->
          <article class="ai-card">
            <div class="ai-card-header">
              <div class="ai-brand-group">
                <span class="ai-logo-pill p-writing">GPT</span>
                <div class="ai-name-box">
                  <h3>ChatGPT (OpenAI)</h3>
                  <small>全球知名度最高的全能多模态大模型基座</small>
                </div>
              </div>
              <a class="ai-official-btn" href="https://chatgpt.com" target="_blank" rel="noopener noreferrer">访问官网直达 ↗</a>
            </div>
            <div class="ai-details-grid">
              <div class="ai-detail-block">
                <label>核心功能与用处</label>
                <p>通用文字创作、复杂多轮头脑风暴、高级数据分析 (Python 脚本自动执行计算与图表绘制)、多语言高精度互译与定制化 GPTs 工作流搭建。</p>
              </div>
              <div class="ai-detail-block">
                <label>独家优势与亮点</label>
                <p>生态最繁荣，拥有强大的多模态视觉与实时语音交互；内置 o1 / o3 深度思考模型，数理逻辑与跨学科复杂长链推理能力稳居行业标杆地位。</p>
              </div>
            </div>
          </article>

          <!-- 02 Claude -->
          <article class="ai-card">
            <div class="ai-card-header">
              <div class="ai-brand-group">
                <span class="ai-logo-pill p-writing">CL</span>
                <div class="ai-name-box">
                  <h3>Claude (Anthropic)</h3>
                  <small>长文质感最好、最懂学术写作与代码理解的创作中枢</small>
                </div>
              </div>
              <a class="ai-official-btn" href="https://claude.ai" target="_blank" rel="noopener noreferrer">访问官网直达 ↗</a>
            </div>
            <div class="ai-details-grid">
              <div class="ai-detail-block">
                <label>核心功能与用处</label>
                <p>数十万字超长学术文献与书籍精读总结、深度行业研报撰写、复杂技术文档解析与结构化写作；具备 Artifacts 独立实时交互画布工作区。</p>
              </div>
              <div class="ai-detail-block">
                <label>独家优势与亮点</label>
                <p>文字表达极其优美细腻、毫无机械“AI 塑料腔”；200K 超长上下文窗口容错率极低；Claude 3.5 / 3.7 Sonnet 具备公认最顶级的情境理解与逻辑推导。</p>
              </div>
            </div>
          </article>

          <!-- 03 DeepSeek -->
          <article class="ai-card">
            <div class="ai-card-header">
              <div class="ai-brand-group">
                <span class="ai-logo-pill p-writing">DS</span>
                <div class="ai-name-box">
                  <h3>DeepSeek (深度求索)</h3>
                  <small>现象级开源黑马 · 极致性价比与长思维链推理</small>
                </div>
              </div>
              <a class="ai-official-btn" href="https://chat.deepseek.com" target="_blank" rel="noopener noreferrer">访问官网直达 ↗</a>
            </div>
            <div class="ai-details-grid">
              <div class="ai-detail-block">
                <label>核心功能与用处</label>
                <p>深度数学证明推导、学术研究、逻辑推演、长文论文架构搭建与中文复杂语境深度问答；完全可视化展现长思维链 (Chain of Thought)。</p>
              </div>
              <div class="ai-detail-block">
                <label>独家优势与亮点</label>
                <p>DeepSeek-R1 推理能力比肩全球顶级闭源模型，在奥数与复杂逻辑任务中表现抢眼；API 调用成本极低，原生中文理解与成语文化底蕴极其纯正。</p>
              </div>
            </div>
          </article>

          <!-- 04 Notion AI -->
          <article class="ai-card">
            <div class="ai-card-header">
              <div class="ai-brand-group">
                <span class="ai-logo-pill p-writing">NO</span>
                <div class="ai-name-box">
                  <h3>Notion AI (Notion)</h3>
                  <small>与个人工作区及团队知识库无缝融合的沉浸助手</small>
                </div>
              </div>
              <a class="ai-official-btn" href="https://www.notion.so" target="_blank" rel="noopener noreferrer">访问官网直达 ↗</a>
            </div>
            <div class="ai-details-grid">
              <div class="ai-detail-block">
                <label>核心功能与用处</label>
                <p>笔记内一键提炼要点、生成会议纪要、文章语法润色与风格变换、自动建立多维表格数据属性；支持针对整个 Notion 工作区进行全局问答。</p>
              </div>
              <div class="ai-detail-block">
                <label>独家优势与亮点</label>
                <p>彻底免除在多个网页间频繁复制粘贴提示词的繁琐；可直接读取历史笔记作为上下文参考，是知识工作者与协作团队的最佳伙伴。</p>
              </div>
            </div>
          </article>

          <!-- 05 Kimi -->
          <article class="ai-card">
            <div class="ai-card-header">
              <div class="ai-brand-group">
                <span class="ai-logo-pill p-writing">KM</span>
                <div class="ai-name-box">
                  <h3>Kimi (月之暗面)</h3>
                  <small>百万字超长无损上下文与国内行业研报阅读神器</small>
                </div>
              </div>
              <a class="ai-official-btn" href="https://kimi.moonshot.cn" target="_blank" rel="noopener noreferrer">访问官网直达 ↗</a>
            </div>
            <div class="ai-details-grid">
              <div class="ai-detail-block">
                <label>核心功能与用处</label>
                <p>支持批量上传数百页财报 PDF、法条文献与录音纪要进行交叉比对和提炼；擅长中文行业深度研报检索与学术参考文献溯源。</p>
              </div>
              <div class="ai-detail-block">
                <label>独家优势与亮点</label>
                <p>首创支持超长无损长文本输入，对中文互联网研报格式排版还原极佳，免科学上网即可直接流畅使用，响应迅速且完全免费。</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- 03 编程助手 -->
      <section class="content-section" id="编程助手">
        <div class="tutorial-header-bar">
          <div class="tutorial-title-group">
            <span class="section-kicker">CODING ASSISTANTS</span>
            <h2 id="heading-coding">编程助手：五大革命性开发提效工具</h2>
            <span class="platform-tag">AI IDE · 智能代码补全 · Agentic 编程</span>
          </div>
          <a class="back-top-link" href="#工具地图">↑ 返回工具地图</a>
        </div>
        <p>AI 编程助手已经从早期的“单行补全”进化到“全项目理解、多文件并发修改与自主执行测试”的智能体（Agent）时代。</p>

        <div class="ai-tool-list">
          <!-- 01 Cursor -->
          <article class="ai-card">
            <div class="ai-card-header">
              <div class="ai-brand-group">
                <span class="ai-logo-pill p-coding">CR</span>
                <div class="ai-name-box">
                  <h3>Cursor (Anysphere)</h3>
                  <small>新一代 AI 原生代码编辑器 · 改变软件工程范式的领跑者</small>
                </div>
              </div>
              <a class="ai-official-btn" href="https://www.cursor.com" target="_blank" rel="noopener noreferrer">访问官网直达 ↗</a>
            </div>
            <div class="ai-details-grid">
              <div class="ai-detail-block">
                <label>核心功能与用处</label>
                <p>基于 VS Code 定制的专业 AI IDE。通过快捷键 <code>Ctrl+K</code> 原地编辑、<code>Ctrl+L</code> 针对选区问答，以及 <code>Ctrl+I (Composer)</code> 进行全项目多文件协同重构。</p>
              </div>
              <div class="ai-detail-block">
                <label>独家优势与亮点</label>
                <p>全代码库深度索引（Codebase Indexing）可智能检索关联函数；支持一键切换 Claude 3.5 Sonnet 与 GPT-4o；Git diff 审阅机制极大保障代码安全。</p>
              </div>
            </div>
          </article>

          <!-- 02 GitHub Copilot -->
          <article class="ai-card">
            <div class="ai-card-header">
              <div class="ai-brand-group">
                <span class="ai-logo-pill p-coding">GH</span>
                <div class="ai-name-box">
                  <h3>GitHub Copilot (GitHub / Microsoft)</h3>
                  <small>全球装机量最大、兼容各大 IDE 的老牌代码结对助手</small>
                </div>
              </div>
              <a class="ai-official-btn" href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer">访问官网直达 ↗</a>
            </div>
            <div class="ai-details-grid">
              <div class="ai-detail-block">
                <label>核心功能与用处</label>
                <p>支持无缝嵌入 VS Code、JetBrains 全家桶、Visual Studio 与 Xcode。提供实时的行级/函数级幽灵代码预测、Copilot Chat 问答与单元测试批量生成。</p>
              </div>
              <div class="ai-detail-block">
                <label>独家优势与亮点</label>
                <p>背靠 GitHub 海量开源代码调优，响应延迟极低；企业级合规性与安全隐私保障完备，与 GitHub PR、Issue 生态无缝深度联动。</p>
              </div>
            </div>
          </article>

          <!-- 03 Windsurf -->
          <article class="ai-card">
            <div class="ai-card-header">
              <div class="ai-brand-group">
                <span class="ai-logo-pill p-coding">WS</span>
                <div class="ai-name-box">
                  <h3>Windsurf (Codeium)</h3>
                  <small>革命性 Agentic IDE · 具备深度上下文感知流 (Flows)</small>
                </div>
              </div>
              <a class="ai-official-btn" href="https://codeium.com/windsurf" target="_blank" rel="noopener noreferrer">访问官网直达 ↗</a>
            </div>
            <div class="ai-details-grid">
              <div class="ai-detail-block">
                <label>核心功能与用处</label>
                <p>创新的 Cascade 交互界面。能够像高级工程师一样自主阅读终端输出错误、定位报错代码所在文件并自动生成完整的修复补丁。</p>
              </div>
              <div class="ai-detail-block">
                <label>独家优势与亮点</label>
                <p>首创“心流 (Flows)”理念，开发者无需频繁手动 @ 指定文件，AI 会根据编辑行为自动推测意图，多任务协同体验丝滑流畅。</p>
              </div>
            </div>
          </article>

          <!-- 04 v0 by Vercel -->
          <article class="ai-card">
            <div class="ai-card-header">
              <div class="ai-brand-group">
                <span class="ai-logo-pill p-coding">V0</span>
                <div class="ai-name-box">
                  <h3>v0 by Vercel</h3>
                  <small>自然语言生成高保真现代前端界面的原型魔法师</small>
                </div>
              </div>
              <a class="ai-official-btn" href="https://v0.dev" target="_blank" rel="noopener noreferrer">访问官网直达 ↗</a>
            </div>
            <div class="ai-details-grid">
              <div class="ai-detail-block">
                <label>核心功能与用处</label>
                <p>通过对话描述需求（或上传一张草图/截图），即刻生成美观、现代且完全可交互的 React / Next.js / Tailwind CSS 前端页面组件。</p>
              </div>
              <div class="ai-detail-block">
                <label>独家优势与亮点</label>
                <p>输出的代码质量极高且遵循行业现代规范（shadcn/ui 体系）；支持直接在浏览器内实时渲染预览并一键复制代码复制到项目中。</p>
              </div>
            </div>
          </article>

          <!-- 05 Aider -->
          <article class="ai-card">
            <div class="ai-card-header">
              <div class="ai-brand-group">
                <span class="ai-logo-pill p-coding">AD</span>
                <div class="ai-name-box">
                  <h3>Aider (终端代码 Agent)</h3>
                  <small>极客最爱的纯命令行 AI 结对编程神器 · 贴合 Git 提交流</small>
                </div>
              </div>
              <a class="ai-official-btn" href="https://aider.chat" target="_blank" rel="noopener noreferrer">访问官网直达 ↗</a>
            </div>
            <div class="ai-details-grid">
              <div class="ai-detail-block">
                <label>核心功能与用处</label>
                <p>直接运行在本地 Terminal 终端，支持接入 Claude 3.5 Sonnet、OpenAI o1 或 DeepSeek-R1，自主读取项目目录树并按需求跨文件批量编辑。</p>
              </div>
              <div class="ai-detail-block">
                <label>独家优势与亮点</label>
                <p>深度融入 Git 工作流：每次修改自动生成语义清晰的 Git Commit 说明；无需图形界面开销，轻量高效，深受全栈极客追捧。</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- 04 图像生成 -->
      <section class="content-section" id="图像生成">
        <div class="tutorial-header-bar">
          <div class="tutorial-title-group">
            <span class="section-kicker">IMAGE GENERATION</span>
            <h2 id="heading-image">图像生成：五大顶尖视觉与艺术创作工具</h2>
            <span class="platform-tag">艺术概念 · 商业摄影 · 矢量设计</span>
          </div>
          <a class="back-top-link" href="#工具地图">↑ 返回工具地图</a>
        </div>
        <p>AI 视觉生成已迈入高保真、高可控与专业商用阶段，彻底告别早期的畸变手指与不可控构图。</p>

        <div class="ai-tool-list">
          <!-- 01 Midjourney -->
          <article class="ai-card">
            <div class="ai-card-header">
              <div class="ai-brand-group">
                <span class="ai-logo-pill p-image">MJ</span>
                <div class="ai-name-box">
                  <h3>Midjourney</h3>
                  <small>数字艺术审美与商业视觉渲染无可争议的天花板</small>
                </div>
              </div>
              <a class="ai-official-btn" href="https://www.midjourney.com" target="_blank" rel="noopener noreferrer">访问官网直达 ↗</a>
            </div>
            <div class="ai-details-grid">
              <div class="ai-detail-block">
                <label>核心功能与用处</label>
                <p>商业电影级概念艺术、高端产品摄影、广告海报设计、奇幻场景构建与艺术插画；支持局部重绘 (Inpainting)、画面平移扩展与角色特征一致性。</p>
              </div>
              <div class="ai-detail-block">
                <label>独家优势与亮点</label>
                <p>对光影层次、色彩搭配、材质细节与构图运镜的理解领先业界；具备官方独立 Web 创作界面，无需复杂参数即可生成影院级震撼质感。</p>
              </div>
            </div>
          </article>

          <!-- 02 FLUX.1 -->
          <article class="ai-card">
            <div class="ai-card-header">
              <div class="ai-brand-group">
                <span class="ai-logo-pill p-image">FX</span>
                <div class="ai-name-box">
                  <h3>FLUX.1 (Black Forest Labs)</h3>
                  <small>开源生图新王者 · 原 SD 核心原班团队打造</small>
                </div>
              </div>
              <a class="ai-official-btn" href="https://blackforestlabs.ai" target="_blank" rel="noopener noreferrer">访问官网直达 ↗</a>
            </div>
            <div class="ai-details-grid">
              <div class="ai-detail-block">
                <label>核心功能与用处</label>
                <p>超写实人像摄影、复杂多主体互动、海报文字渲染与各类专业风格创作；分为 schnell (极速)、dev (开发者非商用) 与 pro (企业商用 API) 三大系列。</p>
              </div>
              <div class="ai-detail-block">
                <label>独家优势与亮点</label>
                <p>完美攻克生图中“手指畸变”与“生图无法精确包含清晰英文字符”的两大历史顽疾；指令遵循极度严格，在开源社区引发全球热潮。</p>
              </div>
            </div>
          </article>

          <!-- 03 Stable Diffusion 3.5 -->
          <article class="ai-card">
            <div class="ai-card-header">
              <div class="ai-brand-group">
                <span class="ai-logo-pill p-image">SD</span>
                <div class="ai-name-box">
                  <h3>Stable Diffusion 3.5 / SDXL (Stability AI)</h3>
                  <small>离线自由可控 · 全球最庞大的开源模型生态基石</small>
                </div>
              </div>
              <a class="ai-official-btn" href="https://stability.ai" target="_blank" rel="noopener noreferrer">访问官网直达 ↗</a>
            </div>
            <div class="ai-details-grid">
              <div class="ai-detail-block">
                <label>核心功能与用处</label>
                <p>支持配合 ComfyUI / WebUI 在本地高性能显卡上离线运行；通过 ControlNet 姿态控制、LoRA 模型微调实现精准至像素级的工业级定制。</p>
              </div>
              <div class="ai-detail-block">
                <label>独家优势与亮点</label>
                <p>完全掌控自己的模型资产与数据隐私，商业使用无需担心服务商封号或断网；全球海量开源插件赋予其几乎无限的扩展自由度。</p>
              </div>
            </div>
          </article>

          <!-- 04 DALL·E 3 -->
          <article class="ai-card">
            <div class="ai-card-header">
              <div class="ai-brand-group">
                <span class="ai-logo-pill p-image">DL</span>
                <div class="ai-name-box">
                  <h3>DALL·E 3 (OpenAI)</h3>
                  <small>内置于 ChatGPT 的智能绘图大脑 · 零 Prompt 门槛</small>
                </div>
              </div>
              <a class="ai-official-btn" href="https://openai.com/dall-e-3" target="_blank" rel="noopener noreferrer">访问官网直达 ↗</a>
            </div>
            <div class="ai-details-grid">
              <div class="ai-detail-block">
                <label>核心功能与用处</label>
                <p>适合与 ChatGPT 对话直接生成配图、Icon 创意灵感、插画分镜与品牌 Logo；支持在聊天中指明某处不满意直接连贯修改。</p>
              </div>
              <div class="ai-detail-block">
                <label>独家优势与亮点</label>
                <p>语义理解力无与伦比，哪怕输入极其口语化的大白话，系统也会自动扩展优化为高质量画面；与 GPT 知识库深度融合闭环。</p>
              </div>
            </div>
          </article>

          <!-- 05 Recraft -->
          <article class="ai-card">
            <div class="ai-card-header">
              <div class="ai-brand-group">
                <span class="ai-logo-pill p-image">RC</span>
                <div class="ai-name-box">
                  <h3>Recraft</h3>
                  <small>设计师专属的矢量图形 (SVG) 与 3D 品牌视觉引擎</small>
                </div>
              </div>
              <a class="ai-official-btn" href="https://www.recraft.ai" target="_blank" rel="noopener noreferrer">访问官网直达 ↗</a>
            </div>
            <div class="ai-details-grid">
              <div class="ai-detail-block">
                <label>核心功能与用处</label>
                <p>直接生成无限分辨率矢量图 (SVG)、高品质 3D 图标、像素艺术、品牌色系搭配与成套设计规范组件；配备类似 Figma 的无限白板工作区。</p>
              </div>
              <div class="ai-detail-block">
                <label>独家优势与亮点</label>
                <p>独家支持真正的无损矢量曲线输出，导出即可直接在 Illustrator 或 Web 代码中使用；能够精准锁定调色盘色彩与整套视觉风格一致性。</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- 05 智能搜索 -->
      <section class="content-section" id="智能搜索">
        <div class="tutorial-header-bar">
          <div class="tutorial-title-group">
            <span class="section-kicker">INTELLIGENT SEARCH</span>
            <h2 id="heading-search">智能搜索：五大直接回答与深度信源穿透工具</h2>
            <span class="platform-tag">学术引用 · 跨语言检索 · 深度研报合成</span>
          </div>
          <a class="back-top-link" href="#工具地图">↑ 返回工具地图</a>
        </div>
        <p>告别传统搜索引擎广告满天飞与机械关键词匹配。AI 搜索能够读懂你的真实意图，直接汇总结构化答案，并给出确凿信源脚注。</p>

        <div class="ai-tool-list">
          <!-- 01 Perplexity AI -->
          <article class="ai-card">
            <div class="ai-card-header">
              <div class="ai-brand-group">
                <span class="ai-logo-pill p-search">PX</span>
                <div class="ai-name-box">
                  <h3>Perplexity AI</h3>
                  <small>全球对话式智能搜索的开创者与学术信息检索标杆</small>
                </div>
              </div>
              <a class="ai-official-btn" href="https://www.perplexity.ai" target="_blank" rel="noopener noreferrer">访问官网直达 ↗</a>
            </div>
            <div class="ai-details-grid">
              <div class="ai-detail-block">
                <label>核心功能与用处</label>
                <p>输入自然语言问题，AI 实时检索全球前沿网页并提炼为结构化报告；提供 Pro Search 模式进行交互式追问与多步骤深度探寻。</p>
              </div>
              <div class="ai-detail-block">
                <label>独家优势与亮点</label>
                <p>每个结论均附带极其清晰的数字角标引用来源，彻底消除 AI 幻觉顾虑；可自由选择切换背后的推理核心（如 Sonnet / GPT-4o）。</p>
              </div>
            </div>
          </article>

          <!-- 02 Genspark -->
          <article class="ai-card">
            <div class="ai-card-header">
              <div class="ai-brand-group">
                <span class="ai-logo-pill p-search">GS</span>
                <div class="ai-name-box">
                  <h3>Genspark</h3>
                  <small>实时生成定制化多维百科研报 (Sparkpages) 的新一代引擎</small>
                </div>
              </div>
              <a class="ai-official-btn" href="https://www.genspark.ai" target="_blank" rel="noopener noreferrer">访问官网直达 ↗</a>
            </div>
            <div class="ai-details-grid">
              <div class="ai-detail-block">
                <label>核心功能与用处</label>
                <p>搜索产品评测、旅游攻略或复杂技术概念时，自动指派多个 AI 智能体并行搜索，实时生成包含优缺点对比、参数矩阵的 Sparkpage 独立网页。</p>
              </div>
              <div class="ai-detail-block">
                <label>独家优势与亮点</label>
                <p>坚决屏蔽营销水军与 SEO 垃圾站点的干扰；信息呈现结构立体丰富，图文并茂，极大节省读者逐个翻看网页筛选信息的时间。</p>
              </div>
            </div>
          </article>

          <!-- 03 Felo AI Search -->
          <article class="ai-card">
            <div class="ai-card-header">
              <div class="ai-brand-group">
                <span class="ai-logo-pill p-search">FL</span>
                <div class="ai-name-box">
                  <h3>Felo AI Search</h3>
                  <small>跨越语言鸿沟 · 擅长跨国前沿知识检索与思维导图提炼</small>
                </div>
              </div>
              <a class="ai-official-btn" href="https://felo.ai" target="_blank" rel="noopener noreferrer">访问官网直达 ↗</a>
            </div>
            <div class="ai-details-grid">
              <div class="ai-detail-block">
                <label>核心功能与用处</label>
                <p>用中文提问，自动检索全球英文、日文等外语权威信源并汇总提炼为中文报告；支持一键将搜索结果转换生成 PPT 大纲与思维导图。</p>
              </div>
              <div class="ai-detail-block">
                <label>独家优势与亮点</label>
                <p>对亚洲多语言及学术论文检索优化极佳，极大消除了全球信息流通的信息差，界面清爽无多余干扰，学术检索完全免费开放。</p>
              </div>
            </div>
          </article>

          <!-- 04 Kimi 探索版 -->
          <article class="ai-card">
            <div class="ai-card-header">
              <div class="ai-brand-group">
                <span class="ai-logo-pill p-search">KR</span>
                <div class="ai-name-box">
                  <h3>Kimi 探索版 (Kimi Research)</h3>
                  <small>针对复合型深度课题的自主长程研究智能体</small>
                </div>
              </div>
              <a class="ai-official-btn" href="https://kimi.moonshot.cn" target="_blank" rel="noopener noreferrer">访问官网直达 ↗</a>
            </div>
            <div class="ai-details-grid">
              <div class="ai-detail-block">
                <label>核心功能与用处</label>
                <p>面向高门槛行业调研与学术综述，AI 能够自主将大问题拆解为多个子课题，深入穿透数百个网页持续检索并产出系统化深度长篇研报。</p>
              </div>
              <div class="ai-detail-block">
                <label>独家优势与亮点</label>
                <p>中文本土商业数据、政策法规与行业资讯挖掘极度深入；逻辑归纳脉络清晰，能够高质量完成数小时人工案头研究的工作量。</p>
              </div>
            </div>
          </article>

          <!-- 05 Google Gemini -->
          <article class="ai-card">
            <div class="ai-card-header">
              <div class="ai-brand-group">
                <span class="ai-logo-pill p-search">GM</span>
                <div class="ai-name-box">
                  <h3>Google Gemini with Grounding</h3>
                  <small>背靠谷歌实时网络索引与多模态全球知识图谱</small>
                </div>
              </div>
              <a class="ai-official-btn" href="https://gemini.google.com" target="_blank" rel="noopener noreferrer">访问官网直达 ↗</a>
            </div>
            <div class="ai-details-grid">
              <div class="ai-detail-block">
                <label>核心功能与用处</label>
                <p>实时查询突发新闻、即时数据、行程规划；支持深度结合 Google Workspace（Gmail、Docs、Drive）实现私有文件与公开网络联合搜索。</p>
              </div>
              <div class="ai-detail-block">
                <label>独家优势与亮点</label>
                <p>享有全球最快的数据爬取与实时索引更新速度；原生支持百万级超大上下文输入，图文视频多模态检索交互响应极度迅捷。</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- 06 网络与使用边界 -->
      <section class="content-section" id="网络与使用边界">
        <span class="section-kicker">NETWORK ACCESS & PRIVACY</span>
        <h2 id="heading-ai-access">稳定访问网络环境与安全隐私边界</h2>
        <p>主流海外顶尖 AI 工具（如 ChatGPT、Claude、Perplexity、Midjourney 等）对用户的网络接入环境有着严苛的风控门槛，合理配置网络与恪守隐私边界至关重要：</p>
        
        <div class="card-grid">
          <article class="info-card">
            <div class="icon-chip">网</div>
            <h3>IP 纯净度与专线节点</h3>
            <p>大量公共机房（Hosting）IP 容易被 Cloudflare 拦截或触发 1020 报错。建议选用原生住宅 IP、具备全 IPLC/IEPL 物理内网专线的服务。<br/><a href="#airports" style="color:#176b46;font-weight:700">查看 15 家后台核验机场推荐 →</a></p>
          </article>
          <article class="info-card">
            <div class="icon-chip">端</div>
            <h3>客户端防 DNS 泄漏与 TUN</h3>
            <p>使用桌面或移动客户端时，请确保开启 Fake-IP 模式或 TUN 虚拟网卡，避免浏览器向国内 DNS 泄露查询引起阻断。<br/><a href="#clients" style="color:#176b46;font-weight:700">查看客户端零基础配置教程 →</a></p>
          </article>
        </div>

        <div class="callout" style="margin-top:24px">
          <span>!</span>
          <div>
            <b>企业与个人绝对隐私边界</b>
            <p>默认情况下，公有云 AI 模型可能会将用户输入的数据纳入再训练语料库。<b>严禁向任何在线 AI 输入服务器私钥、数据库密码、未脱敏的客户隐私、未公开财务报表及受保密协议 (NDA) 约束的核心代码。</b></p>
          </div>
        </div>
      </section>`
  },
  network: {
    label: "故障与专线技术",
    badge: "2026 技术专栏与排错手册",
    title: "故障排查与专线技术：从急救指南到底层硬核解析",
    lead: "拒绝玄学试错，用科学网络工程方法拆解连接问题。覆盖节点全红超时、订阅失败、Wi-Fi/蜂窝断网、GitHub 加速，深度解析 IPLC/IEPL 物理专线、原生家宽 IP 与现代协议架构。",
    nav: [
      "故障诊断中心",
      "节点全红/超时排查",
      "订阅更新失败修复",
      "Wi-Fi能用流量断网急救",
      "国外网站打不开急救",
      "Google / 学术搜索访问",
      "GitHub 加速与 clone 提速",
      "SEO/GEO 深度矩阵",
      "原生 IP 与住宅家宽解析",
      "IEPL 与 IPLC 专线解析",
      "主流协议对比 (SS/VLESS)"
    ],
    content: `
      <!-- 01 故障诊断中心 -->
      <section class="content-section" id="故障诊断中心">
        <span class="section-kicker">EMERGENCY DISPATCH</span>
        <h2 id="heading-diagnostic-center">故障诊断中心：四层排查模型与快速自检</h2>
        <p>当网络突然中断或海外网站打不开时，盲目重启电脑或反复重装客户端通常无济于事。根据计算机网络分层原理，建议按<b>四级排查漏斗</b>从内向外准确定位瓶颈：</p>
        
        <div class="stat-grid" style="margin:20px 0 28px">
          <div class="stat-card"><strong>L1 本地网络</strong><span>Wi-Fi / 蜂窝 / 本地 DNS 连通性</span></div>
          <div class="stat-card"><strong>L2 客户端状态</strong><span>端口冲突 / 证书验证 / TUN 驱动</span></div>
          <div class="stat-card"><strong>L3 专线与节点</strong><span>入口状态 / 专线抖动 / 节点维护</span></div>
        </div>

        <h3 id="diag-fast-checklist">5 分钟标准化排查决策流</h3>
        <ol class="checklist">
          <li><strong>Step 1 测本地原生网：</strong>先关闭代理软件，直接在浏览器中访问 <code>baidu.com</code> 或 <code>bilibili.com</code>。若打不开，说明是家庭路由器欠费或本地 DNS 故障，先修复本地物理网络。</li>
          <li><strong>Step 2 检查客户端系统时间：</strong>TLS 握手加密协议严格要求设备时间与国际标准时间偏差在 60 秒内。手机或 PC 关闭自动对时可能直接导致所有节点超时。</li>
          <li><strong>Step 3 测客户端真连接延迟：</strong>在客户端按 <code>Ctrl+R</code>（v2rayN）或向下滑动测试（Shadowrocket/Clash），观察是“个别节点超时”还是“全部节点全红”。</li>
          <li><strong>Step 4 查看服务商后台公告：</strong>确认套餐流量是否耗尽、账号是否过期，或该机场的国内接入点是否正处于运营商机房例行割接。</li>
        </ol>

        <h3 id="diag-nav-grid">常见故障与专线技术专题直达</h3>
        <p>点击下方专题卡片，可快速跳转到对应故障场景的解决方案或技术原理解析：</p>
        <div class="client-quick-nav" style="margin-bottom:28px">
          <a class="client-quick-card" href="#节点全红超时排查">
            <div class="c-icon c-v2ray">红</div>
            <div class="c-meta"><strong>节点全红 / 超时排查</strong><span>系统时间 · 防火墙 · 入口</span></div>
            <span class="c-arrow">→</span>
          </a>
          <a class="client-quick-card" href="#订阅更新失败修复">
            <div class="c-icon c-verge">订</div>
            <div class="c-meta"><strong>订阅更新失败修复</strong><span>网络死锁 · 证书跳过 · 格式</span></div>
            <span class="c-arrow">→</span>
          </a>
          <a class="client-quick-card" href="#Wi-Fi能用流量断网急救">
            <div class="c-icon c-android">流</div>
            <div class="c-meta"><strong>Wi-Fi能用流量断网急救</strong><span>蜂窝网络权限 · APN IPv6</span></div>
            <span class="c-arrow">→</span>
          </a>
          <a class="client-quick-card" href="#国外网站打不开急救">
            <div class="c-icon c-rocket">网</div>
            <div class="c-meta"><strong>国外网站打不开急救</strong><span>规则未命中 · DNS 缓存污染</span></div>
            <span class="c-arrow">→</span>
          </a>
          <a class="client-quick-card" href="#Google--学术搜索访问">
            <div class="c-icon c-singbox">谷</div>
            <div class="c-meta"><strong>Google / 学术搜索访问</strong><span>人机验证 · 独立信誉出口</span></div>
            <span class="c-arrow">→</span>
          </a>
          <a class="client-quick-card" href="#GitHub-加速与-clone-提速">
            <div class="c-icon c-mac">GH</div>
            <div class="c-meta"><strong>GitHub 加速与 clone 提速</strong><span>命令行配置 · TUN 透明加速</span></div>
            <span class="c-arrow">→</span>
          </a>
          <a class="client-quick-card" href="#SEOGEO-深度矩阵">
            <div class="c-icon c-verge">🌐</div>
            <div class="c-meta"><strong>SEO / GEO 深度矩阵</strong><span>属地定位 · 防关联 · 多区选型</span></div>
            <span class="c-arrow">→</span>
          </a>
          <a class="client-quick-card" href="#原生-IP-与住宅家宽解析">
            <div class="c-icon c-singbox">IP</div>
            <div class="c-meta"><strong>原生 IP 与住宅家宽解析</strong><span>机房 IP 差异 · 风控欺诈分</span></div>
            <span class="c-arrow">→</span>
          </a>
          <a class="client-quick-card" href="#IEPL-与-IPLC-专线解析">
            <div class="c-icon c-rocket">专</div>
            <div class="c-meta"><strong>IEPL 与 IPLC 专线解析</strong><span>物理光缆 · 不过 GFW 验证</span></div>
            <span class="c-arrow">→</span>
          </a>
          <a class="client-quick-card" href="#主流协议对比-SSVLESS">
            <div class="c-icon c-v2ray">协</div>
            <div class="c-meta"><strong>主流协议对比 (SS/VLESS)</strong><span>Reality 伪装 · Hysteria2</span></div>
            <span class="c-arrow">→</span>
          </a>
        </div>

        <div class="callout">
          <span>i</span>
          <div>
            <b>联动资源</b>
            <p>若排查后确认服务不可用，可参考 <a href="#airports" style="color:#176b46;font-weight:700">15 家精选专线机场推荐</a> 换用备用线路；各客户端具体操作指引请查阅 <a href="#clients" style="color:#176b46;font-weight:700">客户端零基础教程</a>。</p>
          </div>
        </div>
      </section>

      <!-- 02 节点全红/超时排查 -->
      <section class="content-section" id="节点全红超时排查">
        <div class="tutorial-header-bar">
          <div class="tutorial-title-group">
            <span class="section-kicker">NODE TIMEOUT</span>
            <h2 id="heading-node-timeout">节点全红 / 超时排查：五大高频根因与对策</h2>
            <span class="platform-tag">测速全红 · 全部 Timeout · 延迟 -1</span>
          </div>
          <a class="back-top-link" href="#故障诊断中心">↑ 返回诊断中心</a>
        </div>
        <p>在客户端中按下测速键后，若<b>所有节点全部显示 Timeout 或标红无延迟</b>，通常并非所有服务器同时宕机，而是遇到了系统级或链路层的全局阻断。</p>

        <div class="troubleshoot-grid">
          <div class="trouble-card">
            <strong>根因 1：本地系统时间未同步（发生率最高）</strong>
            <p>VLESS、VMess 及现代 TLS 证书验证严格要求客户端与服务器的系统时间误差在 60 秒内。偏差过大将直接导致 TLS 握手失败、节点全红。<br/>
            <b>解决步骤：</b>Windows 打开「设置」->「时间和语言」->「日期和时间」，点击“立即同步”；iOS / Android 打开设置并确保“自动设置时间”处于开启状态。</p>
          </div>
          <div class="trouble-card">
            <strong>根因 2：套餐已到期或流量彻底耗尽</strong>
            <p>许多用户更换月份时未留意套餐重置日或流量已耗尽。客户端在无流量配额时依然能拉取到节点列表，但发起连接时服务端防火墙会直接丢弃数据包。<br/>
            <b>解决步骤：</b>登录官网用户中心，核对套餐到期日与剩余可用流量。</p>
          </div>
          <div class="trouble-card">
            <strong>根因 3：机场国内入口服务器临时维护或 IP 轮换</strong>
            <p>专线机场通常采用国内优质多线 BGP 服务器作为接入入口。当运营商例行维护或入口被敏感阻断时，旧入口 IP 无法连通。<br/>
            <b>解决步骤：</b>前往 <a href="#订阅更新失败修复" style="color:#176b46;font-weight:700">更新订阅</a> 获取服务商最新下发的新入口解析。</p>
          </div>
          <div class="trouble-card">
            <strong>根因 4：本地安全软件 / Windows Defender 防火墙拦截核心</strong>
            <p>杀毒软件（如 360、火绒、迈克菲或 Windows Defender）在静默更新后，可能将客户端后台的核心进程（如 <code>mihomo.exe</code>、<code>xray.exe</code>）误拦截。<br/>
            <b>解决步骤：</b>将客户端安装目录添加到杀毒软件白名单，并在防火墙设置中允许该程序通过专用网络和公用网络。</p>
          </div>
          <div class="trouble-card">
            <strong>根因 5：本地运营商 DNS 污染了入口域名</strong>
            <p>部分小众宽带运营商（如广电、长城、校园网）会劫持并污染机场的入口接入域名。<br/>
            <b>解决步骤：</b>将电脑/路由器的 DNS 手动修改为纯净公共 DNS：主 DNS <code>223.5.5.5</code>（阿里），备用 <code>119.29.29.29</code>（腾讯）。</p>
          </div>
        </div>
      </section>

      <!-- 03 订阅更新失败修复 -->
      <section class="content-section" id="订阅更新失败修复">
        <div class="tutorial-header-bar">
          <div class="tutorial-title-group">
            <span class="section-kicker">SUBSCRIPTION ERROR</span>
            <h2 id="heading-sub-update">订阅更新失败修复：告别死锁与证书报错</h2>
            <span class="platform-tag">Network Error · Handshake Failed · 无法解析主机</span>
          </div>
          <a class="back-top-link" href="#故障诊断中心">↑ 返回诊断中心</a>
        </div>
        <p>更新订阅时频繁提示 <code>Network Error</code>、<code>SSL Handshake Failed</code> 或进度卡在 0%，通常是因为客户端网络设置产生了“逻辑死锁”。</p>

        <div class="step-flow-list">
          <div class="step-item">
            <div class="step-num">01</div>
            <div class="step-body">
              <h4>打破代理死锁：先关闭系统代理再更新</h4>
              <p>如果现有节点已经失效，而客户端更新订阅时又默认走“系统代理”，请求就会被转发给已死的节点，形成死锁。<br/>
              <b>操作：</b>在客户端主界面暂时关闭「系统代理」，在 v2rayN 中点击「更新全部订阅 (不通过代理)」，即可使用本地原网直接访问机场官网拉取最新节点。</p>
            </div>
          </div>

          <div class="step-item">
            <div class="step-num">02</div>
            <div class="step-body">
              <h4>开启“跳过证书验证 (AllowInsecure)”</h4>
              <p>如果更新报错提示 <code>Certificate has expired</code> 或 <code>SSL Certificate Error</code>，说明机场托管订阅的 CDN 节点证书正在轮换，客户端强校验拦截了连接。<br/>
              <b>操作：</b>在订阅分组或设置中，将该订阅的「跳过证书检查 (Skip-Cert-Verify / AllowInsecure)」选项勾选开启。</p>
            </div>
          </div>

          <div class="step-item">
            <div class="step-num">03</div>
            <div class="step-body">
              <h4>浏览器直接下载离线配置文件导入</h4>
              <p>若客户端无论如何拉取不通，可直接打开 Chrome/Edge 浏览器，将完整的订阅链接粘贴至浏览器地址栏敲回车，浏览器会自动下载一个 <code>.yaml</code> (Clash) 或 <code>.json</code> (sing-box) 文件。<br/>
              <b>操作：</b>在客户端的配置管理页面中，选择“从本地文件导入”，直接加载下载好的配置，跳过网络更新流程。</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 04 Wi-Fi能用流量断网急救 -->
      <section class="content-section" id="Wi-Fi能用流量断网急救">
        <div class="tutorial-header-bar">
          <div class="tutorial-title-group">
            <span class="section-kicker">MOBILE DATA ISSUE</span>
            <h2 id="heading-wifi-vs-cellular">Wi-Fi 能用流量断网急救：移动蜂窝排障指南</h2>
            <span class="platform-tag">iPhone / Android 蜂窝数据异常</span>
          </div>
          <a class="back-top-link" href="#故障诊断中心">↑ 返回诊断中心</a>
        </div>
        <p>连家里 Wi-Fi 时一切正常，一旦出门断开 Wi-Fi 切换到 4G/5G 手机流量，网络瞬间全部超时断连。该现象在 iPhone 和中国移动用户中最为多发。</p>

        <div class="card-grid">
          <article class="info-card">
            <span class="card-no">01</span>
            <div class="icon-chip">权</div>
            <h3>iOS 蜂窝网络权限拦截（重点核查）</h3>
            <p>首次安装 Shadowrocket 或客户端时，iOS 弹窗询问“是否允许使用网络”，若不慎误触“仅限无线局域网”，切换至 4G/5G 时该应用会被系统级切断蜂窝数据通道。<br/>
            <b>修复方式：</b>打开 iPhone「设置」->「蜂窝网络」-> 滑动找到客户端应用 -> 勾选修改为 <b>「无线局域网与蜂窝数据」</b>。</p>
          </article>

          <article class="info-card">
            <span class="card-no">02</span>
            <div class="icon-chip">IP</div>
            <h3>运营商 IPv6 单栈空洞冲突</h3>
            <p>部分省份中国移动或中国联通的 5G APN 默认仅下发纯 IPv6 地址，导致客户端的 IPv4 分流路由表出现路由黑洞。<br/>
            <b>修复方式：</b>在手机「移动网络」->「接入点名称 (APN)」中将 APN 协议更改为 <b>IPv4/IPv6 双栈</b>；并在客户端设置中开启「IPv6 支持」或关闭纯 IPv6 优先解析。</p>
          </article>

          <article class="info-card">
            <span class="card-no">03</span>
            <div class="icon-chip">飞</div>
            <h3>开启飞行模式重置网络基带栈</h3>
            <p>从 Wi-Fi 信号边缘衰减切换到基站蜂窝网时，系统内核路由表可能残留旧网关的 ARP 映射。<br/>
            <b>修复方式：</b>开启「飞行模式」保持 10 秒后关闭，强制手机重新与通信基站进行附着握手并重置 VPN 网关路由。</p>
          </article>

          <article class="info-card">
            <span class="card-no">04</span>
            <div class="icon-chip">MTU</div>
            <h3>蜂窝 MTU 封包超限导致丢包</h3>
            <p>蜂窝网络中因基站封装开销，MTU 往往小于常规以太网的 1500。如果客户端发包过大可能造成分片丢包。<br/>
            <b>修复方式：</b>在客户端 TUN 模式设置中，将 MTU 从默认的 1500 手动降至 <b>1400 或 1280</b> 尝试。</p>
          </article>
        </div>
      </section>

      <!-- 05 国外网站打不开急救 -->
      <section class="content-section" id="国外网站打不开急救">
        <div class="tutorial-header-bar">
          <div class="tutorial-title-group">
            <span class="section-kicker">WEBSITE UNREACHABLE</span>
            <h2 id="heading-website-unreachable">国外网站打不开急救：分流未命中与 DNS 修复</h2>
            <span class="platform-tag">Google 能开但某网站打不开 · 规则穿透</span>
          </div>
          <a class="back-top-link" href="#故障诊断中心">↑ 返回诊断中心</a>
        </div>
        <p>很多用户常遇到：<i>“Google、YouTube 都能秒开，但某个冷门海外学术站、小众外贸商城或特定企业后台却死活打不开”</i>。这通常是由于客户端的分流规则库未收录该域名导致。</p>

        <div class="troubleshoot-grid">
          <div class="trouble-card">
            <strong>方案 1：临时切换为「全局模式 (Global)」排查</strong>
            <p>在客户端将路由模式由「规则 (Rule)」切换至「全局 (Global)」，刷新该网页。若此时能正常打开，100% 证实是内置分流规则将该域名误判为 DIRECT（直连），被国内 GFW 拦截了。<br/>
            <b>长期修复：</b>在客户端的「覆写规则」或自定义配置中添加一条规则：<code>DOMAIN-SUFFIX,目标域名.com,PROXY</code>。</p>
          </div>
          <div class="trouble-card">
            <strong>方案 2：清理操作系统 DNS 污染缓存</strong>
            <p>在开启代理之前，你可能曾尝试在浏览器直连访问该网站，导致操作系统缓存了被 GFW 污染后的错误 IP 地址。<br/>
            <b>修复命令：</b><br/>
            Windows 按 <code>Win+R</code> 输入 <code>cmd</code>，执行：<code>ipconfig /flushdns</code><br/>
            macOS 终端执行：<code>sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder</code></p>
          </div>
          <div class="trouble-card">
            <strong>方案 3：应对 Cloudflare 5 秒盾与 Access Denied 1020</strong>
            <p>部分海外网站开启了极高等级的风控防火墙，当识别到访问请求来自公共数据中心 IP 时直接拦截。<br/>
            <b>对策：</b>切换该机场的冷门小众节点，或换用具备 <a href="#原生-IP-与住宅家宽解析" style="color:#176b46;font-weight:700">原生住宅家庭宽带 IP</a> 的节点。</p>
          </div>
        </div>
      </section>

      <!-- 06 Google / 学术搜索访问 -->
      <section class="content-section" id="Google--学术搜索访问">
        <div class="tutorial-header-bar">
          <div class="tutorial-title-group">
            <span class="section-kicker">SEARCH & SCHOLAR</span>
            <h2 id="heading-google-scholar">Google / 学术搜索访问：彻底解决人机验证</h2>
            <span class="platform-tag">reCAPTCHA 频繁弹窗 · 学术搜索 403</span>
          </div>
          <a class="back-top-link" href="#故障诊断中心">↑ 返回诊断中心</a>
        </div>
        <p>搜索资料或文献时，频繁跳出 <i>“我们的系统检测到您的计算机网络中存在异常流量”</i>（reCAPTCHA 人机验证点选交通灯/自行车），严重拖慢学术研究进度。</p>

        <div class="card-grid">
          <article class="info-card">
            <span class="card-no">01</span>
            <div class="icon-chip">信</div>
            <h3>机房 IP 滥用惩罚机制剖析</h3>
            <p>许多便宜或公共机场的节点出口 IP 被成千上万用户共用，若有人用其爬取 Google 页面，Google 会将该 IP 加入低信誉观察池，迫使所有通过该 IP 的访问者必须进行人机验证。</p>
          </article>
          <article class="info-card">
            <span class="card-no">02</span>
            <div class="icon-chip">规</div>
            <h3>学术路由绑定独立干净节点</h3>
            <p>在客户端策略组中，为 Google / Google Scholar 新建独立分流组，将其与日常看视频、下载的大众大流量节点隔离，专门指定一条低负载、纯净的台湾或新加坡专线节点。</p>
          </article>
        </div>

        <div class="callout" style="margin-top:20px">
          <span>⚡</span>
          <div>
            <b>学术搜索专属排障技巧</b>
            <p>如果 Google 学术 (scholar.google.com) 直接提示 403 封禁，可在客户端开启 TUN 模式并勾选支持 UDP，让浏览器恢复使用高效安全的 HTTP/3 (QUIC) 协议通信，绕过基于 TCP 握手特征的封锁。</p>
          </div>
        </div>
      </section>

      <!-- 07 GitHub 加速与 clone 提速 -->
      <section class="content-section" id="GitHub-加速与-clone-提速">
        <div class="tutorial-header-bar">
          <div class="tutorial-title-group">
            <span class="section-kicker">DEVELOPER ACCELERATION</span>
            <h2 id="heading-github-clone">GitHub 加速与 clone 提速：开发者终极配置</h2>
            <span class="platform-tag">git clone 提速 · Releases 满速下载 · 终端代理</span>
          </div>
          <a class="back-top-link" href="#故障诊断中心">↑ 返回诊断中心</a>
        </div>
        <p>程序员经常遇到：浏览器能正常打开 GitHub，但命令行执行 <code>git clone</code> 速度只有几 KB/s，或者频繁报错 <code>Failed to connect to github.com port 443: Timed out</code>。这是因为<b>终端命令行默认不继承 Windows/macOS 的系统代理设置</b>。</p>

        <h3 id="github-git-config">方案 A：为 Git 配置专属代理端口（推荐，精准不影响其他工具）</h3>
        <p>如果你的客户端本地混合端口为 <code>7890</code>（例如 Clash Verge 默认端口），打开终端运行以下命令：</p>
        <div class="code-box">
          <span class="code-comment"># 仅针对 github.com 域名设置 HTTP 与 HTTPS 代理</span><br/>
          <code>git config --global http.https://github.com.proxy http://127.0.0.1:7890</code><br/>
          <code>git config --global https.https://github.com.proxy http://127.0.0.1:7890</code><br/><br/>
          <span class="code-comment"># 如需取消该代理设置，运行以下两条命令：</span><br/>
          <code>git config --global --unset http.https://github.com.proxy</code><br/>
          <code>git config --global --unset https.https://github.com.proxy</code>
        </div>

        <h3 id="github-tun-mode">方案 B：开启客户端 TUN 虚拟网卡模式（全局免配置）</h3>
        <p>如果你使用 Clash Verge Rev 或 sing-box，在设置中直接开启 <b>「TUN 模式 (TUN Mode)」</b>。TUN 虚拟网卡会在网络层（IP 层）拦截主机发出的所有数据包，无论 Git、终端、Docker 还是 npm/pip 安装，无需任何配置自动享用专线极速加速。</p>
      </section>

      <!-- 08 SEO/GEO 深度矩阵 -->
      <section class="content-section" id="SEOGEO-深度矩阵">
        <div class="tutorial-header-bar">
          <div class="tutorial-title-group">
            <span class="section-kicker">GEO-LOCATION MATRIX</span>
            <h2 id="heading-seo-geo">🌐 SEO/GEO 深度矩阵：跨境与属地选型全景</h2>
            <span class="platform-tag">跨境电商 · TikTok 运营 · 海外 SEO · 属地风控</span>
          </div>
          <a class="back-top-link" href="#故障诊断中心">↑ 返回诊断中心</a>
        </div>
        <p>海外数字营销、跨境电商（Amazon、Shopee）、TikTok 运营及多语言 SEO 对节点的“地理位置真实性（GEO）”与“IP 属地伪装度”有极高要求。</p>

        <table class="comparison">
          <thead>
            <tr>
              <th>节点地区</th>
              <th>网络延迟均值</th>
              <th>主要优势生态</th>
              <th>受限与风控场景</th>
              <th>典型适合人群</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>中国香港 (HK)</strong></td>
              <td>15–35 ms</td>
              <td>延迟极低，贴近大陆，日常浏览、国际会议与亚太中转体验最丝滑。</td>
              <td>大部分欧美本土服务、美区 TikTok、ChatGPT 注册有风控限制。</td>
              <td>办公主力、追求极低延迟的网游与即时通讯。</td>
            </tr>
            <tr>
              <td><strong>新加坡 (SG)</strong></td>
              <td>35–60 ms</td>
              <td>亚太金融中心，东南亚电商核心枢纽，对 AI 与国际互联网开放度极佳。</td>
              <td>欧美本土流媒体资源库相对较小。</td>
              <td>东南亚跨境电商、AI 主力、东南亚外贸。</td>
            </tr>
            <tr>
              <td><strong>日本 (JP)</strong></td>
              <td>40–70 ms</td>
              <td>延迟低且国际带宽充沛，流媒体解锁能力强，DMM/日服手游首选。</td>
              <td>对特定欧美企业内网访问延迟稍高。</td>
              <td>二次元、日区流媒体、外贸办公。</td>
            </tr>
            <tr>
              <td><strong>美国 (US)</strong></td>
              <td>130–180 ms</td>
              <td>全球数字商业大本营，内容最全，完美支持美区 TikTok、Stripe、eBay。</td>
              <td>物理距离远，延迟较高，不适合打亚太电竞游戏。</td>
              <td>美区跨境电商、出海社媒矩阵、外贸独立站运营。</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- 09 原生 IP 与住宅家宽解析 -->
      <section class="content-section" id="原生-IP-与住宅家宽解析">
        <div class="tutorial-header-bar">
          <div class="tutorial-title-group">
            <span class="section-kicker">IP CLASSIFICATION</span>
            <h2 id="heading-native-ip">原生 IP 与住宅家宽解析：数据中心与民用宽带</h2>
            <span class="platform-tag">机房 Hosting · 原生 Native · 住宅 Residential ISP</span>
          </div>
          <a class="back-top-link" href="#故障诊断中心">↑ 返回诊断中心</a>
        </div>
        <p>许多用户经常听见商家宣传“原生 IP”或“家庭宽带住宅 IP”，这两者与普通机房节点究竟有何本质差异？</p>

        <div class="card-grid">
          <article class="info-card">
            <span class="card-no">01</span>
            <div class="icon-chip">机</div>
            <h3>数据中心机房 IP (Hosting / Datacenter)</h3>
            <p>由 AWS、微软 Azure、阿里云等 IDC 机房批量分配的 IP。<b>特点：</b>带宽极大、成本低廉，但 IP 归属地在数据库中被明确打上“数据中心”标签。极其容易被流媒体、网银与电商风控拦截。</p>
          </article>
          <article class="info-card">
            <span class="card-no">02</span>
            <div class="icon-chip">原</div>
            <h3>原生 IP (Native IP)</h3>
            <p>IP 注册地、广播运营商与机房所在国家地理 100% 吻合，无跨区借用或广播跳转。<b>优势：</b>在 MaxMind 等权威 IP 库中识别准确，能稳定解锁该地区的本土流媒体与大部分通用商业服务。</p>
          </article>
          <article class="info-card">
            <span class="card-no">03</span>
            <div class="icon-chip">家</div>
            <h3>住宅家庭宽带 IP (Residential ISP)</h3>
            <p>归属于当地电信运营商（如香港 HKT、美国 AT&T/Comcast）分配给普通家庭宽带用户的民用 IP。<b>优势：</b>在风控体系眼中与真实海外家庭用户毫无二致，欺诈分 (Fraud Score) 极低，是高风控外贸与金融的至尊选择。</p>
          </article>
          <article class="info-card">
            <span class="card-no">04</span>
            <div class="icon-chip">验</div>
            <h3>权威 IP 纯净度核验工具</h3>
            <p>推荐使用以下公开权威数据库核验节点成色：<br/>
            ① <b>ipinfo.io：</b>核验 IP 归属运营商与类型（若显示 type: isp 优于 hosting）；<br/>
            ② <b>scamalytics.com：</b>查询 IP 欺诈风控分（0-20 分为极度安全纯净）。</p>
          </article>
        </div>
      </section>

      <!-- 10 IEPL 与 IPLC 专线解析 -->
      <section class="content-section" id="IEPL-与-IPLC-专线解析">
        <div class="tutorial-header-bar">
          <div class="tutorial-title-group">
            <span class="section-kicker">PRIVATE LINE ENGINEERING</span>
            <h2 id="heading-iepl-iplc">IEPL 与 IPLC 专线解析：物理内网穿透底层原理</h2>
            <span class="platform-tag">物理海底光缆 · 不过 GFW · 晚高峰 0 丢包</span>
          </div>
          <a class="back-top-link" href="#故障诊断中心">↑ 返回诊断中心</a>
        </div>
        <p>为什么顶级机场套餐价格通常在 ¥15–30/月以上，且普遍强调“全 IPLC/IEPL 内网专线”？这是网络物理架构决定的质的飞跃：</p>

        <h3 id="private-line-comparison">公网中转 vs 物理内网专线全景对比</h3>
        <table class="comparison">
          <thead>
            <tr>
              <th>线路类别</th>
              <th>网络通信路径与物理实现</th>
              <th>是否经过 GFW 公网网关</th>
              <th>晚高峰抖动与丢包率</th>
              <th>运营成本与稳定性</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>普通公网中转 / 直连</strong></td>
              <td>国内入口服务器通过公共 Internet 公网，跨国传输到海外落地机房。</td>
              <td><b>经过 GFW 审查。</b>遇敏感期封锁端口、强行劣化丢包或中断。</td>
              <td>晚高峰骨干网拥堵，丢包率常达 10%–35%，延迟波动剧烈。</td>
              <td>服务器成本极低；稳定性较差，断流风险高。</td>
            </tr>
            <tr>
              <td><strong>IPLC 国际私有租用线路</strong></td>
              <td>国内入口接收数据后，通过物理光纤陆缆/海缆<b>点对点直达</b>海外机房。</td>
              <td><b>不经过 GFW 公网网关。</b>内网数据封装传输，免疫公网封锁。</td>
              <td>全天候丢包率持续低于 0.5%，延迟波动几乎为 0ms。</td>
              <td>专线物理带宽昂贵；晚高峰与特殊时期稳如磐石。</td>
            </tr>
            <tr>
              <td><strong>IEPL 国际以太网专线</strong></td>
              <td>基于现代以太网虚拟化封装技术的点对点专线，具备灵活的 QoS 调度能力。</td>
              <td><b>不经过 GFW 公网网关。</b>与 IPLC 同样享受物理内网级别的隔离与防护。</td>
              <td>延迟极低、无公网抖动，网络丢包极罕见。</td>
              <td>商业级企业专线标准，高端旗舰机场的主力首选。</td>
            </tr>
          </tbody>
        </table>

        <div class="download-link-bar">
          <span>选购提醒：真正的 IPLC/IEPL 专线晚高峰绝不会大面积断连。了解实测核验项目请查看推荐清单。</span>
          <a class="btn-dl" href="#airports">查看 15 家核验专线机场推荐 ↗</a>
        </div>
      </section>

      <!-- 11 主流协议对比 (SS/VLESS) -->
      <section class="content-section" id="主流协议对比-SSVLESS">
        <div class="tutorial-header-bar">
          <div class="tutorial-title-group">
            <span class="section-kicker">PROTOCOL ARCHITECTURE</span>
            <h2 id="heading-protocols">主流协议对比：从 Shadowsocks 到 VLESS-Reality</h2>
            <span class="platform-tag">SS · VMess · Trojan · VLESS · Hysteria2</span>
          </div>
          <a class="back-top-link" href="#故障诊断中心">↑ 返回诊断中心</a>
        </div>
        <p>不同协议诞生于不同的抗封锁对抗阶段，对 CPU 算力消耗、连接握手延迟与抗审查能力各有所长：</p>

        <div class="step-flow-list">
          <div class="step-item">
            <div class="step-num">SS</div>
            <div class="step-body">
              <h4>Shadowsocks (SS) —— 专线环境的最佳轻量伴侣</h4>
              <p><b>原理与定位：</b>采用对称加密算法（如 AEAD 规范的 <code>chacha20-poly1305</code> 或 <code>aes-128-gcm</code>）。协议本身没有多余的包裹开销，运算速度极快、功耗极低。<br/>
              <b>使用建议：</b>如果在公网直连会被 GFW 流量特征探测封锁；但<b>在 IPLC/IEPL 物理内网专线内部，SS 是当之无愧的性能之王</b>，是大部分专线机场的标准协议。</p>
            </div>
          </div>

          <div class="step-item">
            <div class="step-num">VL</div>
            <div class="step-body">
              <h4>VLESS + Reality —— 新一代公网抗封锁天花板</h4>
              <p><b>原理与定位：</b>由 Xray 团队原创打造。Reality 技术直接“借用”真实知名合规网站（如 Apple、Microsoft、Cloudflare 等）的合规 TLS 证书与 SNI 握手特征。中间审查者在公网探测时看到的完全是一次正规的苹果官网 HTTPS 握手。<br/>
              <b>使用建议：</b>公网直连或中转场景下的最强隐蔽协议，彻底告别自建证书被墙域名的问题。</p>
            </div>
          </div>

          <div class="step-item">
            <div class="step-num">TJ</div>
            <div class="step-body">
              <h4>Trojan —— 标准经典 HTTPS 伪装</h4>
              <p><b>原理与定位：</b>直接将代理流量完全伪装成标准的 HTTPS Web 流量。审查者如果使用浏览器主动探测该服务器 IP，服务端会返回一个真实的正常静态网站。<br/>
              <b>使用建议：</b>兼容性好、各平台原生支持完备，适合中等预算的稳定中转服务。</p>
            </div>
          </div>

          <div class="step-item">
            <div class="step-num">HY</div>
            <div class="step-body">
              <h4>Hysteria 2 / TUIC v5 —— 恶劣弱网与高丢包克星</h4>
              <p><b>原理与定位：</b>基于 UDP 协议与魔改拥塞控制（BBR/Salamander）打造。在公网跨海丢包率高达 20%–40% 的极度恶劣网络环境中，仍能强行以多倍发包打满带宽。<br/>
              <b>使用建议：</b>校园网、晚高峰公网挤压严重环境下的爆发力利器；但部分企业内网会 QoS 限速 UDP 流量。</p>
            </div>
          </div>
        </div>

        <div class="download-link-bar">
          <span>协议选型一句话总结：内网专线选 Shadowsocks 极速低功耗；公网防阻断选 VLESS-Reality；弱网冲刺选 Hysteria 2。</span>
          <a class="btn-dl" href="#sing-box-极速上手">在客户端教程中配置协议 ↗</a>
        </div>
      </section>`
  },
  about: {
    label: "关于我们", badge: "编辑部说明", title: "关于一元机场收录", lead: "我们希望建立一个结构清楚、更新克制、结论可追溯的机场信息库，让读者理解自己为什么选择，而不是只记住一个名字。",
    nav: ["我们是谁", "内容原则", "商业关系", "联系与纠错"],
    content: `
      <section class="content-section" id="我们是谁"><span class="section-kicker">ABOUT</span><h2>我们是谁</h2><p>一元机场收录是一个面向普通用户与技术爱好者的独立内容项目，聚焦机场筛选、客户端使用、网络排错和相关效率工具。</p><p>“一元”代表从低门槛开始，也代表每一笔预算都应该花得明白。</p></section>
      <section class="content-section" id="内容原则"><span class="section-kicker">EDITORIAL POLICY</span><h2>内容原则</h2><ul class="checklist"><li>明确区分事实、实测结果与编辑判断</li><li>重要结论尽量标注测试条件和更新时间</li><li>发现服务变化后及时修订，不保留过时推荐</li><li>不以节点数量或单次峰值作为唯一评价依据</li></ul></section>
      <section class="content-section" id="商业关系"><span class="section-kicker">DISCLOSURE</span><h2>商业关系与披露</h2><p>如内容包含邀请链接、赞助测试或其他利益关系，应在文章显著位置标明。商业合作不应改变测试方法，也不能购买测评结论。</p><div class="callout"><span>i</span><div><b>风险提示</b><p>网络服务具有波动性和运营风险。本站信息仅供研究与参考，请遵守所在地法律法规并自行判断。</p></div></div></section>
      <section class="content-section" id="联系与纠错"><span class="section-kicker">CONTACT</span><h2>联系与纠错</h2><p>如果你发现价格、套餐、客户端信息或技术说明已经变化，欢迎提供公开来源和复现条件。我们会在核实后更新，并保留必要的修订说明。</p></section>`
  }
};

const pageOrder = Object.keys(pages);
const main = document.querySelector("#main-content");
const sectionNav = document.querySelector("#section-nav");
const toc = document.querySelector("#toc");
const topNav = document.querySelector("#top-nav");
const menuToggle = document.querySelector("#menu-toggle");
let sectionObserver;

function safeId(value) {
  return value.replace(/\s+/g, "-").replace(/[^\w\u4e00-\u9fa5-]/g, "");
}

function getRoute() {
  const key = location.hash.replace("#", "").split("/")[0];
  return pages[key] ? key : "home";
}

function renderPage(route, preserveScroll = false) {
  const page = pages[route];
  document.title = `${page.label}｜一元机场收录`;
  document.querySelectorAll("[data-route]").forEach(link => link.classList.toggle("active", link.dataset.route === route));
  sectionNav.innerHTML = page.nav.map((name, index) => `<a href="#${safeId(name)}"><span>${String(index + 1).padStart(2, "0")}</span>${name}</a>`).join("");
  main.innerHTML = `
    <div class="breadcrumbs"><a href="#home">一元机场收录</a><span>/</span><b>${page.label}</b></div>
    <header class="article-header">
      <span class="category-pill">${page.badge}</span>
      <h1>${page.title}</h1>
      <p class="article-lead">${page.lead}</p>
      <div class="byline"><span class="avatar">一元</span><span>由 <b>一元编辑部</b> 整理</span><span>·</span><span>预计阅读 6 分钟</span></div>
    </header>
    ${page.content}`;

  const headings = [...main.querySelectorAll("h2, h3")];
  headings.forEach((heading, index) => {
    if (!heading.id) heading.id = safeId(heading.textContent) || `section-${index}`;
  });
  toc.innerHTML = headings.map(h => `<a class="level-${h.tagName.slice(1)}" href="#${h.id}">${h.textContent}</a>`).join("");
  bindInPageLinks();
  observeSections();
  bindCompassFilter();
  bindCopyCoupon();
  if (route === "airports") bindAirportFilter();
  topNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  if (!preserveScroll) window.scrollTo({ top: 0, behavior: "instant" });
}

function bindCompassFilter() {
  const filterButtons = main.querySelectorAll(".compass-filter-bar .compass-filter-chip");
  const rows = main.querySelectorAll("#compass-table tbody tr");
  if (!filterButtons.length || !rows.length) return;
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.compassFilter;
      rows.forEach(row => {
        const cats = (row.dataset.cat || "").split(/\s+/);
        if (filter === "all" || cats.includes(filter)) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      });
    });
  });
}

function bindCopyCoupon() {
  const copyButtons = main.querySelectorAll(".btn-copy-code");
  if (!copyButtons.length) return;
  copyButtons.forEach(btn => {
    btn.addEventListener("click", async () => {
      const code = btn.dataset.code;
      if (!code) return;
      const originalText = btn.textContent;
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(code);
        } else {
          throw new Error("Clipboard API unavailable");
        }
      } catch (err) {
        const ta = document.createElement("textarea");
        ta.value = code;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); } catch (e) { /* ignore */ }
        document.body.removeChild(ta);
      }
      btn.textContent = "已复制 ✓";
      btn.style.background = "#166534";
      btn.style.color = "#fff";
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = "";
        btn.style.color = "";
      }, 1500);
    });
  });
}

function bindAirportFilter() {
  const filterButtons = main.querySelectorAll(".airport-filter-bar .filter-btn");
  const cards = main.querySelectorAll(".airport-rec-card");
  if (!filterButtons.length) return;
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const cats = (card.dataset.category || "").split(" ");
        if (filter === "all" || cats.includes(filter)) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

function bindInPageLinks() {
  [...sectionNav.querySelectorAll("a"), ...toc.querySelectorAll("a")].forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const target = document.getElementById(decodeURIComponent(link.getAttribute("href").slice(1)));
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function observeSections() {
  sectionObserver?.disconnect();
  const targets = [...main.querySelectorAll(".content-section, .hero-panel")];
  sectionObserver = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    const id = visible.target.id;
    [...sectionNav.querySelectorAll("a"), ...toc.querySelectorAll("a")].forEach(a => {
      a.classList.toggle("active", decodeURIComponent(a.getAttribute("href").slice(1)) === id);
    });
  }, { rootMargin: "-18% 0px -65%", threshold: [0, .2, .6] });
  targets.forEach(target => sectionObserver.observe(target));
}

function openSearch() {
  const modal = document.querySelector("#search-modal");
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  const input = document.querySelector("#search-input");
  input.value = "";
  renderSearch("");
  setTimeout(() => input.focus(), 20);
}

function closeSearch() {
  document.querySelector("#search-modal").hidden = true;
  document.body.style.overflow = "";
}

function renderSearch(query) {
  const normalized = query.trim().toLowerCase();
  const results = pageOrder.filter(key => {
    const page = pages[key];
    return !normalized || `${page.label} ${page.title} ${page.lead} ${page.nav.join(" ")}`.toLowerCase().includes(normalized);
  });
  document.querySelector("#search-results").innerHTML = results.length
    ? results.map(key => `<a class="search-result" href="#${key}" data-search-route="${key}"><b>${pages[key].label} · ${pages[key].title}</b><span>${pages[key].lead.slice(0, 58)}…</span></a>`).join("")
    : `<div class="empty-result">没有找到相关内容，换个关键词试试。</div>`;
}

window.addEventListener("hashchange", () => renderPage(getRoute()));
window.addEventListener("scroll", () => {
  const doc = document.documentElement;
  const max = doc.scrollHeight - innerHeight;
  document.querySelector("#reading-progress").style.width = `${max > 0 ? (scrollY / max) * 100 : 0}%`;
}, { passive: true });

menuToggle.addEventListener("click", () => {
  const open = topNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
document.querySelector("#search-trigger").addEventListener("click", openSearch);
document.querySelectorAll("[data-close-search]").forEach(el => el.addEventListener("click", closeSearch));
document.querySelector("#search-input").addEventListener("input", event => renderSearch(event.target.value));
document.querySelector("#search-results").addEventListener("click", event => {
  if (event.target.closest("[data-search-route]")) closeSearch();
});
document.addEventListener("keydown", event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); openSearch(); }
  if (event.key === "Escape") closeSearch();
});

renderPage(getRoute());
