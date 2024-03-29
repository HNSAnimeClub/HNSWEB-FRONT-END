/**
 * @name 富文本编辑器
 */

import React, { useEffect, useState, useCallback, useRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import style from "./editor.module.less";
import { debounce } from "lodash";
import { App, Button, ColorPicker, Divider, Select } from "antd";
import {
  AddPicture,
  AlignTextCenter,
  AlignTextLeft,
  AlignTextRight,
  Back,
  Box,
  ClearFormat,
  Code,
  DividingLineOne,
  Fireworks,
  H1,
  H2,
  H3,
  HighLight,
  LevelFiveTitle,
  LevelFourTitle,
  LevelSixTitle,
  ListNumbers,
  ListTwo,
  Next,
  ParagraphAlphabet,
  ParagraphBreak,
  Pic,
  Quote,
  SourceCode,
  Strikethrough,
  TextBold,
  TextItalic,
} from "@icon-park/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEditorStore } from "./editorStore";
import Image from "@tiptap/extension-image";
import HNSUpload from "../../common/hnsUpload/HNSUpload";
import HNSImgUpload from "../../common/hnsImgUpload/HNSImgUpload";
import { MIME_jpeg, MIME_png } from "../../../utils/tool/mimeType";
import HNSTagGroup from "../../common/hnsTagGroup/HNSTagGroup";
import {
  getArticalDraft,
  setArticalDraft,
} from "../../../utils/hooks/useArtical";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const [picker, setPicker] = useState("");

  // 图片上传
  const uploadRef = useRef(null);

  const changeColor = debounce((_, hex) => {
    setPicker(hex);
  }, 200);

  useEffect(() => {
    editor.chain().focus().setColor(picker).run();
  }, [picker]);

  const imgClick = () => {
    uploadRef.current.click();
  };
  const imgChange = useCallback(
    (file) => {
      const url = URL.createObjectURL(file);
      // await 上传图片

      if (url) {
        editor.chain().focus().setImage({ src: url }).run();
      }
    },
    [editor]
  );

  return (
    <div className={style.tool}>
      <TextBold
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? style["is-active"] : style.normal}
        title={"加粗"}
      />
      <TextItalic
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={
          editor.isActive("italic") ? style["is-active"] : style.normal
        }
        title={"斜体"}
      />
      <Strikethrough
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={
          editor.isActive("strike") ? style["is-active"] : style.normal
        }
        title={"弃用"}
      />
      <Code
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={editor.isActive("code") ? style["is-active"] : style.normal}
        title={"代码"}
      />
      <ClearFormat
        onClick={() => editor.chain().focus().clearNodes().run()}
        className={style.normal}
        title={"清除格式"}
      />
      <ParagraphAlphabet
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={
          editor.isActive("paragraph") ? style["is-active"] : style.normal
        }
        title={"段落"}
      />

      <AlignTextLeft
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={
          editor.isActive({ textAlign: "left" })
            ? style["is-active"]
            : style.normal
        }
        title={"左对齐"}
      />

      <AlignTextCenter
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={
          editor.isActive({ textAlign: "center" })
            ? style["is-active"]
            : style.normal
        }
        title={"居中对齐"}
      />

      <AlignTextRight
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={
          editor.isActive({ textAlign: "right" })
            ? style["is-active"]
            : style.normal
        }
        title={"右对齐"}
      />

      <H1
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={
          editor.isActive("heading", { level: 1 })
            ? style["is-active"]
            : style.normal
        }
        title={"1级标题"}
      />
      <H2
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          editor.isActive("heading", { level: 2 })
            ? style["is-active"]
            : style.normal
        }
        title={"2级标题"}
      />
      <H3
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={
          editor.isActive("heading", { level: 3 })
            ? style["is-active"]
            : style.normal
        }
        title={"3级标题"}
      />
      <LevelFourTitle
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={
          editor.isActive("heading", { level: 4 })
            ? style["is-active"]
            : style.normal
        }
        title={"4级标题"}
      />

      <LevelFiveTitle
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={
          editor.isActive("heading", { level: 5 })
            ? style["is-active"]
            : style.normal
        }
        title={"5级标题"}
      />

      <LevelSixTitle
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={
          editor.isActive("heading", { level: 6 })
            ? style["is-active"]
            : style.normal
        }
        title={"6级标题"}
      />

      <ListTwo
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={
          editor.isActive("bulletList") ? style["is-active"] : style.normal
        }
        title={"无序列表"}
      />

      <ListNumbers
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={
          editor.isActive("orderedList") ? style["is-active"] : style.normal
        }
        title={"有序列表"}
      />

      <SourceCode
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={
          editor.isActive("codeBlock") ? style["is-active"] : style.normal
        }
        title={"代码块"}
      />

      <Quote
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={
          editor.isActive("blockquote") ? style["is-active"] : style.normal
        }
        title={"引用"}
      />

      <DividingLineOne
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className={style.normal}
        title={"分割线"}
      />

      <ParagraphBreak
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className={style.normal}
        title={"换行"}
      />

      <Back
        onClick={() => editor.chain().focus().undo().run()}
        className={style.normal}
        disabled={!editor.can().chain().focus().undo().run()}
        title={"上一步"}
      />

      <Next
        onClick={() => editor.chain().focus().redo().run()}
        className={style.normal}
        disabled={!editor.can().chain().focus().redo().run()}
        title={"下一步"}
      />

      <ColorPicker value={picker} onChange={changeColor}>
        <div className={style.colorWraper} onClick={(e) => e.preventDefault()}>
          <HighLight className={style.normal} title={"文本颜色"} />
        </div>
      </ColorPicker>

      <Pic onClick={imgClick} className={style.normal} title={"上传图片"} />

      <HNSUpload
        ref={uploadRef}
        onChange={imgChange}
        accept={`${MIME_jpeg},${MIME_png}`}
      />
    </div>
  );
};

