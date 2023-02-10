
import * as path from 'path';
import { ExecutorContext } from '@nrwl/devkit';
import { createCompiler } from '@rspack/core';
import { RspackDevServer } from '@rspack/dev-server'
import { createAsyncIterable } from '@nrwl/devkit/src/utils/async-iterable';
import { DevServerExecutorSchema } from './schema';

export default async function* runExecutor(options: DevServerExecutorSchema, context: ExecutorContext) {
  process.env.NODE_ENV ??= 'development';
  const config = require(path.join(context.root, options.rspackConfig))
  const compiler = createCompiler(config);

  // TODO(jack): this shouldn't be needed but looks like process.cwd() matters for rspack.
  const projectRoot = path.join(context.root, context.projectGraph.nodes[context.projectName].data.root);
  process.chdir(projectRoot);

  yield* createAsyncIterable(({ next }) => {
    const devServerConfig = {
      ...config.devServer, onListening: (server: any) => {
        next({ baseUrl: `http://localhost:4200` });

      }
    };
    const server: any = new RspackDevServer(devServerConfig, compiler);
    server.start();
  });
}
