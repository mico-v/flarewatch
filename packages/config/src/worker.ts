import type { WorkerConfig } from '@flarewatch/shared';

export const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'st_mioc',
      name: 'st.mioc.cc',
      method: 'GET',
      target: 'https://st.mioc.cc/health',
      // This host is in the same Cloudflare zone as the status page, so the
      // Worker's fetch always goes through Cloudflare's edge, whose TLS to
      // this origin fails with 525 even while the origin is up. 525 means the
      // origin accepted the TCP connection, so treat it as healthy alongside
      // the 200 everyone else gets (which is why there is no responseKeyword).
      expectedCodes: [200, 525],
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
