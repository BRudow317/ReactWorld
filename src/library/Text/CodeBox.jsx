
export function CodeBox({ children }) {
  return (
    <>
      <pre>
        <code className=" language-jsx ">
          {children}
        </code>
      </pre>
    </>
  );
}
