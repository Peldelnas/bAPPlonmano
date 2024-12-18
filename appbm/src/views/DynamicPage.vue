<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Dynamic Page</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <h2>Page ID: {{ pageId }}</h2>
        <p>This is content for page {{ pageId }}.</p>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts" setup>
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const pageId = route.params.id;
  </script>
  