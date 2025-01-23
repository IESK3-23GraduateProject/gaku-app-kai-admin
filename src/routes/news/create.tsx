import { createFileRoute } from "@tanstack/react-router";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
import MultipleSelector from "@/components/multiple-selector";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import axios from "axios";

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
    levels: [1, 2, 3, 4],
  }),
];

const content = `
<h2>Welcome!</h2>
<p>Edit this content using the editor. It supports <strong>bold</strong>, <em>italic</em>, <u>underline</u>, and more!</p>
<ul>
  <li>Bullet lists</li>
  <li>Are supported too</li>
</ul>
`;


const MultipleSelect = () => {
  const OPTIONS = [
    { label: "Next.js", value: "nextjs" },
    { label: "React", value: "react" },
    { label: "Remix", value: "remix" },
    { label: "Vite", value: "vite" },
    { label: "Nuxt", value: "nuxt" },
    { label: "Vue", value: "vue" },
    { label: "Svelte", value: "svelte" },
    { label: "Angular", value: "angular" },
    { label: "Ember", value: "ember", disable: true },
    { label: "Gatsby", value: "gatsby", disable: true },
    { label: "Astro", value: "astro" },
  ];

  return (

    <MultipleSelector
      defaultOptions={OPTIONS}
      placeholder="Select Class..."
      emptyIndicator={
        <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
          No results found.
        </p>
      }
    />

  );
};

// SendMenu Component
const SendMenu = ({ editor }: { editor: Editor | null }) => {
  const [category, setCategory] = useState<number | null>(null);
  const [isPublic, setIsPublic] = useState(false); // State for "Is Public" toggle
  const [highPriority, setHighPriority] = useState(false); // State for "High Priority" toggle
  const [mentionedUserIds, setMentionedUserIds] = useState<number[]>([]); // Selected mentioned user IDs
  const [endpoint, setEndpoint] = useState("student-news"); // Default endpoint

  const handleCategoryChange = (value: string) => {
    setCategory(value === "null" ? null : Number(value));
    console.log("Selected category:", value);
  };

  const handleEndpointChange = (value: string) => {
    setEndpoint(value === "student" ? "student-news" : "teacher-admin-news");
  };

  const handleMentionedUsers = (userIds: number[]) => {
    setMentionedUserIds(userIds);
    console.log("Mentioned User IDs:", userIds);
  };

  const handleSendNews = async () => {
    if (!editor) {
      console.error("Editor is not initialized");
      return;
    }

    // Prepare the payload
    const payload = {
      title: "News Title", // Placeholder; replace with your actual title logic
      news_category_id: category,
      news_contents: editor.getHTML(),
      author_id: 3240006, // Placeholder; replace with actual author ID
      author_type: "teacher",
      is_public: isPublic,
      high_priority: highPriority,
      is_deleted: false,
      publish_at: new Date().toISOString(), // Set the current time as the publish time
      mentioned_user_ids: mentionedUserIds,
    };

    console.log("Payload to be sent:", payload, endpoint);

    try {
      // const url = `http://localhost:3000/${endpoint}`;

      // const response = await axios.post(url, payload);
      // console.log("Response:", response.data);

    } catch (error) {
      console.error("Error sending news:", error);
    }

  };
  return (
    <>
      {/* Endpoint Radio Group */}
      <div className="flex items-center space-x-6 py-4 ">
        <RadioGroup defaultValue="student" className="flex space-x-8" onValueChange={handleEndpointChange}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="student" id="r1" />
            <Label htmlFor="r1" className="text-sm">
              学生にお知らせ
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="teacher" id="r2" />
            <Label htmlFor="r2" className="text-sm">
              先生にお知らせ
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="flex items-center space-x-6 py-4 ">

        {/* Multiple Selector for mentioned_user_ids */}
        <div className="self-start max-w-[500px] w-full">
          <MultipleSelect />
        </div>

        {/* Category Selector */}
        <div className="flex items-center min-w-[200px]">
          <Select value={category} onValueChange={handleCategoryChange}>
            <SelectTrigger className="w-full focus:ring-2 focus:ring-blue-500 h-10 flex items-center border rounded-md">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="null">全てのお知らせ</SelectItem>
              <SelectItem value="9">学校からの連絡</SelectItem>
              <SelectItem value="10">担任からの連絡</SelectItem>
              <SelectItem value="11">キャリアセンターより</SelectItem>
              <SelectItem value="12">学校行事</SelectItem>
              <SelectItem value="13">図書館からの連絡</SelectItem>
              <SelectItem value="14">事務局からの連絡</SelectItem>
              <SelectItem value="15">クラブ・サークル</SelectItem>
              <SelectItem value="16">その他</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Toggle Options */}
        <div className="flex items-center space-x-2">
          <Switch id="is-public" checked={isPublic} onCheckedChange={(checked) => setIsPublic(checked)} />
          <Label htmlFor="is-public" className="text-sm">
            Is Public
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="high-priority" checked={highPriority} onCheckedChange={(checked) => setHighPriority(checked)} />
          <Label htmlFor="high-priority" className="text-sm">
            High Priority
          </Label>
        </div>

        {/* Log Content Button */}
        <button
          onClick={handleSendNews}
          className="h-10 w-28 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-md shadow hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium flex justify-center items-center"
        >
          Send News
        </button>
      </div>
    </>
  );
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
      <SendMenu editor={editor} />
      <Separator className="my-4" />
      <MenuBar editor={editor} />
      <EditorContent
        editor={editor}
      />

    </div>
  );
}
