import server from '../src/server.js';

describe('Server startup', () => {
  it('should start and listen correctly', async () => {
    // Arrange
    const runningServer = server;

    // Act
    const isListening = runningServer.listening;

    // Assert
    expect(isListening).toBe(true);
  });

  afterAll(() => {
    server.close();
  });
});
