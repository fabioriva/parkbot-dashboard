// /** @type {import('next').NextConfig} */

// const withNextIntl = require("next-intl/plugin")();

// const nextConfig = {};

// module.exports = withNextIntl(nextConfig);

const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withNextIntl(nextConfig);
