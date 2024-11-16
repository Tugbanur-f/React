/* eslint-disable react/prop-types */
function Person({ firstName, lastName, email }) {
  if (!firstName || !lastName || !email) {
    return <p>Loading...</p>;
  }
  return (
    <ul>
      <li>First Name: {firstName}</li>
      <li>Last Name: {lastName}</li>
      <li>Email: {email}</li>
    </ul>
  );
}

export default Person;
