export default function ExternalLinks({ title, link, className, svg }) {
  return (
    <div>
      <a href={link} target="_blank" className={className}>
        {svg}
        {title}
      </a>
    </div>
  );
}
