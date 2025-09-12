export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img className="mx-auto" src={image} alt={title} />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="hidden">{description}</p>
    </li>
  );
}
