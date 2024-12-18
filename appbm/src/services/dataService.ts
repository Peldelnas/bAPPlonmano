export interface Team {
    id: number;
    name: string;
  }
  
  export interface Match {
    id: number;
    team1: Team;
    team2: Team;
    date: string; // ISO format
    result?: string; // Optional match result
  }
  
  // Local storage keys
  const TEAMS_KEY = 'teams';
  const MATCHES_KEY = 'matches';
  
  // Fetch and save to Local Storage
  export const dataService = {
    getTeams(): Team[] {
      const teams = localStorage.getItem(TEAMS_KEY);
      return teams ? JSON.parse(teams) : [];
    },
    saveTeams(teams: Team[]) {
      localStorage.setItem(TEAMS_KEY, JSON.stringify(teams));
    },
    getMatches(): Match[] {
      const matches = localStorage.getItem(MATCHES_KEY);
      return matches ? JSON.parse(matches) : [];
    },
    saveMatches(matches: Match[]) {
      localStorage.setItem(MATCHES_KEY, JSON.stringify(matches));
    }
  };
  