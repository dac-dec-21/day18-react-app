/**
 * style = ""
 * style="background-color:red"
 *
 * RULE
 * style = {{}}
 * style = {{backgroundColor: "red"}}
 *
 * 1. First Two Letter Css Property are now Converted into camelCase proprty.
 * 2. The value of the property must be in "DOUBLE QOUTE"
 */
export default function App() {
  return (
    <div>
      <div style={{ color: "white", backgroundColor: "royalblue" }}>
        Hello World
      </div>
    </div>
  );
}
