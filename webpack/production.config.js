const merge = require('webpack-merge');
const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const { PositionId } = require('../pre-rendering/positions');
const { StepId } = require('../pre-rendering/steps');
const baseConfig = require('./base.config');

const positionRoutes = Object.values(PositionId).map(positionId => `/position/${positionId}`);
const stepRoutes = Object.values(StepId).map(stepId => `/step/${stepId}`);

const routes = ['/', '/glossary', '/positions', '/stages', '/steps']
    .concat(positionRoutes)
    .concat(stepRoutes)
    .map(route => `/bachata-science${route}`);

module.exports = merge(baseConfig, {
    mode: 'production',
    plugins: [
        new PrerenderSPAPlugin({
            routes,
            postProcess: renderedRoute => {
                const urlParts = renderedRoute.route
                    .split('/')
                    .filter(Boolean)
                    .slice(1);

                renderedRoute.outputPath = path.join(
                    __dirname,
                    '..',
                    'docs',
                    ...urlParts,
                    'index.html'
                );
                return renderedRoute;
            },
            staticDir: path.resolve(__dirname, '..', 'docs')
        })
    ]
});
