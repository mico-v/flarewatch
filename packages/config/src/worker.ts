import type { WorkerConfig } from '@flarewatch/shared';

export const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'st_mioc',
      // HTTP check would fail: the Worker and this host share the mioc.cc
      // Cloudflare zone, so fetch() is handled by Cloudflare's edge (525).
      // A raw TCP check goes straight to the origin.
      name: 'st.mioc.cc',
      method: 'TCP_PING',
      target: 'st.mioc.cc:443',
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
