import crypto from 'crypto';

export function generateItemDetails(prefix = 'U') {
  const code = `${prefix}${crypto.randomUUID().slice(0, 6).toUpperCase()}`;

  return {
    code,
    name: code,
    description: `Description for ${code}`
  };
}