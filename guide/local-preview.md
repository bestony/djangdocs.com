# 本地预览 Django 文档

::: warning
执行以下步骤需要 Sphinx 和 django 2.0.x，需要 Python 3
:::

### 本地部署英文文档

1. 打开命令行，切换到某个合适的目录，如 `/home/dogify/django-doc/`
2. git clone https://github.com/django/django.git
3. 当前目录下会出现名为 django 的文件夹
4. 执行命令 `pip install Sphinx`，请确认此处的 `pip` 是 Python 3 版本的
5. cd 至 `./django/docs/`，即`/home/dogify/django-doc/django/docs/`下
6. 在此目录执行 make html（windows 执行 make.bat html）
7. docs 目录下会多出个名为 `_bulid` 的文件夹，用浏览器打开里面的 `index.html` 就可以在本地查看英文文档了

### 本地部署中文文档

整个过程分为两个部分，首先，你需要获取到 Transifex 中的最新翻译，然后将其应用到本地环境中去。

::: warning
以下过程在 ubuntu 14.04 验证通过，由于 windows 缺失很多工具，不推荐使用
:::
#### 获取最新翻译

::: warning
以下步骤中，目录路径为 `/home/dogify/django-doc/django-docs-translations`
:::

1. 打开命令行，切换到某个合适的目录，如 `/home/dogify/django-doc/`
2. 执行命令 `git clone https://github.com/django/django-docs-translations.git`
3. 进入 django-docs-translations 目录 ，执行命令 `cd django-docs-translations`
4. 切换分支到最新的 2.0 分支，执行命令： `git checkout stable/2.0.x`
5. 到 Transifex 上[获取 API 令牌](https://www.transifex.com/user/settings/api/)
6. 安装 transifex 本地客户端，执行命令 `pip install transifex-client`
7. 执行命令 `python manage_translations.py fetch -l zh_Hans`，并在其要求你输入 API 令牌时，输入之前获取到的 API 令牌。当此命令执行完成后，翻译就下载好了
8. 生成翻译文件，执行命令 `make translations`
9. 创建符号链接，执行命令 `ln -s /path/to/translations/zh_Hans /path/to/translations/zh_CN`

::: warning
如果第 7 步无法拉取到最新翻译，可以尝试清空 `zh_Hans` 文件夹重试
:::
::: warning
!> 第 9 步只需执行一次。此步骤的原因是下面使用的 `Sphinx` 工具识别语言时，中文简体只能支持 zh_CN
:::
#### 将翻译合并到 django 目录中去

::: warning
此过程中，目录路径为 `/home/dogify/django/django-doc/`
:::

1. 打开命令行，切换到某个合适的目录，如 `/home/dogify/django-doc/`
2. `git clone https://github.com/django/django.git`
3. 当前目录下会出现名为 django 的文件夹
4. cd 至 `./django/docs/`，即`/home/dogify/django-doc/django/docs/`下
5. 接下来我们来创建符号链接，从而使得操作系统能够识别到对应的翻译 </br>`ln -s /path/to/django-docs-translations/translations /path/to/django/docs/locale`
6. 在当前目录下生成中文页面，执行命令 `make html LANGUAGE=zh_CN`（windows 因为快捷方式无法代替软链，测试失败）
7. docs 目录下会多出个名为 `_build` 的文件夹，用浏览器打开里面的 `index.html` 就可以在本地查看中文文档了

### 一步拉取最新翻译生成中文文档

::: warning
此步要求你先完成「本地部署中文文档」，以下过程目录路径为 `/home/dogify/django-doc/`
:::

1. 创建一个名为 `update_html.sh` 的文件
2. 输入下面的代码
3. 增加运行权限 `chmod a+x update_html.sh`
4. 命令行输入 `./update_html.sh` 执行自动更新
5. 打开 `/path/to/django/docs/_build/html/index.html` 查看更新后的文档

``` sh
#!/bin/sh
cd django-docs-translations
python3 manage_translations.py fetch -l zh_Hans
make translations
cd ../django/docs
make html LANGUAGE=zh_CN
```
