/** 
 * 1.e.target.[name of input field].value 
 * 2.use from action and formData in the action handler.fromData.get('name of input field')
 * 3.controller component. one per each field. use state on change of the field.useful to dynamically handle error.
 * 
 * ঐ3.handle all controller field on one state object
 * const [formData, setFormData] = useState({
 *      name: '',
 *      password: '',
 *      phone: '',
 *  })
 * 4. uncontrolled using useRef. 
 */