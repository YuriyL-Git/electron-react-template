import { Telnet } from 'telnet-client';

let connection: Telnet | null = null;

async function getConnection() {
  return new Promise<Telnet>((resolve) => {
    const telnetConnection = new Telnet();

    const params = {
      host: '127.0.0.1',
      port: 9991,
      shellPrompt: '',
      timeout: 2500,
    };

    telnetConnection
      .connect(params)
      .then(() => resolve(telnetConnection))
      .catch((err: Error) => {
        console.log('Connection error', err);
      });
  });
}

export const server = {
  get(name: string) {
    console.log(name);
    return '';
  },
  async sendMessage(message: string) {
    if (!connection) {
      connection = await getConnection();
    }

    try {
      await connection.send('test message');
    } catch {
      connection = await getConnection();
    }

    return connection.send(message);
  },
};
