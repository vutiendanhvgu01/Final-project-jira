import { Editor } from "@tinymce/tinymce-react";
import React, { useRef } from "react";

type Props = {};

const EditProjectForm = (props: Props) => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
      let valueDes: string = editorRef.current
        .getContent()
        .replace(/(&nbsp;)*/g, "")
        .replace(/(<p>)*/g, "")
        .replace(/<(\/)?p[^>]*>/g, "");
    }
  };
  return (
    <form className="container">
      <div className="row">
        <div className="col-4">
          <div className="form-group">
            <p className="font-weight-bold">Project id</p>
            <input className="form-control" name="id" />
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <p className="font-weight-bold">Project Name</p>
            <input className="form-control" name="projectName" />
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <p className="font-weight-bold">Project category</p>
            <input className="form-control" name="projectName" />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <p className="font-weight-bold">Description</p>
            <Editor
              onInit={(evt, editor) => (editorRef.current = editor)}
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
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditProjectForm;
