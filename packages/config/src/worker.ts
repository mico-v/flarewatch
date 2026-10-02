import type { WorkerConfig } from '@flarewatch/shared';

export const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'st_mioc',
      name: 'st.mioc.cc',
      method: 'GET',
      target: 'https://st.mioc.cc/health',
      expectedCodes: [200],
      responseKeyword: 'OK',
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
