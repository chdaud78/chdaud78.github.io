---
layout: page
current: archive
title: All Posts
navigation: true
logo:
class: page-template
subclass: 'post page'
---

<article class="archive-list">
    {%for post in site.posts %}
        {% unless post.next %}
            <h2>{{ post.date | date: '%Y' }}</h2>
            <ul>
        {% else %}
            {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
            {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
            {% if year != nyear %}
                </ul>
                <h2>{{ post.date | date: '%Y' }}</h2>
                <ul>
            {% endif %}
        {% endunless %}
        <li>
            <div class="post-info">
                {% assign date_format = site.date_format.archive %}
                <span class="post-date">{{ post.date | date: '%Y-%m-%d' }}</span>
                {% for tag in post.tags %}
                <span class="tag">{{ tag }}</span>
                {% endfor %}
            </div>
            <a href=".{{ post.url }}" target="_blank">
                {% if post.cover %}
                <img src="{{ post.cover }}" alt="post images">
                {% else %}
                <img src="assets/images/default.jpg" alt="default">
                {% endif %}
                <div class="archive-item-right">
                    <h3>{{ post.title }}</h3>
                    <div class="archive-item-content">{{ post.content }}</div>
                </div>
            </a>
        </li>
    {% endfor %}
</ul>
</article>