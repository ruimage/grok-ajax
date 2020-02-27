
const net = require('net');
const { spawn } = require('child_process');

/**
 * Проверяет, занят ли порт
 */
global.portIsBusy = (port) => new Promise((resolve, reject) => {
  const server = net.createServer()
    .once('error', (err) => {
      if (err.code !== 'EADDRINUSE') {
        return reject(err);
      }
      return resolve(true);
    })
    .once('listening', () => {
      server
        .once('close', () => {
          resolve(false);
        })
        .close();
    })
    .listen(port);
});

/**
 * Запускает сервер загадки
 */
global.runPuzzle = (name) => new Promise((resolve, reject) => {
  const node = spawn('node', [`./answers/${name}/server.js`]);
  node.once('error', reject);
  // Дождаться поднятия сервера
  const interval = 100;
  let maxWait = 3000;
  function wait() {
    if (maxWait <= 0) {
      return reject(new Error('Сервер не запустился.'));
    }
    return setTimeout(
      async () => {
        const portIsBusy = await global.portIsBusy(process.env.PORT || 3000);
        if (portIsBusy) {
          return resolve(() => node.kill('SIGHUP'));
        }
        maxWait -= interval;
        return wait();
      },
      interval,
    );
  }
  wait();
});
