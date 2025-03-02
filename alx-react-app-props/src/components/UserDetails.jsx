import { useUser } from '../context/UserContext';

function UserDetails() {
  const userData = useUser();
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
