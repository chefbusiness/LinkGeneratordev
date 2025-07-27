<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
    <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
    <xsl:template match="/">
        <html>
            <head>
                <title>XML Sitemap - MailtoGen Pro</title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <style type="text/css">
                    body {
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                        font-size: 14px;
                        color: #333;
                        background-color: #f8f9fa;
                        margin: 0;
                        padding: 20px;
                        line-height: 1.6;
                    }
                    .container {
                        max-width: 1200px;
                        margin: 0 auto;
                        background: white;
                        border-radius: 8px;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                        overflow: hidden;
                    }
                    .header {
                        background: linear-gradient(135deg, #007bff, #0056b3);
                        color: white;
                        padding: 30px;
                        text-align: center;
                    }
                    .header h1 {
                        margin: 0 0 10px 0;
                        font-size: 28px;
                        font-weight: 600;
                    }
                    .header p {
                        margin: 0;
                        opacity: 0.9;
                        font-size: 16px;
                    }
                    .stats {
                        display: flex;
                        justify-content: center;
                        gap: 40px;
                        margin-top: 20px;
                    }
                    .stat {
                        text-align: center;
                    }
                    .stat-number {
                        font-size: 24px;
                        font-weight: bold;
                        display: block;
                    }
                    .stat-label {
                        font-size: 12px;
                        opacity: 0.8;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                    }
                    .note {
                        background-color: #e7f3ff;
                        border-left: 4px solid #007bff;
                        padding: 15px;
                        margin: 20px;
                        border-radius: 0 4px 4px 0;
                    }
                    .note h3 {
                        margin: 0 0 10px 0;
                        color: #007bff;
                        font-size: 16px;
                    }
                    .note p {
                        margin: 0;
                        line-height: 1.5;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin: 0;
                    }
                    th {
                        background-color: #f8f9fa;
                        color: #495057;
                        font-weight: 600;
                        padding: 15px;
                        text-align: left;
                        border-bottom: 2px solid #dee2e6;
                        font-size: 13px;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                    }
                    td {
                        padding: 12px 15px;
                        border-bottom: 1px solid #f1f3f4;
                        vertical-align: top;
                    }
                    tr:hover {
                        background-color: #f8f9fa;
                    }
                    .url {
                        color: #007bff;
                        text-decoration: none;
                        font-weight: 500;
                        word-break: break-all;
                    }
                    .url:hover {
                        text-decoration: underline;
                    }
                    .priority {
                        font-weight: 600;
                        padding: 4px 8px;
                        border-radius: 4px;
                        font-size: 12px;
                        text-align: center;
                        min-width: 40px;
                        display: inline-block;
                    }
                    .priority-high { background-color: #d4edda; color: #155724; }
                    .priority-medium { background-color: #fff3cd; color: #856404; }
                    .priority-low { background-color: #f8d7da; color: #721c24; }
                    .changefreq {
                        background-color: #e9ecef;
                        color: #495057;
                        padding: 4px 8px;
                        border-radius: 4px;
                        font-size: 12px;
                        text-transform: capitalize;
                    }
                    .lastmod {
                        font-family: 'Monaco', 'Menlo', monospace;
                        font-size: 12px;
                        color: #6c757d;
                    }
                    .footer {
                        background-color: #f8f9fa;
                        padding: 20px;
                        text-align: center;
                        color: #6c757d;
                        font-size: 12px;
                        border-top: 1px solid #dee2e6;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>XML Sitemap</h1>
                        <p>MailtoGen Pro - Mailto Link Generator</p>
                        <div class="stats">
                            <div class="stat">
                                <span class="stat-number"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></span>
                                <span class="stat-label">Total URLs</span>
                            </div>
                            <div class="stat">
                                <span class="stat-number">9</span>
                                <span class="stat-label">Languages</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="note">
                        <h3>About this Sitemap</h3>
                        <p>This XML sitemap contains all the important pages of MailtoGen Pro, including multilingual versions and additional pages. It helps search engines discover and index our content more effectively.</p>
                    </div>
                    
                    <div class="content">
                        <table>
                            <thead>
                                <tr>
                                    <th>URL</th>
                                    <th>Last Modified</th>
                                    <th>Change Frequency</th>
                                    <th>Priority</th>
                                </tr>
                            </thead>
                            <tbody>
                                <xsl:for-each select="sitemap:urlset/sitemap:url">
                                    <tr>
                                        <td>
                                            <a href="{sitemap:loc}" class="url">
                                                <xsl:value-of select="sitemap:loc"/>
                                            </a>
                                        </td>
                                        <td class="lastmod">
                                            <xsl:value-of select="sitemap:lastmod"/>
                                        </td>
                                        <td>
                                            <span class="changefreq">
                                                <xsl:value-of select="sitemap:changefreq"/>
                                            </span>
                                        </td>
                                        <td>
                                            <xsl:choose>
                                                <xsl:when test="sitemap:priority &gt;= 0.8">
                                                    <span class="priority priority-high">
                                                        <xsl:value-of select="sitemap:priority"/>
                                                    </span>
                                                </xsl:when>
                                                <xsl:when test="sitemap:priority &gt;= 0.5">
                                                    <span class="priority priority-medium">
                                                        <xsl:value-of select="sitemap:priority"/>
                                                    </span>
                                                </xsl:when>
                                                <xsl:otherwise>
                                                    <span class="priority priority-low">
                                                        <xsl:value-of select="sitemap:priority"/>
                                                    </span>
                                                </xsl:otherwise>
                                            </xsl:choose>
                                        </td>
                                    </tr>
                                </xsl:for-each>
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="footer">
                        <p>MailtoGen Pro XML Sitemap | Updated: January 27, 2025</p>
                    </div>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
