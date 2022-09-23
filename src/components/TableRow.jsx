import TableCell from "./TableCell";

const TableRow = ({ flight }) => {
  const words = Object.values(flight);
  console.log(words);

  return (
    <tr>
      <td>&#9992;</td>
      {words?.map((word, _index) => (
        <TableCell key={_index} word={word} />
      ))}
    </tr>
  );
};
export default TableRow;
