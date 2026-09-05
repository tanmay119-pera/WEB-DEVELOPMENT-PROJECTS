/**
 * =========================================================================
 * BMW i7 LUXURY EXPERIENCE — CRYPTOGRAPHIC PROVENANCE & INTEGRITY VERIFIER
 * =========================================================================
 * This module seals the author identity and educational notice using
 * a cryptographic salting technique (Salted Cyclic XOR + Salted SHA-256).
 *
 * Any unauthorized attempt to tamper with or alter the author attribution
 * will trigger an integrity mismatch check.
 * =========================================================================
 */

// Cryptographic Salt Key
const SECURITY_SALT = 'BMW_i7_G70_BORN_ELECTRIC_2026_SALT_SECURE_HASH_9824';

// Salt-encoded ciphertexts (Base64)
const ENCODED_AUTHOR = 'AwkSDCEXDBV+Zh4RGxMYHmVkMSI6Pyg6bgMJH0Y6ISBl';
const ENCODED_PURPOSE =
  'FiU+LElAOiVEWSsnbzs9fyY+ICIgNy1jOV1CElM7JiItIDY8KyI5cjUqOjE8OzoZV1xYO2N3HAZZPCJHRCojI3IqOjYlIi10IT02O0sQFBYvPDM4MjA/LCx1IjcwIiQwPHEZeV5YYjklPg1SMiZFWyxiLjwqfyc+JC0wcigwLFdEQRY9Ni0jOjhzMSx1EAgIaAAUZg==';

// Expected Salted SHA-256 Hashes
const EXPECTED_AUTHOR_HASH = '6fd5bad906e3992b823f0924c43a6c21d62cde7193b3ca81a2bcb6f7c49f8352';
const EXPECTED_PURPOSE_HASH = 'ac81a87535e689c0de5e48f1b6477f545ef3d015d9d780421191ae3da41445d2';

// Pure JavaScript synchronous SHA-256 implementation (browser & server compatible)
function sha256Sync(ascii) {
  function rightRotate(value, amount) {
    return (value >>> amount) | (value << (32 - amount));
  }
  const mathPow = Math.pow;
  const maxWord = mathPow(2, 32);
  const lengthProperty = 'length';
  let i, j;
  const words = [];
  const asciiBitLength = ascii[lengthProperty] * 8;
  let hash = [];
  const k = [];
  let primeCounter = 0;
  const isComposite = {};

  for (let candidate = 2; primeCounter < 64; candidate++) {
    if (!isComposite[candidate]) {
      for (i = 0; i < 313; i += candidate) {
        isComposite[i] = candidate;
      }
      hash[primeCounter] = (mathPow(candidate, 0.5) * maxWord) | 0;
      k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
    }
  }

  ascii += '\x80';
  while ((ascii[lengthProperty] % 64) - 56) ascii += '\x00';
  for (i = 0; i < ascii[lengthProperty]; i++) {
    j = ascii.charCodeAt(i);
    if (j >> 8) return;
    words[i >> 2] |= j << (((3 - i) % 4) * 8);
  }
  words[words[lengthProperty]] = (asciiBitLength / maxWord) | 0;
  words[words[lengthProperty]] = asciiBitLength;

  for (j = 0; j < words[lengthProperty]; ) {
    const w = words.slice(j, (j += 16));
    const oldHash = hash;
    hash = hash.slice(0, 8);
    for (i = 0; i < 64; i++) {
      const w15 = w[i - 15],
        w2 = w[i - 2];
      const s0 = rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3);
      const s1 = rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10);
      const ch = (hash[4] & hash[5]) ^ (~hash[4] & hash[6]);
      const maj = (hash[0] & hash[1]) ^ (hash[0] & hash[2]) ^ (hash[1] & hash[2]);
      const temp1 =
        hash[7] +
        (rightRotate(hash[4], 6) ^ rightRotate(hash[4], 11) ^ rightRotate(hash[4], 25)) +
        ch +
        k[i] +
        (w[i] = i < 16 ? w[i] : (w[i - 16] + s0 + w[i - 7] + s1) | 0);
      const temp2 = (rightRotate(hash[0], 2) ^ rightRotate(hash[0], 13) ^ rightRotate(hash[0], 22)) + maj;
      hash = [(temp1 + temp2) | 0].concat(hash);
      hash[4] = (hash[4] + temp1) | 0;
    }
    for (i = 0; i < 8; i++) hash[i] = (hash[i] + oldHash[i]) | 0;
  }

  let out = '';
  for (i = 0; i < 8; i++) {
    for (j = 3; j + 1; j--) {
      const b = (hash[i] >> (j * 8)) & 255;
      out += (b < 16 ? '0' : '') + b.toString(16);
    }
  }
  return out;
}

