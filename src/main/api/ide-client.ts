import { Telnet } from 'telnet-client';

let connection: Telnet | null = null;

async function getConnection(port: number) {
  return new Promise<Telnet>((resolve) => {
    const telnetConnection = new Telnet();

    const params = {
      host: '127.0.0.1',
      port,
      shellPrompt: '',
      timeout: 500,
    };

    telnetConnection
      .connect(params)
      .then(() => resolve(telnetConnection))
      .catch((err: Error) => {
        console.log('Connection error', err);
      });
  });
}

export const ideClient = {
  get(name: string) {
    console.log(name);
    return '';
  },
  async sendMessage(message: string) {
    let isBrowser = false;
    try {
      if (window) {
        isBrowser = true;
      }
    } catch {
      console.log('');
    }

    const port = isBrowser ? 9991 : 9992;

    if (!connection) {
      connection = await getConnection(port);
    }

    try {
      await connection.send('test message');
    } catch {
      connection = await getConnection(port);
    }

    let result;

    try {
      result = await connection.send(message);
    } catch {
      console.log('Error');
    }

    if (result === 'Wrong command') {
      console.error('Wrong command: ', message);
    }

    return result || '';
  },
};
