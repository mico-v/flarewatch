import type { WorkerConfig } from '@flarewatch/shared';

export const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'st_mioc',
      name: 'st.mioc.cc',
      method: 'GET',
      target: 'https://st.mioc.cc/health',
      // This host is in the same Cloudflare zone as the status page, so the
      // Worker's fetch always goes through Cloudflare's edge, which cannot
      // proxy this origin cleanly and answers with its own 52x codes (seen:
      // 520, 525) even while the origin is up. A healthy origin can still
      // produce those, so accept them next to the 200 everyone else gets.
      // Real outages show up as 521/522/523, which stay down. No responseKeyword.
      expectedCodes: [200, 520, 525],
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
