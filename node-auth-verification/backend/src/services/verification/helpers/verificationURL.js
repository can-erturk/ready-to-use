import getEnv from '#src/lib/helpers/getEnv.js';
import { sha256 } from '#src/lib/helpers/crypter.js';

const baseUrl = getEnv('BASE_URL');

export default function verificationURL(email, callbackUrl) {
  const key = sha256(email);

  let param = new URLSearchParams();
  param.append('key', key);

  if (callbackUrl && callbackUrl.length > 0) {
    param.append('callbackUrl', callbackUrl);
  }

  return new URL('/verification/verify-email?' + param, baseUrl);
}
