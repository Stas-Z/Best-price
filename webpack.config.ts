import path from 'path'

import webpack from 'webpack'

import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config'

function getApiUrl(mode: BuildMode, apiUrl?: string) {
    if (apiUrl) {
        return apiUrl
    }
    if (mode === 'production') {
        return '/api'
    }
    return 'http://localhost:5000/api'
}

export default (env: BuildEnv) => {
    const PORT = env?.port || 3000
    const mode = env?.mode || 'development'
    const isDev = mode === 'development'
    const apiUrl = getApiUrl(mode, env?.apiUrl)

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        img: path.resolve(__dirname, 'public', 'img'),
        buildImg: path.resolve(__dirname, 'build', 'img'),
    }

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        apiUrl,
    })

    return config
}
