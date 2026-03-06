import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      {
        name: 'rawg-proxy',
        configureServer(server) {
          server.middlewares.use('/api/proxy', async (req, res) => {
            try {
              const url = new URL(req.originalUrl || req.url || '/', 'http://localhost');
              const endpoint = url.searchParams.get('endpoint');
              if (!endpoint) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                return res.end(JSON.stringify({ error: 'Endpoint is required' }));
              }
              const apiKey = env.RAWG_API_KEY;
              const baseUrl = 'https://api.rawg.io/api/';
              url.searchParams.delete('endpoint');
              url.searchParams.append('key', apiKey);
              const finalUrl = `${baseUrl}${endpoint}?${url.searchParams.toString()}`;

              const fetchRes = await fetch(finalUrl);
              const data = await fetchRes.json();
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(data));
            } catch (err) {
              console.error(err);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Failed' }));
            }
          });
        }
      }
    ],
  };
});
