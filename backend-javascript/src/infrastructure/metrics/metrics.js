import client from 'prom-client';

client.collectDefaultMetrics();

const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Nombre total de requêtes HTTP',
  labelNames: ['method', 'route', 'status'],
});

function incrementHttpRequests(method, route, status) {
  httpRequestCounter.inc({ method, route, status });
}

export { client, incrementHttpRequests };
