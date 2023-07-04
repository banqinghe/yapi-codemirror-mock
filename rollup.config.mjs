import { nodeResolve } from '@rollup/plugin-node-resolve';
export default {
    input: './src/content.js',
    output: {
        file: './src/content.bundle.js',
        format: 'iife',
    },
    plugins: [nodeResolve()],
};
