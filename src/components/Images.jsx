// Reusable image components in React

export function MlmIcon() {
  return (
    <img
      src="/assets/MillerIcon.ico"
      alt="Miller-Land-Management-Logo"
      style={{ width: '150px', height: 'auto' }}
    />
  );
}

export function MlmLogo() {
  return (
    <img
      src="/assets/MlmLogo.jpg"
      alt="Banner"
      style={{ width: '100%', height: 'auto' }}
    />
  );
}

export function MlmFlag() {
  return (
    <img
      src="/assets/MlmFlag.ico"
      alt="Miller-Land-Management-United-States-Flag"
      style={{ width: '50px', height: '50px', borderRadius: '50%' }}
    />
  );
}

// Customizable image component 
// // Src is file path, alt is alt text, width and height are size, borderRadius is border radius
export function CustomImage({ src, alt, width, height, borderRadius }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: width, height: height, borderRadius: borderRadius }}
    />
  );
}