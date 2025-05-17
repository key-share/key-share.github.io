---
layout: '../../components/MarkdownLayout.astro'
title: '我的第一篇博客文章'
pubDate: 2022-07-01
description: '这是我 Astro 博客的第一篇文章。'
classification: 'Origin'
image:
    url: '/auska.png'
    alt: 'The Astro logo on a dark background with a pink glow.'
tags: ["学习", "测试"]
---

 欢迎来到我学习关于 Astro 的新博客！在这里，我将分享我建立新网站的学习历程。

 ## 我做了什么

 ## hello

 1. **安装 Astro**：首先，我创建了一个新的 Astro 项目并设置好了我的在线账号。

 2. **制作页面**：然后我学习了如何通过创建新的 `.astro` 文件并将它们保存在 `src/pages/` 文件夹里来制作页面。

 3. **发表博客文章**：这是我的第一篇博客文章！我现在有用 Astro 编写的页面和用 Markdown 写的文章了！

 ## 下一步计划

 我将完成 Astro 教程，然后继续编写更多内容。关注我以获取更多信息。  
  [Bilibili](https://www.bilibili.com)

 ```js
marked.setOptions({
            gfm: true,
            breaks: true,
            highlight: (code, lang) => {
                // 高亮代码并添加 line-numbers 类（触发行号插件）
                const highlighted = Prism.highlight(code, Prism.languages[lang] || Prism.languages.text, lang);
                return `<pre class="line-numbers"><code class="language-${lang}">${highlighted}</code></pre>`;
            }
        });

        // 渲染函数
        function renderMarkdown() {
            const input = document.getElementById('markdownInput').value;
            const output = document.getElementById('markdownOutput');
            output.innerHTML = marked.parse(input);
            // 初始化 Prism 的行号插件（渲染后调用）
            Prism.hooks.add('after-highlight', (env) => {
                Prism.plugins.lineNumbers.run(env.element.parentElement);
            });
        }

        // 初始渲染 & 监听输入变化
        renderMarkdown();
        document.getElementById('markdownInput').addEventListener('input', renderMarkdown);
```
```css
.userinfo{
        height: 330px;
        width: 250px;
        border-radius: 10px;
        box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.5);
    }
    .image{
        display: block;
        text-align: center;
        align-content: center;
        height: 150px;
    }
    .image > img{
        width: 120px;
        border-radius: 60px;
    }
    .name > h1{
        font-size: 1.5rem;
        font-weight: 700;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        text-align: center;
        margin-top: 0;
    }
    .name > h2{
        font-size: 16px;
        font-weight: 700;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        text-align: center;
        color: rgba(0, 0, 0, 0.507);
    }
    .site > div > a > img{
        width: 40px;
        background-color: rgba(0, 255, 255, 0.2);
        padding: 3px;
        border-radius: 5px;
    }
    .site > div > a > img:hover{
        background-color: rgba(0, 255, 255, 0.1);
    }
    .site{
        display: flex;
        justify-content: center;
    }
    .site > div{
        margin: 5px;
    }
    ```