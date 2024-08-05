import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

export default function RTE({ name = 'content', control, label, defaultValue = "" }) {
    return (
        <div className="w-full">
            {label && (
                <label className="block mb-2 text-gray-700 text-sm font-semibold">
                    {label}
                </label>
            )}

            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Editor
                        initialValue={defaultValue}
                        value={value}
                        init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                                "advlist autolink lists link image charmap preview anchor",
                                "searchreplace visualblocks code fullscreen",
                                "insertdatetime media table paste code help wordcount"
                            ],
                            toolbar: [
                                "undo redo | formatselect | bold italic underline strikethrough",
                                "forecolor backcolor | alignleft aligncenter alignright alignjustify",
                                "bullist numlist outdent indent | removeformat | help"
                            ].join(' '),
                            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; }",
                            skin: 'oxide-dark',
                            content_css: 'dark'
                        }}
                        onEditorChange={onChange}
                    />
                )}
            />
        </div>
    );
}
