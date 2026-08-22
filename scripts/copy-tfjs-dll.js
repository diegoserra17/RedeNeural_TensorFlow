// Works around a known @tensorflow/tfjs-node issue on Windows: tfjs_binding.node
// depends on tensorflow.dll, but Windows doesn't search deps/lib for it.
// Copying the DLL next to the binding fixes ERR_DLOPEN_FAILED at require time.
import { existsSync, copyFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkgRoot = join(__dirname, '..', 'node_modules', '@tensorflow', 'tfjs-node');
const src = join(pkgRoot, 'deps', 'lib', 'tensorflow.dll');
const dest = join(pkgRoot, 'lib', 'napi-v8', 'tensorflow.dll');

if (process.platform === 'win32' && existsSync(src)) {
  copyFileSync(src, dest);
  console.log('copy-tfjs-dll: tensorflow.dll copied to lib/napi-v8/');
}
