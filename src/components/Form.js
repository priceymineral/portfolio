const Form = () => {
    return (
        <>
            <div className="subheader">
                Email Me Here
            </div>
            <div
                className="form-email"
                onClick={(e) => {
                    window.location.href = 'mailto:tudaeva@gmail.com'
                }}>
                📨
            </div>
        </>
    )
}

export default Form






// const Form = () => {
//   return (
//     <>
//       <div className="form-header">Contact Me</div>
//       <div className="form-container">
//         <form id="contact">
//           <div>
//             <label>
//               <input type="text" name="name" placeholder="Your Name"/>
//             </label>
//           </div>
//           <div>
//             <label>
//               <input type="text" name="name" placeholder="Your email"/>
//             </label>
//           </div>
//           <div>
//             <label>
//               <textarea placeholder="Hi there..."/>
//             </label>
//           <input type="submit" value="Submit" />
//           </div>
//         </form>
//       </div>
//     </>
//   )
// }

// export default Form