// 标题
const Title = () => {
  const [state, setState] = useRecoilState(useEditorStore);
  const maxLength = 50;

  return (
    <div className={style.textareaBox}>
      <textarea
        className={style.textarea}
        placeholder={"请输入标题（建议30字以内）"}
        maxLength={maxLength}
        rows={1}
        value={state.title}
        onChange={({ target: { value } }) =>
          setState({ ...state, title: value })
        }
      />
      <span className={`${style.count}`}>
        {state.title.length}/
        <span className={state.title.length === maxLength ? style.forbid : ""}>
          {maxLength}
        </span>
      </span>
    </div>
  );
};

// 用于上传，保存的组件
const UploadTool = ({ editor }) => {
  const [state, setState] = useRecoilState(useEditorStore);
  const { message } = App.useApp();

  // 将图片上传至服务器
  const getImg = async (file) => {
    // const {url}=await
    const url = "/public/images";
    setState({ ...state, img: url });
  };

  const submit = async () => {
    // {
    //   ...state,
    //   content:editor.getHTML()
    // }
    // 重置
  };

  // 存草稿
  const saveDraft = () => {
    const { title = "", img = "", tags = [] } = state;
    const draftObj = {
      title,
      content: editor.getHTML(),
      img,
      tags,
    };
    setArticalDraft(draftObj);
    message.success("保存成功");
  };

  return (
    <div className={style.uploadBox}>
      <h3>发布设置</h3>
      <div className={style.main}>
        <div className={style.category}>
          <span className={style.tips}>请添加标签 ( 可叠 10 个 BUFF)</span>
          <HNSTagGroup
            value={state.tags}
            maxCount={10}
            onChange={(tags) => {
              setState({ ...state, tags });
            }}
          />
        </div>

        <div className={style.gallery}>
          <span className={style.tips}>添加封面</span>
          <HNSImgUpload onChange={getImg} />
        </div>

        <div className={style.uploadTool}>
          <Button onClick={saveDraft}>
            <div className={style.button}>
              <Box />
              存草稿
            </div>
          </Button>
          <Button type={"primary"} onClick={submit}>
            <div className={style.button}>
              <Fireworks />
              发布
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default function Editor() {
  const [state, setState] = useRecoilState(useEditorStore);
  const draft = getArticalDraft();

  const editor = useEditor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure({ types: [ListItem.name] }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
      }),
      Placeholder.configure({
        // Use a placeholder:
        placeholder: "想好写点啥了嘛?",
        // Use different placeholders depending on the node type:
        // placeholder: ({ node }) => {
        //   if (node.type.name === 'heading') {
        //     return 'What’s the title?'
        //   }

        //   return 'Can you add some further context?'
        // },
      }),
      Image.configure({
        allowBase64: true,
        HTMLAttributes: {
          class: style.insertImg,
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph", ""],
      }),
    ],
  });

  // 有草稿优先使用
  const setDraftValue = () => {
    setState({ ...state, ...draft });
  };

  useEffect(() => {
    setDraftValue();
  }, []);

  useEffect(() => {
    if (!editor) return;
    editor.commands.setContent(draft.content);
  }, [editor]);

  return (
    <div className={style.mainContainer}>
      <Title />
      <Divider />
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
      <Divider />
      <UploadTool editor={editor} />
    </div>
  );
}
