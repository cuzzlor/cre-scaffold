import { LinearProgress } from '@material-ui/core';
import React from 'react';
import { useNetworkIsActive } from '../api/networkStatus';

export function NetworkStatusStrip() {
  const active = useNetworkIsActive();
  return active ? <LinearProgress /> : <div style={{ height: 4 }}></div>;
}
