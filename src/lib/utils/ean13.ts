const L_CODES = ["0001101", "0011001", "0010011", "0111101", "0100011", "0110001", "0101111", "0111011", "0110111", "0001011"];
const R_CODES = L_CODES.map((code) => code.replace(/./g, (bit) => (bit === "1" ? "0" : "1")));
const G_CODES = R_CODES.map((code) => code.split("").reverse().join(""));
const PARITY = ["LLLLLL", "LLGLGG", "LLGGLG", "LLGGGL", "LGLLGG", "LGGLLG", "LGGGLL", "LGLGLG", "LGLGGL", "LGGLGL"];

export function ean13CheckDigit(first12: string): number {
  const sum = first12
    .split("")
    .reduce((acc, digit, index) => acc + Number(digit) * (index % 2 === 0 ? 1 : 3), 0);
  return (10 - (sum % 10)) % 10;
}

export function normalizeEan13(raw: string | null | undefined): string | null {
  if (!raw) return null;
  const digits = raw.replace(/\s+/g, "");
  if (!/^\d+$/.test(digits)) return null;
  const candidate = digits.length === 12 ? `0${digits}` : digits;
  if (candidate.length !== 13) return null;
  return ean13CheckDigit(candidate.slice(0, 12)) === Number(candidate[12]) ? candidate : null;
}

export function encodeEan13(code: string): string {
  const digits = code.split("").map(Number);
  const parity = PARITY[digits[0]];
  const left = digits
    .slice(1, 7)
    .map((digit, index) => (parity[index] === "L" ? L_CODES[digit] : G_CODES[digit]))
    .join("");
  const right = digits
    .slice(7)
    .map((digit) => R_CODES[digit])
    .join("");
  return `101${left}01010${right}101`;
}
