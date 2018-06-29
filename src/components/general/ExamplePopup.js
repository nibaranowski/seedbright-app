// import React from 'react';
// import { ReactTypeformEmbed } from 'react-typeform-embed';
//
// import { Link } from 'react-router-dom';
//
// class ExamplePopup extends React.Component {
//   constructor(props) {
//     super(props);
//     this.openForm = this.openForm.bind(this);
//   }
//
//   openForm() {
//     this.typeformEmbed.typeform.open();
//   }
//
//   render() {
//     return (
//       <div className="ExamplePopup">
//         <ReactTypeformEmbed
//           popup={true}
//           autoOpen={false}
//           url={'https://seedbright.typeform.com/to/K2u5PL'}
//           hideHeaders={true}
//           hideFooter={true}
//           buttonText="Go!"
//           style={{top: 100}}
//           ref={(tf => this.typeformEmbed = tf) }/>
//
//         <Link className="btn" onClick={this.openForm} style={{cursor: 'pointer'}}>Click to open the popup!</Link>
//       </div>
//     );
//   }
// }
//
// export default ExamplePopup;
