const Profile = ({ name, age, hobbies }) => {
  return (
    <div>
      <hr />
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>
        <div>Hobby:</div>
        <ul>
          {hobbies.map((hobby) => (
            <li>{hobby}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;


// const Profile = ({ name, age, hobbies }) => {
//   return (
//     <div>
//       <hr />
      {/* <div>Name: {name.map((nameSingle) => {nameSingle})}</div> */}
      {/* {name.map((nameSingle) => <div key={nameSingle}>Name: {nameSingle}</div>)} */}
      {/* <div>Age: {age}</div>
      <div>
        <div>Hobby:</div>
        <ul>
          {hobbies.map((hobby) => (
            <li>{hobby}</li>
          ))}
        </ul>
      </div> */}
//     </div>
//   );
// };

// export default Profile;
