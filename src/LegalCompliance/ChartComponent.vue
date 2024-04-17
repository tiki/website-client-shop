<script setup lang="ts">
defineProps({
  title: {
    required: true,
    type: String
  }
})
</script>

<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <div class="chart-container">
      <svg width="250" height="250" viewBox="0 0 250 250" class="circular-progress">
        <circle class="bg"></circle>
        <circle class="fg"></circle>
        <circle class="sl" cx="20"></circle>
        <!--Bottom Half-->
      </svg>
    </div>
  </div>
</template>

<style scoped>
.container {
  border: 1px solid #00000020;
  margin-bottom: 1em;
  border-radius: 0.3em;
  padding: 1em;
}
h1 {
  font-size: 1em;
  margin-bottom: 1em;
  color: var(--primary-text-color);
  font-weight: 400;
}

.chart-container {
  display: flex;
}

.circular-progress {
  --size: 250px;
  --half-size: calc(var(--size) / 2);
  --stroke-width: 25px;
  --radius: calc((var(--size) - var(--stroke-width)) / 2);
  --circumference: calc(var(--radius) * pi * 2);
  --dash: calc((var(--progress) * var(--circumference)) / 100);
  animation: progress-animation 5s linear 0s 1 forwards;
}

.circular-progress circle {
  cx: var(--half-size);
  cy: var(--half-size);
  r: var(--radius);
  stroke-width: var(--stroke-width);
  fill: none;
  stroke-linecap: round;
}

.circular-progress circle.bg {
  stroke: #ddd;
}

.circular-progress circle.fg {
  transform: rotate(-80deg);
  transform-origin: var(--half-size) var(--half-size);
  stroke-dasharray: var(--dash) calc(var(--circumference) - var(--dash));
  transition: stroke-dasharray 0.3s linear 0s;
  stroke: var(--accent-color);
}
.circular-progress circle.sl {
  transform: rotate(-90deg);
  transform-origin: var(--half-size) var(--half-size);
  stroke-dasharray: var(--dash) calc(var(--circumference) - var(--dash));
  transition: stroke-dasharray 0.3s linear 0s;
  stroke: red;
  clip-path: padding-box circle(125px at 250px 110px);
}

/* @property --progress {
  syntax: '<number>';
  inherits: false;
  initial-value: 0;
}

@keyframes progress-animation {
  from {
    --progress: 0;
  }
  to {
    --progress: 100;
  }
} */
</style>
