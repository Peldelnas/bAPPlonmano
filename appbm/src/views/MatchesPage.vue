<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Match Management</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <h2>Schedule a Match</h2>
        <ion-select v-model="selectedTeam1" placeholder="Select Team 1">
          <ion-select-option v-for="team in teams" :key="team.id" :value="team">{{ team.name }}</ion-select-option>
        </ion-select>
        <ion-select v-model="selectedTeam2" placeholder="Select Team 2">
          <ion-select-option v-for="team in teams" :key="team.id" :value="team">{{ team.name }}</ion-select-option>
        </ion-select>
        <ion-datetime v-model="matchDate" placeholder="Match Date"></ion-datetime>
        <ion-button @click="addMatch">Add Match</ion-button>
  
        <h2>Scheduled Matches</h2>
        <ion-list>
          <ion-item v-for="match in matches" :key="match.id">
            {{ match.team1.name }} vs {{ match.team2.name }} on {{ match.date }}
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { dataService, Team, Match } from '../services/dataService';
  
  const teams = ref<Team[]>([]);
  const matches = ref<Match[]>([]);
  const selectedTeam1 = ref<Team | null>(null);
  const selectedTeam2 = ref<Team | null>(null);
  const matchDate = ref('');
  
  const loadData = () => {
    teams.value = dataService.getTeams();
    matches.value = dataService.getMatches();
  };
  
  const addMatch = () => {
    if (selectedTeam1.value && selectedTeam2.value && matchDate.value) {
      const newMatch: Match = {
        id: Date.now(),
        team1: selectedTeam1.value,
        team2: selectedTeam2.value,
        date: matchDate.value,
      };
      matches.value.push(newMatch);
      dataService.saveMatches(matches.value);
  
      // Reset fields
      selectedTeam1.value = null;
      selectedTeam2.value = null;
      matchDate.value = '';
    }
  };
  
  onMounted(loadData);
  </script>
  