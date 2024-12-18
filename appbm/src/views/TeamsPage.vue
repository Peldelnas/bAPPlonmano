<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Team Management</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item v-for="team in teams" :key="team.id">
            {{ team.name }}
            <ion-button @click="deleteTeam(team.id)" color="danger">Delete</ion-button>
          </ion-item>
        </ion-list>
  
        <ion-input v-model="newTeamName" placeholder="Team Name"></ion-input>
        <ion-button @click="addTeam">Add Team</ion-button>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonInput, IonButton } from '@ionic/vue';
  import { dataService, Team } from '../services/dataService';
  
  const teams = ref<Team[]>([]);
  const newTeamName = ref('');
  
  const loadTeams = () => {
    teams.value = dataService.getTeams();
  };
  
  const addTeam = () => {
    if (newTeamName.value) {
      const newTeam: Team = {
        id: Date.now(),
        name: newTeamName.value,
      };
      teams.value.push(newTeam);
      dataService.saveTeams(teams.value);
      newTeamName.value = '';
    }
  };
  
  const deleteTeam = (id: number) => {
    teams.value = teams.value.filter((team) => team.id !== id);
    dataService.saveTeams(teams.value);
  };
  
  onMounted(loadTeams);
  </script>
  