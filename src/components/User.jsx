import '../style/user.css'

const User = (props) => {
  const {employees} = props

  return (
    <div className="user-table" >
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.name}</td>
                <td>{data.lastname}</td>
                <td>{data.position}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
