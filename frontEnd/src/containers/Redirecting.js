// import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import storage from '../controllers/local_storage';

// const Contain = styled.div`
//   margin: auto;
//   overflow: hidden;
// `;
// const Redirecting = ({ history }) => {
//     const roleInfo = storage.getData(ROLE_INFO);
//     useEffect(() => {
//         if (roleInfo) {
//             const redirect = getRoleType(roleInfo.role.toLowerCase()).trim();
//             const hospital = roleInfo.hospital_url;
//             history.push(`/${hospital}${redirect}/dashboard`);
//         }
//         if (!roleInfo) {
//             history.push('/');
//         }
//     }, [roleInfo]);

//     return (
//         <Contain>
//             <Loader />
//         </Contain>
//     );
// };
// Redirecting.propTypes = {
//     history: PropTypes.shape({
//         push: PropTypes.func.isRequired
//     }).isRequired
// };
// export default 90;
