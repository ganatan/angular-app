import client from 'prom-client';

const PROMETHEUS_ENABLED = process.env.PROMETHEUS_ENABLED === 'true';

if (PROMETHEUS_ENABLED) {
  client.collectDefaultMetrics();
}

const httpRequestCounter = PROMETHEUS_ENABLED
  ? new client.Counter({
    name: 'http_requests_total',
    help: 'Nombre total de requêtes HTTP',
    labelNames: ['method', 'route', 'status'] as const,
  })
  : null;

function incrementHttpRequests(method: string, route: string, status: number): void {
  if (httpRequestCounter) {
    httpRequestCounter.inc({
      method: method,
      route: route,
      status: status.toString(),
    });
  }
}

export { client, incrementHttpRequests };
