import crypto from 'crypto';

export function generateBasicDetails(prefix = 'U00') {
  const code = `${prefix}${crypto.randomUUID().slice(0, 6).toUpperCase()}`;

  return {
    code,
    name: code,
    description: `Description for ${code}`
  };
}