interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '3xG2fsoE9zRifuCIvmxmL4YBY3ecHDKN',
  domain: 'forgetech.eu.auth0.com',
  callbackURL: 'http://localhost:3000/callback'
};
