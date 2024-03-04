import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form"; //it is used to control uncontrlled components, an alternative of hooks

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full bg-slate-800 rounded-xl">
      {label && <label className="inline-block mb-1 pl-1 ">{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey="f273sv42x6xqbblkn39b6c3vhwlooyx3njcw41ynvrdrpmku" // Add your API key here
            initialValue={defaultValue}
            init={{
              plugins:
                "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker",
              toolbar:
                "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}
