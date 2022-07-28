<template>
  <section class="main-blog">
    <header>
      <h1><i class="fas fa-angle-double-left"></i>Blog<i class="fas fa-angle-double-right"></i></h1>
    </header>
    <article>
      <img src="http://127.0.0.1:8000/images/vue-django.png" />
      <h2>{{ text.blogFirst }}</h2>
      <ul class="tags">
        <li>#python</li>
        <li>#vue</li>
        <li>#js</li>
      </ul>
      <p>
        This post aims to show that you can start to use Vue with your Django
        projects immediately without any sophisticated setup that will take
        hours to complete.
      </p>
      <a href="#">Read More <i class="fas fa-angle-double-right"></i></a>
    </article>
    <article>
      <img src="http://127.0.0.1:8000/images/django-docker-elasticsearch.png"  />
      <h2>
        Building a Full-Text Search App Using Django, Docker and Elasticsearch
      </h2>
      <ul class="tags">
        <li>#python</li>
        <li>#vue</li>
        <li>#js</li>
        <li>#regexp</li>
      </ul>
      <p>
        In this article, I will be giving you brief information about
        Elasticsearch, its installation, and some examples of usage.
      </p>
      <a href="#">Read More <i class="fas fa-angle-double-right"></i></a>
    </article>
    <article>
      <img src="http://127.0.0.1:8000/images/vue-django.png" />
      <h2>
        Building a Full-Text Search App Using Django, Docker and Elasticsearch
      </h2>
      <ul class="tags">
        <li>#python</li>
        <li>#vue</li>
        <li>#js</li>
        <li>#pandas</li>
      </ul>
      <p>
        In this article, I will be giving you brief information about
        Elasticsearch, its installation, and some examples of usage.
      </p>
      <a href="#">Read More <i class="fas fa-angle-double-right"></i></a>
    </article>
    <article>
      <img src="http://127.0.0.1:8000/images/django-docker-elasticsearch.png" />
      <h2>
        Building a Full-Text Search App Using Django, Docker and Elasticsearch
      </h2>
      <ul class="tags">
        <li>#python</li>
        <li>#vue</li>
        <li>#js</li>
        <li>#php</li>
        <li>#sql</li>
      </ul>
      <p>
        In this article, I will be giving you brief information about
        Elasticsearch, its installation, and some examples of usage.
      </p>
      <a href="#">Read More <i class="fas fa-angle-double-right"></i></a>
    </article>
        <article>
      <img src="http://127.0.0.1:8000/images/vue-django.png" />
      <h2>
        Building a Full-Text Search App Using Django, Docker and Elasticsearch
      </h2>
      <ul class="tags">
        <li>#python</li>
        <li>#vue</li>
        <li>#js</li>
        <li>#php</li>
        <li>#sql</li>
      </ul>
      <p>
        In this article, I will be giving you brief information about
        Elasticsearch, its installation, and some examples of usage.
      </p>
      <a href="#">Read More <i class="fas fa-angle-double-right"></i></a>
    </article>
        <article>
      <img src="http://127.0.0.1:8000/images/django-docker-elasticsearch.png" />
      <h2>
        Building a Full-Text Search App Using Django, Docker and Elasticsearch
      </h2>
      <ul class="tags">
        <li>#python</li>
        <li>#vue</li>
        <li>#js</li>
        <li>#php</li>
        <li>#sql</li>
      </ul>
      <p>
        In this article, I will be giving you brief information about
        Elasticsearch, its installation, and some examples of usage.
      </p>
      <a href="#">Read More <i class="fas fa-angle-double-right"></i></a>
    </article>
  </section>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Blog",
  props:{
    text: Object
  }
};
</script>
<style scoped>
.tags {
  display: flex;
  align-items: stretch;
  font-size: 0.875em;
  padding: 0px 20px;
}

.tags li {
  list-style: none;
  padding: 3px 8px;
  margin-right: 4px;
  color: #fff;
  background-color: #16a085;
  border-radius: 20px;
  font-weight: 500;
}
.main-blog {
  max-width: calc(1300px - 40px);
  padding: 0 20px;
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.main-blog header {
  flex-basis: 100%;
  padding: 20px 0;
}
.main-blog header h1 {
  text-align: center;
  font-size: 2em;
  color: var(--main-text-color) !important;
  padding: 10px;
}

.main-blog article {
  flex-basis: calc(33% - 40px);
  margin: 10px 20px;
  padding-bottom: 20px;
  background-color: var(--main-card-color) !important;
}
.main-blog article i {
  color:  #FFF;
}
.main-blog i{
    color: var(--main-text-color) !important;
}
.main-blog h2 {
  padding: 10px 20px;
  font-size: 1.4em;
  color: var(--main-text-color) !important;
}

.main-blog img {
  width: 100%;
}

.main-blog a {
  padding: 10px 10px;
  font-weight: 500;
  color: #FFF;
  background-color: #16a085;
  border-radius: 10px;
  margin: 10px 20px;
}

.main-blog p {
  padding: 20px 20px;
  text-align: justify;
  font-size: 1em;
  color: var(--main-text-color) !important;
}
</style>