import { getAllNotes, createNote } from "../api/keep.api";

class Note {
  constructor() {
    this.respond = {
      success: false,
      response: null,
      message: "An error occured while connecting to the server!",
    };
  }

  setResponse = (data) => {
    this.respond = data;
  };

  getResponse = () => {
    return this.respond;
  };

  addNote = async (note) => {
    await createNote(note).then((result) => {

      console.log("hello createnote");

      console.log("note at add", note);

      console.log("result at add", result);

      const { data } = result;

      console.log("data result note", data);

      const { success, message, response } = data;

      console.log("after distructuring", success, message);

      if (success) {
        console.log("success");

console.log(response);

        this.setResponse(data);

      } else {

        this.setResponse([]);

        console.log(message);
      }
    });
  };

  getNotes = async (userId) => {
    await getAllNotes(userId).then((result) => {
      const { data } = result;
      const { success, response, message } = data;

      if (success) {
        this.setResponse(response);
      } else {
        console.log(message);
      }
    });
  };
}
export default new Note();
