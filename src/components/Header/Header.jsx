import "./Header.css";

export default function Header({ name, title, description }) {
  return (
    <header>
      <h1 className="text-4xl mb-6">
        {name}
        <br></br>
        {title}
      </h1>
      <p>{description}</p>
    </header>
  );
}
