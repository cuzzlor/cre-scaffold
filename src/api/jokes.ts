import axios from 'axios';
import { useEffect, useState } from 'react';
import { selector } from 'recoil';

export const fetchRandomJoke = async () => {
  const response = await axios.get(
    'https://official-joke-api.appspot.com/jokes/random'
  );
  return `${response.data.data.setup} ${response.data.data.punchline}`;
};

export const fetchDadJoke = async () => {
  const response = await axios.get('https://icanhazdadjoke.com/', {
    headers: { Accept: 'text/plain' },
  });
  return response.data;
};

export function useRandomJoke() {
  const [joke, setJoke] = useState<string | null>(null);
  useEffect(() => {
    fetchRandomJoke().then(setJoke).catch();
  }, []);
  return [joke, () => fetchRandomJoke().then(setJoke).catch()];
}

export function useDadJoke(): [string | null, () => void] {
  const [joke, setJoke] = useState<string | null>(null);
  useEffect(() => {
    fetchDadJoke().then(setJoke).catch();
  }, []);
  return [joke, () => fetchDadJoke().then(setJoke).catch()];
}

export const dadJokeState = selector({
  key: 'dadJokeState',
  get: async () => {
    return await fetchDadJoke().catch();
  },
});
