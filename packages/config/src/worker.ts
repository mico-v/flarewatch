import type { WorkerConfig } from '@flarewatch/shared';

export const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'st_mioc',
      name: 'st.mioc.cc',
      method: 'GET',
      // Checked over plain HTTP against the origin IP. The domain lives in the
      // same Cloudflare zone as the status page, so a Worker fetch to it is
      // handled by Cloudflare's edge and answers with its own 52x codes, and
      // aliyun rejects plain HTTP to the unfiled domain. The IP gets a real
      // 200 from Caddy (see /etc/caddy/Caddyfile.d/health-ip.caddy).
      target: 'http://47.102.204.134/health',
      expectedCodes: [200],
      responseKeyword: 'OK',
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
