import {Configuration} from 'webpack'
import {BuildOptions} from "./types/config"
import buildPlugins from "./buildPlugins"
import buildLoaders from "./buildLoaders"
import buildResolvers from "./buildResolvers"
import buildDevServer from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): Configuration {

    const {paths, mode, isDev} = options

    return {
        entry: paths.entry,
        mode,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}