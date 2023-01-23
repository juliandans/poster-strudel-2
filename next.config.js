/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.redd.it',
        port: '',
        pathname: '*'
      },
    ]
  }
}
