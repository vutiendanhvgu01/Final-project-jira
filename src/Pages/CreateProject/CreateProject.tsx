import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
type Props = {};

const CreateProject = (props: Props) => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <div className="form-control m-3">
      <h3>Create Project</h3>
      <form className="container">
        <div className="form-group m-3">
          <p>Name</p>
          <input type="text" className="form-control" name="projectName" />
        </div>
        <div className="form-group m-3">
          <p>Description</p>
          <Editor
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue=""
            init={{
              height: 300,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
          <button onClick={log} className="btn btn-outline-primary m-3" >Log editor content</button>
        </div>
        <div className="form-group m-3">
          <select name="categoryId" className="form-control">
            <option value="">Software</option>
            <option value="">web</option>
            <option value="">App</option>
          </select>
        </div>
        <button className="btn btn-outline-primary" type="submit">
          Create project
        </button>
      </form>
    </div>
  );
};

export default CreateProject;
