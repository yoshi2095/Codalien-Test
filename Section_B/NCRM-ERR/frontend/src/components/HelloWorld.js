import {CreateUser, GetUser, GetUserByEmail, UpdateUser} from "../services/ErrBotService";

export default {
  name: 'HelloWorld',
  data () {
    return {
      arrayOfTexts: ["One", "Two", "Three"]
    }
  },
  mounted(){
    CreateUser("email", "name", "dob", ["hobbies"], "23", (res)=> {
      console.log(res);
    });
  }
}
