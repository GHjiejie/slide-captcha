<script setup lang="ts">
// config = {}
interface Config {
  width?: number;
  height?: number;
  thumbWidth?: number;
  thumbHeight?: number;
  verticalPadding?: number;
  horizontalPadding?: number;
  showTheme?: boolean;
  title?: string;
}

// data = {}
interface Data {
  thumbX: number;
  thumbY: number;
  thumbWidth: number;
  thumbHeight: number;
  image: string;
  thumb: string;
}

// events = {}
interface Events {
  move?: (x: number, y: number) => void;
  refresh?: () => void;
  close?: () => void;
  confirm?: (point: CaptchaPoint) => boolean;
}
</script>

<template>
  <div>
    <h1>Hello</h1>
    <gocaptcha-slide :config="{}" :data="{}" :events="{}" />

    <gocaptcha-slide-region :config="{}" :data="{}" :events="{}" />
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped></style>
