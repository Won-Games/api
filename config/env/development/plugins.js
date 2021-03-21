module.exports = ({ env }) => ({
  email: {
    provider: "nodemailer",
    providerOptions: {
      host: "localhost",
      port: 1025,
      ignoreTLS: true,
    },
  },
});
