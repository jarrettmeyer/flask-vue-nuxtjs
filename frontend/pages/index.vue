<template>
  <div>
    <div>
      <h1>Flask + Vue + Nuxt</h1>
      <p>
        This is a simple project to learn how to get
        <a href="https://flask.palletsprojects.com/">Flask</a>,
        <a href="https://vuejs.org/">Vue.js</a>, and
        <a href="https://nuxtjs.org/">NuxtJS</a> to play nicely together.
      </p>
      <p>
        <img src="coffee-cup.png" style="height: 240px;">
      </p>
      <p>
        The time on the server is {{ time }}.
      </p>
      <p>
        <nuxt-link to="/about">
          About
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { hasContentType } from '@/utilities'

interface ApiTime {
  time: string;
}

@Component({ })
export default class Index extends Vue {
  time: string = '';

  async fetchData (): Promise<void> {
    const response = await window.fetch('/api/time')
    if (response.ok && hasContentType(response, 'application/json')) {
      const json = await response.json() as ApiTime
      this.time = json.time
    }
  }

  mounted (): void {
    this.fetchData()
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
