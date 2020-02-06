//  <div className="col-md-4">
// <div className="form-group">
//     <div className="kvs-select">
//         <div
//             ref={this.setWrapperRef1}
//             onClick={() => this.toggleddiv1()}
//             className={
//                 this.state.togglediv1
//                     ? "select-wrapper select-toggle"
//                     : "select-wrapper"
//             }
//         >
//             <span
//                 className="select-item"
//             >
//                 Expression
//             </span>
//             <ul>
//                 {this.state.categoryVal !== '' &&
//                     this.state.expression.map((data, i) => {
//                         return (
//                             <li key={i}>
//                                 <div className="custom-control custom-checkbox">
//                                     <input
//                                         type="checkbox"
//                                         className="custom-control-input"
//                                         key={i}
//                                         name={data}
//                                         value={i}
//                                         // checked={false}
//                                     />
//                                     <label
//                                         className="custom-control-label"
//                                         htmlFor={i}
//                                     >
//                                         {data}
//                                     </label>
//                                 </div>
//                             </li>
//                         );
//                     })}
//             </ul>
//         </div>
//         <div className="selected-data">
//             {this.state.selCat.length != 0 &&
//                 this.state.selCat.map((data, i) => {
//                     return (
//                         <span key={i}>
//                             {data}{" "}
//                             <small
//                                 onClick={() => {
//                                     this.removeselected(data);
//                                 }}
//                             >
//                                 x
//                             </small>{" "}
//                         </span>
//                     );
//                 })}
//         </div>
//     </div>
// </div>
// </div>
// <div className="col-md-4">
// <div className="form-group">
//     <div className="kvs-select">
//         <div
//             ref={this.setWrapperRef2}
//             onClick={() => this.toggleddiv2()}
//             className={
//                 this.state.togglediv2
//                     ? "select-wrapper select-toggle"
//                     : "select-wrapper"
//             }
//         >
//             <span
//                 className="select-item"
//             >
//                 Values
//             </span>
//             <ul>
//                 {this.props.moreCategories.map((datas, i) => {
//                     return (
//                         <div key={i}>
//                             {datas.field === this.state.categoryVal &&
//                                 datas.dropdowns.map((data, i) => {
//                                     let sel = datas.dropdowns.filter(
//                                         e => e === data
//                                     );
//                                     return (
//                                         <li key={i}>
//                                             <div
//                                                 key={i}
//                                                 className="custom-control custom-checkbox"
//                                             >
//                                                 <input
//                                                     type="checkbox"
//                                                     className="custom-control-input"
//                                                     id={`${data}${i}`}
//                                                     field={data}
//                                                     value={data}
//                                                     checked={sel.length !== '' && sel.push(data)}
//                                                     onChange={i =>
//                                                         this.anotherHandler(i, datas)
//                                                     }
//                                                 />
//                                                 <label
//                                                     className="custom-control-label"
//                                                     htmlFor={`${data}${i}`}
//                                                 >
//                                                     {data}
//                                                 </label>
//                                             </div>
//                                         </li>
//                                     );
//                                 })}
//                             {datas.field === null &&
//                                 datas.dropdowns.map((data, i) => {
//                                     return <div key={i}></div>;
//                                 })}
//                         </div>
//                     );
//                 })}
//             </ul>
//         </div>
//         <div className="selected-data">
//             {this.state.selCat.length != 0 &&
//                 this.state.selCat.map((data, i) => {
//                     return (
//                         <span key={i}>
//                             {data}{" "}
//                             <small
//                                 onClick={() => {
//                                     this.removeselected(data);
//                                 }}
//                             >
//                                 x
//                             </small>{" "}
//                         </span>
//                     );
//                 })}
//         </div>
//     </div>
// </div>
// </div> 