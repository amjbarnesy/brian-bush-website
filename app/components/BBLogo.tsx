export default function BBLogo({ height = 28, className = '' }: { height?: number; className?: string }) {
  // Aspect ratio: 500 × 315.9 ≈ 1.583 : 1
  const width = Math.round(height * 1.583)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 500 315.9"
      width={width}
      height={height}
      className={className}
      aria-label="Brian Bush logo"
      fill="currentColor"
    >
      <defs>
        <clipPath id="bb-clip-r">
          <polygon points="257.4 2.5 257.4 2.5 495.7 2.5 495.7 310.9 257.4 310.9 257.4 2.5" />
        </clipPath>
        <clipPath id="bb-clip-l">
          <polygon points="242.6 2.5 242.6 2.5 4.3 2.5 4.3 310.9 242.6 310.9 242.6 2.5" />
        </clipPath>
      </defs>
      {/* Right B */}
      <g clipPath="url(#bb-clip-r)">
        <path d="M257.4,2.5h133c57.7,0,93.4,39.2,93.4,83.3s-15,54.6-32.6,64.8c28.6,11.9,44.5,37,44.5,68.7,0,57.7-34.8,91.6-100,91.6h-138.3V2.5ZM372.8,124.1c18.1,0,30.8-10.1,30.8-27.8s-12.8-27.8-30.8-27.8h-40.5v55.5h40.5ZM379,242.6c20.7,0,34.8-10.1,34.8-30.4s-14.1-30-34.8-30h-46.7v60.4h46.7Z" />
      </g>
      {/* Left B (mirrored) */}
      <g clipPath="url(#bb-clip-l)">
        <path d="M242.6,2.5H109.6C51.9,2.5,16.2,41.7,16.2,85.8s15,54.6,32.6,64.8c-28.6,11.9-44.5,37-44.5,68.7,0,57.7,34.8,91.6,100,91.6h138.3V2.5ZM127.2,124.1c-18.1,0-30.8-10.1-30.8-27.8s12.8-27.8,30.8-27.8h40.5v55.5h-40.5ZM121,242.6c-20.7,0-34.8-10.1-34.8-30.4s14.1-30,34.8-30h46.7v60.4h-46.7Z" />
      </g>
    </svg>
  )
}
