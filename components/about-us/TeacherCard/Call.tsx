const className = {
  root: "list-none flex items-center justify-center flex-wrap text-sm text-neutral-800",
  item: "ml-1 first:ml-0",
};

interface Props {
  list: string[];
}

const TeacherCardCall = ({ list }: Props) => {
  const len = list.length;
  return (
    <ul className={className.root}>
      <li className={className.item}>Call:</li>
      {list.map((item, index) => (
        <li className={className.item} key={index}>
          <a
            href={`tel:+88${item}`}
            className="text-blue-500 hover:text-blue-600"
          >
            {item}
          </a>
          {index !== len - 1 && ","}
        </li>
      ))}
    </ul>
  );
};

export default TeacherCardCall;
