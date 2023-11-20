const List = ({ focuser, list }) => {
  return (
    <span className={focuser}>
      <li className=" addingHover text-sm text-center inline mx-4 cursor-pointer ">
        {list}
      </li>
    </span>
  );
};

export default List;
