import { createFileRoute } from "@tanstack/react-router";
import { Separator } from "@/components/ui/separator";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Color from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import ListItem from "@tiptap/extension-list-item";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import { Button } from "@/components/ui/button";
import { Bold, Italic, Underline as U, List, ListOrdered, Highlighter, Code, Heading1, Heading2, Heading3 } from "lucide-react";
import Heading from "@tiptap/extension-heading";

export const Route = createFileRoute("/news/create")({
  component: EditorComponent,
});

// MenuBar Component
const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-2 mb-4">

      <div className="flex items-center gap-2">
        <Button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          variant={editor.isActive("heading", { level: 1 }) ? "secondary" : "outline"}
          className="p-2"
        >
          <Heading1 className="w-4 h-4" />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          variant={editor.isActive("heading", { level: 2 }) ? "secondary" : "outline"}
          className="p-2"
        >
          <Heading2 className="w-4 h-4" />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          variant={editor.isActive("heading", { level: 3 }) ? "secondary" : "outline"}
          className="p-2"
        >
          <Heading3 className="w-4 h-4" />
        </Button>
      </div>

      <Separator orientation="vertical" className="h-6 " />

      <div className="flex items-center gap-2">
        <Button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          variant={editor.isActive("bold") ? "secondary" : "outline"}
          className="p-2"
        >
          <Bold className="w-4 h-4" />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          variant={editor.isActive("italic") ? "secondary" : "outline"}
          className="p-2"
        >
          <Italic className="w-4 h-4" />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          disabled={!editor.can().chain().focus().toggleUnderline().run()}
          variant={editor.isActive("underline") ? "secondary" : "outline"}
          className="p-2"
        >
          <U className="w-4 h-4" />
        </Button>
      </div>

      <Separator orientation="vertical" className="h-6" />

      {/* List Group */}
      <div className="flex items-center gap-2">
        <Button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          variant={editor.isActive("bulletList") ? "secondary" : "outline"}
          className="p-2"
        >
          <List className="w-4 h-4" />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          variant={editor.isActive("orderedList") ? "secondary" : "outline"}
          className="p-2"
        >
          <ListOrdered className="w-4 h-4" />
        </Button>
      </div>

      <Separator orientation="vertical" className="h-6" />

      {/* Highlight and Code Group */}
      <div className="flex items-center gap-2">
        <Button
          onClick={() => editor.chain().focus().toggleHighlight({ color: "#FFF176" }).run()}
          variant={editor.isActive("highlight", { color: "#FFF176" }) ? "secondary" : "outline"}
          className="p-2"
        >
          <Highlighter className="w-4 h-4" />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          variant={editor.isActive("codeBlock") ? "secondary" : "outline"}
          className="p-2"
        >
          <Code className="w-4 h-4" />
        </Button>
      </div>
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
  Underline,
  Highlight.configure({
    multicolor: true,
  }),
  Heading.configure({
    levels: [1, 2, 3, 4], // Specify heading levels
  }),
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


const SendMenu = () => {
  return (
    <div className="bg-red-200 my-2">
      <h1>Destionation Menu + Send Button</h1>
    </div>)
}

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
      <SendMenu />
      <Separator className="my-4" />
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
