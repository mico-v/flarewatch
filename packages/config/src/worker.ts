import type { WorkerConfig } from '@flarewatch/shared';

export const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'st_mioc',
      name: 'st.mioc.cc',
      method: 'GET',
      // Cloudflare's Worker cannot reach this host cleanly: a fetch to the
      // domain goes through Cloudflare's edge, which answers with its own 52x
      // codes (520/525) while the origin is up, and a fetch to the bare IP is
      // rejected by Cloudflare (error 1003). 521/522/523 (origin unreachable)
      // still fail, so this stays green while the server is up. A true HTTP
      // check needs a check proxy; /health is reachable from everywhere else.
      target: 'https://st.mioc.cc/health',
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
