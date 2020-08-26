import { useEffect, useState } from 'react';
import { instance } from './axios';
import { NetworkStateNotifier } from './NetworkStateNotifier';

export const networkStateNotifier = new NetworkStateNotifier(instance);

export function useNetworkActive() {
  const [active, setActive] = useState(networkStateNotifier.activeRequests > 0);
  useEffect(() => {
    networkStateNotifier.subscribeToActive(setActive);
    return () => {
      networkStateNotifier.unsubscribeFromActive(setActive);
    };
  }, []);
  return active;
}
