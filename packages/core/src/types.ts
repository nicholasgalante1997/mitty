export type MittyConfig = {
  name: string;
  server: MittyServerConfig;
};

type MittyServerConfig = {
  kind:
    | 'rust-std'
    | 'rust-rocket'
    | 'node-express'
    | 'node-express-ts'
    | 'node-http'
    | 'node-http-ts'
    | 'node-https'
    | 'node-https-ts';
};
