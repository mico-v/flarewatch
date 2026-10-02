import type { WorkerConfig } from '@flarewatch/shared';

export const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'st_mioc',
      name: 'st.mioc.cc',
      method: 'GET',
      target: 'https://st.mioc.cc/',
      // Caddy answers every path with 404, so any HTTP reply means the host is up.
      expectedCodes: [200, 404],
      timeout: 10000,
      link: false,
    },
    {
      id: 'mc_mioc',
      name: 'mc.mioc.cc',
      method: 'TCP_PING',
      target: 'mc.mioc.cc:25565',
      timeout: 10000,
      link: false,
    },
  ],
};
