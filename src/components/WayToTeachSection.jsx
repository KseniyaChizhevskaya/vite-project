export default function WayToTeachSection(props) {
  const { title, description } = props;

  return (
    <div>
      <li>
        <p>
          <strong>{title}</strong> {description}
        </p>
      </li>
    </div>
  );
}
