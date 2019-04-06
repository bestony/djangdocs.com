# 推送翻译到官方库

Django 的翻译是通过 Github 仓库来管理的，也就意味着，你可以向官方仓库申请 PR，等待变更合并到主库。


## 1. Fork 仓库

前往 https://github.com/django/django-docs-translations Fork 仓库到你自己的账户下。

## 2. clone 仓库到本地

进入你自己账户下的 django-docs-translations 项目中，并 clone 项目到本地。

## 3. 切换分支

使用 `cd django-docs-translations`，进入到本地的项目目录

执行命令 `git checkout stable/2.0.x` 切换到 2.0 的分支中。

## 4. 配置脚本并获取 API Token

首先，执行命令安装 transifex 客户端

```bash
pip install transifex-client
```

然后，到 [transifex 中获取 API 令牌](https://www.transifex.com/user/settings/api/)。

## 5. 执行命令来下载翻译

执行如下命令，来下载翻译

```bash
python manage_translations.py fetch -l zh_Hans
```

## 6. commit 本地更新

在命令行中执行如下命令

```bash
git add .
git commit -m 'update transifex translations at 2018-3-17' # 这里的日期记得改成当日日期。
git push origin master
```


## 7.提交 PR

到 Github 你的仓库下去发起 PR 即可。
