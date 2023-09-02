// 存草稿
export const setArticalDraft = (obj = {}) =>
  localStorage.setItem("artical_draft", JSON.stringify(obj));

// 取草稿
export const getArticalDraft = () =>
  JSON.parse(localStorage.getItem("artical_draft")) || {};