// Salt-Decryption routine
function decodeWithSalt(base64Str, saltKey) {
  let binary = '';
  if (typeof atob === 'function') {
    binary = atob(base64Str);
  } else if (typeof Buffer !== 'undefined') {
    binary = Buffer.from(base64Str, 'base64').toString('binary');
  }

  let decoded = '';
  for (let i = 0; i < binary.length; i++) {
    decoded += String.fromCharCode(binary.charCodeAt(i) ^ saltKey.charCodeAt(i % saltKey.length));
  }
  return decoded;
}

// Execute Salt Verification & Seal
function sealProvenance() {
  const authorDecoded = decodeWithSalt(ENCODED_AUTHOR, SECURITY_SALT);
  const purposeDecoded = decodeWithSalt(ENCODED_PURPOSE, SECURITY_SALT);

  // Compute Salted SHA-256 Hashes
  const calculatedAuthorHash = sha256Sync(authorDecoded + SECURITY_SALT);
  const calculatedPurposeHash = sha256Sync(purposeDecoded + SECURITY_SALT);

  const isAuthorValid = calculatedAuthorHash === EXPECTED_AUTHOR_HASH;
  const isPurposeValid = calculatedPurposeHash === EXPECTED_PURPOSE_HASH;

  if (!isAuthorValid || !isPurposeValid) {
    console.error('CRITICAL WARNING: BMW i7 Author Provenance Salted Hash Check Failed.');
    throw new Error('Integrity verification failure: Author attribution or purpose has been altered.');
  }

  const provenance = Object.freeze({
    author: authorDecoded,
    purpose: purposeDecoded,
    saltSignature: calculatedAuthorHash.slice(0, 16).toUpperCase(),
    algorithm: 'Salted Cyclic XOR + Salted SHA-256',
    verified: true,
    year: '2026',
    brand: 'BMW i7 Luxury Experience Showcase',
  });

  // Lock into window as an immutable, non-writable property
  if (typeof window !== 'undefined' && !window.__BMW_PROVENANCE__) {
    try {
      Object.defineProperty(window, '__BMW_PROVENANCE__', {
        value: provenance,
        writable: false,
        configurable: false,
      });

      // Branded verification watermark in developer console
      console.log(
        `%c BMW i7 CONCEPT SHOWCASE %c VERIFIED PROVENANCE %c\n` +
          `• Author: ${provenance.author}\n` +
          `• Scope:  ${provenance.purpose}\n` +
          `• Status: Cryptographically Salted & Verified (SHA-256: ${provenance.saltSignature}...)\n`,
        'background:#0066B1;color:#ffffff;font-weight:bold;padding:4px 8px;border-radius:4px 0 0 4px;',
        'background:#111622;color:#38bdf8;font-weight:bold;padding:4px 8px;border-radius:0 4px 4px 0;border:1px solid #0066B1;',
        'color:#94a3b8;font-family:monospace;font-size:11px;'
      );
    } catch (e) {
      // Safeguard for strict mode environments
    }
  }

  return provenance;
}

export const AUTHOR_PROVENANCE = sealProvenance();

export function getAuthor() {
  return AUTHOR_PROVENANCE.author;
}

export function getPurpose() {
  return AUTHOR_PROVENANCE.purpose;
}
