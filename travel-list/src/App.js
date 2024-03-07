export default function App() {
  return (
    <div>
      <Logo></Logo>
      <Form></Form>
      <PackingList></PackingList>
      <Stats></Stats>
    </div>
  );
}

function Logo() {
  return <h1>Far Away </h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do u need for ur?</h3>
    </div>
  );
}

function PackingList() {
  return <div className="list">LIST</div>;
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list</em>
    </footer>
  );
}
