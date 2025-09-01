interface user {
  name: string;
  age: number;
  admin: boolean;
}

interface userArray {
  data: user[];
}

const Users = ({ data }: userArray) => {
  return (
    <div>
      <h1>Here we're going to render Users</h1>
      <div>
        {data.map((user: user, key: number) => (
          <div key={key}>
            <p>{user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
