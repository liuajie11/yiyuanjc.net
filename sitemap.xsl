<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
    xmlns:html="http://www.w3.org/TR/REC-html40"
    xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="zh-CN">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>网站地图 (XML Sitemap) ｜ 一元机场收录 yiyuanjc.net</title>
        <style>
          :root {
            --bg: #090d16;
            --surface: #111827;
            --surface-hover: #1f2937;
            --border: rgba(255, 255, 255, 0.08);
            --text: #f3f4f6;
            --text-dim: #9ca3af;
            --primary: #38bdf8;
            --primary-bg: rgba(56, 189, 248, 0.1);
            --tag-bg: rgba(255, 255, 255, 0.05);
          }
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans SC", sans-serif;
            background-color: var(--bg);
            color: var(--text);
            padding: 32px 16px;
            line-height: 1.6;
          }
          .container {
            max-width: 1000px;
            margin: 0 auto;
          }
          .header {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 24px;
            margin-bottom: 24px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            gap: 16px;
          }
          .title-area h1 {
            font-size: 22px;
            font-weight: 700;
            color: #fff;
            margin-bottom: 6px;
          }
          .title-area p {
            font-size: 14px;
            color: var(--text-dim);
          }
          .actions a {
            display: inline-block;
            background: var(--primary);
            color: #030712;
            text-decoration: none;
            font-weight: 600;
            font-size: 14px;
            padding: 10px 18px;
            border-radius: 8px;
            transition: opacity 0.2s;
          }
          .actions a:hover {
            opacity: 0.9;
          }
          .stats-bar {
            display: flex;
            gap: 16px;
            margin-bottom: 20px;
            font-size: 14px;
            color: var(--text-dim);
          }
          .stats-bar span {
            background: var(--surface);
            border: 1px solid var(--border);
            padding: 6px 12px;
            border-radius: 6px;
          }
          .stats-bar b {
            color: var(--primary);
          }
          .table-wrap {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 12px;
            overflow: hidden;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 14px;
            text-align: left;
          }
          thead tr {
            background: rgba(255, 255, 255, 0.02);
            border-bottom: 1px solid var(--border);
          }
          th {
            padding: 14px 16px;
            font-weight: 600;
            color: var(--text-dim);
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          tbody tr {
            border-bottom: 1px solid var(--border);
            transition: background 0.15s;
          }
          tbody tr:last-child {
            border-bottom: none;
          }
          tbody tr:hover {
            background: var(--surface-hover);
          }
          td {
            padding: 14px 16px;
            vertical-align: middle;
          }
          td a {
            color: var(--primary);
            text-decoration: none;
            word-break: break-all;
          }
          td a:hover {
            text-decoration: underline;
          }
          .badge-priority {
            display: inline-block;
            padding: 3px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 600;
            background: var(--primary-bg);
            color: var(--primary);
          }
          .badge-freq {
            display: inline-block;
            padding: 3px 8px;
            border-radius: 4px;
            font-size: 12px;
            background: var(--tag-bg);
            color: var(--text-dim);
          }
          .footer {
            margin-top: 24px;
            text-align: center;
            font-size: 13px;
            color: var(--text-dim);
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header class="header">
            <div class="title-area">
              <h1>一元机场收录 · 网站地图 (Sitemap)</h1>
              <p>此 XML 网站地图由 yiyuanjc.net 自动生成，供搜索引擎和 AI 索引抓取。</p>
            </div>
            <div class="actions">
              <a href="https://yiyuanjc.net/">返回网站首页</a>
            </div>
          </header>

          <div class="stats-bar">
            <span>总计链接数：<b><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></b> 个</span>
            <span>更新时间：<b><xsl:value-of select="sitemap:urlset/sitemap:url[1]/sitemap:lastmod"/></b></span>
            <span>Robots协议：<a href="robots.txt" style="color:var(--primary);text-decoration:none;">robots.txt</a></span>
          </div>

          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th style="width: 50%;">页面 URL 地址</th>
                  <th style="width: 15%;">更新频率</th>
                  <th style="width: 15%;">抓取优先级</th>
                  <th style="width: 20%;">最后更新</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <xsl:variable name="itemURL">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$itemURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <span class="badge-freq">
                        <xsl:value-of select="sitemap:changefreq"/>
                      </span>
                    </td>
                    <td>
                      <span class="badge-priority">
                        <xsl:value-of select="sitemap:priority"/>
                      </span>
                    </td>
                    <td style="color:var(--text-dim);">
                      <xsl:value-of select="sitemap:lastmod"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>

          <footer class="footer">
            <p>© 2026 yiyuanjc.net 一元机场收录 | 清楚、克制、可验证</p>
          </footer>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
