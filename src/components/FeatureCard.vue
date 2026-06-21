<template>
  <div class="feature-card">
    <div class="feature-card__image">
      <img :src="image" :alt="title" />
    </div>
    <div class="feature-card__body">
      <h2>{{ title }}</h2>
      <p v-if="status" class="status-badge">{{ status }}</p>
      <p class="description">{{ description }}</p>
      <ul class="tech-stack">
        <li v-for="skill in skills" :key="skill" :data-skill="skill.toLowerCase()">
          {{ skill }}
        </li>
      </ul>
      <div class="actions">
        <button v-if="githubUrl" class="btn-github" @click="goTo(githubUrl)">Github</button>
        <span v-if="siteUrl" class="link-view" @click="goTo(siteUrl)">View Site →</span>
        <a v-if="docUrl" :href="docUrl" class="link-view">View Documentation</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureCard',
  props: {
    image: String,
    title: String,
    description: String,
    status: String,
    skills: Array,
    githubUrl: String,
    siteUrl: String,
    docUrl: String,
  },
  methods: {
    goTo(url) { window.open(url, '_blank'); },
  },
};
</script>

<style scoped>
.feature-card {
  display: flex;
  flex-direction: row;
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  min-height: 220px;
}
.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.10);
}
.feature-card__image {
  width: 220px;
  min-width: 220px;
  min-height: 220px;
  background: #f0ebe3;
  flex-shrink: 0;
}
.feature-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.feature-card__body {
  padding: 1.5rem 1.8rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.feature-card__body h2 {
  margin: 0;
  font-size: 1.3rem;
  color: #2d2a27;
  font-weight: 600;
}
.status-badge {
  display: inline-block;
  background: #d4a373;
  color: #fff;
  padding: 0.2rem 0.9rem;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  width: fit-content;
  margin: 0;
}
.description {
  margin: 0.2rem 0 0.2rem 0;
  line-height: 1.6;
  color: #4a4642;
}
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  list-style: none;
  padding: 0;
  margin: 0.2rem 0 0.5rem 0;
}
.tech-stack li {
  padding: 0.2rem 0.7rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 500;
  background: #f0ebe3;
  color: #4a4642;
}
/* Keep colour variants but soften them */
.tech-stack li[data-skill="html"] { background: #e34c26; color: #fff; }
.tech-stack li[data-skill="css"] { background: #264de4; color: #fff; }
.tech-stack li[data-skill="javascript"] { background: #f7df1e; color: #333; }
.tech-stack li[data-skill="vue.js"] { background: #42b883; color: #fff; }
.tech-stack li[data-skill="nuxt"] { background: #00dc82; color: #fff; }
.tech-stack li[data-skill="mongodb"] { background: #4db33d; color: #fff; }
.tech-stack li[data-skill="firebase"] { background: #ffca28; color: #333; }
.tech-stack li[data-skill="vue-router"] { background: #35495e; color: #42b883; }
.tech-stack li[data-skill="node.js"] { background: #3c873a; color: #fff; }
.tech-stack li[data-skill="json"] { background: #f0db4f; color: #333; }

.actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem 1.25rem;
  margin-top: auto;
  justify-content: flex-end;
  padding-top: 0.5rem;
}
.btn-github {
  background: #2d2a27;
  color: #fff;
  border: none;
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-github:hover { background: #4a4642; }
.link-view {
  font-size: 0.8rem;
  color: #8a7a6a;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
}
.link-view:hover { color: #5a4a3a; text-decoration: underline; }

@media (max-width: 700px) {
  .feature-card {
    flex-direction: column;
  }
  .feature-card__image {
    width: 100%;
    min-width: auto;
    height: 200px;
    min-height: 200px;
  }
}
</style>