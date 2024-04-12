const { createProxyMiddleware } = require("http-proxy-middleware");


module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.validocadastro.com.br/:path*",
      },
    ];
  },
  async middleware() {
    const proxy = createProxyMiddleware({
      target: "https://api.validocadastro.com.br",
      changeOrigin: true,
    });

    return {
      "/api": proxy,
    };
  },

  images: {
    domains: ['avatars.githubusercontent.com'],
  },

};

