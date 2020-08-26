import { LinearProgress } from '@material-ui/core';
import React from 'react';
import { useNetworkActive } from '../api/networkStatus';

export function NetworkStatusStrip() {
  const active = useNetworkActive();
  return active ? <LinearProgress /> : <div style={{ height: 4 }}></div>;
}
