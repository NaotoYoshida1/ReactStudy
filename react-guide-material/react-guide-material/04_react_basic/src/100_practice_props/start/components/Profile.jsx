import "./Profile.css";

// const Profile = (props) => {
//   return (
//     <>
//       <div className="profile">
//         <h3>Name: {props.name}</h3>
//         <h3>Age: {props.age}</h3>
//         <h3>From: {props.country}</h3>
//       </div>
//     </>
//   );
// };

const Profile = ({name='John Doe',age='??',country='Japan'}) => {
  return (
    <>
      <div className="profile">
        <h3>Name: {name}</h3>
        <h3>Age: {age}</h3>
        <h3>From: {country}</h3>
      </div>
    </>
  );
};

export default Profile;
