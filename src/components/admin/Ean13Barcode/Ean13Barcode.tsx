import { encodeEan13, normalizeEan13 } from "@/lib/utils/ean13";

const QUIET_LEFT = 11;
const QUIET_RIGHT = 7;
const GUARD_MODULES = new Set([0, 1, 2, 45, 46, 47, 48, 49, 92, 93, 94]);

interface Ean13BarcodeProps {
  value: string | null | undefined;
  moduleWidth?: number;
  height?: number;
}

export function Ean13Barcode({ value, moduleWidth = 1.4, height = 44 }: Ean13BarcodeProps) {
  const code = normalizeEan13(value);
  if (!code) return null;

  const pattern = encodeEan13(code);
  const textSize = 9;
  const guardExtra = textSize * 0.6;
  const totalModules = QUIET_LEFT + pattern.length + QUIET_RIGHT;
  const width = totalModules * moduleWidth;
  const svgHeight = height + guardExtra + textSize * 0.6;
  const x = (module: number) => (QUIET_LEFT + module) * moduleWidth;

  const bars: { start: number; length: number; guard: boolean }[] = [];
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] !== "1") continue;
    const guard = GUARD_MODULES.has(i);
    const last = bars[bars.length - 1];
    if (last && last.start + last.length === i && last.guard === guard) {
      last.length += 1;
    } else {
      bars.push({ start: i, length: 1, guard });
    }
  }

  return (
    <svg
      role="img"
      aria-label={`EAN-13 ${code}`}
      width={width}
      height={svgHeight}
      viewBox={`0 0 ${width} ${svgHeight}`}
      style={{ display: "block", background: "#fff", borderRadius: 2 }}
    >
      {bars.map((bar) => (
        <rect
          key={bar.start}
          x={x(bar.start)}
          y={0}
          width={bar.length * moduleWidth}
          height={bar.guard ? height + guardExtra : height}
          fill="#000"
        />
      ))}
      <g fill="#000" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize={textSize}>
        <text x={x(-6)} y={svgHeight - 1} textAnchor="start">{code[0]}</text>
        <text x={x(24)} y={svgHeight - 1} textAnchor="middle" letterSpacing={moduleWidth * 2.4}>{code.slice(1, 7)}</text>
        <text x={x(70.5)} y={svgHeight - 1} textAnchor="middle" letterSpacing={moduleWidth * 2.4}>{code.slice(7)}</text>
      </g>
    </svg>
  );
}
