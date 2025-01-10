/* eslint-disable @typescript-eslint/no-explicit-any */
import { createFileRoute } from "@tanstack/react-router";
import { Separator } from "@/components/ui/separator";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Color from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import ListItem from "@tiptap/extension-list-item";

export const Route = createFileRoute("/news/create")({
  component: NewsComponent,
});

// MenuBar Component
const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 mb-4">
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
`;

function NewsComponent() {

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
    <div className="mx-10">
      <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight">
        お知らせ投稿
      </h1>
      <Separator className="my-4" />
      <MenuBar editor={editor} />
      <EditorContent
        editor={editor}
      />
    </div>
  );
}
