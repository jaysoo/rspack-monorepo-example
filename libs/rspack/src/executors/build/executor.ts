import { BuildExecutorSchema } from './schema';
import * as path from 'path';
import { ExecutorContext } from '@nrwl/devkit';
import { createCompiler } from '@rspack/core';

export default async function runExecutor(options: BuildExecutorSchema, context: ExecutorContext) {
  process.env.NODE_ENV ??= 'production';

  const config = require(path.join(context.root, options.rspackConfig))
  const compiler = createCompiler(config);

  return new Promise<{ success: boolean }>(res => {
    compiler.run(() => {
      compiler.close((err: any) => {
        res({ success: !err })
      });
    });
  })
}
