import type { WorkerConfig } from '@flarewatch/shared';

export const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'st_mioc',
      // st.mioc.cc serves /health (200) publicly. FlareWatch's Worker cannot
      // HTTP-check it: the host is in the same Cloudflare zone as the status
      // page, so the Worker's fetch() is handled by Cloudflare's edge and the
      // edge's TLS to this origin fails (525). Raw TCP goes straight through.
      name: 'st.mioc.cc',
      method: 'TCP_PING',
      target: 'st.mioc.cc:443',
      timeout: 10000,
      link: 'https://st.mioc.cc/health',
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
