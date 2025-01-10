import { createFileRoute } from "@tanstack/react-router";
import { Separator } from "@/components/ui/separator";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Color from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import ListItem from "@tiptap/extension-list-item";

export const Route = createFileRoute("/news/create")({
  component: EditorComponent,
});

// MenuBar Component
const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <p>Menu For Text Format</p>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`px-2 py-1 border rounded ${editor.isActive("bold") ? "bg-gray-300" : ""
          }`}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`px-2 py-1 border rounded ${editor.isActive("italic") ? "bg-gray-300" : ""
          }`}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`px-2 py-1 border rounded ${editor.isActive("bulletList") ? "bg-gray-300" : ""
          }`}
      >
        Bullet List
      </button>
      <button
        onClick={() => editor.chain().focus().setColor("#958DF1").run()}
        className={`px-2 py-1 border rounded ${editor.isActive("textStyle", { color: "#958DF1" }) ? "bg-purple-300" : ""
          }`}
      >
        Purple
      </button>
    </div>
  );
};

const extensions = [
  StarterKit.configure({
    bulletList: { keepMarks: true },
    orderedList: { keepMarks: true },
  }),
  Color,
  TextStyle,
  ListItem,
];

const content = `
<h2>Welcome!</h2>
<p>Edit this content using the editor. It supports <strong>bold</strong>, <em>italic</em>, <u>underline</u>, and more!</p>
<ul>
  <li>Bullet lists</li>
  <li>Are supported too</li>
</ul>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam aspernatur, soluta hic aliquam sapiente sit consectetur quod ipsum, odio tempore doloribus tenetur quibusdam voluptatum dicta voluptate, optio minima. Nihil, minima.</p>
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<pre><code>code block</code></pre>
<p><code>code</code> </p>
<p>ひらかな</p>
<p>カタカナ</p>
<p>漢字</p>
`;

// TODO Format this to send data to db
const logEditorContent = ({ editor }: { editor: Editor | null }) => {
  if (editor) {
    console.log("HTML Output:", editor.getHTML());
    console.log("JSON Output:", editor.getJSON());
  } else {
    console.log("Editor is not initialized");
  }
};


function EditorComponent() {

  const editor = useEditor({
    extensions,
    content,
    editorProps: {
      attributes: {
        class: 'prose max-w-none dark:prose-invert focus:outline-none'  // using Tailwind's focus:outline-none
      },
    }
  });

  return (
    <div className="mx-10 mb-10">
      <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight">
        お知らせ投稿
      </h1>
      <div className="bg-red-200 my-2">
        <h1>Destionation Menu + Send Button</h1>
      </div>
      <Separator className="my-4" />212
      <MenuBar editor={editor} />
      <EditorContent
        editor={editor}
      />
      <button
        onClick={() => logEditorContent({ editor })}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Log Editor Content
      </button>
    </div>
  );
}
