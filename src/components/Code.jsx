
//Example usage:
// let codeString = `function Example() {
//   return <div>Hello World</div>;
// }`;

export function CodeBox({ codeString }) {
  return (
    <>
      <pre>
        <code className="language-jsx">{codeString}</code>
      </pre>
    </>
  );
}
