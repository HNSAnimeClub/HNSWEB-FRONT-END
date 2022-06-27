# 基于 React JS 的绯色之空动漫社社区类应用，前端部分

<img src="https://img.shields.io/badge/HNS--WEB--FE-v1.0-%23ff6987" alt="HNS-WEB-FE"/>
<img src="https://img.shields.io/badge/React-v17.02-%231890ff"/> <img src="https://img.shields.io/badge/React--router-v6.3.2-1890ff"/>


**克隆到本地仓库后安装依赖:**
### `npm install`

**启动项目:**
### `npm start`

#### 提交代码至git

修改自己的用户名，邮箱

```bash
git config --global user.name '米洛'
git config --global user.email kiritoasu@163.com
```

配置目标远程仓库，告诉git你需要向哪个仓库提交代码

```bash
git remote add origin https://你的token@github.com/HNSAnimeClub/HNSWEB-FRONT-END.git
```

**英文状态下按q退出git**

1.  查看状态

```bash
git status
```

2. 将所有希望提交的文件添加至暂存区，不希望提交的 `git checkout -- 文件名`

```bash
git add .
```

3.  提交到本地仓库

```bash
git commit -m "类型：描述"

例如: git commit -m "feat:新增login模块" // 新增登录模块
```

```
类型：
  feat    ✨  新功能/新特性
  fix     🐛  修复 bug
  style   💄  代码格式修改, 注意不是 css 修改
  docs    📝  添加/更新文档
  perf    👌  提高性能/优化
  test    ✅  增加/修改测试用例
  refactor🎨  代码重构
  chore   🎨  其他修改, 比如构建流程, 依赖管理
  publish 🚀  发布新版本
  tag     📌  发布新版本
```

4. 远程提交前需要拉取最新代码

```bash
git pull --rebase
```

5. 提交到远程仓库

```bash
git push origin your-local-branch:your-origin-dev-branch (分支：作者-分支描述)

例如：git push origin dev:米洛-新增登录
```

提交完成后在github 上发起mergeRequest，通知管理员合并分支